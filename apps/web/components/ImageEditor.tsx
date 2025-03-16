import React, { useState, useRef, useEffect } from 'react';

const ImageEditor = ({ imageUrl, onSave }) => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 100, height: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [cornerDragging, setCornerDragging] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(null);
  
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  // Load the image when component mounts or imageUrl changes
  useEffect(() => {
    if (!imageUrl) {
      setError("No image URL provided");
      return;
    }

    setImageLoaded(false);
    setError(null);
    
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Try to avoid CORS issues
    
    img.onload = () => {
      imageRef.current = img;
      setImageLoaded(true);
      // Force redraw after a short delay to ensure canvas is ready
      setTimeout(() => {
        drawImage();
      }, 50);
    };
    
    img.onerror = (e) => {
      console.error("Error loading image:", e);
      setError("Failed to load image. The image might be protected or the URL is invalid.");
    };
    
    img.src = imageUrl;
  }, [imageUrl]);

  // Set up canvas and initial drawing when component mounts
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Make sure canvas dimensions match its display size
    const updateCanvasSize = () => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  // Draw the image on canvas with current transformations
  const drawImage = () => {
    if (!canvasRef.current || !imageRef.current || !imageLoaded) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;
    
    // Update canvas size to match display size
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;
    
    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
    }
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Calculate image dimensions to maintain aspect ratio
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    if (imgRatio > canvasRatio) {
      // Image is wider than canvas (relative to height)
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Image is taller than canvas (relative to width)
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }
    
    // Save context state
    ctx.save();
    
    // Move to center of canvas
    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    // Apply rotation
    ctx.rotate((rotation * Math.PI) / 180);
    
    // Apply scale
    ctx.scale(scale, scale);
    
    // Draw image centered
    try {
      ctx.drawImage(
        img, 
        -drawWidth / 2, 
        -drawHeight / 2, 
        drawWidth, 
        drawHeight
      );
    } catch (err) {
      console.error("Error drawing image:", err);
      setError("Error rendering image on canvas");
    }
    
    // Restore context state
    ctx.restore();
    
    // Draw crop overlay if crop tool is selected
    if (selectedTool === 'crop') {
      drawCropOverlay(ctx);
    }
  };

  // Draw crop overlay
  const drawCropOverlay = (ctx) => {
    const canvas = canvasRef.current;
    
    // Draw semi-transparent overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Calculate crop rectangle position
    const cropX = (canvas.width * (100 - crop.width)) / 200;
    const cropY = (canvas.height * (100 - crop.height)) / 200;
    const cropWidth = (canvas.width * crop.width) / 100;
    const cropHeight = (canvas.height * crop.height) / 100;
    
    // Clear the crop area
    ctx.clearRect(cropX, cropY, cropWidth, cropHeight);
    
    // Draw crop border
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.strokeRect(cropX, cropY, cropWidth, cropHeight);
    
    // Draw corner handles
    const handleSize = 10;
    drawHandle(ctx, cropX - handleSize / 2, cropY - handleSize / 2, handleSize, 'nw');
    drawHandle(ctx, cropX + cropWidth - handleSize / 2, cropY - handleSize / 2, handleSize, 'ne');
    drawHandle(ctx, cropX - handleSize / 2, cropY + cropHeight - handleSize / 2, handleSize, 'sw');
    drawHandle(ctx, cropX + cropWidth - handleSize / 2, cropY + cropHeight - handleSize / 2, handleSize, 'se');
  };

  // Draw a handle at the specified position
  const drawHandle = (ctx, x, y, size, position) => {
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y, size, size);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(x, y, size, size);
  };

  // Handle mouse down event
  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if clicking on a corner handle
    if (selectedTool === 'crop') {
      const cropX = (canvas.width * (100 - crop.width)) / 200;
      const cropY = (canvas.height * (100 - crop.height)) / 200;
      const cropWidth = (canvas.width * crop.width) / 100;
      const cropHeight = (canvas.height * crop.height) / 100;
      const handleSize = 10;
      
      // Check each corner
      const corners = [
        { pos: 'nw', x: cropX, y: cropY },
        { pos: 'ne', x: cropX + cropWidth, y: cropY },
        { pos: 'sw', x: cropX, y: cropY + cropHeight },
        { pos: 'se', x: cropX + cropWidth, y: cropY + cropHeight }
      ];
      
      for (const corner of corners) {
        if (
          Math.abs(x - corner.x) <= handleSize &&
          Math.abs(y - corner.y) <= handleSize
        ) {
          setCornerDragging(corner.pos);
          setIsDragging(true);
          setDragStart({ x, y });
          return;
        }
      }
    }
    
    // Otherwise, start dragging the image
    setIsDragging(true);
    setDragStart({ x, y });
  };

  // Handle mouse move event
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (cornerDragging) {
      // Handle corner dragging for crop
      const dx = x - dragStart.x;
      const dy = y - dragStart.y;
      
      // Update crop based on which corner is being dragged
      const newCrop = { ...crop };
      
      if (cornerDragging.includes('n')) {
        newCrop.y += dy / canvas.height * 100;
        newCrop.height -= dy / canvas.height * 100;
      }
      if (cornerDragging.includes('s')) {
        newCrop.height += dy / canvas.height * 100;
      }
      if (cornerDragging.includes('w')) {
        newCrop.x += dx / canvas.width * 100;
        newCrop.width -= dx / canvas.width * 100;
      }
      if (cornerDragging.includes('e')) {
        newCrop.width += dx / canvas.width * 100;
      }
      
      // Enforce minimum size
      if (newCrop.width < 10) newCrop.width = 10;
      if (newCrop.height < 10) newCrop.height = 10;
      
      setCrop(newCrop);
    } else if (selectedTool === 'crop') {
      // Move the crop area
      const dx = x - dragStart.x;
      const dy = y - dragStart.y;
      
      setCrop({
        ...crop,
        x: crop.x + dx / canvas.width * 100,
        y: crop.y + dy / canvas.height * 100
      });
    } else {
      // Move the image
      const dx = x - dragStart.x;
      const dy = y - dragStart.y;
      
      setCrop({
        ...crop,
        x: crop.x + dx / canvas.width * 100,
        y: crop.y + dy / canvas.height * 100
      });
    }
    
    setDragStart({ x, y });
    drawImage();
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
    setCornerDragging(null);
  };

  // Handle tool selection
  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
  };

  // Handle rotation change
  const handleRotate = (angle) => {
    setRotation(rotation + angle);
    drawImage();
  };

  // Handle flip horizontal
  const handleFlipHorizontal = () => {
    setScale(scale * -1);
    drawImage();
  };

  // Handle saving the edited image
  const handleSave = () => {
    if (!canvasRef.current) return;
    try {
      const dataUrl = canvasRef.current.toDataURL('image/jpeg');
      if (onSave) onSave(dataUrl);
    } catch (err) {
      console.error("Error saving image:", err);
      setError("Error saving image. The image might be tainted due to CORS restrictions.");
    }
  };

  // Update canvas when any transformation changes
  useEffect(() => {
    if (imageLoaded) {
      drawImage();
    }
  }, [rotation, scale, crop, selectedTool, imageLoaded]);

  return (
    <div className="relative bg-gray-100 rounded-lg p-6 shadow-lg" ref={containerRef}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="text-2xl font-bold mb-4">React Image Editor</div>
        
        {/* Top toolbar */}
        <div className="flex justify-between mb-4">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button 
            className="px-4 py-2 bg-yellow-400 rounded-full text-sm font-medium"
            onClick={handleSave}
          >
            Done
          </button>
        </div>
        
        {/* Main toolbar */}
        <div className="flex justify-center space-x-6 mb-4">
          <button 
            className="flex items-center space-x-2 px-3 py-1 hover:bg-gray-200 rounded"
            onClick={() => handleRotate(-90)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4" />
            </svg>
            <span>Rotate left</span>
          </button>
          
          <button 
            className="flex items-center space-x-2 px-3 py-1 hover:bg-gray-200 rounded"
            onClick={handleFlipHorizontal}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span>Flip horizontal</span>
          </button>
          
          <button 
            className={`flex items-center space-x-2 px-3 py-1 hover:bg-gray-200 rounded ${selectedTool === 'crop' ? 'bg-gray-300' : ''}`}
            onClick={() => handleToolSelect('crop')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            <span>Crop shape</span>
          </button>
        </div>
        
        {/* Canvas container */}
        <div className="relative flex-grow mb-4 min-h-64">
          {!imageLoaded && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-gray-500">Loading image...</div>
            </div>
          )}
          
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-red-500">{error}</div>
            </div>
          )}
          
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain border rounded-lg bg-white"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
        </div>
        
        {/* Image debug info (for troubleshooting) */}
        <div className="text-xs text-gray-500 mb-2">
          Status: {imageLoaded ? 'Image loaded' : error ? 'Error' : 'Loading...'}
          {imageRef.current && (
            <span> | Original dimensions: {imageRef.current.width}x{imageRef.current.height}px</span>
          )}
        </div>
        
        {/* Bottom controls */}
        <div className="mt-2">
          <div className="flex justify-center mb-2">
            <div className="w-3/4 flex items-center">
              <div className="w-full h-1 bg-gray-300 rounded-full relative">
                <div 
                  className="absolute h-4 w-4 bg-white border-2 border-gray-400 rounded-full top-1/2 transform -translate-y-1/2" 
                  style={{ left: `${((rotation + 180) % 360) / 3.6}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-8">
            <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm font-medium">
              Rotation
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm font-medium">
              Scale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage component
const ImageEditorApp = () => {
  const [editedImage, setEditedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('https://images.unsplash.com/photo-1578922846525-52a84ace4fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80');
  
  const handleSave = (dataUrl) => {
    setEditedImage(dataUrl);
    console.log('Image saved!');
  };
  
  const loadImage = () => {
    setImageUrl(inputUrl);
  };
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">React Image Editor</h1>
      
      {/* Image URL input */}
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Enter image URL"
          className="flex-grow p-2 border rounded"
        />
        <button 
          onClick={loadImage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Load Image
        </button>
      </div>
      
      {/* Editor */}
      {imageUrl && (
        <ImageEditor 
          imageUrl={imageUrl} 
          onSave={handleSave} 
        />
      )}
      
      {/* Preview of edited image */}
      {editedImage && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Edited Image:</h2>
          <img 
            src={editedImage} 
            alt="Edited" 
            className="max-w-full border rounded-lg" 
          />
        </div>
      )}
    </div>
  );
};

export default ImageEditorApp;