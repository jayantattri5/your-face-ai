"use client";

import React, { useState } from 'react';

// Define an interface for the image items
interface ImageItem {
  id: number;
  url: string;
  alt: string;
  prompt: string;
  gridArea: string;
  className?: string;
}

const TinderPack = () => {
  // State to track which image's prompt is being viewed
  const [activePromptId, setActivePromptId] = useState<number | null>(null);

  // Generate 24 sample images with varied grid positions
  const generateImages = (): ImageItem[] => {
    const images: ImageItem[] = [
      {
        id: 1,
        url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726228277-04c4a1c2cd6be78aaec735a2e0823c5d-1.png",
        alt: "Fashion portrait with colorful background",
        prompt: "a captivating masculine model enjoying a peaceful moment by the waterfront",
        className: "col-span-1 row-span-1",
        gridArea: "1 / 1 / 2 / 2"
      },
      {
        id: 2,
        url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725078696-b7c4a6631daf2b510fb938da4ff3d0d8-1.png",
        alt: "masculine model laughing and hanging out with friends",
        prompt: "masculine model laughing and hanging out with friends",
        className: "col-span-1 row-span-2",
        gridArea: "1 / 2 / 2 / 3"
      },
      {
        id: 3,
        url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726228782-4f77a97d47272a2298bb5f5603f3cd06-3.png",
        alt: "Fitness photo",
        prompt: "masculine model as a Tinder photo",
        className: "col-span-1 row-span-1",
        gridArea: "1 / 3 / 2 / 4"
      },
      {
        id: 4,
        url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726228803-9bdbabdb2563ce90f6a5c008388ec00b-4.png",
        alt: "Street fashion",
        prompt: "headshot of smiling model wearing casual clothes posing for dating app headshot. outdoor blurry background. the lighting is warm, possibly from a setting sun, creating a soft glow around him, enhancing the casual and relaxed vibe of the image. the setting seems to be outdoors, likely in an urban environment, with the blurred background hinting at a street or park-like area. this image likely portrays a youthful, active, and approachable individual, possibly in a lifestyle or fashion-related context.",
        className: "col-span-1 row-span-2",
        gridArea: "1 / 4 / 2 / 5"
      },
      {
        id: 5,
        url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725077855-d32b26dead0130682fab6fe16030b6d6-1.png",
        alt: "Beach portrait",
        prompt: "a stylish feminine model exploring a street market",
        className: "col-span-1 row-span-2",
        gridArea: "1 / 5 / 2 / 6"
      },
      {
        id: 6,
        url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726228025-3e779f69413ce2a4913b3a1df617a366-2.png",
        alt: "Business portrait",
        prompt: "feminine model posing with a cute pet",
        className: "col-span-1 row-span-2",
        gridArea: "2 / 1 / 3 / 2"
      },
      {
        id: 7,
        url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726228698-ec19bbe77fe0d3a5bdd02cde86590c9e-1.png",
        alt: "Indoor portrait",
        prompt: "masculine model enjoying a concert or music festival",
        className: "col-span-1 row-span-1",
        gridArea: "2 / 2 / 3 / 3"
      },
      {
          id: 8,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726227332-ad05ad1f84ae06539fd98d41209a3573-1.png",
          alt: "a confident masculine model dressed in stylish attire",
          prompt: "",
          className: "col-span-1 row-span-1",
          gridArea: "2 / 3 / 3 / 4"
      },
      {
          id: 9,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726230358-5a132f28ec971a11a03d0894ad7ef689-2.png",
          alt: "Indoor portrait",
          prompt: "feminine model taking a casual stroll through a cityscape",
          className: "col-span-1 row-span-1",
          gridArea: "2 / 5 / 3 / 6"
      },
      {
          id: 10,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726230337-f93808c1c88ceee66de29c32b6751c75-1.png",
          alt: "Indoor portrait",
          prompt: "feminine model engaging in a hobby or craft",
          className: "col-span-1 row-span-1",
          gridArea: "3 / 1 / 4 / 2"
      },
      {
          id: 11,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726229013-f198fa4e26d6405f34a775650cd68cb9-2.png",
          alt: "Indoor portrait",
          prompt: "",
          className: "col-span-1 row-span-1",
          gridArea: "3 / 3 / 4 / 4"
      },
      {
          id: 12,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726230106-b2f7e23cb22ad031806f41dc00576702-4.png",
          alt: "Indoor portrait",
          prompt: "",
          className: "col-span-1 row-span-1",
          gridArea: "3 / 4 / 4 / 5"
      },
      {
          id:13,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726229370-e1cafc0bb44bf1f733d82a2352b53ad4-4.png",
          alt: "Indoor portrait",
          prompt: "headshot of smiling model wearing casual clothes posing for dating app headshot. outdoor blurry background. the lighting is warm, possibly from a setting sun, creating a soft glow around him, enhancing the casual and relaxed vibe of the image. the setting seems to be outdoors, likely in an urban environment, with the blurred background hinting at a street or park-like area. this image likely portrays a youthful, active, and approachable individual, possibly in a lifestyle or fashion-related context.",
          className: "col-span-1 row-span-1",
          gridArea: "3 / 5 / 4 / 6"
      },
      {
          id:14,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726227584-bb55003e6ecf8efee7611daca526b000-3.png",
          alt: "Indoor portrait",
          prompt: "masculine model in going hiking outdoors in mountains",
          className: "col-span-1 row-span-1",
          gridArea: "4 / 1 / 5 / 2"
      },
      {
          id:15,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726229644-585435a8c8bb4a5d142a1c3eb2b8d2b5-3.png",
          alt: "Indoor portrait",
          prompt: "",
          className: "col-span-1 row-span-1",
          gridArea: "4 / 2 / 5 / 3"
      },
      {
          id:16,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726227206-57f2e87d2c3c775f8d8f3b2113e279b9-1.png",
          alt: "Indoor portrait",
          prompt: "a fashionable masculine model posing in front of street art",
          className: "col-span-1 row-span-1",
          gridArea: "4 / 3 / 5 / 4"
      },
      {
          id:17,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726230127-4928b0ad0d4b6d5f20e66ede658bc596-1.png",
          alt: "Indoor portrait",
          prompt: "a captivating feminine model embracing nature",
          className: "col-span-1 row-span-1",
          gridArea: "4 / 4 / 5 / 5"
      },
      {
          id:18,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726230232-3d9d2566f04cfbdfc302c9284a149dfd-1.png",
          alt: "Indoor portrait",
          prompt: "feminine model laughing and hanging out with friends",
          className: "col-span-1 row-span-1",
          gridArea: "4 / 5 / 5 / 6"
      },
      {
          id:19,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726230022-d58fc10799d1c88eede85b69f88bddfe-1.png",
          alt: "Indoor portrait",
          prompt: "a confident feminine model engaging in a fitness routine",
          className: "col-span-1 row-span-1",
          gridArea: "1 / 6 / 3 / 7"
      },
      {
          id:20,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726229181-7224e11074ef639f2a0c099faf01804a-3.png",
          alt: "Indoor portrait",
          prompt: "feminine model reading a book in a cozy home environment",
          className: "col-span-1 row-span-1",
          gridArea: "3 / 2 / 5 / 3"
      },
      {
          id:21,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726228908-9573fd32157b071e21b5997057ce7354-1.png",
          alt: "Indoor portrait",
          prompt: "a fashionable feminine model posing in front of street art",
          className: "col-span-1 row-span-1",
          gridArea: "2 / 3 / 4 / 5"
      },
      {
          id:22,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726230085-f11d577a9d0ae8345a7df39255d734ef-2.png",
          alt: "Indoor portrait",
          prompt: "a confident feminine model exploring a bustling city street",
          className: "col-span-1 row-span-1",
          gridArea: "5 / 1 / 6 / 3"
      },
      {
          id:23,
          url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726229749-33d7a0159a787c9853ba0424bd7104d6-4.png",
          alt: "Indoor portrait",
          prompt: "masculine model reading a book in a cozy home environment",
          className: "col-span-1 row-span-1",
          gridArea: "5 / 3 / 6 / 5"
      },
      {
        id:24,
        url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726228509-b492417e2525decd4727f9fc7b0d0aec-4.png",
        alt: "Indoor portrait",
        prompt: "a confident masculine model dressed in stylish attire",
        className: "col-span-1 row-span-1",
        gridArea: "5 / 5 / 6 / 7"
      }
    ];
    // ... (keep the existing images array unchanged)
    // The images array remains the same as in the original code
    return images;
  };
  
  const images = generateImages();

  return (
    <div className="bg-black min-h-screen p-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Tinder Pack
        </span>{" "}
        Photos
      </h1>
      <div className="container mx-auto">
        {/* Image Gallery with Grid Areas for precise positioning */}
        <div className="grid grid-cols-6 gap-4 h-full" style={{ 
          gridTemplateRows: "repeat(5, minmax(200px, auto))"
        }}>
          {images.map((image) => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg relative group"
              style={{ gridArea: image.gridArea }}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Bottom shadow overlay for prompt */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Prompt text with scrollable container */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div 
                  className="max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                  onMouseEnter={() => setActivePromptId(image.id)}
                  onMouseLeave={() => setActivePromptId(null)}
                >
                  <p className="text-sm font-light">
                    {image.prompt}
                  </p>
                </div>
              </div>

              {/* Optional: Scroll indicator if content overflows */}
              {image.prompt.length > 200 && (
                <div className="absolute bottom-1 right-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TinderPack;