'use client';
import React, { useState } from "react";
import "./collage.css";

const ImageCollage = () => {
  const [likedImages, setLikedImages] = useState<{ [key: number]: boolean }>({});
  
  // Sample data with image URLs, prompts, likes
  const imageData = [
    {
      url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726205579-a2e94ad5b997fd3f1604c14da40b0e7f-4.png",
      prompt: "model as a progressive LGBTQ activist with pink or blue hair",
      likes: 78
    },
    {
      url: "https://images.pexels.com/photos/31030438/pexels-photo-31030438/free-photo-of-elegant-woman-in-beige-dress-at-historic-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A stylish woman with light skin and shoulder-length straight hair, wearing a flowing beige dress with long sleeves and a V-neckline, standing elegantly in front of a grand European-style palace with large columns and intricate architecture. She holds a cream-colored handbag and wears matching beige slip-on shoes. She has black sunglasses on and poses with a graceful, relaxed stance. The background features historical buildings with arches and golden fence details. Soft natural lighting and a warm, sophisticated aesthetic.",
      likes: 124
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726184325-3707e287ff4afffc53c194adf0f7309c-3.png",
      prompt: "handsome and stylish model trying on a sophisticated pinstripe suit with a waistcoat and a burgundy tie",
      likes: 191
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726210896-7d527941e94b757306314e671ee35489-1.png",
      prompt: "a stunning model surrounded by  a crowd of fellow festival-goers, capturing the sense of community and celebration at the festival",
      likes: 98
    },
    {
      url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/99ccccd1-35b1-4090-ade2-83e2a2bf14ab/original=true,quality=90/5P_00006_.jpeg",
      prompt: "a beautiful photo of an old man, angle view, light and shadow play, art by David Fincher",
      likes: 112
    },
    {
      url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ee0b968f-b19d-4821-852b-5c0caee2cf4f/original=true,quality=90/cybertest_02.jpeg",
      prompt: "high fashion photography photo of a Dutch woman, straight blonde hair, cocktail dress, plain background, high-quality, super-detailed, in the style of dark cinematic fine-art portraits, dramatic lighting, soft shadows, rich textures, moody atmosphere",
      likes: 237
    },
    {
      url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/b81d0657-2319-4578-8ed4-0d843354344a/anim=false,width=450/00015-843823136.jpeg",
      prompt: "Anime style character with blue hair",
      likes: 191
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726234456-f166382567b5e203aff256f9627c4462-3.png",
      prompt: "sharp and trendy model in Berlin wearing a grunge-inspired outfit, Berlin Wall in the background",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/30636493/pexels-photo-30636493/free-photo-of-stylish-woman-in-red-dress-relaxing-on-sofa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A stylish woman with long wavy brown hair reclines elegantly on a luxurious dark blue leather sofa. She wears a deep red slit dress with high heels, exuding confidence and allure. The modern living room features warm ambient lighting, abstract wall art, and decorative cushions with tribal patterns. The scene has a cinematic feel, captured in a professional fashion photography style, with soft shadows and a warm, inviting color palette. 4K, ultra-detailed, highly realistic, professional lighting, shot with a high-end DSLR camera.",
      likes: 112
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726210665-784fe5f96b24d0418c492ab046a0dcd1-4.png",
      prompt: "a stunning model in a tie-dye jumpsuit and statement accessories , capturing their eclectic and fashionable festival look",
      likes: 237
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725074115-aaf68743ec520fec7310f8ad0e9b926d-1.png",
      prompt: "a graduate model surrounded by books and a laptop in unversity.",
      likes: 191
    },
    {
      url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/81d8dd99-a3aa-4504-88ea-da852492055f/anim=false,width=450/ComfyUI_00168_JenniferConnelly-01-u-p.jpeg",
      prompt: "A close-up shot shows a fair-skinned woman with light blonde, wavy hair, blue eyes, and orange lipstick looking to the right of the frame. Her hair is parted on the left and falls around her face and shoulders. She is wearing a bright orange sleeveless top with a white collar and a white stripe detail on the front. The lighting creates shadows on her face, particularly on her nose and under her cheekbones. A small mole is visible on her neck. The background is out of focus and appears to be dark.",
      likes: 98
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725072686-c9ace79117fef432f3ec83b801ed14ca-1.png",
      prompt: "model with magnetic appeal, adorned in sparkling jewelry , against a starry night backdrop",
      likes: 112
    },
    {
      url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/eabb560d-3027-482e-9c72-335a651a464a/original=true,quality=90/63649735.jpeg",
      prompt: "a sharp shot of a woman walking through a field of tall, golden wheat. She is wearing a gray coat and blue jeans, and her long brown hair is blowing in the wind. The field is vast and stretches into the distance, with rolling hills and fields in the background. The sky is overcast, and the overall mood of the photo is calm and serene. The woman appears to be walking away from the camera, with her back to the camera., This is a high resolution photo of a young,  light-skinned girl. the girl is of average height, her figure is slim and athletic, with a flat stomach and small perky breasts, the girl has medium-short  length brown hair parted to the side on the right side, young slim. looking at viewer, front view, professional photography.",
      likes: 237
    },
    {
      url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/13bb1ec3-c63b-43ea-9de9-393c6265692b/original=true,quality=90/00013-69454176.jpeg",
      prompt: "a photo of a pensive young woman with long blonde hair, wearing casual hiking clothes, sitting, full-body, on the rocky edge of a cliff, overlooking a misty forested valley at dawn, [LIGHTING], [CAMERA ANGLE], [CAMERA PROPERTIES], in style of [PHOTOGRAPHER] ",
      likes: 191
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725072728-c9bd382d86c1b61feb5ce3f1a466fcf1-1.png",
      prompt: "model in daring, edgy ensemble  against an edgy urban backdrop",
      likes: 86
    },
    {
      url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/04afc61e-cad8-4ea4-87dd-c324d957fb6a/original=true,quality=90/63648150.jpeg",
      prompt: "sharp photo of a young woman walking on a dirt path in a forest. She is wearing a beige sweater, brown leggings, and beige high heels. She has a pink scarf tied around her neck and is carrying a large beige handbag. Her long dark hair is styled in loose waves and she is looking off to the side with a slight smile on her face. The background is filled with trees and greenery, and the sky is overcast. The overall mood of the image is peaceful and serene., This is a high resolution photo of a young,  light-skinned girl. the girl is of average height, her figure is slim and athletic, with a flat stomach and small perky breasts, the girl has medium-short  length brown hair parted to the side on the right side, young slim. looking at viewer, front view, professional photography.",
      likes: 98
    },
    {
      url: "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725084623-d0956730aba889c2809df3cbdcd33251-1.png",
      prompt: "sharp and trendy model in Tokyo wearing a futuristic outfit, Shibuya crossing in the background",
      likes: 112
    },
    {
      url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3e199372-fa3e-452a-bab9-a1399693a0be/original=true,quality=90/CyberCl4_3.jpeg",
      prompt: "closeup photo of a man wearing fitted sweater, facial hair, blurred city skyline, urban rooftop, twilight, natural light, city lights, subtle backdrop, intense and introspective mood, skin texture, modern (rugged:0.4) aesthetic, thoughtful expression, cropped torso, under dramatic edge lighting, triangular composition, shot on a Sony A7III",
      likes: 237
    },
    
    {
      url: "https://images.unsplash.com/photo-1741412252402-0d965ea9970b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
      prompt: "A rugged cowboy with a beard wearing a black hat, blue denim jacket, and brown leather boots, riding a massive bison in an old Western town. The bison has a strong muscular build, dark brown fur, and large curved horns. The cowboy holds the reins confidently while the bison's mouth is slightly open, revealing its teeth. The background features classic wooden buildings with large windows, capturing the essence of a vintage Wild West setting. Warm golden sunlight casts dramatic shadows, creating a cinematic and realistic atmosphere. Ultra-detailed, photorealistic, 4K resolution.",
      likes: 119
    },
    {
      url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/01c0bede-ce39-4156-b756-aa2100519a91/original=true,quality=90/63626905.jpeg",
      prompt: "a sharp shot of a young woman posing in a light blue dress and a large straw hat. She is standing on a beach with a clear blue sky in the background. The woman is wearing a strapless, floor-length dress with a high slit on the side, exposing her legs. She has long blonde hair in loose waves and is wearing gold bracelets and earrings. The hat has a wide brim and a wide brim. The overall mood of the photo is glamorous and summery. This is a high resolution photo of a young, fair-skinned girl. The girl is of average height, her figure is slim and athletic, with a flat stomach and small firm breasts, the girl has medium length brown hair parted to the side on the right side, young slim. looking at viewer, front view, professional photography.",
      likes: 327
    },
    {
      url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/1fc9fc78-a0cb-4f22-b197-899bf6887013/original=true,quality=90/00103-1760999489.jpeg",
      prompt: "Best quality, masterpiece, ultra high res, (photorealistic:1.4), raw photo, ((monochrome)), ((grayscale)), black and white photography, street photography, trending on flickr, 1girl, offshoulder, in the dark, deep shadow, low key, cold light, deep contrast, bokeh, depth of field, (looking at viewer, softly smiling), a photo of a inside a subway car holding her cellphone, wall full of grafittis, Drew Tucker, award-winning photograph, a black and white photo, neoism, background crowds, people in backgrounds, ((upper body)), ((straight photo))",
      likes: 237
    },
    
    {
      url: "https://images.unsplash.com/photo-1736264334806-b50e5ec94be1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTU5fHx8ZW58MHx8fHx8",
      prompt: "A highly detailed, cinematic photo of a muscular, shirtless male fitness model with light skin, short wavy blonde hair, and a tattoo sleeve on his left arm, standing in a modern gym. He is wearing black Nike sweatpants and looking down with a focused expression. The gym has large mirrors reflecting his back, bright overhead lighting, and a minimalist industrial design with weight racks in the background. The scene has a soft, moody aesthetic with a cool color palette and high contrast lighting. Shot with a high-end DSLR, slight bokeh effect.",
      likes: 119
    },
    {
      url: "https://images.pexels.com/photos/31013543/pexels-photo-31013543/free-photo-of-dynamic-bmx-stunt-with-vibrant-purple-smoke.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A young man performing a BMX stunt in an outdoor skate park, wearing a white t-shirt, dark pants, and a black cap. His bike is tilted as he balances with one foot on the pedal. A vibrant purple smoke bomb releases behind him, creating a dynamic atmosphere. The background includes a chain-link fence, trees, and a clear blue sky. The lighting is bright and natural, with a slight cinematic depth of field. High detail, action shot, ultra-realistic, professional photography.",
      likes: 327
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1737392495759-2aace4708e48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzE3fHx8ZW58MHx8fHx8",
      prompt: "A rugged man with red hair and a beard sits on the steps of a modern suburban house. He wears a white cowboy hat, dark sunglasses, a brown short-sleeved button-up shirt, and black pants. His arms rest on his knees as he gazes forward with a relaxed yet confident expression. The sunlight casts warm shadows, emphasizing the vintage and cinematic feel of the image. The background features a beige wall with a glass-paneled door, and the wooden steps create depth. The atmosphere is warm and slightly desaturated, evoking a classic Americana aesthetic. Shot in cinematic style, 35mm film grain, high detail, natural lighting, depth of field.",
      likes: 237
    },
    
    {
      url: "https://images.unsplash.com/photo-1737509551345-21577f99bf63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODA4fHx8ZW58MHx8fHx8",
      prompt: "A cinematic portrait of a young woman with shoulder-length dark brown and auburn hair, gazing to the side with an intense expression. She has striking eyeliner, freckles, and a fair complexion. The lighting is warm and moody, with soft orange and brown tones. A blurred background with soft bokeh enhances the depth. A light arc or subtle rainbow flare adds an artistic touch in the foreground. She wears a black outfit, and the scene has a shallow depth of field with a professional photography feel.",
      likes: 119
    },
    // Add the rest of your images with similar data structure
  ];

  const handleLike = (index: number) => {
    setLikedImages({
      ...likedImages,
      [index]: !likedImages[index]
    });
  };

  const getImageSize = (index: number) => {
    // Create more dynamic sizes for grid layout
    const sizes = ["small", "medium", "large", "medium", "small"];
    return sizes[index % sizes.length];
  };

  return (
    <div className="gallery-container">
      {imageData.map((image, index) => (
        <div 
          key={index} 
          className={`gallery-item ${getImageSize(index)}`}
        >
          <div className="image-container">
            <img 
              src={image.url} 
              alt={`Gallery ${index}`} 
              className="gallery-image" 
            />
            <div className="image-overlay">
              <div className="prompt-text">{image.prompt}</div>
              <div className="like-container">
                <button 
                  className={`like-button ${likedImages[index] ? 'liked' : ''}`}
                  onClick={() => handleLike(index)}
                >
                  <svg viewBox="0 0 24 24" className="heart-icon">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <span className="like-count">{likedImages[index] ? image.likes + 1 : image.likes}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCollage;