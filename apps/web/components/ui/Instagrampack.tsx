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

const InstagramPack = () => {
  const [activePromptId, setActivePromptId] = useState<number | null>(null);
  // Generate 24 sample images with varied grid positions
  const generateImages = (): ImageItem[] => {
    const images: ImageItem[] = [
        {
            id: 1,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726224368-bc92699de1d7ff211e92327f977a8c72-3.png",
            alt: "Fashion portrait with colorful background",
            prompt: "model in a trendy café, holding a freshly brewed cup of coffee",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 1 / 2 / 2"
          },
          {
            id: 2,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222477-789f86623a063e40f2cf2c0ac92c8081-4.png",
            alt: "masculine model laughing and hanging out with friends",
            prompt: "a model wearing Instagram outfit in Canggu in Bali, instagram photo, instagram, hourglass figure",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 2 / 2 / 3"
          },
          {
            id: 3,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726223885-475771536c94a02a14e4b0fad7b26c1a-3.png",
            alt: "Fitness photo",
            prompt: "a model as artistic painter in art studio with wooden easel and paint",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 3 / 2 / 4"
          },
          {
            id: 4,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726210770-9abab996e598c4cdb6c331f8fe0958a1-2.png",
            alt: "Street fashion",
            prompt: "a model enjoying the live music on a sunny day, surrounded by colorful festival-goers and raising their hands in excitement",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 4 / 2 / 5"
          },
          {
            id: 5,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725055513-2447d1e63220f84fb3daa82f20b7d9b5-1.png",
            alt: "Beach portrait",
            prompt: "model in a trendy café, holding a freshly brewed cup of coffee",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 5 / 2 / 6"
          },
          {
            id: 6,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726223149-94aaee93793ac80127e664f4dd51e8cd-4.png",
            alt: "Business portrait",
            prompt: "a model wearing Instagram outfit in Canggu in Bali, instagram photo, instagram, hourglass figure",
            className: "col-span-1 row-span-2",
            gridArea: "2 / 1 / 3 / 2"
          },
          {
            id: 7,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222897-a7fba805e51f78edfd614f816dd7cb02-1.png",
            alt: "Indoor portrait",
            prompt: "a model wearing silk floral swim shorts in night club, instagram photo, instagram, fit body",
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
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222645-69ac0405b1d9af821687cd6f408f8fac-4.png",
              alt: "Indoor portrait",
              prompt: "model with hourglass figure, in floral silk bikini at pool party with neon lights",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 5 / 3 / 6"
          },
          {
              id: 10,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726224011-b42715021addbc0219793ca768cb6d0b-1.png",
              alt: "Indoor portrait",
              prompt: "model wearing black swim shorts in front of luxury villa",
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
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222540-9330806c580b40b1b917f75d193bb8e8-4.png",
              alt: "Indoor portrait",
              prompt: "a model as artistic painter in art studio with wooden easel and paint",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 5 / 4 / 6"
          },
          {
              id:14,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726224179-53720874f2ae46180b2e5e4614ad9762-3.png",
              alt: "Indoor portrait",
              prompt: "a model wearing luxurious suit in luxury restaurant, instagram photo, instagram, fit body",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 1 / 5 / 2"
          },
          {
              id:15,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222855-53ba09fdf354490f8835effc8404bc22-4.png",
              alt: "Indoor portrait",
              prompt: "",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 2 / 5 / 3"
          },
          {
              id:16,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725055366-a3169bb92af290c17213be9b216df0e4-1.png",
              alt: "Indoor portrait",
              prompt: "a model as artistic painter in art studio with wooden easel and paint",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 3 / 5 / 4"
          },
          {
              id:17,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222834-13df32fb20f9c3a65fb2d7a486c9bca5-4.png",
              alt: "Indoor portrait",
              prompt: "a model wearing luxurious suit in luxury restaurant, instagram photo, instagram, fit body",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 4 / 5 / 5"
          },
          {
              id:18,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726223191-6343545b8728fe24896ddf01fe582ccd-4.png",
              alt: "Indoor portrait",
              prompt: "a model wearing crop top and shorts) in luxury villa living room, instagram photo, instagram, hourglass figure",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 5 / 5 / 6"
          },
          {
              id:19,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726223381-23268c6ab82417d31f9a78b87e707199-4.png",
              alt: "Indoor portrait",
              prompt: "model with hourglass figure, in floral silk bikini at pool party with neon lights",
              className: "col-span-1 row-span-1",
              gridArea: "1 / 6 / 3 / 7"
          },
          {
              id:20,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222624-393ac58ca2d488db928e4c42746a6ba0-2.png",
              alt: "Indoor portrait",
              prompt: "model in skin tight bikini } in sea water on the beach, wet hair",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 2 / 5 / 3"
          },
          {
              id:21,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726223044-f3f0406ef6813f3e0144bd84aaa35f7e-3.png",
              alt: "Indoor portrait",
              prompt: "model , fit body in floral silk swim shorts and shirtless at pool party with neon lights",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 3 / 4 / 5"
          },
          {
              id:22,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222561-e3fcd737c19c89ace7051e29e1465b41-2.png",
              alt: "Indoor portrait",
              prompt: "a model wearing silk floral skin tight bikini in night club, instagram photo, instagram, hourglass figure",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 1 / 6 / 3"
          },
          {
              id:23,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222477-789f86623a063e40f2cf2c0ac92c8081-2.png",
              alt: "Indoor portrait",
              prompt: "a model wearing Instagram outfit in Canggu in Bali, instagram photo, instagram, hourglass figure",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 3 / 6 / 5"
          },
          {
            id:24,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725056606-3be4cad549e0273b3a317e2b27805cb7-1.png",
            alt: "Indoor portrait",
            prompt: "model 90s hairbun wearing skintight skin tight (black yoga shorts) wearing a cropped top, feminine slim figure, wearing a cropped top a t-shirt, masculine figure, wearing a t-shirt, hourglass figure, very model, in front of luxury villa, black yoga shorts , sexy, beautiful, model",
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
        Instagram Pack
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

export default InstagramPack;