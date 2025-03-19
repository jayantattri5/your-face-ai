'use client';
import React, { useState } from "react";
import "./collage.css";

const ImageCollage = () => {
  const [likedImages, setLikedImages] = useState<{ [key: number]: boolean }>({});
  
  // Sample data with image URLs, prompts, likes
  const imageData = [
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725085484-400bae688904e1f3bd61a2463353c6eb-1.png",
      prompt: "Beautiful model standing in front of Charminar(Mumbai), wearing Ray-Ban's Avaitor sunglasses",
      likes: 78
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726141909-ec22500f2a669976ba1c26b097fd8bf4-3.png",
      prompt: "Model sitting in a coffee shop smiling and eating pancakes.",
      likes: 124
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726207491-635eb874c7901a556b9852a4807f68da-1.png",
      prompt: "Model sitting in an aeroplane's cockpit as a pilot",
      likes: 191
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726236747-2c39f6dd3b04446be2017a51bc2ec0b9-4.png",
      prompt: "Line art cute kitten sitting",
      likes: 98
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233952-31750b753f3a36a72df402e4ea96f5ba-3.png",
      prompt: "Lush tropical jungle with green foliage",
      likes: 112
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233364-f802a6e2bcc1d6d395cf241e49c5da74-1.png",
      prompt: "Person standing in front of cosmic black hole in space",
      likes: 237
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726207491-635eb874c7901a556b9852a4807f68da-1.png",
      prompt: "Anime style character with blue hair",
      likes: 191
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726236747-2c39f6dd3b04446be2017a51bc2ec0b9-4.png",
      prompt: "Line art cute kitten sitting",
      likes: 98
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233952-31750b753f3a36a72df402e4ea96f5ba-3.png",
      prompt: "Lush tropical jungle with green foliage",
      likes: 112
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233364-f802a6e2bcc1d6d395cf241e49c5da74-1.png",
      prompt: "Person standing in front of cosmic black hole in space",
      likes: 237
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726207491-635eb874c7901a556b9852a4807f68da-1.png",
      prompt: "Anime style character with blue hair",
      likes: 191
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726236747-2c39f6dd3b04446be2017a51bc2ec0b9-4.png",
      prompt: "Line art cute kitten sitting",
      likes: 98
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233952-31750b753f3a36a72df402e4ea96f5ba-3.png",
      prompt: "Lush tropical jungle with green foliage",
      likes: 112
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233364-f802a6e2bcc1d6d395cf241e49c5da74-1.png",
      prompt: "Person standing in front of cosmic black hole in space",
      likes: 237
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726207491-635eb874c7901a556b9852a4807f68da-1.png",
      prompt: "Anime style character with blue hair",
      likes: 191
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1725072728-c9bd382d86c1b61feb5ce3f1a466fcf1-1.png",
      prompt: "Cartoon dragon character in green and gray colors",
      likes: 86
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726236747-2c39f6dd3b04446be2017a51bc2ec0b9-4.png",
      prompt: "Line art cute kitten sitting",
      likes: 98
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233952-31750b753f3a36a72df402e4ea96f5ba-3.png",
      prompt: "Lush tropical jungle with green foliage",
      likes: 112
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,width=250,height=375,quality=50/https://r2-us-west.photoai.com/1726233364-f802a6e2bcc1d6d395cf241e49c5da74-1.png",
      prompt: "Person standing in front of cosmic black hole in space",
      likes: 237
    },
    // Add the rest of your images with similar data structure
  ];

  const handleLike = (index: number) => {
    setLikedImages({
      ...likedImages,
      [index]: !likedImages[index]
    });
  };

  const getImageSize = (index: number) => {
    // Create varied sizes for grid layout
    const sizes = ["small", "medium", "large"];
    return sizes[index % 3];
  };

  return (
    <div className="gallery-container">
      {imageData.map((image, index) => (
        <div 
          key={index} 
          className={`gallery-item ${getImageSize(index)}`}
        >
          <div className="image-container">
            <img 
              src={image.url} 
              alt={`Gallery ${index}`} 
              className="gallery-image" 
            />
            <div className="image-overlay">
              <div className="prompt-text">{image.prompt}</div>
              <div className="like-container">
                <button 
                  className={`like-button ${likedImages[index] ? 'liked' : ''}`}
                  onClick={() => handleLike(index)}
                >
                  <svg viewBox="0 0 24 24" className="heart-icon">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <span className="like-count">{likedImages[index] ? image.likes + 1 : image.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCollage;