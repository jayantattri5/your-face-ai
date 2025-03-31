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

const PolaroidPack = () => {
    const [activePromptId, setActivePromptId] = useState<number | null>(null);
  // Generate 24 sample images with varied grid positions
  const generateImages = (): ImageItem[] => {
    const images: ImageItem[] = [
        {
            id: 1,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185925-5501c01dc8ffe9c1050198023a143979-2.png",
            alt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
            prompt: "model in polaroid classic photograph posing for photo indoors",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 1 / 2 / 2"
          },
          {
            id: 2,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185967-9ef682efa1bf3856426d40b422b547f3-3.png",
            alt: "masculine model laughing and hanging out with friends",
            prompt: "model in polaroid classic photograph posing for photo indoors",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 2 / 2 / 3"
          },
          {
            id: 3,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185904-055e34d5cbb25d27dfcc0d6b115a8762-4.png",
            alt: "Fitness photo",
            prompt: "model in polaroid classic photograph posing for photo outside",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 3 / 2 / 4"
          },
          {
            id: 4,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185967-9ef682efa1bf3856426d40b422b547f3-2.png",
            alt: "Street fashion",
            prompt: "model in polaroid classic photograph posing for photo indoors",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 4 / 2 / 5"
          },
          {
            id: 5,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185989-378ccdb73ea780b1581e7285035c0fc4-1.png",
            alt: "Beach portrait",
            prompt: "lively masculine  model cheering on a sports game at a cozy bamodel in polaroid classic photograph posing for photo outside",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 5 / 2 / 6"
          },
          {
            id: 6,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725212337-4762235597ac2561ed9fcda3782d9e39-1.png",
            alt: "Business portrait",
            prompt: "model in polaroid classic photograph posing for photo outside",
            className: "col-span-1 row-span-2",
            gridArea: "2 / 1 / 3 / 2"
          },
          {
            id: 7,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185883-525b7b7a5a7ae3b299020f79c0002642-1.png",
            alt: "Indoor portrait",
            prompt: "model in polaroid classic photograph posing for photo indoors",
            className: "col-span-1 row-span-1",
            gridArea: "2 / 2 / 3 / 3"
          },
          {
              id: 8,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185799-adb37d5b931c18b98ade318b5ede29b7-1.png",
              alt: "a confident masculine model dressed in stylish attire",
              prompt: "",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 3 / 3 / 4"
          },
          {
              id: 9,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725075312-4217865c0a9f6f4a0b1ffb359ac136dd-1.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo outside",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 5 / 3 / 6"
          },
          {
              id: 10,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185799-adb37d5b931c18b98ade318b5ede29b7-1.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo indoors",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 1 / 4 / 2"
          },
          {
              id: 11,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726227100-c0d402f410955b0ded20406d2f9056b4-3.png",
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
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185883-525b7b7a5a7ae3b299020f79c0002642-4.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo indoors",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 5 / 4 / 6"
          },
          {
              id:14,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185946-6247b09a50cfd9f6b998a6512d6ddb02-1.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo outside",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 1 / 5 / 2"
          },
          {
              id:15,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725212316-4d80a6d4bc010941ac643191e38b07c1-1.png",
              alt: "Indoor portrait",
              prompt: "",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 2 / 5 / 3"
          },
          {
              id:16,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725212316-4d80a6d4bc010941ac643191e38b07c1-2.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo indoors",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 3 / 5 / 4"
          },
          {
              id:17,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185777-b6c5685384f349eef5b9bcac86391b9f-1.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo outside",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 4 / 5 / 5"
          },
          {
              id:18,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725075081-8970181c1ad4ba03a6eadae82fd2c6f9-1.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo indoors",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 5 / 5 / 6"
          },
          {
              id:19,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725075144-21889b4c9e13eaf05b3723a4d5688528-1.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo outside",
              className: "col-span-1 row-span-1",
              gridArea: "1 / 6 / 3 / 7"
          },
          {
              id:20,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725075123-9795a7f96cae1e3b7781b02112316005-1.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo indoors",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 2 / 5 / 3"
          },
          {
              id:21,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185841-43f810025b1de6871563a90c4c8c10ea-2.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo indoors",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 3 / 4 / 5"
          },
          {
              id:22,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725212358-5b8cdc425352a318765a4e468d5c8fc9-3.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo indoors",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 1 / 6 / 3"
          },
          {
              id:23,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185862-83f9c8d6731d496597f0a107dd545b2a-3.png",
              alt: "Indoor portrait",
              prompt: "model in polaroid classic photograph posing for photo outside",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 3 / 6 / 5"
          },
          {
            id:24,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185946-6247b09a50cfd9f6b998a6512d6ddb02-2.png",
            alt: "Indoor portrait",
            prompt: "model in polaroid classic photograph posing for photo outside",
            className: "col-span-1 row-span-1",
            gridArea: "5 / 5 / 6 / 7"
          }
    ];
    
    // Remove the placeholder image generation since we already have 24 images
    // and the error might be related to how those are being created
    
    return images;
  };
  
  const images = generateImages();

  return (
    <div className="bg-black min-h-screen p-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        Polaroid Pack
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

export default PolaroidPack;