'use client';
import React, { useState } from 'react';
import { 
  Download, 
  Eye, 
  Copy, 
  Wand2, 
  Edit2 
} from 'lucide-react';
import "./examples.css";
import ImageEditor from './ImageEditor';
import ImageEditorApp from './ImageEditor';

interface ImageEditorProps {
  imageUrl: string;
  onSave: (editedImageUrl: any) => void;
  onCancel: () => void;
}

const Examples = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editingImage, setEditingImage] = useState<string | null>(null);
  
  // Images array - keep your existing images
  const [images, setImages] = useState([
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726223233-d783bdf65c0fc15cf17618b9a8a301f7-2.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726214490-93846371f0af448f9071be55879a035a-3.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726207491-635eb874c7901a556b9852a4807f68da-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726207386-d57e48ef257c318a3ce7d83d7d7200c1-3.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725072728-c9bd382d86c1b61feb5ce3f1a466fcf1-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725043069-e4f43c8ed7ada37451d583bc0a332a7c-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726236747-2c39f6dd3b04446be2017a51bc2ec0b9-4.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233952-31750b753f3a36a72df402e4ea96f5ba-3.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233364-f802a6e2bcc1d6d395cf241e49c5da74-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726234814-5f06590cc2b005e8fc2c5edda005c7a7-1.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726204780-c3ee3f65fd45de7f4063fb4ee6a22da2-4.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726195511-b0783ffbd33563360f3c2daa78ce4389-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726186641-b6c39153ad8976ef1cf1d246f1593f46-3.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726141909-ec22500f2a669976ba1c26b097fd8bf4-4.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725061062-b2f87a7308422580800a8434cdbda024-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726183989-43f404f70a9c7b61a54768d35fc4b9b9-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232901-a484142cb7c49809cb014a6720abc84f-4.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232670-07ce7f60ce556c66ed2c6d3350d31584-2.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232838-df511a668c482f209fdc7bf21ea86fd3-2.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232418-67c5987c6b9e15de37e3e0f4afa749f3-3.png",
    "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725059885-cceb9261f98c9ecec148e0067b7fc061-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725038501-a401b71e0065d40d0a3d63cb13300fc7-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725038438-d1b930ea12de4ffdb869184a8c089193-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725037471-35d2ebf1d17b0d44053cab41b92558cd-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725043468-588dd5ce6fc4b24369004d149a2551c5-1.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726195952-1a6d6376a10e8dbf522206f2de1e11d6-4.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232250-cf7deef1c4ac329a935e4ddf0fe7bd8d-4.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726232124-a305892b0853ab13d526d22b66c72351-3.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726230610-90d1e98a1c2f10e318ece475b1ba75ab-4.png", "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726224726-b0828339f1d2cb2df05f41f7c7f249bf-2.png",
    "https://pub-1c024d6181db4a8d9ce127046cdbc59f.r2.dev/Backgroundimg.png"
  ]);

  const handleDownload = (imageUrl: string | URL | Request) => {
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'downloaded_image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error('Download failed:', error));
  };

  const handleViewImage = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseView = () => {
    setSelectedImage(null);
    setEditMode(false);
  };

  const handleEdit = (imageUrl: string) => {
    setEditingImage(imageUrl);
  };

  const handleSaveEdit = (editedImageUrl: any) => {
    // Replace the original image in your images array
    const updatedImages = images.map(img => 
      img === editingImage ? editedImageUrl : img
    );
    
    // Update images state
    setImages(updatedImages);
    
    // Close the editing modal
    setEditingImage(null);
  };

  return (
    <div className="collage-container">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="image-wrapper"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img 
            src={image} 
            alt={`Collage ${index}`} 
            className="collage-item" 
            style={{ 
              transform: `rotateY(${index % 2 === 0 ? "10deg" : "-10deg"}) translateZ(20px)` 
            }}
          />
          {hoveredIndex === index && (
            <div className="hover-overlay">
              <div className="hover-icons">
                <button 
                  onClick={() => handleDownload(image)}
                  className="hover-icon"
                  title="Download"
                >
                  <Download size={30} />
                </button>
                <button 
                  onClick={() => handleViewImage(image)}
                  className="hover-icon"
                  title="View"
                >
                  <Eye size={30} />
                </button>
                <button 
                  onClick={() => handleEdit(image)}
                  className="hover-icon"
                  title="Edit"
                >
                  <Edit2 size={30} />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Full Image View Modal (existing code) */}
      {selectedImage && (
        <div className="full-image-modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseView}>×</button>
            <img src={selectedImage} alt="Full view" className="full-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Examples;