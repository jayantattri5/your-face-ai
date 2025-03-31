"use client";
import React, { useState, useEffect, useRef } from 'react';

const UserGuide = () => {
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
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fvariety%2F2.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fvariety%2F1.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fvariety%2F3.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fvariety%2F4.png&w=1920&q=75"
      ]
    },
    {
      title: "Not too far, not too close, looking at the camera", 
      description: "Al needs your face to be clearly visible to understand how you look. Make sure your face is well-lit and not too close or too far from the camera.",
      images: [
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fnatural-distance%2F1.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fnatural-distance%2F3.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fnatural-distance%2F2.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fnatural-distance%2F4.png&w=1920&q=75"
      ]
    },
    {
      title: "Different angles provide versatility", 
      description: "Capturing your face from different angles allows the AI to create more versatile and accurate representations across various perspectives",
      images: [
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fdifferent-appearence%2F1.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fdifferent-appearence%2F3.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fdifferent-appearence%2F4.png&w=1920&q=75",
        "https://app.instaheadshots.com/_next/image?url=https%3A%2F%2Fmeta.magicstudio.com%2Fassets%2Finstaheadshots%2Fupload-guidelines-detailed%2Fmale%2Fdifferent-appearence%2F2.png&w=1920&q=75"
      ]
    },
    {
      title: "Clear face visibility improves results",
      description: "Ensuring your face is clearly visible without obstruction helps the AI identify and recreate your distinctive features with higher accuracy",
      images: [
        "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,height=500,width=500,quality=50/assets/training_examples/good/h.jpeg?1716128114",
        "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,height=500,width=500,quality=50/assets/training_examples/good/g.jpeg?1708109686",
        "https://photoai.com/cdn-cgi/image/format=auto,fit=cover,height=500,width=500,quality=50/assets/training_examples/good/e.jpeg?1708109686",
        "https://photoai.com/cdn-cgi/image/format=jpeg,width=1000,quality=50/https://r2-us-west.photoai.com/1723596600-599fad91c8823eedc9646f3b6dec2c4e-1.png?1723596599"
      ]
    }
  ];

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setDirection(index > currentIndex ? 'next' : 'prev');
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

  // Add touch event handlers for swipe functionality
  useEffect(() => {
    const container = containerRef.current;
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };
    
    const handleSwipe = () => {
      const swipeThreshold = 50;
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left - go to next slide
        nextSlide();
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right - go to previous slide
        prevSlide();
      }
    };
    
    if (container) {
      container.addEventListener('touchstart', handleTouchStart, false);
      container.addEventListener('touchend', handleTouchEnd, false);
      
      return () => {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [currentIndex]);

  return (
    <div className="w-full px-4 max-w-4xl mx-auto">
      {/* Responsive Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-4 md:mb-8">
        Guide for Choosing Images for your AI Model{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Effectively
        </span>
      </h1>
      
      {/* Carousel Container */}
      <div 
        className="w-full h-[600px] md:h-[500px] mx-auto bg-black rounded-lg shadow-lg relative overflow-hidden" 
        ref={containerRef}
      >
        {carouselData.map((slideData, index) => {
          const isEven = index % 2 === 0;
          const isActive = index === currentIndex;
          
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {/* Mobile Layout (stacked) */}
              <div className="flex flex-col h-full md:hidden">
                {/* Content Section (Top on mobile) */}
                <div className="w-full flex-shrink-0 h-50 p-4 flex flex-col justify-center bg-black relative">
                  <div
                    className={`p-4 h-full flex flex-col justify-center ${isActive ? 'z-10' : 'z-0'}`}
                    style={{
                      animation: isActive 
                        ? `${direction === 'next' ? 'slideInFromBottom' : 'slideInFromTop'} 0.6s forwards` 
                        : ''
                    }}
                  >
                    <div className="mb-2 text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-bold mb-2 text-white">{slideData.title}</h2>
                    <p className="text-sm text-gray-300">{slideData.description}</p>
                  </div>
                </div>
                
                {/* Images Section (Bottom on mobile) */}
                <div className="w-full flex-shrink-0 h-100 p-0 relative">
                  <div
                    className={`p-0 h-full grid grid-cols-2 grid-rows-2 gap-1 ${isActive ? 'z-10' : 'z-0'}`}
                    style={{
                      animation: isActive 
                        ? `${direction === 'next' ? 'slideInFromTop' : 'slideInFromBottom'} 0.6s forwards`
                        : ''
                    }}
                  >
                    {slideData.images.map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="overflow-hidden rounded-lg border-2 border-gray-600"
                      >
                        <img 
                          src={image} 
                          alt={`Example ${imgIndex + 1}`} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Desktop Layout (side by side) */}
              <div className={`hidden md:flex md:flex-row md:h-full ${isEven ? '' : 'md:flex-row-reverse'}`}>
                {/* Content Section */}
                <div className="w-1/2 p-10 flex flex-col justify-center relative overflow-hidden">
                  <div
                    className={`p-10 flex flex-col justify-center ${isActive ? 'z-10' : 'z-0'}`}
                    style={{
                      animation: isActive 
                        ? `${direction === 'next' ? 'slideInFromBottom' : 'slideInFromTop'} 0.6s forwards` 
                        : ''
                    }}
                  >
                    <div className="mb-4 text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-white">{slideData.title}</h2>
                    <p className="text-gray-300">{slideData.description}</p>
                  </div>
                </div>
                
                {/* Images Section */}
                <div className="w-1/2 p-5 relative overflow-hidden">
                  <div
                    className={`p-5 grid grid-cols-2 grid-rows-2 gap-4 h-full ${isActive ? 'z-10' : 'z-0'}`}
                    style={{
                      animation: isActive 
                        ? `${direction === 'next' ? 'slideInFromTop' : 'slideInFromBottom'} 0.6s forwards` 
                        : ''
                    }}
                  >
                    {slideData.images.map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="overflow-hidden rounded-lg border-2 border-gray-600"
                      >
                        <img 
                          src={image} 
                          alt={`Example ${imgIndex + 1}`} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide} 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center shadow-md z-20"
          disabled={isAnimating}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-10 md:h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center shadow-md z-20"
          disabled={isAnimating}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-500'}`}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Slide Counter */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 mt-8">
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
          
          /* Add smooth scrolling for iOS */
          html, body {
            -webkit-overflow-scrolling: touch;
          }
        `}</style>
      </div>
    </div>
  );
};

export default UserGuide;