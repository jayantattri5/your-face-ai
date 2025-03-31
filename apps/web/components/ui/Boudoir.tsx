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

const BoudoirPack = () => {
    const [activePromptId, setActivePromptId] = useState<number | null>(null);
  // Generate 24 sample images with varied grid positions
  const generateImages = (): ImageItem[] => {
    const images: ImageItem[] = [
        {
            id: 1,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174361-e481c64cd95689639d9e821036e51695-1.png",
            alt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
            prompt: "model with hourglass figure,  in floral silk lingerie  at pool party with neon lights",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 1 / 2 / 2"
          },
          {
            id: 2,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174214-102a4069e8f186ea57bdae765eb2ffdc-3.png",
            alt: "masculine model laughing and hanging out with friends",
            prompt: "model wearing (sexy nightlife lingerie club outfit mad max suspenders) with (black suspenders garter straps) in night club neon lights",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 2 / 2 / 3"
          },
          {
            id: 3,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174781-896b10304b275de1590785a6abccc561-4.png",
            alt: "Fitness photo",
            prompt: "model with hourglass figure,  in floral silk lingerie  at cocktail bar with neon lights",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 3 / 2 / 4"
          },
          {
            id: 4,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174845-7ab467a759b539a2876cbfae54434b3b-1.png",
            alt: "Street fashion",
            prompt: "kneeling model as model, pink latex, thigh high boots night club, neon lights, platinum blonde",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 4 / 2 / 5"
          },
          {
            id: 5,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174550-653818a6f6b70c577a678682ae8cc05b-2.png",
            alt: "Beach portrait",
            prompt: "model wearing (red bodycon dress) with (black suspenders garter straps)  in night club neon lights",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 5 / 2 / 6"
          },
          {
            id: 6,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174025-ed4a567e819ed1d0eac34b56434417c0-1.png",
            alt: "Business portrait",
            prompt: "model wearing skimpy lingerie at villa",
            className: "col-span-1 row-span-2",
            gridArea: "2 / 1 / 3 / 2"
          },
          {
            id: 7,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174172-f4b7a91c75aa7bd1bc440438d39628b2-1.png",
            alt: "Indoor portrait",
            prompt: "model wearing (black lingerie garterbelts black lingerie garterbelts black stockings stockings) , feminine hourglass in front of luxury villa, suit, model, classy, intelligent",
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
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174571-216b00831790177c0c2ede3963672f16-4.png",
              alt: "Indoor portrait",
              prompt: "model wearing (sexy nightlife lingerie club outfit mad max suspenders) with (black suspenders garter straps) in night club neon lights",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 5 / 3 / 6"
          },
          {
              id: 10,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174403-19a535f49740bde3e6acd1a4634d538f-1.png",
              alt: "Indoor portrait",
              prompt: "model wearing skimpy cut out dress at villa",
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
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725066843-f5e54233a068017f89d3cb80c6ef84e5-1.png",
              alt: "Indoor portrait",
              prompt: "insanely beautiful  sexy model wearing a silk robe and matching lingerie set, posing elegantly on a chaise lounge",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 5 / 4 / 6"
          },
          {
              id:14,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174109-715996b8a24d7a389b751521f7e5d886-2.png",
              alt: "Indoor portrait",
              prompt: "insanely beautiful  sexy model in a captivating bra and panty set with a garter, posed in front of a fireplace",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 1 / 5 / 2"
          },
          {
              id:15,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174950-fd946be81f8a6e740464de15e4d6ffa4-3.png",
              alt: "Indoor portrait",
              prompt: "",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 2 / 5 / 3"
          },
          {
              id:16,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174950-fd946be81f8a6e740464de15e4d6ffa4-3.png",
              alt: "Indoor portrait",
              prompt: "model leaning against a reflective surface, wearing a glossy, skin-tight bodysuit that mirrors the surroundings",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 3 / 5 / 4"
          },
          {
              id:17,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174340-3d0802c5327e197e15a678e3103cf89c-4.png",
              alt: "Indoor portrait",
              prompt: "model in a pink pvc latex lingerie sitting on a bed, heaven pink, pink body harness, pink background, skye meaker, posing in a bedroom.",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 4 / 5 / 5"
          },
          {
              id:18,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174340-3d0802c5327e197e15a678e3103cf89c-2.png",
              alt: "Indoor portrait",
              prompt: "model in a pink pvc latex lingerie sitting on a bed, heaven pink, pink body harness, pink body, posing in a bedroom, wearing a pink head band",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 5 / 5 / 6"
          },
          {
              id:19,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174319-4ce63d22498dfd2e28d341f639fdc1b0-3.png",
              alt: "Indoor portrait",
              prompt: "model in a white pvc latex lingerie posing for a picture, bella thorne, wearing a white lingerie, white lingerie, bulgari, suki, bvlgari jewelry, metal lingerie, model body, bella, white silver lingerie, bella ragazza, gq magazine, beautiful fashion model body, pvc latex lingerie model, in lingerie, by Jerry Weiss, shiny plastic lingerie",
              className: "col-span-1 row-span-1",
              gridArea: "1 / 6 / 3 / 7"
          },
          {
              id:20,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174529-8b489b13861c3bf592a3a93b6c76b245-2.png",
              alt: "Indoor portrait",
              prompt: "model wearing (black lingerie garterbelts black lingerie garterbelts black stockings stockings) , feminine hourglass in front of luxury villa, suit, model, classy, intelligent",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 2 / 5 / 3"
          },
          {
              id:21,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174466-5cb9875c1613d9f0b25865923f1227a4-1.png",
              alt: "Indoor portrait",
              prompt: "insanely beautiful  sexy model in a captivating bra and panty set with a garter, posed in front of a fireplace",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 3 / 4 / 5"
          },
          {
              id:22,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174697-dc925ce3fef4ae4b9eb43a7f77e06f03-4.png",
              alt: "Indoor portrait",
              prompt: "model in a pink pvc latex lingerie sitting on a bed, heaven pink, hot pink, pink body harness, pink body, pink and black, hot pink and black, olivia kemp, pink background, pink, skye meaker, ellie victoria gale, 🤬 🤮 💕 🎀, casey cooke, posing in a bedroom, laica chrose, wearing a pink head bandmodel in a pink pvc latex lingerie sitting on a bed, heaven pink, hot pink, pink body harness, pink body, pink and black, hot pink and black, olivia kemp, pink background, pink, skye meaker, ellie victoria gale, 🤬 🤮 💕 🎀, casey cooke, posing in a bedroom, laica chrose, wearing a pink head band",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 1 / 6 / 3"
          },
          {
              id:23,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174277-b7a864b91d7908ae86b3114ac929c544-2.png",
              alt: "Indoor portrait",
              prompt: "lingerie model pvc latex reflections, lingerie, extremely detailed, lingerie, 1girl, solo, medium hair, (pink hair), shirt, skirt, detailed clothes, blue skirt, blue shirt, detached sleeves, white shirt, bangs, (blue eyes, detailed eyes), choker, ribbon earrings, detached sleeves, lookng at the viewer, from below, wait, bedroom",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 3 / 6 / 5"
          },
          {
            id:24,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725066255-88f51ce65b95d10b9675d942ba71035b-1.png",
            alt: "Indoor portrait",
            prompt: "model wearing high heels in a black sexy black pvc latex and lingerie bra  posing in bed room with neon sign, casey cooke, photo for a store, maxim magazine, beautiful sexy model photo, model body, maxim magazine cover, full body maxim set, sfw, laica chrose, one blonde, attractive feminine curves, female beauty, lingerie shoot",
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
        Boudoir Pack
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

export default BoudoirPack;