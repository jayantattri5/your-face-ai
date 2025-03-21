import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Save, RefreshCw, Crop, RotateCw, SlidersHorizontal, Contrast, Sun as Brightness, Palette, Check, X } from 'lucide-react';

interface ImageEditorProps {
  imageUrl: string;
  onClose: () => void;
  onSave: (editedImageUrl: string) => void;
}

// Define filter presets
interface FilterPreset {
  name: string;
  brightness: number;
  contrast: number;
  saturation: number;
  sepia: number;
  blur: number;
  hueRotate: number;
}

export function ImageEditor({ imageUrl, onClose, onSave }: ImageEditorProps) {
  const [editedImage, setEditedImage] = useState<string>(imageUrl);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('adjust');
  
  // Image adjustment states
  const [brightness, setBrightness] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(100);
  const [saturation, setSaturation] = useState<number>(100);
  const [rotation, setRotation] = useState<number>(0);
  const [sepia, setSepia] = useState<number>(0);
  const [blur, setBlur] = useState<number>(0);
  const [hueRotate, setHueRotate] = useState<number>(0);
  
  // Cropping states
  const [isCropping, setIsCropping] = useState<boolean>(false);
  const [cropRect, setCropRect] = useState<{ x: number, y: number, width: number, height: number } | null>(null);
  const [resizingCorner, setResizingCorner] = useState<string | null>(null);
  const [resizeStartPoint, setResizeStartPoint] = useState<{ x: number, y: number } | null>(null);
  
  // Canvas references for image manipulation
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cropCanvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Filter presets
  const filterPresets: FilterPreset[] = [
    { name: 'Normal', brightness: 100, contrast: 100, saturation: 100, sepia: 0, blur: 0, hueRotate: 0 },
    { name: 'Vivid', brightness: 110, contrast: 120, saturation: 130, sepia: 0, blur: 0, hueRotate: 0 },
    { name: 'Matte', brightness: 105, contrast: 90, saturation: 90, sepia: 10, blur: 0, hueRotate: 0 },
    { name: 'Mono', brightness: 100, contrast: 100, saturation: 0, sepia: 0, blur: 0, hueRotate: 0 },
    { name: 'Film', brightness: 95, contrast: 110, saturation: 85, sepia: 20, blur: 0, hueRotate: 0 },
    { name: 'Fade', brightness: 105, contrast: 80, saturation: 80, sepia: 10, blur: 0.5, hueRotate: 0 },
    { name: 'Cool', brightness: 100, contrast: 105, saturation: 95, sepia: 0, blur: 0, hueRotate: 200 },
    { name: 'Warm', brightness: 102, contrast: 105, saturation: 110, sepia: 25, blur: 0, hueRotate: 350 }
  ];
  
  // Initialize the canvas with the image
  useEffect(() => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.src = imageUrl;
    
    image.onload = () => {
      imageRef.current = image;
      drawImage();
    };
  }, [imageUrl]);
  
  // Apply edits whenever a parameter changes
  useEffect(() => {
    if (imageRef.current && !isCropping) {
      drawImage();
    }
  }, [brightness, contrast, saturation, rotation, sepia, blur, hueRotate, isCropping]);
  
  const drawImage = () => {
    if (!canvasRef.current || !imageRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions based on the image and rotation
    const img = imageRef.current;
    const rotationInRadians = (rotation * Math.PI) / 180;
    const isPortrait = rotation % 180 !== 0;
    
    if (isPortrait) {
      canvas.width = img.height;
      canvas.height = img.width;
    } else {
      canvas.width = img.width;
      canvas.height = img.height;
    }
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Move to the center of the canvas
    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    // Rotate the canvas
    ctx.rotate(rotationInRadians);
    
    // Apply filters
    const sepiaFilter = sepia > 0 ? `sepia(${sepia}%) ` : '';
    const blurFilter = blur > 0 ? `blur(${blur}px) ` : '';
    const hueRotateFilter = hueRotate > 0 ? `hue-rotate(${hueRotate}deg) ` : '';
    
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) ${sepiaFilter}${blurFilter}${hueRotateFilter}`;
    
    // Draw the image centered
    ctx.drawImage(
      img,
      -img.width / 2,
      -img.height / 2,
      img.width,
      img.height
    );
    
    // Reset transformations
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    
    // Update the edited image URL
    setEditedImage(canvas.toDataURL('image/jpeg'));
  };
  
  const handleApplyFilter = (filter: FilterPreset) => {
    setBrightness(filter.brightness);
    setContrast(filter.contrast);
    setSaturation(filter.saturation);
    setSepia(filter.sepia);
    setBlur(filter.blur);
    setHueRotate(filter.hueRotate);
  };
  
  const handleSave = () => {
    setLoading(true);
    // In a real application, you might want to upload the edited image to a server
    // For now, we'll just use the canvas data URL
    setTimeout(() => {
      onSave(editedImage);
      setLoading(false);
    }, 1000); // Simulate processing delay
  };
  
  const handleReset = () => {
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setRotation(0);
    setSepia(0);
    setBlur(0);
    setHueRotate(0);
    setCropRect(null);
  };
  
  const rotateImage = () => {
    setRotation((prev) => (prev + 90) % 360);
  };
  
  // Start cropping mode with a rectangle around the entire image
  const startCropping = () => {
    if (!canvasRef.current || !imageRef.current) return;
    
    setIsCropping(true);
    
    // Set initial crop rectangle to the full image size with a small margin
    const margin = 20;
    setCropRect({
      x: margin,
      y: margin,
      width: canvasRef.current.width - (margin * 2),
      height: canvasRef.current.height - (margin * 2)
    });
    
    // Draw the initial crop overlay
    drawCropOverlay();
  };
  
  // Cancel cropping
  const cancelCropping = () => {
    setIsCropping(false);
    setCropRect(null);
    setResizingCorner(null);
    setResizeStartPoint(null);
    drawImage();
  };
  
  // Check if a point is near a corner handle
  const isNearCorner = (x: number, y: number, canvasX: number, canvasY: number) => {
    const distance = Math.sqrt(Math.pow(x - canvasX, 2) + Math.pow(y - canvasY, 2));
    return distance < 15; // Within 15 pixels of the corner
  };
  
  // Handle mouse down on the canvas for crop resizing
  const handleCropMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isCropping || !cropRect || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    
    // Check if clicking on a corner handle
    if (isNearCorner(x, y, cropRect.x, cropRect.y)) {
      setResizingCorner('topLeft');
    } else if (isNearCorner(x, y, cropRect.x + cropRect.width, cropRect.y)) {
      setResizingCorner('topRight');
    } else if (isNearCorner(x, y, cropRect.x, cropRect.y + cropRect.height)) {
      setResizingCorner('bottomLeft');
    } else if (isNearCorner(x, y, cropRect.x + cropRect.width, cropRect.y + cropRect.height)) {
      setResizingCorner('bottomRight');
    } else {
      setResizingCorner(null);
    }
    
    setResizeStartPoint({ x, y });
  };
  
  // Handle mouse move for crop resizing
  const handleCropMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isCropping || !cropRect || !resizingCorner || !resizeStartPoint || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = Math.min(Math.max((e.clientX - rect.left) * scaleX, 0), canvas.width);
    const y = Math.min(Math.max((e.clientY - rect.top) * scaleY, 0), canvas.height);
    
    const deltaX = x - resizeStartPoint.x;
    const deltaY = y - resizeStartPoint.y;
    
    const newCropRect = { ...cropRect };
    
    // Resize based on which corner is being dragged
    switch (resizingCorner) {
      case 'topLeft':
        newCropRect.x = Math.min(cropRect.x + deltaX, cropRect.x + cropRect.width - 20);
        newCropRect.y = Math.min(cropRect.y + deltaY, cropRect.y + cropRect.height - 20);
        newCropRect.width = cropRect.width - (newCropRect.x - cropRect.x);
        newCropRect.height = cropRect.height - (newCropRect.y - cropRect.y);
        break;
      case 'topRight':
        newCropRect.y = Math.min(cropRect.y + deltaY, cropRect.y + cropRect.height - 20);
        newCropRect.width = Math.max(20, cropRect.width + deltaX);
        newCropRect.height = cropRect.height - (newCropRect.y - cropRect.y);
        break;
      case 'bottomLeft':
        newCropRect.x = Math.min(cropRect.x + deltaX, cropRect.x + cropRect.width - 20);
        newCropRect.width = cropRect.width - (newCropRect.x - cropRect.x);
        newCropRect.height = Math.max(20, cropRect.height + deltaY);
        break;
      case 'bottomRight':
        newCropRect.width = Math.max(20, cropRect.width + deltaX);
        newCropRect.height = Math.max(20, cropRect.height + deltaY);
        break;
    }
    
    setCropRect(newCropRect);
    setResizeStartPoint({ x, y });
    drawCropOverlay();
  };
  
  // Handle mouse up to finalize the crop rect resize
  const handleCropMouseUp = () => {
    setResizingCorner(null);
    setResizeStartPoint(null);
    drawCropOverlay();
  };

  // Handle double click to start resizing
  const handleCropDoubleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isCropping || !cropRect || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    
    // Check if double-clicking on a corner handle
    if (isNearCorner(x, y, cropRect.x, cropRect.y)) {
      setResizingCorner('topLeft');
    } else if (isNearCorner(x, y, cropRect.x + cropRect.width, cropRect.y)) {
      setResizingCorner('topRight');
    } else if (isNearCorner(x, y, cropRect.x, cropRect.y + cropRect.height)) {
      setResizingCorner('bottomLeft');
    } else if (isNearCorner(x, y, cropRect.x + cropRect.width, cropRect.y + cropRect.height)) {
      setResizingCorner('bottomRight');
    }
    
    setResizeStartPoint({ x, y });
  };
  
  // Draw the crop overlay
  const drawCropOverlay = () => {
    if (!canvasRef.current || !cropCanvasRef.current || !cropRect) return;
    
    const canvas = canvasRef.current;
    const cropCanvas = cropCanvasRef.current;
    
    cropCanvas.width = canvas.width;
    cropCanvas.height = canvas.height;
    
    const ctx = cropCanvas.getContext('2d');
    if (!ctx) return;
    
    // Draw semi-transparent overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, cropCanvas.width, cropCanvas.height);
    
    // Clear crop area
    ctx.clearRect(cropRect.x, cropRect.y, cropRect.width, cropRect.height);
    
    // Draw crop border
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.strokeRect(cropRect.x, cropRect.y, cropRect.width, cropRect.height);
    
    // Draw handles (corners) with arrows
    const handleSize = 10;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    
    // Draw corner handles with arrows
    // Top-left corner
    drawCornerHandle(ctx, cropRect.x, cropRect.y, handleSize, 'topLeft');
    // Top-right corner
    drawCornerHandle(ctx, cropRect.x + cropRect.width, cropRect.y, handleSize, 'topRight');
    // Bottom-left corner
    drawCornerHandle(ctx, cropRect.x, cropRect.y + cropRect.height, handleSize, 'bottomLeft');
    // Bottom-right corner
    drawCornerHandle(ctx, cropRect.x + cropRect.width, cropRect.y + cropRect.height, handleSize, 'bottomRight');
  };

  // Helper function to draw corner handles with arrows
  const drawCornerHandle = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, corner: string) => {
    // Draw square handle
    ctx.fillStyle = 'white';
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
    ctx.strokeRect(x - size / 2, y - size / 2, size, size);
    
    // Draw arrows based on corner position
    ctx.beginPath();
    ctx.fillStyle = 'black';
    
    switch (corner) {
      case 'topLeft':
        // Draw diagonal arrow pointing to top-left
        ctx.moveTo(x - 1, y - 1);
        ctx.lineTo(x - 8, y - 8);
        ctx.lineTo(x - 8, y - 3);
        ctx.lineTo(x - 3, y - 8);
        ctx.fill();
        break;
      case 'topRight':
        // Draw diagonal arrow pointing to top-right
        ctx.moveTo(x + 1, y - 1);
        ctx.lineTo(x + 8, y - 8);
        ctx.lineTo(x + 8, y - 3);
        ctx.lineTo(x + 3, y - 8);
        ctx.fill();
        break;
      case 'bottomLeft':
        // Draw diagonal arrow pointing to bottom-left
        ctx.moveTo(x - 1, y + 1);
        ctx.lineTo(x - 8, y + 8);
        ctx.lineTo(x - 8, y + 3);
        ctx.lineTo(x - 3, y + 8);
        ctx.fill();
        break;
      case 'bottomRight':
        // Draw diagonal arrow pointing to bottom-right
        ctx.moveTo(x + 1, y + 1);
        ctx.lineTo(x + 8, y + 8);
        ctx.lineTo(x + 8, y + 3);
        ctx.lineTo(x + 3, y + 8);
        ctx.fill();
        break;
    }
  };
  
  // Apply the crop to the image
  const applyCrop = () => {
    if (!canvasRef.current || !cropRect || !imageRef.current) return;
    
    const canvas = canvasRef.current;
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    
    if (!tempCtx) return;
    
    // Set temp canvas size to crop dimensions
    tempCanvas.width = cropRect.width;
    tempCanvas.height = cropRect.height;
    
    // Draw cropped portion of the original canvas to temp canvas
    tempCtx.drawImage(
      canvas,
      cropRect.x, cropRect.y, cropRect.width, cropRect.height,
      0, 0, cropRect.width, cropRect.height
    );
    
    // Create a new image from the cropped canvas
    const croppedImage = new Image();
    croppedImage.src = tempCanvas.toDataURL('image/jpeg');
    
    croppedImage.onload = () => {
      // Replace the original image with cropped one
      imageRef.current = croppedImage;
      setIsCropping(false);
      setCropRect(null);
      setResizingCorner(null);
      setResizeStartPoint(null);
      
      // Redraw with updated image
      drawImage();
    };
  };
  
  // Get appropriate filter style
  const getFilterStyle = (filter: FilterPreset) => {
    const sepiaFilter = filter.sepia > 0 ? `sepia(${filter.sepia}%) ` : '';
    const blurFilter = filter.blur > 0 ? `blur(${filter.blur}px) ` : '';
    const hueRotateFilter = filter.hueRotate > 0 ? `hue-rotate(${filter.hueRotate}deg) ` : '';
    
    return {
      filter: `brightness(${filter.brightness}%) contrast(${filter.contrast}%) saturate(${filter.saturation}%) ${sepiaFilter}${blurFilter}${hueRotateFilter}`
    };
  };
  
  // Generate a filter preview thumbnail
  const FilterThumbnail = ({ filter }: { filter: FilterPreset }) => {
    const isActive = 
      brightness === filter.brightness && 
      contrast === filter.contrast && 
      saturation === filter.saturation &&
      sepia === filter.sepia &&
      blur === filter.blur &&
      hueRotate === filter.hueRotate;
    
    return (
      <button 
        key={filter.name}
        className={`flex flex-col items-center p-2 ${isActive ? 'bg-blue-900' : 'hover:bg-gray-800'} rounded`}
        onClick={() => handleApplyFilter(filter)}
      >
        <div className="relative w-16 h-16 bg-gray-700 rounded mb-2 overflow-hidden">
          {imageRef.current && (
            <div 
              className="w-full h-full bg-center bg-cover" 
              style={{
                backgroundImage: `url(${imageUrl})`,
                ...getFilterStyle(filter)
              }}
            />
          )}
          {isActive && (
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3" />
            </div>
          )}
        </div>
        <span className="text-sm">{filter.name}</span>
      </button>
    );
  };
  
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex flex-col text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <button 
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-800"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-medium">Edit Image</h2>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={handleReset}
            className="rounded-full p-2 hover:bg-gray-800 flex items-center gap-1"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Reset</span>
          </button>
          
          <button 
            onClick={handleSave}
            disabled={loading}
            className="bg-blue-600 rounded-full px-4 py-2 hover:bg-blue-700 flex items-center gap-1 disabled:opacity-50"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            ) : (
              <Save className="w-5 h-5" />
            )}
            <span>Save</span>
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Canvas area */}
        <div 
          ref={containerRef}
          className="flex-1 flex items-center justify-center bg-gray-900 relative"
        >
          <div className="relative max-w-full max-h-full">
            <canvas 
              ref={canvasRef} 
              className="max-w-full max-h-full object-contain"
              onMouseDown={handleCropMouseDown}
              onMouseMove={handleCropMouseMove}
              onMouseUp={handleCropMouseUp}
              onMouseLeave={handleCropMouseUp}
              onDoubleClick={handleCropDoubleClick}
            />
            {isCropping && (
              <canvas
                ref={cropCanvasRef}
                className="absolute top-0 left-0 pointer-events-none max-w-full max-h-full object-contain"
              />
            )}
          </div>
          
          {/* Crop control buttons */}
          {isCropping && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button 
                onClick={cancelCropping}
                className="bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-700 flex items-center gap-1"
              >
                <X className="w-5 h-5" />
                <span>Cancel</span>
              </button>
              <button 
                onClick={applyCrop}
                className="bg-blue-600 rounded-full px-4 py-2 hover:bg-blue-700 flex items-center gap-1"
                disabled={!cropRect}
              >
                <Check className="w-5 h-5" />
                <span>Apply Crop</span>
              </button>
            </div>
          )}
        </div>
        
        {/* Controls sidebar */}
        <div className="w-64 border-l border-gray-700 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            <button 
              className={`flex-1 py-3 text-center ${activeTab === 'adjust' ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab('adjust')}
            >
              Adjust
            </button>
            <button 
              className={`flex-1 py-3 text-center ${activeTab === 'filters' ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab('filters')}
            >
              Filters
            </button>
          </div>
          
          {/* Controls */}
          <div className="flex-1 p-4 space-y-6 overflow-y-auto">
            {activeTab === 'adjust' && (
              <>
                {/* Crop control */}
                <div className="flex flex-col items-center gap-2 pt-2 pb-4 border-b border-gray-700">
                  <button
                    onClick={startCropping}
                    className={`${isCropping ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'} w-12 h-12 rounded-full flex items-center justify-center`}
                  >
                    <Crop className="w-6 h-6" />
                  </button>
                  <span className="text-sm">Crop</span>
                </div>
                
                {/* Brightness control */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Brightness className="w-5 h-5" />
                    <span>Brightness</span>
                    <span className="ml-auto text-sm">{brightness}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    value={brightness} 
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>
                
                {/* Contrast control */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Contrast className="w-5 h-5" />
                    <span>Contrast</span>
                    <span className="ml-auto text-sm">{contrast}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    value={contrast} 
                    onChange={(e) => setContrast(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>
                
                {/* Saturation control */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    <span>Saturation</span>
                    <span className="ml-auto text-sm">{saturation}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="200" 
                    value={saturation} 
                    onChange={(e) => setSaturation(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>
                
                {/* Rotation control */}
                <div className="flex flex-col items-center gap-2 pt-4">
                  <button
                    onClick={rotateImage}
                    className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center"
                  >
                    <RotateCw className="w-6 h-6" />
                  </button>
                  <span className="text-sm">Rotate</span>
                </div>
              </>
            )}
            
            {activeTab === 'filters' && (
              <div className="grid grid-cols-2 gap-4">
                {filterPresets.map(filter => (
                  <FilterThumbnail key={filter.name} filter={filter} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}