import React from 'react';

// Define an interface for the image items
interface ImageItem {
  id: number;
  url: string;
  alt: string;
  prompt: string;
  gridArea: string;
  className?: string;
}

const LinkedInHeadshotsPack = () => {
  // Generate 24 sample images with varied grid positions
  const generateImages = (): ImageItem[] => {
    const images: ImageItem[] = [
        {
            id: 1,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431363-f64fb035fe62998276fd8fae8945b8ec-1.png",
            alt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
            prompt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 1 / 2 / 2"
          },
          {
            id: 2,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,quality=85/https://r2-us-west.photoai.com/1738431216-e52b1f41399e93872c821558f5281944-3.png",
            alt: "masculine model laughing and hanging out with friends",
            prompt: "headshot of model, sitting at a desk, at a (office),  shirt and tie and suit pants",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 2 / 2 / 3"
          },
          {
            id: 3,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431384-c4390b29c27f9361d5782ee0bc8dae70-4.png",
            alt: "Fitness photo",
            prompt: "headshot of model, sitting at a desk, at a (office),  shirt and tie and suit pants",
            className: "col-span-1 row-span-1",
            gridArea: "1 / 3 / 2 / 4"
          },
          {
            id: 4,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431426-d75655098f06427f1ed2f349f404bc64-2.png",
            alt: "Street fashion",
            prompt: "headshot of model, sitting at a desk, at a (office),  shirt and tie and suit pants",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 4 / 2 / 5"
          },
          {
            id: 5,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431258-cf1bba809a08272b58d3e1e158c140d9-4.png",
            alt: "Beach portrait",
            prompt: "headshot of model, sitting at a desk, at a (office), BREAK elegant blouse, pencil skirt, makeup",
            className: "col-span-1 row-span-2",
            gridArea: "1 / 5 / 2 / 6"
          },
          {
            id: 6,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431342-6585ee043c02e54878b681fff35cf004-3.png",
            alt: "Business portrait",
            prompt: "headshot of model, sitting at a desk, at a (office), BREAK elegant blouse, pencil skirt, makeup",
            className: "col-span-1 row-span-2",
            gridArea: "2 / 1 / 3 / 2"
          },
          {
            id: 7,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431405-737c9042e8f94bcaa9bb9f1978f25319-3.png",
            alt: "Indoor portrait",
            prompt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
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
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431384-c4390b29c27f9361d5782ee0bc8dae70-3.png",
              alt: "Indoor portrait",
              prompt: "headshot of model, sitting at a desk, at a (office),  shirt and tie and suit pants",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 5 / 3 / 6"
          },
          {
              id: 10,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431384-c4390b29c27f9361d5782ee0bc8dae70-2.png",
              alt: "Indoor portrait",
              prompt: "headshot of model, sitting at a desk, at a (office),  shirt and tie and suit pants",
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
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431405-737c9042e8f94bcaa9bb9f1978f25319-2.png",
              alt: "Indoor portrait",
              prompt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 5 / 4 / 6"
          },
          {
              id:14,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431363-f64fb035fe62998276fd8fae8945b8ec-3.png",
              alt: "Indoor portrait",
              prompt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 1 / 5 / 2"
          },
          {
              id:15,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431426-d75655098f06427f1ed2f349f404bc64-1.png",
              alt: "Indoor portrait",
              prompt: "",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 2 / 5 / 3"
          },
          {
              id:16,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431426-d75655098f06427f1ed2f349f404bc64-1.png",
              alt: "Indoor portrait",
              prompt: "headshot of model, sitting at a desk, at a (office),  shirt and tie and suit pants",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 3 / 5 / 4"
          },
          {
              id:17,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431405-737c9042e8f94bcaa9bb9f1978f25319-1.png",
              alt: "Indoor portrait",
              prompt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 4 / 5 / 5"
          },
          {
              id:18,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431195-5f27fb67a9880693bf9ca4d0fdc494e4-4.png",
              alt: "Indoor portrait",
              prompt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
              className: "col-span-1 row-span-1",
              gridArea: "4 / 5 / 5 / 6"
          },
          {
              id:19,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431279-effcb83e31010c1541879e8645b39088-4.png",
              alt: "Indoor portrait",
              prompt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
              className: "col-span-1 row-span-1",
              gridArea: "1 / 6 / 3 / 7"
          },
          {
              id:20,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431426-d75655098f06427f1ed2f349f404bc64-4.png",
              alt: "Indoor portrait",
              prompt: "headshot of model, sitting at a desk, at a (office),  shirt and tie and suit pants",
              className: "col-span-1 row-span-1",
              gridArea: "3 / 2 / 5 / 3"
          },
          {
              id:21,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431300-03ad592e2272242c73a5d9e3d2310f40-3.png",
              alt: "Indoor portrait",
              prompt: "headshot of model, sitting at a desk, at a (office), BREAK elegant blouse, pencil skirt, makeup",
              className: "col-span-1 row-span-1",
              gridArea: "2 / 3 / 4 / 5"
          },
          {
              id:22,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431363-f64fb035fe62998276fd8fae8945b8ec-4.png",
              alt: "Indoor portrait",
              prompt: "8k professional headshot of model, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 1 / 6 / 3"
          },
          {
              id:23,
              url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431342-6585ee043c02e54878b681fff35cf004-1.png",
              alt: "Indoor portrait",
              prompt: "headshot of model, sitting at a desk, at a (office), BREAK elegant blouse, pencil skirt, makeup",
              className: "col-span-1 row-span-1",
              gridArea: "5 / 3 / 6 / 5"
          },
          {
            id:24,
            url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431384-c4390b29c27f9361d5782ee0bc8dae70-1.png",
            alt: "Indoor portrait",
            prompt: "headshot of model, sitting at a desk, at a (office),  shirt and tie and suit pants",
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
        LinkedIn-Headshots Pack
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
              
              {/* Prompt text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <p className="text-sm font-light">{image.prompt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkedInHeadshotsPack;