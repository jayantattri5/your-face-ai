'use client';
import React, { useState, useContext } from "react";
import "./examples.css";

const Examples = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  const [likedImages, setLikedImages] = useState<{ [key: number]: boolean }>({});
  const [clickedButtonIndex, setClickedButtonIndex] = useState<number | null>(null); // ✅ Define State
  const handleUsePrompt = (prompt: string, index: number) => {

    console.log("Clicked prompt:", prompt);
    console.log("Before tab change:", clickedButtonIndex);

    localStorage.setItem("selectedPrompt", prompt);
    setClickedButtonIndex(index);

    setTimeout(() => {
      setActiveTab("infinity-section"); // Directly switch to the tab
      console.log("After tab change: infinity-section");
      
      setTimeout(() => setClickedButtonIndex(null), 300);
    }, 400);
  };
  
  // Sample data with image URLs, prompts, likes
  const imageData = [
    {
      url: "https://plus.unsplash.com/premium_photo-1739145094749-5f58adfe61d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5ODB8fHxlbnwwfHx8fHw%3D",
      prompt: "A young woman with wavy brown hair, wearing a black cropped blouse with puffed sleeves, high-waisted light blue jeans, and a small camera hanging from her shoulder, walking through a greenhouse filled with cacti and succulents. The greenhouse has a rustic wooden frame with glass panels, allowing natural sunlight to stream in. The atmosphere is warm and inviting, with a mix of green and earthy tones. The woman has a confident, relaxed expression as she looks slightly to the side. Shot with a cinematic feel, balanced lighting, and a sharp focus on the subject, with a slightly blurred background.",
      likes: 78
    },
    {
      url: "https://images.unsplash.com/photo-1739889399685-c73e63753981?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDE5fHx8ZW58MHx8fHx8",
      prompt: "A female cyclist riding a road bike through a vast green countryside, wearing a white aerodynamic helmet, a long-sleeve brown cycling jersey, black cycling shorts, and black gloves. Her blonde hair flows from beneath her helmet as she looks forward with focus. The backdrop consists of rolling green hills, an old wooden gazebo, and a distant white castle surrounded by a dense forest. The sky is overcast, casting soft, diffused lighting over the landscape. The shot is taken from a slightly low angle, emphasizing movement and depth. A professional, cinematic look with a natural color palette.",
      likes: 124
    },
    {
      url: "https://images.pexels.com/photos/27731411/pexels-photo-27731411/free-photo-of-brunette-woman-in-long-dress-posing-in-ruins.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A stunning brunette woman with elegant facial features, wearing an off-shoulder flowing beige gown, sitting gracefully on an ancient stone structure. The setting is a historical stone-built location with grand columns and textured rock surfaces, evoking a sense of timeless beauty. She poses with a serene expression, gazing slightly away from the camera. The warm, soft lighting highlights the delicate folds of her dress and casts gentle shadows, adding depth to the composition. The atmosphere is calm, with an ethereal, dreamy aesthetic, as if from a historical romance scene. The background is blurred, focusing attention on the woman and the rustic yet elegant ambiance.",
      likes: 191
    },
    {
      url: "https://images.pexels.com/photos/30472381/pexels-photo-30472381/free-photo-of-elegant-male-fashion-portrait-with-moody-lighting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A stylish young man with a slim physique and sharp facial features, wearing a modern black suit with an open chest, sitting on a minimalistic stool. He poses confidently, resting one hand on his head, exuding elegance and mystery. He wears fashionable dark sunglasses, adding to his sophisticated aura. The scene is set in a dimly lit studio with a smooth gradient blue background, creating a moody and cinematic atmosphere. Dramatic lighting with soft shadows enhances the artistic and high-fashion editorial style.",
      likes: 98
    },
    {
      url: "https://images.unsplash.com/photo-1738058223926-c82cf2128f6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjYwfHx8ZW58MHx8fHx8",
      prompt: "A young woman with long dark hair, light skin, and sunglasses resting on her head, sitting at a table in a cozy restaurant with warm ambient lighting. She is wearing a black sleeveless top and has a relaxed, confident expression, lightly touching her face with her hand. The table has a white plate, a fork, a cocktail glass filled with a pink drink, and a water glass. The background shows a blurred restaurant scene with a waiter in motion and an open-air window allowing natural light to cast a golden glow on her face. The aesthetic is cinematic, moody, and elegant, capturing a relaxed dining atmosphere.",
      likes: 112
    },
    {
      url: "https://images.unsplash.com/photo-1737553338682-cd52f5df9781?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODExfHx8ZW58MHx8fHx8",
      prompt: "A moody portrait of a young woman with shoulder-length dark brown hair, intense gaze, and fair skin. She is wearing a black turtleneck sweater, partially covering her hand, and a gold chain necklace. Her lips are slightly parted, and she has a subtle, mysterious expression. The lighting is soft and directional, casting gentle shadows on her face. The background is a neutral, muted tone, creating a cinematic, dark, and elegant aesthetic. The overall style is artistic, high-fashion, and dramatic.",
      likes: 237
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1734669512352-ec4b991b1421?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODkzfHx8ZW58MHx8fHx8",
      prompt: "A young woman with shoulder-length brown hair standing in front of a brightly lit Ferris wheel at a nighttime carnival. She wears a casual white T-shirt under a knitted vest with soft pastel tones and a small pendant necklace. The lights from the Ferris wheel and carnival rides illuminate her face, casting a warm glow. She looks slightly downward, with a serene and introspective expression. The background is vibrant, filled with neon and colorful lights, contrasting against the dark night sky. The atmosphere is dreamy, cinematic, and nostalgic.",
      likes: 191
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1736338574018-9805477fb65f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTA5fHx8ZW58MHx8fHx8",
      prompt: "A stylish young man with silver hair, sitting on a wooden stool in a minimalist sunlit room. He wears a black sleeveless tank top, dark loose-fit pants, and black leather boots. His pose is relaxed, with his legs slightly spread and hands resting on his thighs. He has a calm and introspective expression, looking down slightly. Tattoos are visible on his toned arms. The background features a warm-toned wall with large rectangular sunlight patterns casting soft shadows. The atmosphere is serene, with a modern editorial photography style.",
      likes: 98
    },
    {
      url: "https://images.unsplash.com/photo-1736419074235-ec42c48ea375?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyOXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
      prompt: "A young man with short dark hair and light stubble, sitting in a relaxed pose on a wooden chair. He is wearing a black long-sleeve shirt, blue jeans, and dark boots. His legs are spread apart, and he has a calm, confident expression while gazing slightly off-camera. The background features a cozy, dimly lit living room with a modern aesthetic—warm lighting, a beige rug with subtle patterns, a brown sofa, and a plant in the background. The scene has a moody, cinematic tone with soft, natural lighting and a slight blur effect for a shallow depth of field.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/31157305/pexels-photo-31157305/free-photo-of-elegant-woman-in-traditional-vietnamese-dress.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A beautiful Vietnamese woman sitting elegantly against an ornately carved wooden wall. She is wearing a traditional pink áo dài dress with intricate red embroidery of a dragon on the chest. Her dark hair is styled in a neat updo, and she has a poised, graceful expression with a gentle gaze. She sits with one hand resting on her lap and the other raised slightly near her face. Sunlight softly illuminates her face and the delicate fabric of her dress, casting gentle shadows on the textured wooden background. The scene has a warm, cultural, and artistic aesthetic, with a traditional Vietnamese architectural backdrop.",
      likes: 237
    },
    {
      url: "https://images.unsplash.com/photo-1736264335247-8ec5664c8328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMTI0fHx8ZW58MHx8fHx8",
      prompt: "A fit, young blonde woman with a ponytail, smiling while whisking eggs in a blue bowl. She is wearing a black sports bra and matching leggings. The modern kitchen has a sleek, black countertop and a gas stove, with a pan cooking strips of bacon. The lighting is dramatic, with a strong contrast between the illuminated subject and a dark background. Through the window, a scenic outdoor view is visible, adding depth to the composition. The overall aesthetic is cinematic, high-contrast, and modern lifestyle photography.",
      likes: 191
    },
    {
      url: "https://images.pexels.com/photos/30884118/pexels-photo-30884118/free-photo-of-fashionable-woman-in-sunglasses-by-vintage-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A stylish young woman with long, straight brown hair wearing black sunglasses and a chic outfit. She is dressed in a black form-fitting dress with a cropped white wool coat, exuding confidence. She is standing in front of a large, vintage wooden-framed glass window with a rustic, aged texture. The reflection of bare tree branches can be seen in the glass. The setting gives an elegant, high-fashion, urban aesthetic. She slightly lifts her sunglasses with one hand while looking off to the side, with a poised and confident posture. The lighting is soft and natural, emphasizing the textures of the clothing and background.",
      likes: 98
    },
    {
      url: "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ce3036a7-ebbc-4eb4-b610-a2dccad27772/original=true,quality=90/00054-793414567.jpeg",
      prompt: "detailed edges, detailed image, perfection style, A detailed and A perfect photo of a man is lifting a barbell in a competition, hand focus, cinematic hand, best hand, better hand, awesome hand, different hand, solo, looking at viewer, short hair, shirt, black hair, 1boy, full body, male focus, thighs, shoes, shorts, socks, artist name, black shirt, muscular, facial hair, black shorts, pectorals, muscular male, red footwear, bara, large pectorals, bulge, realistic, very short hair, chest hair, leg hair, arm hair, exercise, hairy, nike, gym, dumbbell, weightlifting, perfection, different color, perfect color, realistic, realism, detailed background, perfect background, different background, perfect style, perfection style, detailed style, thick thighs, sneakers, mature male, sideburns, buzz cut, nike (company).",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/30569338/pexels-photo-30569338/free-photo-of-black-and-white-male-portrait-in-artistic-pose.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "Black and white portrait of a young male model with a fit physique, short curly hair, and light stubble. He is wearing a casual dark t-shirt, knee-length shorts, and black sneakers. The subject is seated on a reflective white floor in a minimalistic studio setting with a plain gradient background. He is posed artistically, resting one arm on the floor for support, while the other hand rests on his bent knee. His head is turned to the side, gazing into the distance with a calm and introspective expression. The lighting is soft and even, creating subtle shadows that define his facial features and muscular structure. High-resolution, monochrome photography with a modern and artistic feel.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/30375792/pexels-photo-30375792/free-photo-of-elegant-bride-relaxing-in-vintage-black-and-white-portrait.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "Elegant bride in a vintage black and white photograph, sitting gracefully in a luxurious armchair. She wears a sophisticated white halter-neck wedding gown with a silky texture, paired with stylish white heels. Holding a delicate bouquet of white flowers, she smiles warmly while looking to the side. The background features a classic interior with a large ornate mirror, intricate wall decor, and a lavish floral arrangement. The scene is softly illuminated, creating a timeless and cinematic atmosphere. The composition exudes elegance and romance, reminiscent of vintage wedding photography.",
      likes: 191
    },
    {
      url: "https://images.pexels.com/photos/31095881/pexels-photo-31095881/free-photo-of-vintage-portrait-with-retro-telephone-charm.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A vintage-style photograph with yellowish sepia tones of a person with shoulder-length dark hair wearing a white lace mini dress, holding a red vintage telephone receiver cord above their head. The person is standing against a plain cream-colored wall with an ornate picture frame visible on one side and a decorative wall fixture on the other. Soft nostalgic lighting, retro aesthetic, film grain texture, 1970s style photography.",
      likes: 86
    },
    {
      url: "https://images.pexels.com/photos/30569334/pexels-photo-30569334/free-photo-of-monochrome-portrait-of-a-man-in-a-beanie.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "High contrast black and white portrait photograph of a person sitting on a wooden stool against a plain white seamless background. The subject is wearing a knit beanie, a plain t-shirt, shorts with a belt, and black combat boots. Studio lighting creating a minimalist, dramatic monochrome aesthetic. The person is seated with one leg extended and the other bent, looking slightly to the side with a contemplative expression. Professional fashion portrait with clean shadows and fine details, shot with medium format camera.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/30546238/pexels-photo-30546238/free-photo-of-elegant-woman-in-scarf-posing-in-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A beautiful young woman with deep brown eyes and full lips, partially submerged in the ocean. She wears a flowing, semi-transparent white cardigan over a textured white bikini top. A rich green scarf with intricate patterns drapes over her head, framing her face elegantly. Her long, dark hair peeks out from under the scarf, slightly damp from the water. The serene ocean and a soft, pastel sky create a dreamy and cinematic atmosphere. The image has a soft-focus depth of field, giving it an ethereal and artistic quality.",
      likes: 112
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1739131476773-02a75eb96d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjA4fHx8ZW58MHx8fHx8",
      prompt: "A young man with curly black hair and light skin standing on a rocky beach, holding a fishing rod over his shoulder with one hand while slightly raising the other. He is wearing a black t-shirt and black pants. The background features a vast blue ocean meeting the horizon, a rugged rocky coastline, and a clear bright sky. The lighting is natural and well-balanced, with strong sunlight casting soft shadows. The atmosphere is calm and scenic, with a relaxed and confident expression on the man's face. Shot in high resolution with a sharp focus on the subject and a slightly blurred background for depth.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/30109633/pexels-photo-30109633/free-photo-of-elegant-woman-at-candlelit-dinner-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A glamorous woman with dark wavy hair, sharp facial features, and a confident expression, sitting at a candlelit dinner table. She wears a luxurious white faux fur coat over an elegant black dress, exuding sophistication and mystery. The scene is set in a beautifully decorated dining room with an ornate chandelier hanging above, soft candlelight illuminating the atmosphere. The table is adorned with a neatly set plate, a glass of wine, and vintage-style silverware. The background features a classic mirror reflecting the warm ambiance, along with elegant candelabras and festive decor. The image is in high-contrast black and white, creating a cinematic and timeless aesthetic.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/30537429/pexels-photo-30537429/free-photo-of-thoughtful-young-woman-in-orchard-during-fall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A young woman with long, wavy, light brown hair, sitting in a lush green orchard during golden hour. She wears a soft gray sweater over a flowing white dress with delicate embroidery. Her expression is thoughtful as she rests her face on her hand while gazing into the distance. Sunlight filters through the leaves, casting a warm, golden glow on her hair and the grass. The background features an apple tree with ripe apples hanging from its branches, creating a peaceful and nostalgic atmosphere. The setting is tranquil, with a natural and dreamy aesthetic.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/30158553/pexels-photo-30158553/free-photo-of-stylish-young-adult-in-trendy-denim-outfit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A stylish young man with curly hair and a slim physique, posing confidently in a modern fashion photoshoot. He wears oversized, vintage-washed denim jeans with a baggy fit, a white tank top, and an unbuttoned olive-green denim jacket draped over his shoulders. He accessorizes with futuristic white sunglasses and leans back on a minimalistic white stool. His barefoot stance adds a casual, edgy aesthetic. The background is a clean, plain white studio setup with soft, even lighting, creating a high-fashion editorial look.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/30340399/pexels-photo-30340399/free-photo-of-young-man-by-tranquil-pond-in-forest-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A young man with a fit physique, short curly brown hair, and light skin, standing by a calm pond in a peaceful forest. He is wearing a snug white tank top and dark brown pants, with a relaxed and introspective posture, gazing downward. The setting is a tranquil park with lush green foliage and tall trees in the background. Warm golden sunlight filters through the leaves, creating a dreamy, soft-focus atmosphere. The reflection of the trees and sky shimmers on the still water, enhancing the serene mood. The overall aesthetic is cinematic and nostalgic, with a warm, earthy color palette.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A beautiful fairy with long, wavy brown hair, wearing a delicate white lace dress, sitting gracefully in a mystical forest. She has large, translucent fairy wings and wears a floral crown on her head. Her eyes are closed as she gently blows magical dust from her hands. She sits against the trunk of a tall tree on a mossy forest floor, with a small white birdcage beside her. The background is a lush, deep green forest with tall trees, softly blurred to create a dreamy, ethereal atmosphere. Soft, diffused lighting enhances the magical, fantasy-like ambiance. The overall aesthetic is whimsical and enchanting, reminiscent of a fairy tale.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A stunning young woman with long, wavy blonde hair wearing a vibrant red dress, standing amidst lush green ferns in a deep, misty forest. She gracefully tilts her head back, with one hand resting on her head and the other gently touching her neck. The environment is dreamlike, with soft, diffused lighting and a cool, cinematic color grade. The background consists of tall, dark trees with a shallow depth of field, making the subject stand out dramatically. The atmosphere is serene, mysterious, and enchanting, evoking a sense of connection with nature.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A beautiful young woman with long, wavy brown hair and soft bangs, wearing a denim strapless dress with a sheer white shrug. She holds a blue rose delicately in her right hand while gazing softly at the camera. A floral crown with blue and white flowers adorns her head. The background is a bright, high-key white with soft-focus branches, creating an ethereal, dreamy aesthetic. The lighting is soft and diffused, enhancing the airy, delicate atmosphere.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/1002841/pexels-photo-1002841.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with a short black bob haircut, wearing a sleeveless floral dress with soft pastel colors, sitting gracefully on a large tree branch. She leans back with one arm resting on the trunk, and her legs elegantly crossed. Her bare feet touch the textured bark, and she gazes at the camera with a relaxed yet confident expression. The background is a warm, autumn-like landscape with dry grass and scattered trees, bathed in golden sunlight. The image has a cinematic, moody atmosphere with warm earthy tones and soft shadows.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/1319908/pexels-photo-1319908.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A beautiful young woman with shoulder-length brown hair, wearing a traditional floral-patterned áo dài dress, sitting gracefully on an outdoor metal staircase. She has a warm and gentle smile, her hands resting elegantly on her lap. The staircase has silver railings and leads up alongside a textured stone wall. There are green plants slightly out of focus in the foreground, adding depth to the scene. The background is softly blurred, with a modern urban setting. The lighting is soft and natural, giving the image a dreamy, cinematic aesthetic.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/31359899/pexels-photo-31359899/free-photo-of-elegant-woman-dining-in-parisian-theme-cafe.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "An elegant young woman with long black hair, wearing a stylish beige beret and a brown shearling coat draped over her shoulders, sitting at a cozy Parisian café. She rests her hands gently on her cheek while gazing into the distance. She wears a white blouse, and in front of her is a glass of red wine on a small round table. The café interior is dimly lit with warm lighting, featuring dark velvet seating, floral curtains, and a large framed picture of the Eiffel Tower in the background. The atmosphere is intimate, vintage, and cinematic, evoking a classic Parisian charm.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/3034903/pexels-photo-3034903.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A close-up portrait of a young woman with long, wavy brown hair, partially illuminated by intricate lace shadow patterns. She gazes softly at the camera with a natural, sun-kissed glow on her smooth skin. She wears a white spaghetti-strap top, and her arms are raised, gently holding a delicate lace fabric above her. Sunlight filters through the lace, casting mesmerizing, detailed patterns on her face and shoulders. The background is blurred, with a soft, warm aesthetic emphasizing the contrast between light and shadow. The atmosphere is intimate, dreamy, and artistic, evoking a bohemian and ethereal style.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A stunning young woman with voluminous, wavy blonde hair and fair skin stands confidently in an urban environment. She wears a sleek black blouse with a deep neckline. Her bold red lipstick and striking blue eyes give her a captivating, high-fashion appearance. The background features a blurred European-style architectural setting with large wooden doors decorated with intricate metal ornaments. The image has a cinematic, moody aesthetic with soft natural lighting, focusing on the subject’s elegant and powerful presence.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/1104035/pexels-photo-1104035.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A joyful young woman with long blonde hair, wearing a short, pastel yellow summer dress, dancing playfully in a lush green meadow near a calm lake. She is holding a white parasol in her right hand while gracefully balancing on one foot, her left leg bent at the knee. She wears beige high-heeled sandals, and a delicate floral headband adorns her hair. The background features a bright blue sky with fluffy white clouds, dense green trees, and a peaceful lake reflecting the sunlight. The atmosphere is vibrant, cheerful, and whimsical, evoking a sense of freedom and happiness. The image has a soft-focus effect, enhancing the dreamy quality of the scene.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A stylish young woman with long, straight blonde hair leans casually against an ornate metal railing in an urban environment. She wears a black leather jacket over a short, dark red dress with small patterns. A black leather handbag hangs from her arm, and she gazes off to the side with a confident yet relaxed expression. The backdrop features a grand architectural archway with elegant, historic buildings in the distance. The lighting is soft and diffused, giving the image a cinematic and moody feel. The setting suggests a European city, evoking a fashionable and modern aesthetic.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/2179215/pexels-photo-2179215.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A stylish young woman with long dark hair and light skin sits casually on a concrete ledge by a large floor-to-ceiling window in a high-rise apartment. She wears a mustard-yellow cropped sweater and high-waisted yellow plaid pants, paired with white sneakers. A pair of fashionable sunglasses rests on her face, giving her a modern, trendy look. The backdrop features a city skyline with tall buildings under a cloudy sky. The indoor setting includes soft curtains and a small glass table, adding a cozy yet urban aesthetic. The lighting is soft and moody, with natural daylight filtering through the window, creating a cinematic and slightly dramatic effect.",
      likes: 78
    },
    {
      url: "https://images.pexels.com/photos/248021/pexels-photo-248021.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with long wavy light brown hair and fair skin sits at a cozy café table, casually using her smartphone. She wears a relaxed gray hoodie with a colorful graphic print on the front. A tall glass of layered latte macchiato with frothy milk sits in front of her on a small saucer with a red spoon. The café interior features warm wooden tones, green potted plants, and softly lit ambiance, with a window draped in white lace curtains allowing natural daylight to filter in. The background is slightly blurred, with other customers sitting in the café, adding a natural, candid feel to the setting. The atmosphere is warm and inviting, with a modern yet comfortable aesthetic.",
      likes: 124
    },
    {
      url: "https://images.pexels.com/photos/834872/pexels-photo-834872.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with voluminous, curly brown hair and fair skin poses outdoors in a winter setting. She wears a stylish oversized orange-red faux fur coat with a warm, cozy texture. Her facial expression is calm and confident, with soft brown eyes and full lips slightly parted. She has subtle makeup, including a natural foundation, warm brown lipstick, and well-defined eyebrows. A black choker necklace is visible around her neck. The background consists of blurred snow-covered trees and green foliage, creating a dreamy bokeh effect. The lighting is soft and diffused, casting a gentle glow on her face. The composition is balanced, with the subject slightly off-center, and the color contrast between her vibrant coat and the cool-toned background enhances the aesthetic appeal.",
      likes: 191
    },
    {
      url: "https://images.pexels.com/photos/2092474/pexels-photo-2092474.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with fair skin and wavy blonde-brown ombre hair, posing elegantly in a minimalistic studio setting. She is wearing a white sleeveless crop top with thin straps, revealing her shoulders. Her left arm is raised above her head, while her right hand gently touches her chin. Her gaze is directed upwards with a dreamy and contemplative expression. She has natural yet refined makeup, with soft pink lips, well-defined eyebrows, and subtle eyeliner. The background is a clean, light pastel or off-white color, creating a high-fashion, minimalist aesthetic. The lighting is soft and evenly distributed, casting a gentle glow on her face and emphasizing smooth skin texture. The overall composition is balanced with a stylish, editorial photography feel.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/1372137/pexels-photo-1372137.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A beautiful young woman with long, straight black hair, wearing a traditional Vietnamese áo dài in pure white. She is standing in a vibrant outdoor market filled with colorful lanterns in red, yellow, blue, and green. She holds a red paper lantern delicately in both hands, admiring it with a soft smile. The background is softly blurred, creating a dreamy, cinematic effect. The scene has warm ambient lighting with soft natural sunlight casting a gentle glow on her face. The overall aesthetic is elegant, cultural, and rich in traditional Asian festival vibes.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/2901951/pexels-photo-2901951.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A stylish young woman with long, wavy brown hair, sitting on an old stone step in front of a rustic teal-colored wooden door covered in lush green ivy. She wears a short, trendy outfit consisting of an orange skirt, a leopard-print top, and black fishnet stockings. She sits with one knee raised, her arms resting on her legs, and gazes confidently at the camera. The atmosphere is moody and cinematic, with soft natural lighting enhancing the depth and texture of the background. The scene has a rich teal and earthy color palette, creating a vintage, urban aesthetic with a hint of mystery.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/247350/pexels-photo-247350.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with wavy, shoulder-length auburn hair sitting gracefully on lush green grass in a sunlit outdoor setting. She wears a vintage-style blue polka-dot dress with a black belt around her waist and a wide-brimmed white sun hat. Her soft expression and gentle smile radiate warmth as she poses elegantly with her hands resting on her lap. The sunlight filters through, creating a dreamy, soft-focus effect with a golden glow. The background is slightly blurred, enhancing the serene, nostalgic atmosphere of a perfect summer day.",
      likes: 191
    },
    {
      url: "https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "Photorealistic medium shot of a young woman with long dark hair, sitting cross-legged on a bed. She is wearing a comfortable grey long-sleeved shirt and light-colored pants. She is looking down, focused on a silver laptop resting on her lap, while holding a white mug near her face as if about to drink. The background consists of pillows on the bed, primarily in shades of blue and grey. Soft, natural indoor lighting, cozy atmosphere. High detail.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/31317469/pexels-photo-31317469/free-photo-of-smiling-woman-with-sunglasses-and-dark-hair-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "Photorealistic close-up outdoor portrait of a young woman with dark, shoulder-length hair, looking directly at the camera with a broad, genuine smile. She has a pair of sunglasses pushed up onto the top of her head. She is wearing a light-colored t-shirt under a dark jacket or layer. Soft, natural daylight. The background is significantly blurred with green and neutral bokeh (shallow depth of field). High detail, sharp focus on her face. The image has a warm, inviting atmosphere, evoking a sense of joy and confidence. The overall aesthetic is modern and casual, with a hint of urban style.",
      likes: 78
    },
    {
      url: "https://images.pexels.com/photos/31343020/pexels-photo-31343020/free-photo-of-glamorous-woman-at-elegant-evening-party.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "Photorealistic medium shot of a glamorous woman at an elegant evening event. She has her hair styled up and is looking back over her left shoulder towards the camera with a smile. She's wearing a striking long-sleeved dress covered in highly reflective bronze or gold and black sequins, featuring structured shoulder pads. The background is dimly lit with warm lights and vertical decorative elements (like tall plants or reeds), softly blurred (bokeh effect). Fashion photography style, sharp focus on the woman, highly detailed.",
      likes: 124
    },
    {
      url: "https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "Photorealistic portrait of a young woman with a large, voluminous dark afro hairstyle, adorned with a small white flower tucked above her right temple. She's wearing a simple black tank top and heavily ripped blue jeans. She is in a squatting pose on outdoor steps or ground, smiling/laughing joyfully with her right hand partially covering her eye/face. Background appears to be an urban setting, slightly out of focus. Moody, natural lighting, candid street style. Highly detailed.",
      likes: 191
    },
    {
      url: "https://images.pexels.com/photos/8485714/pexels-photo-8485714.jpeg?auto=compress&cs=tinysrgb&w=600(working%20woman)",
      prompt: "A brunette woman with glasses, wearing a white blazer, light-colored top, and white pants, sitting at a clean white desk in a bright office, working on a laptop, looking directly at the camera with a neutral expression, professional setting, natural light from a nearby window, blurred background with plants, high quality, realistic, modern office style.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/17244623/pexels-photo-17244623/free-photo-of-a-woman-in-a-crop-top-and-leggings-poses-on-a-pole.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "Full body fashion photograph of a woman with dark hair pulled back, wearing a black long-sleeved crop top and leggings with a high-contrast black-and-white abstract pattern. She's wearing black platform boots. She is posing leaning back against a yellow cylindrical bollard, outdoors on asphalt next to a beige brick building wall. Her hand is near her face/hair, looking away from the camera. Bright, direct sunlight casting strong, sharp shadows. Urban street style, photorealistic, highly detailed, high contrast.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/3075968/pexels-photo-3075968.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot of a woman with blonde hair in a high bun, leaning on a purple railing and looking directly at the camera, wearing a white t-shirt and blue denim shorts, with a colorful house in the background painted in pastel shades, bright natural outdoor lighting, casual portrait.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/17758677/pexels-photo-17758677/free-photo-of-a-woman-in-a-black-dress-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A beautiful woman with long brown hair sitting on the ground against a dark gray wall, wearing a black slip dress and black strappy high heels, looking slightly away, elegant pose, natural lighting, realistic, high quality.",
      likes: 191
    },
    {
      url: "https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A woman with long, flowing brown hair, wearing a white flowing dress, is sitting in a lotus position in a lush green forest. Her arms are raised above her head in a prayer pose, and she has a peaceful expression on her face. Sunlight filters through the leaves of the trees, creating dappled shadows on the ground. The overall atmosphere is serene and tranquil.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/3778361/pexels-photo-3778361.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A woman with curly reddish-brown hair, wearing round glasses, a white long-sleeved top, and a brown overall dress, sitting on a chair in an artist's studio, holding a paintbrush in her right hand and looking to her right, an easel with a canvas behind her, another artwork leaning against a light beige wall, soft natural light, artistic atmosphere, high quality, realistic.",
      likes: 78
    },
    {
      url: "https://images.pexels.com/photos/4857721/pexels-photo-4857721.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A woman with long brown hair, wearing a dark gray sweater and dark pants, sitting on the edge of a bed with white sheets and a patterned throw blanket, looking out of a window to her left, hands clasped in her lap, soft natural light coming through the window, dimly lit bedroom with wooden paneled walls, a bedside lamp on a small table next to the bed, calm and contemplative atmosphere, high quality, realistic",
      likes: 124
    },
    {
      url: "https://images.pexels.com/photos/1987343/pexels-photo-1987343.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young man with short brown hair, wearing glasses and a dark green sweater, sitting on a couch and reading a book, a floor lamp casting a warm light on him, dark gray wall in the background, natural lighting, realistic, high quality.",
      likes: 191
    },
    {
      url: "https://images.pexels.com/photos/13614848/pexels-photo-13614848.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with dark hair sitting on a white plastic chair at a beach resort, wearing a black swimsuit top, a white towel wrapped around her head like a turban, large dark sunglasses, and a chunky silver chain necklace, sitting with legs crossed, holding a magazine with the title 'POSTA' in her left hand, right arm raised to adjust the towel on her head, background with several white plastic chairs and tables under large straw umbrellas, sandy ground, bright natural lighting, sunny day, relaxed summery vibe, photorealistic style, high detail.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/713829/pexels-photo-713829.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young man with short brown hair, wearing a dark jacket over a light-colored shirt, looking to his right in a three-quarter profile view, standing in front of a brick wall with orange, brown, and black graffiti, natural daylight, casual urban style, high quality, realistic.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/4486779/pexels-photo-4486779.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young man with short dark curly hair, wearing a maroon long-sleeved shirt, leaning against a white wall with vertical grooves, eyes closed and head tilted back looking upwards, soft lighting, relaxed pose, pensive mood, high quality, realistic.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/206593/pexels-photo-206593.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A woman with long blonde wavy hair, wearing a light-colored sleeveless dress with thin straps, sitting on a bench, looking at the camera with a slight smile, bright natural light from a large window, blurred indoor background with a piano, casual and serene atmosphere, high quality, realistic.",
      likes: 191
    },
    {
      url: "https://images.pexels.com/photos/1616196/pexels-photo-1616196.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A stylish young man with silver hair, sitting on a wooden stool in a minimalist sunlit room. He wears a black sleeveless tank top, dark loose-fit pants, and black leather boots. His pose is relaxed, with his legs slightly spread and hands resting on his thighs. He has a calm and introspective expression, looking down slightly. Tattoos are visible on his toned arms. The background features a warm-toned wall with large rectangular sunlight patterns casting soft shadows. The atmosphere is serene, with a modern editorial photography style.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/3968443/pexels-photo-3968443.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with long brown hair, wearing a red and white patterned sundress, sitting cross-legged on green grass near a white teepee tent, holding a white flower in one hand and looking down at a book in her lap, peaceful expression, soft natural lighting, grassy field with trees in the blurred background, whimsical atmosphere, high quality, realistic.",
      likes: 78
    },
    {
      url: "https://images.pexels.com/photos/3124332/pexels-photo-3124332.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A woman with short blonde hair, wearing a dark and green plaid shirt, and light-colored pants, sitting on a ledge, turned slightly to her left, looking up and to her left, soft natural lighting, outdoors setting next to a window with a dark frame, blurred background with greenery, casual and relaxed atmosphere, high quality, realistic.",
      likes: 124
    },
    {
      url: "https://images.pexels.com/photos/26314466/pexels-photo-26314466/free-photo-of-brunette-woman-wearing-black-dress.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young brunette woman with her hair pulled back, wearing an off-the-shoulder black dress with a textured bodice and possibly dark gloves, standing with hands clasped in front of her, looking slightly to her left, soft diffused lighting, dark gray wall in the background with decorative molding, a black piano partially visible behind her, elegant pose, high quality, realistic.",
      likes: 191
    },
    {
      url: "https://images.pexels.com/photos/3007760/pexels-photo-3007760.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with long blonde hair in a high ponytail, wearing a white top, a light pink and white jacket draped off her shoulders, and white sneakers, sitting cross-legged on a green and red tennis court, holding a tennis racket, looking at the camera with a slight smile, bright sunlight, outdoor setting, a dark tennis net in the background, sporty and casual style, high quality, realistic.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/3582102/pexels-photo-3582102.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with long dark hair, wearing a dark green turtleneck sweater, sitting on a couch, holding a clapperboard in her lap, resting her head on her hand, looking to the side, soft lighting, indoor setting, high quality, realistic.",
      likes: 112
    },
    {
      url: "https://images.pexels.com/photos/7299449/pexels-photo-7299449.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A glamorous woman with blonde hair in an elegant updo, wearing a black sleeveless dress, long black gloves, and a gold necklace, sitting in a red velvet chair with legs crossed, looking to her left in profile view, dramatic lighting, vintage indoor setting, a small round table with a glass decanter and a glass on it, a dark piano and a framed picture in the background, elegant and mysterious atmosphere, high quality, realistic.",
      likes: 237
    },
    {
      url: "https://images.pexels.com/photos/15164447/pexels-photo-15164447/free-photo-of-photo-of-a-woman-posing-with-a-white-umbrella.png?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with long blonde hair, wearing a black hat, a white blouse, and a black skirt, holding a white lace parasol, standing in front of a wall covered in green vines, looking to the side with a gentle smile, soft natural lighting, outdoors setting, vintage aesthetic, high quality, realistic.",
      likes: 191
    },
    {
      url: "https://images.pexels.com/photos/20264868/pexels-photo-20264868/free-photo-of-young-woman-in-a-black-suit-posing-in-city.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with long blonde wavy hair, wearing a black blazer over a dark top and black pants, sitting on a bicycle on a city street, one leg on the pedal and the other on the ground, looking towards the camera with a serious expression, hands on the handlebars, blurred urban background with buildings and a traffic light, natural daylight, professional and confident style, high quality, realistic.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/3393793/pexels-photo-3393793.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A woman with long blonde hair blowing in the wind, wearing a long gray trench coat, standing on an empty asphalt road, looking towards the camera with her hair partially covering her face, soft overcast daylight, blurred background with a field and cloudy sky, natural and slightly windswept atmosphere, high quality, realistic.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/13715662/pexels-photo-13715662.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with long blonde hair, wearing a shimmering gold halter-neck maxi dress with a thigh-high slit, sitting on a white surface, looking towards the camera with a confident expression, soft lighting, studio setting, high quality, realistic.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/18151437/pexels-photo-18151437/free-photo-of-young-woman-in-a-dress-sitting-on-the-grass-with-a-book.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A woman with brown hair, wearing a light-colored floral print dress, sitting cross-legged on green grass and reading a book, peaceful expression, soft natural lighting, outdoor setting in a grassy area with trees in the blurred background, a woven basket next to her, serene and natural atmosphere, high quality, realistic.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/6076063/pexels-photo-6076063.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with long blonde hair sitting on a stool, wearing a white short-sleeved top, light-colored shorts, white sneakers, and white socks with red stripes, a tattoo on her left arm, a thin necklace, in a room with wooden paneling on one wall and a light teal wall on the other, green floor with a yellow line, a vintage boombox on a bench next to her, she’s sitting with one hand on her knee and the other on the bench, looking slightly to the side, natural lighting, casual retro vibe, high detail, photorealistic style.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/4442027/pexels-photo-4442027.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with brown hair tied in a bun, sitting cross-legged on the floor in an art studio, wearing a loose white shirt, light blue jeans, and black lace-up boots, holding a paintbrush in her right hand, left hand resting on her knee, looking forward with a focused expression, background with a large canvas showing a partially painted abstract face, scattered art supplies including paintbrushes in a jar, a palette, and papers on the floor, shelves with art materials, a draped blue and red cloth, a small vase, natural soft lighting, warm creative atmosphere, photorealistic style, high detail.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/5900510/pexels-photo-5900510.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A young woman with long blonde hair sitting at a table, wearing a dark green long-sleeved top, holding a piece of sushi close to her mouth with her right hand, left hand resting on her forehead with a thoughtful expression, gazing slightly upward, background with a light gray wall and a green cylindrical object on the right, a white plate with avocado sushi rolls topped with crumbs on the table, a glass of water next to the plate, soft natural lighting, clean and modern aesthetic, photorealistic style, high detail.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/17839085/pexels-photo-17839085/free-photo-of-a-woman-in-a-black-suit-and-white-sneakers-sitting-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot of a woman with brown hair, seated in a dark suit, white sneakers, and a light shirt, posing in an urban setting with buildings in the background, natural outdoor lighting, fashion portrait, slightly shallow depth of field.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/30691506/pexels-photo-30691506/free-photo-of-stylish-woman-posing-on-leather-sofa-indoors.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot of a woman with light blonde hair, seated on a dark leather sofa, wearing a white tank top, light blue jeans, and a black belt, posing with her hands near her face and looking at the camera, soft indoor lighting, casual portrait.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/3087904/pexels-photo-3087904.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot of a woman with light blonde hair, kneeling on a sandy beach and laughing, wearing a blue bikini top and patterned shorts, holding a book, with a yellow striped beach umbrella in the background, sunglasses, straw hat, bright natural outdoor lighting, beach vacation photography.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/13804185/pexels-photo-13804185.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A close-up black and white portrait of a woman with light-colored hair, reclining with her hand resting near her forehead, dramatic lighting creating strong shadows, dark background, slightly shallow depth of field.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/2703907/pexels-photo-2703907.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium close-up portrait of a woman with light brown hair pulled back in a bun, wearing a white button-down shirt with black trim and a gold chain necklace, looking directly at the camera with one hand near her chin, solid light gray background, studio lighting.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/2884310/pexels-photo-2884310.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot of a woman wearing a large straw hat and a dark green flowing dress with a slit, standing on a sandy beach and holding the brim of her hat, looking directly at the camera, warm natural outdoor lighting, fashion portrait.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/4541924/pexels-photo-4541924.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot portrait of a young woman with long hair, kneeling in a lush garden with flowering bushes, wearing a light-colored flowing dress, looking directly at the camera with a slightly serious expression, soft natural lighting, romantic portrait, fine art photography, slightly shallow depth of field, dreamy atmosphere.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/2646852/pexels-photo-2646852.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot of a woman in a green patterned bikini and sunglasses, standing by a swimming pool with one arm outstretched, wearing a sheer white fabric or shawl, outdoor setting with a pool and a wall with greenery, bright natural lighting, fashion photography, summery atmosphere, slightly shallow depth of field.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot portrait of a young woman with dark hair, standing casually and looking slightly to the side, wearing a white t-shirt tied in a knot at the front and light-colored jeans, indoors with shelves filled with books or magazines in the background, soft indoor lighting, casual portrait, candid pose, slightly shallow depth of field, warm tones.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/11565619/pexels-photo-11565619.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot of a woman with light hair, sitting on a window sill with legs crossed, wearing a light-colored suit, looking out a large window with a view of a snowy landscape, soft natural light coming through the window, interior portrait, slightly shallow depth of field.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/4057534/pexels-photo-4057534.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A full body shot of a woman with light brown hair, performing a low lunge yoga pose on a black mat, wearing a gray sports bra and dark leggings, indoors with a decorative wooden door or wall feature, plants visible in the background, soft indoor lighting, fitness photography.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/9489459/pexels-photo-9489459.png?auto=compress&cs=tinysrgb&w=600",
      prompt: "A full-body fashion photograph of a woman with her arms raised in a dynamic pose, looking slightly down, wearing a maroon top and white wide-legged trousers, with a flowing dark red fabric/shawl draping around her arms, against a sky with soft clouds and a hint of a building in the background, low angle shot, natural lighting, dramatic pose, artistic photography, soft shadows, detailed fabric texture.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/17839074/pexels-photo-17839074/free-photo-of-a-woman-in-black-pants-and-a-black-top-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot of a woman with light brown hair, standing against a dark textured wall, wearing black pants and a black top, looking slightly down with a relaxed pose, soft natural outdoor lighting, fashion portrait, slightly shallow depth of field.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/6474585/pexels-photo-6474585.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A full body shot of a woman with blonde hair, standing in a long hallway wearing a blue double-breasted suit and light-colored shoes, looking directly at the camera, patterned walls and flooring, soft indoor lighting, fashion portrait.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/17839074/pexels-photo-17839074/free-photo-of-a-woman-in-black-pants-and-a-black-top-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot of a woman with light brown hair, standing against a dark textured wall, wearing black pants and a black top, looking slightly down with a relaxed pose, soft natural outdoor lighting, fashion portrait, slightly shallow depth of field.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/6474585/pexels-photo-6474585.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A full body shot of a woman with blonde hair, standing in a long hallway wearing a blue double-breasted suit and light-colored shoes, looking directly at the camera, patterned walls and flooring, soft indoor lighting, fashion portrait.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/3939478/pexels-photo-3939478.jpeg?auto=compress&cs=tinysrgb&w=600",
      prompt: "A medium shot portrait of a young woman with long brown hair, looking directly at the camera with a slightly serious expression, one hand extended towards the viewer, wearing a dark long-sleeved top and light gray relaxed pants, indoors with a doorway or wall in the background, soft indoor lighting, naturalistic portrait, candid pose, slightly shallow depth of field, warm tones.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/31391919/pexels-photo-31391919/free-photo-of-young-man-relaxing-on-a-sunny-day-in-rabat.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A medium shot of a young man with brown hair, sitting on the ground outdoors and leaning against a tree trunk, wearing a dark jacket and dark jeans, looking directly at the camera, natural outdoor lighting.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/31383123/pexels-photo-31383123/free-photo-of-stylish-woman-posing-in-black-and-white-outfit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A full body shot of a woman with brown hair, wearing a black long-sleeved top with a white trim and white pants, standing against a solid white background, studio lighting, fashion portrait.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/31383758/pexels-photo-31383758/free-photo-of-stylish-woman-posing-in-black-swimsuit-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A full body shot of a woman with her hair pulled back, wearing a black swimsuit and a patterned cover-up, standing on a rocky outcrop by the blue sea, clear sky, bright natural outdoor lighting, beach fashion photography.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/31374316/pexels-photo-31374316/free-photo-of-artistic-portrait-of-a-man-with-modern-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A medium close-up portrait of a man with short dark hair and a mustache, wearing a dark gray sweater, looking directly at the camera with a serious expression, dark background with a green light source illuminating part of it, dramatic studio lighting.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/31385189/pexels-photo-31385189/free-photo-of-stylish-biker-sitting-on-motorcycle-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A medium shot of a man with a beard, sitting on a motorcycle outdoors, wearing dark clothing including a vest and dark pants, looking to the side, natural outdoor lighting.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/31386167/pexels-photo-31386167/free-photo-of-casual-portrait-of-man-on-urban-staircase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A medium shot of a man wearing a dark jacket, dark jeans, and light-colored shoes, sitting on outdoor metal stairs with legs spread, looking directly at the camera, casual portrait, urban setting.",
      likes: 98
    },
    {
      url: "https://images.pexels.com/photos/31374754/pexels-photo-31374754/free-photo-of-elegant-woman-in-black-dress-party-fashion.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      prompt: "A full body shot of a woman with her hair pulled back, wearing a black dress with a unique cut-out design, posing against a glittery background, studio lighting, fashion portrait.",
      likes: 98
    },
    // Rest of the images...
    
  ];

  const handleLike = (index: number) => {
    setLikedImages({
      ...likedImages,
      [index]: !likedImages[index]
    });
  };

  // Function to determine item size (span) for masonry grid
  const getItemSpan = (index: number) => {
    // Create a pattern for different sized grid items
    // First item is double size
    if (index === 0) return 'span-1x2';
    
    // Some items span 2 columns
    if (index % 7 === 3) return 'span-1x2';
    
    // Some items span 2 rows
    if (index % 5 === 2) return 'span-1x2';
    
    // Most items are standard size
    return '';
  };

  return (
    <div className="gallery-wrapper">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Believe me They are{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          AI Generated
        </span>
        🔥
      </h1>
      <div className="gallery-container">
        {imageData.map((image, index) => (
          <div 
            key={index} 
            className={`gallery-item ${getItemSpan(index)}`}
          >
            <div className="image-container">
              <img 
                src={image.url} 
                alt={`Gallery ${index}`} 
                className="gallery-image" 
              />
              
              {/* Like button that appears without hover */}
              <div className="like-button-container">
                <button 
                  className={`like-button ${likedImages[index] ? 'liked' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(index);
                  }}
                >
                  <svg viewBox="0 0 24 24" className="heart-icon">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                {index === 1 && <span className="like-count">{likedImages[index] ? image.likes + 1 : image.likes}</span>}
              </div>
              
              {/* Hover overlay with prompt text and use prompt button */}
              <div className="image-overlay">
                <div className="prompt-text">{image.prompt}</div>
                
                {/* Updated "Use this prompt" button with animation */}
                <button 
                  className={`use-prompt-button ${clickedButtonIndex === index ? "clicked" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUsePrompt(image.prompt, index);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 12h4"></path>
                    <path d="M9 16h6"></path>
                  </svg>
                  Use this Prompt for Generating Photos
                </button>
                
                <div className="user-info">
                  {index % 2 === 0 && (
                    <div className="user-avatar">
                      <span className="avatar-letter">{String.fromCharCode(65 + (index % 26))}</span>
                    </div>
                  )}
                  <div className="like-container">
                    <span className="like-count">{likedImages[index] ? image.likes + 1 : image.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Enhanced CSS with button animation */}
      <style jsx>{`
        .use-prompt-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          border-radius: 4px;
          padding: 8px 12px;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.3s;
          opacity: 0;
          transform: translateY(-10px);
          overflow: hidden;
          z-index: 10;
        }
        
        .use-prompt-button:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
          z-index: -1;
        }
        
        .use-prompt-button.clicked:before {
          width: 300px;
          height: 300px;
          opacity: 0;
        }
        
        .use-prompt-button.clicked {
          transform: scale(0.95);
          background-color: rgba(128, 0, 128, 0.9);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }
        
        .use-prompt-button:hover {
          background-color: rgba(128, 0, 128, 0.8);
          transform: translateY(0) scale(1.05);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .image-container:hover .use-prompt-button {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Examples;