"use client";
import React, { useState, useRef, useEffect } from 'react';

const PackCardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [cardHeights, setCardHeights] = useState<Record<number, number>>({});
  const descriptionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Sample pack data with varying description lengths
  const packs = [
    {
        id: 1,
        title: "🔥 Tinder",
        description: "Look your best while staying true to who you are. Take photos with a variety of poses, playful expressions, and vibrant colors to make your dating profile stand out. Attract more matches on apps like Tinder, Bumble, and Hinge by showcasing your unique personality and style, helping you create a more engaging and appealing profile.",
        photoCount: "30 PHOTOS",
        badge: "NEW",
        ranCount: "70X RAN THIS WEEK",
        color: "#ff5555",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726228803-9bdbabdb2563ce90f6a5c008388ec00b-4.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222540-9330806c580b40b1b917f75d193bb8e8-4.png"]
      },
    {
      id: 2,
      title: "📸 Instagram",
      description: "Take engaging and visually stunning photos that showcase your personality as an Instagram influencer. Boost your confidence, likes and followers with captivating images that reflect your unique style and charisma",
      photoCount: "32 PHOTOS",
      ranCount: "69X RAN THIS WEEK",
      color: "#333333",
      images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725056606-3be4cad549e0273b3a317e2b27805cb7-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222834-13df32fb20f9c3a65fb2d7a486c9bca5-4.png"]
    },
    {
      id: 3,
      title: "💋 Boudoir",
      description: "Enhance your allure with a stunning selection of sensual lingerie and elegant attire in this captivating boudoir shoot. These intimate sessions are not only empowering but also healing, helping boost your confidence and celebrate your beauty in a personal, transformative way.",
      photoCount: "31 PHOTOS",
      ranCount: "65X RAN THIS WEEK",
      color: "#3399ff",
      images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726174466-5cb9875c1613d9f0b25865923f1227a4-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726222561-e3fcd737c19c89ace7051e29e1465b41-2.png"]
    },
    {
        id: 4,
        title: "📸 Professional headshots",
        description: "Get a professional look with headshots you can use on your LinkedIn. Stand out from the competition, increase your visibility, attract more job offers by making a strong first impression. Studies show profiles with professional-looking photos get up to 230% more engagement from hiring managers!",
        photoCount: "32 PHOTOS",
        ranCount: "60X RAN THIS WEEK",
        color: "#33aa66",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726226911-404f577762c1c5a6c4a701de9b0e2aa9-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726227037-0cf1b7573534bc3cb91f87470f1a31c3-4.png"]
      },
      {
        id: 5,
        title: "🤳 AI Selfies",
        description: "Create AI-generated selfies that capture your best angles and expressions. Personalize your look with unique styles and settings, giving you perfect selfies every time without the hassle",
        photoCount: "45 PHOTOS",
        ranCount: "59X RAN THIS WEEK",
        color: "#666666",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725212106-44b706d64214696adeadd63f6909af6e-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725055197-f6fa654e79566cb65a500bc1fc05d97d-1.png"]
      },
      {
        id: 6,
        title: "❤️ Hinge",
        description: "Hinge is about authenticity and real conversations. Capture moments that reflect who you are—whether you're relaxing with friends, exploring a new spot, or indulging in your hobbies—and showcase your true personality to spark deeper connections.",
        photoCount: "38 PHOTOS",
        ranCount: "55X RAN THIS WEEK",
        color: "#000000",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738959344-1ceeaf3345c34f268d6ded5bbbd63d75-4.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738957157-3022d46e5dff7da3934ce3449bdf58fd-3.png"]
      },
      {
          id: 7,
          title: "📸 LinkedIn headshots",
          description: "Your LinkedIn profile is your digital first impression—make it count with a studio-quality professional headshot that enhances your credibility and personal brand. Photo AI helps you create polished, high-quality headshots that meet the standards of recruiters, hiring managers, and business professionals. Upgrade your LinkedIn profile with a professional, career-boosting headshot today.",
          photoCount: "35 PHOTOS",
          badge: "NEW",
          ranCount: "54X RAN THIS WEEK",
          color: "#ff5555",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431384-c4390b29c27f9361d5782ee0bc8dae70-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431300-03ad592e2272242c73a5d9e3d2310f40-3.png"]
        },
      {
        id: 8,
        title: "💎 Luxury Lifestyle",
        description: "Enter into a world of elegance and sophistication. Showcase expensive outfits, lavish settings, and a lifestyle of infinite opulence as a luxury lifestyle influencer living in Dubai",
        photoCount: "30 PHOTOS",
        ranCount: "50X RAN THIS WEEK",
        color: "#333333",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735428142-4294600c302b9836b7da543f58071462-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1735429109-9474459059f7cd379ceed0ad7bc6f099-3.png"]
      },
      {
        id: 9,
        title: "🗣️ Keynote speaker",
        description: "Take compelling photos of yourself speaking with authority on stage at a conference. Showcase your leadership and expertise in a professional setting, capturing powerful moments that highlight your confidence and influence.",
        photoCount: "31 PHOTOS",
        ranCount: "49X RAN THIS WEEK",
        color: "#3399ff",
        images: ["https://r2-us-west.photoai.com/1726189457-4b6c76fb81b18acb060d78309971692f-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726189625-2f1cc32871d04a87672f996ef885ef23-1.png"]
      },
      {
        id: 10,
        title: "👸 Model headshots",
        description: "Get studio-quality model headshots for your professional modeling career. Capture the perfect agency-ready look for castings, portfolio updates, and commercial shoots. Get polished, high-fashion model headshots with flawless lighting, sharp focus, and a clean background, all following industry standards.",
        photoCount: "32 PHOTOS",
        ranCount: "48X RAN THIS WEEK",
        color: "#33aa66",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431467-582468ef2cf9a5c8b9bafe53973a3e3f-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431236-d2c359abea3159c7c8069c6c8370b8dd-4.png"]
      },
      {
        id: 11,
        title: "📸 Glamour",
        description: "Immerse yourself in a glamour photo shoot, where your allure is captured through striking poses, captivating lighting, and provocative outfits.",
        photoCount: "36 PHOTOS",
        ranCount: "45X RAN THIS WEEK",
        color: "#666666",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726230968-303db15d3ad99a4fa6e35fc6e9ddcced-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726230779-ec71f28fc8007b0054ec3c3cd5fd072f-4.png"]
      },
      {
        id: 12,
        title: "❤️🔥 AI Dating",
        description: "Use AI to generate better dating photos for Tinder, Bumble and Hinge. Get more matches and make your dating profile stand out on dating apps with personalized, high-quality images. Experiment with different poses, outfits, and settings to showcase your best self and increase your chances of finding love.",
        photoCount: "38 PHOTOS",
        ranCount: "42X RAN THIS WEEK",
        color: "#000000",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726177851-6aa0dab9b691e0d0e80091d81d26f188-3.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726176128-9329f31f209c6f36cd6bdbf3fa4c4ef7-1.png"]
      },
      {
        id: 13,
        title: "🏋️ Fitness",
        description: "Show off your hard work and dedication with our fitness photo shoot. Capture your fitness journey with powerful, motivating images that highlight your progress and achievements.",
        photoCount: "30 PHOTOS",
        badge: "NEW",
        ranCount: "40X RAN THIS WEEK",
        color: "#ff5555",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726175140-a30197dbd46894eb9b36a34eebf23f1a-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726175056-77ce5e13da0235f0966cd881308f1f6c-3.png"]
      },
    {
      id: 14,
      title: "👨 Actor headshots",
      description: "Get studio-quality acting headshots from the comfort of your home while following industry-standard guidelines used by top Hollywood casting directors without the expensive photographer. Photo AI helps you create studio-grade headshots that meet Hollywood industry standards for auditions and casting calls. With perfect lighting, a neutral background, and a sharp focus on your face, you'll get high-quality images that match the exact look casting directors expect.",
      photoCount: "32 PHOTOS",
      ranCount: "40X RAN THIS WEEK",
      color: "#333333",
      images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431419-22d0aab7cac23be8aaaa4ebc3430b92e-3.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738431272-63c97113d9807f4524d7d395a478ac38-2.png"]
    },
    {
      id: 15,
      title: "🍸 Nightlife",
      description: "Take photos in cocktail bars, nightclubs, and other nightlife venues, showcasing different outfits. Capture the essence of vibrant nightlife while experimenting with stylish looks in dynamic settings.",
      photoCount: "31 PHOTOS",
      ranCount: "39X RAN THIS WEEK",
      color: "#3399ff",
      images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726186662-80487bf05da1339a1192e485fde707e2-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726186851-42be123beefb037e45918794be3dd414-1.png"]
    },
    {
        id: 16,
        title: "🎲 A night in Las Vegas",
        description: "Experience a thrilling night in Las Vegas. From dazzling casinos and the vibrant Las Vegas Strip to lively dive bars and night clubs, capture the essence of this iconic nightlife destination.",
        photoCount: "32 PHOTOS",
        ranCount: "38X RAN THIS WEEK",
        color: "#33aa66",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726614073-b1e20731e2f782ac13fd61359a08bb81-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726614115-2bacce215c67bff37b2af82739dd193b-3.png"]
      },
      {
        id: 17,
        title: "🎵 Music festival",
        description: "Capture the vibrant energy of a music festival by dressing up in your festival outfit. Showcase the colorful atmosphere and dynamic vibe with eye-catching, lively photos that reflect the excitement of the event.",
        photoCount: "30 PHOTOS",
        ranCount: "38X RAN THIS WEEK",
        color: "#666666",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1725061420-2769ec49c4d6b4ce2755ad8c060bcff2-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726210770-9abab996e598c4cdb6c331f8fe0958a1-2.png"]
      },
      {
        id: 18,
        title: "🌲 Outdoor adventure",
        description: "Create awe-inspiring and dynamic photos that showcase the beauty and excitement of outdoor adventures. Capture the thrill and splendor of nature with vibrant, engaging images.",
        photoCount: "32 PHOTOS",
        ranCount: "37X RAN THIS WEEK",
        color: "#000000",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726212241-4e48dabb6c7903827232077736d24073-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726212514-fb10496735cf3d34aa9ab2fc88f02ee8-3.png"]
      },
      {
          id: 19,
          title: "📸 YouTube thumbnail reaction face generator",
          description: "Use AI to generate YouTube reaction faces for your thumbnails to increase clicks on your video. You will get photos of yourself with reaction faces like shocked, angry, happy and many more.",
          photoCount: "30 PHOTOS",
          badge: "NEW",
          ranCount: "36X RAN THIS WEEK",
          color: "#ff5555",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726221279-9a28de9700ccc8145ebda7767445eb6c-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726220963-70b49ba726fd0ec38a877bdb1db5f7de-3.png"]
        },
      {
        id: 20,
        title: "⭐️ Celebrity",
        description: "Become a celebrity for day and step into the spotlights. Capture iconic celebrity moments, from red carpet events to late-night talk shows, glamorous award ceremonies, and high-end fashion shoots. Showcase your unique style and charisma with stunning images that reflect the glitz and glamour of celebrity life.",
        photoCount: "30 PHOTOS",
        ranCount: "35X RAN THIS WEEK",
        color: "#333333",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1738427104-88abc570d6d06f025b105023b78bcbd9-3.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738428324-f8b3b3dca545e96711d40604020976fd-3.png"]
      },
      {
        id: 21,
        title: "🚏 Street style",
        description: "Capture trendy outfits in vibrant city street settings. Showcase your style with dynamic urban backdrops that highlight your fashion in eye-catching, lively environments.",
        photoCount: "31 PHOTOS",
        ranCount: "34X RAN THIS WEEK",
        color: "#3399ff",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1725086598-78cb3719bd1d26cc491c33eb5a55fd8f-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726065781-44703d90dd8a66140972144056fe5a27-3.png"]
      },
      {
        id: 22,
        title: "🕵🏽 Mob wife",
        description: "Transform yourself into a glamorous mobster's wife, draped in luxurious faux fur coats, bold leopard prints, and adorned with eye-catching jewelry. Embrace the allure of old-school elegance and high-stakes sophistication.",
        photoCount: "32 PHOTOS",
        ranCount: "33X RAN THIS WEEK",
        color: "#33aa66",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1725048030-64ba4e34077eb55eb6802fa5b475f84b-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726213124-0099f125371f4b50b97cab7a7091db5d-4.png"]
      },
      {
        id: 23,
        title: "🌎 Travel",
        description: "Travel the world and capture stunning photos from Paris to Tokyo. Showcase your global adventures with vibrant images from iconic cities and diverse cultures.",
        photoCount: "36 PHOTOS",
        ranCount: "32X RAN THIS WEEK",
        color: "#666666",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726211779-eaf78fe8a4d0e9d4db13ee84bc7f9f17-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743440539-64b2196779dc290f8b003f3637db1710-3.png"]
      },
      {
        id: 24,
        title: "👙 Swimsuit",
        description: "Take stunning photos in your swimsuit with ease and style. Perfectly capture your beach outfits with beautiful, flattering images that highlight your confidence and elegance.",
        photoCount: "38 PHOTOS",
        ranCount: "30X RAN THIS WEEK",
        color: "#000000",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726186641-b6c39153ad8976ef1cf1d246f1593f46-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1725066086-5a7af939c428f095413036c78a0eabe8-1.png"]
      },
      {
        id: 25,
        title: "🖊️ AI Tattoo Generator",
        description: "Experiment with different tattoo styles and placements before getting inked. YourFace AI generates realistic tattoo concepts to give you ideas and inspiration.",
        photoCount: "36 PHOTOS",
        ranCount: "29X RAN THIS WEEK",
        color: "#666666",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738947585-4b4d16695e6f273b67cd027536a0c088-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1738948742-e30a4be9e678caf98f4b4eeaed783d32-4.png"]
      },
      {
        id: 26,
        title: "📸 Instant camera",
        description: "Instant film camera photographs with a classic analog camera for a vintage, timeless look. Not affiliated with Polaroid or Instax. Capture moments with an authentic, nostalgic feel that stands out in a digital age.",
        photoCount: "38 PHOTOS",
        ranCount: "28X RAN THIS WEEK",
        color: "#000000",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185841-43f810025b1de6871563a90c4c8c10ea-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1726185946-6247b09a50cfd9f6b998a6512d6ddb02-2.png"]
      },
      {
        id: 27,
        title: "🎧 Rap Album Cover",
        description: "See yourself on the cover of a rap album. Street-style photography, dramatic lighting, and hip-hop aesthetics create legendary album covers. Capture the essence of rap culture with bold, eye-catching images that reflect your unique style and persona.",
        photoCount: "32 PHOTOS",
        ranCount: "27X RAN THIS WEEK",
        color: "#333333",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1738946849-13de038c97851a1d459d82e4b6134dcc-3.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1738947101-75cffb2bf18047d6f64422395e90fbcc-3.png"]
      },
      {
        id: 28,
        title: "📣 Cheerleader",
        description: "Step into the spotlight and do a fun, energetic cheerleader photo shoot. Capture dynamic poses and vibrant outfits that showcase the spirit, energy, and charm of a cheerleader.",
        photoCount: "31 PHOTOS",
        ranCount: "26X RAN THIS WEEK",
        color: "#3399ff",
        images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1735270562-1821b444bda923c7eeeca89f25cc19b3-4.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1735270394-11e1d3fe8924d14d6c88c5f7aab7ad73-3.png"]
      },
      {
          id: 29,
          title: "🍾 New Year's Eve",
          description: "Start the new year with a dazzling, celebratory photo shoot. Capture festive outfits, sparkling props, and a vibrant atmosphere filled with excitement and charm.",
          photoCount: "32 PHOTOS",
          ranCount: "25X RAN THIS WEEK",
          color: "#33aa66",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1735272831-55d2af9c3a5499170d8d858d52f495e5-4.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1735272369-1f00312182c5320dd2597e189bcc9d47-3.png"]
        },
        {
          id: 30,
          title: "🤵 Virtual suits try on",
          description: "Experiment with different styles, colors, fabrics, and patterns of suits. Discover the perfect look by trying on a variety of tailored options and combinations.",
          photoCount: "30 PHOTOS",
          ranCount: "24X RAN THIS WEEK",
          color: "#666666",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726184430-32a585682945e1eccc14a25a66b0bd3c-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726183905-8bce93873a46f2236f88807a683a01f4-4.png"]
        },
        {
          id: 31,
          title: "🥤 Retro 1950s Diner",
          description: "Do a pin up inspired photo shoot in a 1950s diner featuring pancakes, milkshakes and cheeseburgers. Capture the essence of retro Americana with vibrant colors, classic diner aesthetics, and playful poses that evoke nostalgia and charm.",
          photoCount: "32 PHOTOS",
          ranCount: "23X RAN THIS WEEK",
          color: "#000000",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726141699-be0ab5c2476994282861f008ea2d33f1-3.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726141972-db4e074a25c93279d82d4093aabc1a50-2.png"]
        },
        {
            id: 32,
            title: "📚 Author Headshots",
            description: "Get professional author headshots that convey creativity, intellect, and professionalism. Photo AI helps you create studio-grade headshots that are perfect for your book covers, website, or professional profiles. With perfect lighting, a neutral background, and a focus on your thoughtful demeanor, you'll get high-quality images that reflect the creativity and expertise you provide.",
            photoCount: "30 PHOTOS",
            badge: "NEW",
            ranCount: "22X RAN THIS WEEK",
            color: "#ff5555",
            images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743297604-75ab6e96b0c2325d0a946e5a1a716191-3.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743297562-a2a18a19aa640baba38e665588ab7d79-1.png"]
          },
        {
          id: 33,
          title: "🏡 Real Estate Agent Headshots",
          description: "Get professional real estate agent headshots that convey trust, expertise, and approachability. Photo AI helps you create studio-grade headshots that are perfect for your real estate listings, website, or professional profiles. With perfect lighting, a neutral background, and a focus on your confident demeanor, you'll get high-quality images that reflect the professionalism and dedication you provide.",
          photoCount: "30 PHOTOS",
          ranCount: "21X RAN THIS WEEK",
          color: "#333333",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743292632-8aca1e52b824f872143f14d5aa298349-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743292674-cb89c3b37a4429dff2c2333ebe27d3c5-2.png"]
        },
        {
          id: 34,
          title: "👘 Traditional clothes",
          description: "Capture traditional outfits against the backdrop of iconic locations worldwide. Highlight the beauty and culture of each destination with authentic, visually striking images.",
          photoCount: "31 PHOTOS",
          ranCount: "20X RAN THIS WEEK",
          color: "#3399ff",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726194460-c4f836c56096bef4dc40d9a126193763-4.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726194166-53bcaa700fe1ecd69cd002148e9fe2ed-1.png"]
        },
        {
          id: 35,
          title: "🪔 Diwali",
          description: "Celebrate the Festival of Lights with a vibrant and festive Diwali-themed photo shoot! Capture the joy and warmth of this special occasion with traditional outfits, beautiful rangoli, and glowing diyas.",
          photoCount: "32 PHOTOS",
          ranCount: "19X RAN THIS WEEK",
          color: "#33aa66",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1732837659-ae3588ba1f24cce30e8300cf79286f1f-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1732837723-e7bb0ca3a03ba0e07fbe048895fc6c7d-1.png"]
        },
        {
          id: 36,
          title: "🕵🏽 Mobster",
          description: "Transform yourself into a classic mobster, sporting sharp tailored suits, stylish fedoras, and bold, flashy jewelry. Channel the timeless swagger and power of the underworld with this iconic look.",
          photoCount: "36 PHOTOS",
          ranCount: "18X RAN THIS WEEK",
          color: "#666666",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1725076594-6d8c9b9f99dc406826d9004ab4ea4c30-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726221678-f8da1ed606d3831b30aee3d888558626-4.png"]
        },
        {
          id: 37,
          title: "🧑⚕️ Doctor Headshots",
          description: "Get professional physician headshots that convey trust, expertise, and professionalism. Photo AI helps you create studio-grade headshots that are perfect for your medical practice, website, or professional profiles. With perfect lighting, a neutral background, and a focus on your authoritative demeanor, you'll get high-quality images that reflect the care and expertise you provide.",
          photoCount: "38 PHOTOS",
          ranCount: "17X RAN THIS WEEK",
          color: "#000000",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743295659-7a00aef63cb15fd5c41039ec1f15a4d6-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743295722-2e8f52280166ee078dad3d37cb7f300f-4.png"]
        },
        {
          id: 38,
          title: "⚖️ Lawyer Headshots",
          description: "Get professional lawyer headshots that convey authority, expertise, and trustworthiness. Photo AI helps you create studio-grade headshots that are perfect for your law firm, website, or professional profiles. With perfect lighting, a neutral background, and a focus on your authoritative demeanor, you'll get high-quality images that reflect the professionalism and dedication you provide.",
          photoCount: "36 PHOTOS",
          ranCount: "16X RAN THIS WEEK",
          color: "#666666",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743290554-f74e9303a9ece8fad7c3a7605dac1b99-3.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743290575-11a2896524f43bf15eb70c5eadb6d600-1.png"]
        },
        {
          id: 39,
          title: "📸 Passport photo",
          description: "Skip the trip to the photo studio and get a perfect, passport-style photo in seconds with AI technology. Our AI-powered passport photo generator ensures the right lighting, background, and facial positioning. Get a high-quality passport ID photo with a plain background. Always verify with your municipality or government if they allow AI-generated ID photos.",
          photoCount: "38 PHOTOS",
          ranCount: "15X RAN THIS WEEK",
          color: "#000000",
          images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1738449341-7b2c43d637f942eeb075e79008be6824-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1738449131-0201f0ff72d3bdd4d85557477724271f-2.png"]
        },
        {
            id: 40,
            title: "🎄 Christmas",
            description: "Capture the magic of Christmas with a festive, joyful photo shoot. Featuring traditional Christmas decorations like trees, lights, and presents, these shoots are perfect to celebrate the holiday season and great to create your own Christmas Cards with!.",
            photoCount: "38 PHOTOS",
            ranCount: "14X RAN THIS WEEK",
            color: "#000000",
            images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1729200361-b1931982bba101a5bc69937c303998ef-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1729199815-9d84cf4d3df78be90d24a490f530ea73-4.png"]
          },
          {
            id: 41,
            title: "😂 Comedian headshots",
            description: "Get professional comedian headshots that capture your personality and comedic style while following industry-standard guidelines used by top entertainment agencies. Whether you're a rising comedian or an established performer, get eye-catching, industry-ready headshots effortlessly from home.",
            photoCount: "31 PHOTOS",
            ranCount: "13X RAN THIS WEEK",
            color: "#3399ff",
            images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1738431189-90207cc6fa3a31084d75462e884111bf-3.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1738431273-c3fd75e4acda21790edfd44a38c9e91b-3.png"]
          },
          {
            id: 42,
            title: "🎃 Halloween",
            description: "Get into the spooky spirit with fun and festive Halloween costumes! Transform yourself into playful, mysterious, and creative characters that capture the excitement of Halloween with a dash of fright.",
            photoCount: "32 PHOTOS",
            ranCount: "12X RAN THIS WEEK",
            color: "#33aa66",
            images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1729189208-f390d6f94d8c6db34840f2bb9c6ad89e-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1729188871-2dfd57114008fba4f34c2d8ce3e432ec-3.png"]
          },
          {
            id: 43,
            title: "🎨 Ghibli Style",
            description: "See yourself in Ghibli style—where soft, painterly strokes bring warmth to every detail, colors glow with a dreamlike vibrancy, and the world feels alive with quiet magic. Whether it’s the gentle sway of grass in the breeze, the charm of hand-drawn expressions, or the golden light of a sunset, Ghibli-style art transforms the ordinary into something beautifully nostalgic. It’s a world where wonder meets serenity, and every frame tells a story of adventure, kindness, and imagination. ✨🍃.",
            photoCount: "36 PHOTOS",
            ranCount: "11X RAN THIS WEEK",
            color: "#666666",
            images: ["https://contentstatic.techgig.com/thumb/msid-119593138,width-800,resizemode-4/How-to-create-Ghibli-style-images-without-paying-anything.jpg?126860", "https://static.toiimg.com/thumb/msid-119803817,imgsize-840859,width-400,resizemode-4/119803817.jpg"]
          },
          {
            id: 44,
            title: "🎌Turn yourself into an Anime Character",
            description: "Turn your photos into anime with Photo AI's online image to anime converter. Create stunning anime-style pictures that look just like you — from cute anime girls to fierce shonen heroes and fantasy warriors. Not affiliated with Ghibli. Instantly generate unique, professional-grade anime profile pictures perfect for Discord, gaming, social media, or cosplay. No drawing skills needed.",
            photoCount: "38 PHOTOS",
            ranCount: "10X RAN THIS WEEK",
            color: "#000000",
            images: ["https://m.media-amazon.com/images/I/61KBNVEfxcL._AC_UF1000,1000_QL80_.jpg", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1738513594-f7530fd6f8ea7b7d0b624d766eee4a18-1.png"]
          },
          {
            id: 45,
            title: "🪐 Life on Mars",
            description: "Experience your daily life on Mars in the future. Indoor living spaces with Mars' red landscape visible through large windows, with casual outfits, and futuristic aesthetics.",
            photoCount: "36 PHOTOS",
            ranCount: "9X RAN THIS WEEK",
            color: "#666666",
            images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726660612-ed03774c0ed1252acc9542d7738c65c4-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726660949-1744926bb4b2717ce25cdac5435e8627-4.png"]
          },
          {
            id: 46,
            title: "🧑🏫 Teacher Headshots",
            description: "Get professional teacher headshots that convey warmth, approachability, and professionalism. YourFace AI helps you create studio-grade headshots that are perfect for school websites, staff directories, or professional profiles. With perfect lighting, a neutral background, and a focus on your friendly demeanor, you'll get high-quality images that reflect the dedication and care you provide to students.",
            photoCount: "36 PHOTOS",
            ranCount: "8X RAN THIS WEEK",
            color: "#666666",
            images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743546286-57902c64aaf982d330f148a567482bab-3.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743546202-f8ec07c43685171a948803e479e4fed8-3.png"]
          },
          {
            id: 47,
            title: "📸 Corporate Headshots for Your Team",
            description: "Ensure brand consistency across your organization with professional, AI-generated headshots for your team members. Perfect for company websites, internal directories, and marketing materials. Easily generate uniform headshots for new hires and existing employees right from their home or office, eliminating the need for costly and time-consuming photo shoots.",
            photoCount: "38 PHOTOS",
            ranCount: "7X RAN THIS WEEK",
            color: "#000000",
            images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743594461-d893620a8f343fc22539ca8168ab83dc-4.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743594419-c58f7c511cab5335afbbf29d419f2963-4.png"]
          },
          {
            id: 48,
            title: "🎓 Graduation",
            description: "Capture the pride and joy of university graduation with stunning photos of graduates in their academic regalia and celebrating their achievements.",
            photoCount: "32 PHOTOS",
            ranCount: "6X RAN THIS WEEK",
            color: "#333333",
            images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726236327-2d6210bc617628f1ec241b9da49f62fb-4.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726236390-9645927d155a08cb5e980b3acea4766f-4.png"]
          },
          {
            id: 49,
            title: "🚀 Startup Headshots for Your Team",
            description: "Ensure brand consistency across your startup with professional, AI-generated headshots for your team members. Perfect for company websites, pitch decks, and social media profiles. Easily generate uniform headshots for new hires and existing employees right from their home or co-working space, eliminating the need for costly and time-consuming photo shoots.",
            photoCount: "31 PHOTOS",
            ranCount: "5X RAN THIS WEEK",
            color: "#3399ff",
            images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743604464-029a4f320c40cb70427e9fbeebc6ae62-2.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1743604422-7d6d96b4594bb1570faaa60d4b86ead3-2.png"]
          },
          {
              id: 50,
              title: "👩 Cyberpunk",
              description: "Try on a futuristic catalog of digital clothes inspired by Vaporwave and Cyberpunk aesthetics. Explore cutting-edge styles with vibrant colors and neon details for a modern, edgy look.",
              photoCount: "32 PHOTOS",
              ranCount: "4X RAN THIS WEEK",
              color: "#33aa66",
              images: ["https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1726192063-381861155e6b51baa7529b5030fbdabf-1.png", "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=300,height=450,quality=50/https://r2-us-west.photoai.com/1725082248-5745a4854a731649f3aa0a33212fa401-1.png"]
            },
    // Add more packs as needed  
  ];

  // Initialize refs arrays
  useEffect(() => {
    descriptionRefs.current = descriptionRefs.current.slice(0, packs.length);
    cardRefs.current = cardRefs.current.slice(0, packs.length);
  }, [packs.length]);

  // Measure the height of each description and update card heights
  useEffect(() => {
    const calculateCardHeights = () => {
      const newHeights: Record<number, number> = {};
      
      cardRefs.current.forEach((cardRef, index) => {
        if (cardRef) {
          // Get the actual height of the entire card content
          const contentHeight = cardRef.scrollHeight;
          
          // Set height with some buffer
          newHeights[index] = contentHeight + 10; // Add a small buffer
        }
      });
      
      setCardHeights(newHeights);
    };

    // Run calculation after a short delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      calculateCardHeights();
    }, 100);

    return () => clearTimeout(timer);
  }, [packs]);

  // Handle card click to change active card
  const handleCardClick = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
  };

  // Calculate position and rotation for each card
  const getCardStyle = (index: number) => {
    const isActive = index === activeIndex;
    const distance = Math.abs(index - activeIndex);
    
    // Base rotation and offset
    let rotate = 0;
    let translateX = 0;
    let translateY = 0;
    let zIndex = 10 - distance;
    let opacity = 1;
    let scale = 1;
    
    if (index < activeIndex) {
      // Cards to the left
      rotate = -10 - (distance * 5);
      translateX = -100 - (distance * 50);
      translateY = distance * 10;
      opacity = 1 - (distance * 0.2);
      scale = 1 - (distance * 0.1);
    } else if (index > activeIndex) {
      // Cards to the right
      rotate = 10 + (distance * 5);
      translateX = 100 + (distance * 50);
      translateY = distance * 10;
      opacity = 1 - (distance * 0.2);
      scale = 1 - (distance * 0.1);
    }
    
    // Use the calculated height or a default height that's large enough
    const heightValue = cardHeights[index] || 500; // Increased default height
    
    return {
      transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      zIndex: isActive ? 20 : zIndex,
      opacity: opacity > 0.3 ? opacity : 0.3,
      transition: 'all 0.5s ease-out',
      height: `${heightValue}px`, // Dynamic height based on content
      maxHeight: '550px' // Maximum height limit
    };
  };

  // Get border style based on card position
  const getCardBorderStyle = (index: number) => {
    const isActive = index === activeIndex;
    
    // Add orange border to the active/middle card
    if (isActive) {
      return {
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#ff6b00' // Orange border
      };
    }
    
    // Regular border for other cards
    return {
      borderWidth: '1px',
      borderStyle: 'solid', 
      borderColor: '#333333' // Dark gray border
    };
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-4xl font-bold text-white">
            Choose from {" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            50+
            </span>{" "}
             Photo Packs,{" "}
             <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
             no-need{" "}
            </span>
            to write{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
             Complex Prompts.
             </span>
        </h1>
      <div className="relative w-full h-2/3 flex items-center justify-center">
        {/* Fan-style card carousel */}
        <div className="relative w-full max-w-4xl mx-auto" style={{height: '312px'}}> {/* Increased container height to 700px */}
          {packs.map((pack, index) => (
            <div
              key={pack.id}
              ref={el => { cardRefs.current[index] = el; }}
              className="absolute top-0 left-0 right-0 mx-auto w-80 rounded-xl shadow-lg cursor-pointer" /* Increased width from w-72 to w-80 */
              style={{
                ...getCardStyle(index),
                ...getCardBorderStyle(index),
                transformOrigin: 'bottom center',
                backgroundColor: '#000000', // Black background
                overflow: 'hidden' // Prevent content overflow
              }}
              onClick={() => handleCardClick(index)}
            >
              {/* Card Content */}
              <div className="w-full h-full flex flex-col">
                {/* Dual Image Section - Fixed height */}
                <div className="w-full h-56 relative flex gap-2 p-2"> {/* Increased height to h-56 */}
                  {/* Left Image */}
                  <div className="w-1/2 h-full overflow-hidden rounded-lg">
                    <img 
                      src={pack.images[0]} 
                      alt={`${pack.title} image 1`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Right Image */}
                  <div className="w-1/2 h-full overflow-hidden rounded-lg">
                    <img 
                      src={pack.images[1]} 
                      alt={`${pack.title} image 2`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Badge overlay */}
                  {pack.badge && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {pack.badge}
                    </span>
                  )}
                </div>
                
                {/* Card Text Content */}
                <div className="p-4 flex flex-col justify-between flex-grow"> {/* Made padding consistent and added flex-grow */}
                  <div>
                    <h3 className="font-bold text-xl text-white">{pack.title}</h3>
                    <p 
                      className="text-sm text-gray-300 mt-2"
                      ref={el => { descriptionRefs.current[index] = el; }}
                    >
                      {pack.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4"> {/* Consistent margin */}
                    <span className="text-sm font-bold px-3 py-1 bg-green-500 text-white rounded-full">
                      {pack.photoCount}
                    </span>
                    {pack.ranCount && (
                      <span className="text-sm px-3 py-1 bg-orange-500 text-white rounded-full">
                        {pack.ranCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="mt-50 flex gap-4">
        <button 
          className="px-6 py-2 bg-gray-1000 text-white rounded-full hover:bg-gray-700 transition border border-gray-600"
          onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
        >
          Previous
        </button>
        <button 
          className="px-6 py-2 bg-gray-1000 text-white rounded-full hover:bg-gray-700 transition border border-gray-600"
          onClick={() => setActiveIndex(Math.min(packs.length - 1, activeIndex + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PackCardCarousel;