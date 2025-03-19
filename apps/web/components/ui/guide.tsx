"use client";
import React, { useState, useEffect, useRef } from 'react';

const AlternatingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const containerRef = useRef(null);

  // Sample data - replace with your actual data
  const carouselData = [
    {
      title: "Variety in background, clothes, and expression",
      description: "Photos captured on different occasions, with different backgrounds, clothes and expressions, helps the AI develop a comprehensive understanding of your appearance",
      images: [
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fvariety%2F1.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fvariety%2F2.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fvariety%2F3.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fvariety%2F4.png&w=1920&q=75"
      ]
    },
    {
      title: "Not too far, not too close, looking at the camera",
      description: "Al needs your face to be clearly visible to understand how you look. Make sure your face is well-lit and not too close or too far from the camera.",
      images: [
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fnatural-distance%2F1.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fnatural-distance%2F2.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fnatural-distance%2F3.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fnatural-distance%2F4.png&w=1920&q=75"
      ]
    },
    {
      title: "Different angles provide versatility",
      description: "Capturing your face from different angles allows the AI to create more versatile and accurate representations across various perspectives",
      images: [
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fdifferent-appearence%2F1.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fdifferent-appearence%2F2.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fdifferent-appearence%2F4.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fdifferent-appearence%2F3.png&w=1920&q=75"
      ]
    },
    {
      title: "Clear face visibility improves results",
      description: "Ensuring your face is clearly visible without obstruction helps the AI identify and recreate your distinctive features with higher accuracy",
      images: [
        "https://meta.magicstudio.com/assets/grap/guidelines-2/guide-img-2.png",
        "https://meta.magicstudio.com/assets/grap/guidelines-2/guide-img-4.png",
        "https://meta.magicstudio.com/assets/grap/guidelines-2/guide-img-3.png",
        "https://meta.magicstudio.com/assets/grap/guidelines-2/guide-img-1.png"
      ]
    }
  ];

  const goToSlide = (index: React.SetStateAction<number>) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setDirection((index as number) > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const nextSlide = () => {
    const nextIndex = currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  };

  // Optional: Auto-advance slides
  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Added Heading */}
      <h1 className="text-5xl font-bold text-center pb-5 mb-6 text-white">Guide for Creating your AI Model Effectively</h1>
      
      {/* Carousel Container - Changed background to black */}
      <div className="w-full h-[500px] mx-auto bg-black rounded-lg shadow-lg relative overflow-hidden" ref={containerRef}>
        {carouselData.map((slideData, index) => {
          const isEven = index % 2 === 0;
          const isActive = index === currentIndex;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full flex ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{ flexDirection: isEven ? 'row' : 'row-reverse' }}
            >
              {/* Content Side */}
              <div className="w-1/2 p-10 flex flex-col justify-center relative overflow-hidden">
                <div
                  className={`absolute inset-0 p-10 flex flex-col justify-center ${isActive ? 'z-10' : 'z-0'}`}
                  style={{
                    animation: isActive 
                      ? `${direction === 'next' ? 'slideInFromBottom' : 'slideInFromTop'} 0.6s forwards` 
                      : `${direction === 'next' ? 'slideOutToTop' : 'slideOutToBottom'} 0.6s forwards`
                  }}
                >
                  <div className="mb-4 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {/* Changed text colors for dark background */}
                  <h2 className="text-2xl font-bold mb-4 text-white">{slideData.title}</h2>
                  <p className="text-gray-300">{slideData.description}</p>
                </div>
              </div>
              
              {/* Images Side */}
              <div className="w-1/2 p-5 relative overflow-hidden">
                <div
                  className={`absolute inset-0 p-5 grid grid-cols-2 grid-rows-2 gap-4 ${isActive ? 'z-10' : 'z-0'}`}
                  style={{
                    animation: isActive 
                      ? `${direction === 'next' ? 'slideInFromTop' : 'slideInFromBottom'} 0.6s forwards` 
                      : `${direction === 'next' ? 'slideOutToBottom' : 'slideOutToTop'} 0.6s forwards`
                  }}
                >
                  {slideData.images.map((image, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className="overflow-hidden rounded-lg border-2 border-gray-600" // Added gray border
                    >
                      <img src={image} alt={`Example ${imgIndex + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center shadow-md z-20"
          disabled={isAnimating}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center shadow-md z-20"
          disabled={isAnimating}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-500'}`}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
            />
          ))}
        </div>
        
        {/* Slide Counter */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 mt-8">
          {currentIndex + 1} / {carouselData.length}
        </div>
        
        {/* CSS Animations */}
        <style jsx>{`
          @keyframes slideInFromBottom {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes slideOutToTop {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(-100%); opacity: 0; }
          }
          
          @keyframes slideInFromTop {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes slideOutToBottom {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(100%); opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AlternatingCarousel;