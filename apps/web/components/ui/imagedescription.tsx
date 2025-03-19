"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageDescription() {
  // Sample data with images and descriptions
  const slides = [
    {
      images: [
        "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a99dc282-d800-43d9-9587-e022dc06ead6/original=true,quality=90/63868432.jpeg",
        "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/a99dc282-d800-43d9-9587-e022dc06ead6/original=true,quality=90/63868432.jpeg"
      ],
      title: "LIFESTYLE COLLECTION",
      description: "Versatile and stylish pieces designed for everyday wear with modern aesthetics"
    },
    {
      images: [
        "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/28bae80b-738d-4856-a125-4d48b5a5b3c9/original=true,quality=90/63140336.jpeg",
        "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/28bae80b-738d-4856-a125-4d48b5a5b3c9/original=true,quality=90/63140336.jpeg"
      ],
      title: "PERFORMANCE SERIES",
      description: "Engineered for maximum comfort and performance with cutting-edge materials"
    },
    {
      images: [
        "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4386af38-3ffd-44dc-99a8-b2c9b07eecba/original=true,quality=90/63425858.jpeg",
        "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ea8df194-acba-41ab-8f55-574da1f5fbf6/original=true,quality=90/63237832.jpeg"
      ],
      title: "HERITAGE EDITION",
      description: "Classic designs reimagined with contemporary techniques and modern sensibilities"
    },
    {
      images: [
        "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/084ac9a5-1bbc-41f8-b09a-da88feee4d61/original=true,quality=90/63237844.jpeg",
        "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6efb710c-afb5-4baa-aadd-465c6eed0845/original=true,quality=90/62874549.jpeg"
      ],
      title: "URBAN COLLECTION",
      description: "Bold streetwear inspired by urban culture with distinctive visual elements"
    }
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Alternate sides for each slide
  const isTextOnLeft = index % 2 === 0;

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-black text-white">
      {/* Top navigation bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-6">
        <div className="flex items-center space-x-6">
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.7 5H19.3L5 45H16.4L30.7 5Z" fill="white"/>
            <path d="M33.6 5L26.4 24.2H37.8L45 5H33.6Z" fill="white"/>
            <path d="M25 28.5L21.1 38.3H43.9L47.8 28.5H25Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative h-full flex">
        <AnimatePresence initial={false} custom={direction}>
          {/* Left panel (with text or image based on slide) */}
          <motion.div
            key={`left-${index}`}
            className="w-1/2 h-full relative"
            custom={direction}
            initial={direction >= 0 ? { y: "100%" } : { y: 0 }}
            animate={{ y: 0 }}
            exit={direction >= 0 ? { y: "-100%" } : { y: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {isTextOnLeft ? (
              // Text content
              <div className="h-full flex flex-col justify-center px-16 bg-black">
                <h2 className="text-3xl font-bold mb-4">{slides[index]?.title}</h2>
                <p className="text-lg text-gray-300">{slides[index]?.description}</p>
                <button className="mt-8 border border-white py-2 px-6 w-max hover:bg-white hover:text-black transition-colors">
                  EXPLORE NOW
                </button>
              </div>
            ) : (
              // Image
              <img 
                src={slides[index]?.images[0]} 
                alt="Product"
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>

          {/* Right panel (with image or text based on slide) */}
          <motion.div
            key={`right-${index}`}
            className="w-1/2 h-full relative"
            custom={direction}
            initial={direction >= 0 ? { y: "-100%" } : { y: 0 }}
            animate={{ y: 0 }}
            exit={direction >= 0 ? { y: "100%" } : { y: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {!isTextOnLeft ? (
              // Text content
              <div className="h-full flex flex-col justify-center px-16 bg-black">
                <h2 className="text-3xl font-bold mb-4">{slides[index]?.title}</h2>
                <p className="text-lg text-gray-300">{slides[index]?.description}</p>
                <button className="mt-8 border border-white py-2 px-6 w-max hover:bg-white hover:text-black transition-colors">
                  EXPLORE NOW
                </button>
              </div>
            ) : (
              // Image
              <img 
                src={slides[index]?.images[1]} 
                alt="Product"
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <div 
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
}