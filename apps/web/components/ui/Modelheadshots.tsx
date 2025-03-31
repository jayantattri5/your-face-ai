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

const ModelHeadshotsPack = () => {
  const [activePromptId, setActivePromptId] = useState<number | null>(null);
  // Generate 24 sample images with varied grid positions
  const generateImages = (): ImageItem[] => {
    const images: ImageItem[] = [
        {
            id: 1,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431236-d2c359abea3159c7c8069c6c8370b8dd-3.png",
            alt: "Fashion portrait with colorful background",
            prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model\'s eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial maning.",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 1 / 2 / 2"
          },
          {
            id: 2,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431404-ce72cb02c393faa7ef16a162f98e14bb-1.png",
            alt: "masculine model laughing and hanging out with friends",
            prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model\'s eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial maning.",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 2 / 2 / 3"
          },
          {
            id: 3,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431299-1319e0e137279bd48ca564fbc50cb5d3-1.png",
            alt: "Fitness photo",
            prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model\'s eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial maning.",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 3 / 2 / 4"
          },
          {
            id: 4,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431236-d2c359abea3159c7c8069c6c8370b8dd-4.png",
            alt: "Street fashion",
            prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model\'s eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial maning.",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 4 / 2 / 5"
          },
          {
            id: 5,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431404-ce72cb02c393faa7ef16a162f98e14bb-2.png",
            alt: "Beach portrait",
            prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model\'s eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial maning.",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 5 / 2 / 6"
          },
          {
            id: 6,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431425-6ff87df4e5a537e534f1a54d9b2f8531-1.png",
            alt: "Business portrait",
            prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model\'s eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial maning.",
            className: "col-span-1 row-span-2",
            gridArea: "2 / 1 / 3 / 2"
          },
          {
            id: 7,
            url: "https://cdn.leonardo.ai/users/fc0c247f-e14d-4346-8586-40797dbd723d/generations/7c9c05aa-64a9-441a-9e77-a0023773642c/segments/4:4:1/Flux_Dev_A_professional_actor_headshot_of_a_confident_model_ta_3.jpeg",
            alt: "Indoor portrait",
            prompt: "A professional actor headshot of a confident model, taken in a well-lit studio with a plain backdrop. The model is dressed in if(gender=f){a simple, elegant black top with natural makeup and soft curls} if(gender=m){a fitted dark-colored shirt with neatly styled hair}. The lighting is soft and even, highlighting their facial features with a natural and approachable expression. The focus is sharp, capturing the model's eyes and subtle smile, creating a perfect headshot for auditions and casting calls.",
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
              url: "https://cdn.leonardo.ai/users/fc0c247f-e14d-4346-8586-40797dbd723d/generations/7c9c05aa-64a9-441a-9e77-a0023773642c/segments/1:4:1/Flux_Dev_A_professional_actor_headshot_of_a_confident_model_ta_0.jpeg",
              alt: "Indoor portrait",
              prompt: "A professional actor headshot of a confident model, taken in a well-lit studio with a plain backdrop. The model is dressed in if(gender=f){a simple, elegant black top with natural makeup and soft curls} if(gender=m){a fitted dark-colored shirt with neatly styled hair}. The lighting is soft and even, highlighting their facial features with a natural and approachable expression. The focus is sharp, capturing the model's eyes and subtle smile, creating a perfect headshot for auditions and casting calls.",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 5 / 3 / 6"
          },
          {
              id: 10,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431320-fe75b02c5af765b2f1ee15bef1b15910-2.png",
              alt: "Indoor portrait",
              prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model's eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial womaning.",
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
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431362-b3842875368a53d8ad547b8158cb43c4-3.png",
              alt: "Indoor portrait",
              prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model's eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial womaning.",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 5 / 4 / 6"
          },
          {
              id:14,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431362-b3842875368a53d8ad547b8158cb43c4-2.png",
              alt: "Indoor portrait",
              prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model's eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial womaning.",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 1 / 5 / 2"
          },
          {
              id:15,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431341-b6479f126391888561a0d73ef8b2eecc-3.png",
              alt: "Indoor portrait",
              prompt: "",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 2 / 5 / 3"
          },
          {
              id:16,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431341-b6479f126391888561a0d73ef8b2eecc-3.png",
              alt: "Indoor portrait",
              prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model's eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial womaning.",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 3 / 5 / 4"
          },
          {
              id:17,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431278-28262d76fafea98937e1e08203c4da6e-2.png",
              alt: "Indoor portrait",
              prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model's eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial maning.",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 4 / 5 / 5"
          },
          {
              id:18,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431299-1319e0e137279bd48ca564fbc50cb5d3-4.png",
              alt: "Indoor portrait",
              prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model's eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial maning.",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 5 / 5 / 6"
          },
          {
              id:19,
              url: "https://cdn.leonardo.ai/users/fc0c247f-e14d-4346-8586-40797dbd723d/generations/7c9c05aa-64a9-441a-9e77-a0023773642c/segments/2:4:1/Flux_Dev_A_professional_actor_headshot_of_a_confident_model_ta_1.jpeg",
              alt: "Indoor portrait",
              prompt: "A professional actor headshot of a confident model, taken in a well-lit studio with a plain backdrop. The model is dressed in if(gender=f){a simple, elegant black top with natural makeup and soft curls} if(gender=m){a fitted dark-colored shirt with neatly styled hair}. The lighting is soft and even, highlighting their facial features with a natural and approachable expression. The focus is sharp, capturing the model's eyes and subtle smile, creating a perfect headshot for auditions and casting calls.",
              className: "col-span-1 row-span-1",
              gridArea: "1 / 6 / 3 / 7"
          },
          {
              id:20,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431446-5a6fc1008463563a9841a3aafe49b43f-2.png",
              alt: "Indoor portrait",
              prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model's eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial womaning.",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 2 / 5 / 3"
          },
          {
              id:21,
              url: "https://cdn.leonardo.ai/users/fc0c247f-e14d-4346-8586-40797dbd723d/generations/7c9c05aa-64a9-441a-9e77-a0023773642c/segments/3:4:1/Flux_Dev_A_professional_actor_headshot_of_a_confident_model_ta_2.jpeg",
              alt: "Indoor portrait",
              prompt: "A professional actor headshot of a confident model, taken in a well-lit studio with a plain backdrop. The model is dressed in if(gender=f){a simple, elegant black top with natural makeup and soft curls} if(gender=m){a fitted dark-colored shirt with neatly styled hair}. The lighting is soft and even, highlighting their facial features with a natural and approachable expression. The focus is sharp, capturing the model's eyes and subtle smile, creating a perfect headshot for auditions and casting calls.",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 3 / 4 / 5"
          },
          {
              id:22,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431446-5a6fc1008463563a9841a3aafe49b43f-3.png",
              alt: "Indoor portrait",
              prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model\'s eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial womaning.",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 1 / 6 / 3"
          },
          {
              id:23,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431467-582468ef2cf9a5c8b9bafe53973a3e3f-2.png",
              alt: "Indoor portrait",
              prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model\'s eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial womaning.",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 3 / 6 / 5"
          },
          {
            id:24,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431467-582468ef2cf9a5c8b9bafe53973a3e3f-4.png",
            alt: "Indoor portrait",
            prompt: "A professional photography model headshot of a confident model, taken in a well-lit studio with a clean, neutral backdrop. The model is dressed in a sleek, minimal black tank top with natural makeup and loose, effortless waves , ensuring a polished yet natural look. The lighting is soft and even, accentuating the model’s bone structure, skin texture, and striking features. The focus is sharp, with a clear emphasis on the model\'s eyes and subtle expression, creating the perfect headshot for agency submissions, portfolio updates, and professional branding in fashion and commercial womaning.",
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
        Model-Headshots Pack
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

export default ModelHeadshotsPack;