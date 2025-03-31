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

const LuxuryLifestylePack = () => {
  const [activePromptId, setActivePromptId] = useState<number | null>(null);
  // Generate 24 sample images with varied grid positions
  const generateImages = (): ImageItem[] => {
    const images: ImageItem[] = [
        {
            id: 1,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735427869-57e9811bd104a1a7598e4bdfbec19074-1.png",
            alt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
            prompt: "beautiful influencer instagram model wearing elegant clothes sitting in private jet cabin, with leather interior, luxurious. champagne is on the table. outside is clouds because we are flying.",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 1 / 2 / 2"
          },
          {
            id: 2,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735427658-177247b480040c4c4e92c9293d3f4fb5-4.png",
            alt: "masculine model laughing and hanging out with friends",
            prompt: "model wearing bikini  sitting in a luxurious bathtub filled with bubbles, overlooking a modern city skyline through a large glass window. The model has their hair styled neatly in a bun , with the urban skyscrapers creating a striking backdrop. The atmosphere is serene, featuring soft daylight filtering through the window, emphasizing a sense of calm and exclusivity.",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 2 / 2 / 3"
          },
          {
            id: 3,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735428457-396a2d33b89e395e5f5c2631546d9c24-1.png",
            alt: "Fitness photo",
            prompt: "full-body shot of a confident model standing next to a red luxury ferrari sports car in a desert setting.",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 3 / 2 / 4"
          },
          {
            id: 4,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735427806-a7282fc1ad007170ad100f366a60e813-4.png",
            alt: "Street fashion",
            prompt: "Full-body shot of model posing confidently, on a private yacht with the sunset in the background. Golden hour lighting.",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 4 / 2 / 5"
          },
          {
            id: 5,
            url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8d777a23-cccf-4f95-aff4-7e6be428b837/original=true,quality=90/62069176.jpeg",
            alt: "Beach portrait",
            prompt: "beautiful blonde woman, supermodel, cinematic photo, (content, resting head on hand, small smile), 1girl, profile pose, perfect shag hair, frenum piercing, chandelier earrings, (sparkly rhinestone heeled sandals for that grown-up look), portrait, 35mm photograph, film, professional, 4k, highly detailed, 8K, UHD, raw photo",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 5 / 2 / 6"
          },
          {
            id: 6,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735428121-d3f285a55df0bd38e08eb5f0a5ed5fe6-1.png",
            alt: "Business portrait",
            prompt: "Full-body shot of model posing confidently, on a private yacht with the sunset in the background. Golden hour lighting.",
            className: "col-span-1 row-span-2",
            gridArea: "2 / 1 / 3 / 2"
          },
          {
            id: 7,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735427553-e7213e43c4359c06ad4ef4fd517b1ed2-2.png",
            alt: "Indoor portrait",
            prompt: "beautiful influencer instagram model wearing elegant clothes sitting in private jet cabin, with leather interior, luxurious. champagne is on the table. outside is clouds because we are flying.",
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
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735427679-edb741aa2fdb8906b6daeb4c3da0b9db-2.png",
              alt: "Indoor portrait",
              prompt: "model lounging on a luxurious rooftop terrace overlooking a marina and a modern city skyline. The model is wearing a white bikinig , casually holding a tropical drink in one hand. The setting includes yachts in the marina below, tall skyscrapers in the distance, and soft daylight creating a serene and elegant atmosphere. Cinematic framing focuses on the relaxed pose and stunning urban backdrop of Dubai.",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 5 / 3 / 6"
          },
          {
              id: 10,
              url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b3837543-3915-46f5-92fc-b7d6723ec84e/original=true,quality=90/62069174.jpeg",
              alt: "Indoor portrait",
              prompt: "full-body shot of a confident model standing next to a red luxury ferrari sports car in a desert setting.",
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
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735427911-3f8f08144967c076f01e6a2914f5e111-4.png",
              alt: "Indoor portrait",
              prompt: "model standing on a luxurious balcony, overlooking a vibrant marina and modern skyscrapers. The model is wearing a white robe with their hair styled in a ponytail , holding a coffee cup in one hand. A lavish breakfast tray with fresh pastries, colorful fruits, macarons, and beverages is elegantly set on a table in the foreground. The atmosphere is serene, with soft daylight enhancing the opulent cityscape and indulgent setting",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 5 / 4 / 6"
          },
          {
              id:14,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735428079-effbd9c13a8ffd81c9a8f50df9f6993c-3.png",
              alt: "Indoor portrait",
              prompt: "Full-body front view shot of model enjoying a luxury gala dinner, dressed as a chic red fitted evening dress with pearl earrings . High end luxury restaurant.",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 1 / 5 / 2"
          },
          {
              id:15,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735427301-7c68ee142d50afbf91fa2848c3cd9425-3.png",
              alt: "Indoor portrait",
              prompt: "",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 2 / 5 / 3"
          },
          {
              id:16,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735428163-45fd56c5e9b6fc7a252ed6bcef0639b0-3.png",
              alt: "Indoor portrait",
              prompt: "Full-body shot of a confident model standing next to a bugatti sports car. womans wears luxurious clothes",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 3 / 5 / 4"
          },
          {
              id:17,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735429025-4758573c81b7518ba08b307d6ad98829-1.png",
              alt: "Indoor portrait",
              prompt: "Full-body front view shot of model enjoying a luxury gala dinner, dressed as  a formal dinner jacket with a crisp white shirt. High end luxury restaurant.",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 4 / 5 / 5"
          },
          {
              id:18,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735429109-9474459059f7cd379ceed0ad7bc6f099-3.png",
              alt: "Indoor portrait",
              prompt: "Full-body shot of a confident model standing next to a bugatti sports car. mans wears luxurious clothes",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 5 / 5 / 6"
          },
          {
              id:19,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735428037-edf95050e9a99dcba813fac0c4bf44fb-3.png",
              alt: "Indoor portrait",
              prompt: "model relaxing in a rooftop jacuzzi with a modern city skyline in the background. womans leans casually on the edge of the jacuzzi, with water bubbling around them. The backdrop showcases tall skyscrapers and an urban environment under bright daylight, creating a luxurious, high-end vibe.",
              className: "col-span-1 row-span-1",
              gridArea: "1 / 6 / 3 / 7"
          },
          {
              id:20,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735428142-4294600c302b9836b7da543f58071462-1.png",
              alt: "Indoor portrait",
              prompt: "full-body shot of a confident model standing next to a red luxury ferrari sports car in a desert setting.",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 2 / 5 / 3"
          },
          {
              id:21,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735427700-ad8881fe79cf3cbac580bd486b50aaaf-1.png",
              alt: "Indoor portrait",
              prompt: "model sitting on an elegant outdoor couch in a luxurious setting. model is wearing a stylish black outfit. The backdrop features a stunning city skyline at night, with brightly lit skyscrapers creating a sophisticated ambiance. The scene suggests an upscale lounge or rooftop setting, with ambient lighting and other patrons visible in the background. The overall vibe is relaxed yet classy, emphasizing luxury and exclusivity.",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 3 / 4 / 5"
          },
          {
              id:22,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735427258-4a855162b09bce4ca966fdaa4c541467-2.png",
              alt: "Indoor portrait",
              prompt: "Full-body shot of a model stepping confidently away from a sleek, black helicopter on a luxurious helipad. The model is wearing  a tailored white suit with sunglasses, polished dress shoes and a stylish suitcase. The backdrop features a clear sky, palm trees, and a luxurious architectural setting, emphasizing a high-end, elite lifestyle. Dramatic sunlight enhances the glamorous scene",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 1 / 6 / 3"
          },
          {
              id:23,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735427301-7c68ee142d50afbf91fa2848c3cd9425-3.png",
              alt: "Indoor portrait",
              prompt: "Full-body shot of a model in  blue swim shorts posing confidently on a luxury yacht, set against a stunning modern city skyline with tall skyscrapers. The model is surrounded by beautiful blonde women in bikini.",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 3 / 6 / 5"
          },
          {
            id:24,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735427343-bc41881b7fa9f864b9fa033dea6e779a-1.png",
            alt: "Indoor portrait",
            prompt: "model wearing  swim shorts sitting in a luxurious bathtub filled with bubbles, overlooking a modern city skyline through a large glass window. The model has their hair styled neatly  short and neatly groomed, with the urban skyscrapers creating a striking backdrop. The atmosphere is serene, featuring soft daylight filtering through the window, emphasizing a sense of calm and exclusivity.",
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
        Luxury-Lifestyle Pack
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

export default LuxuryLifestylePack;