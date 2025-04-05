import { useState, useRef, SetStateAction } from "react";
import { X } from "lucide-react";

// This component will show the photo guidance section with scrollable images
const PhotoGuidanceSection = () => {
  const [activeGoodIndicator, setActiveGoodIndicator] = useState(0);
  const [activeBadIndicator, setActiveBadIndicator] = useState(0);
  
  const goodScrollContainerRef = useRef<HTMLDivElement>(null);
  const badScrollContainerRef = useRef<HTMLDivElement>(null);

  // Example good images - replace with your actual image paths
  const goodExampleImages = [
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselfie1.4c3b9e67.jpg&w=3840&q=75", 
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fafar1.0db04cdf.jpg&w=3840&q=75",
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselfie2.09c976ef.jpg&w=3840&q=75",
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fafar3.dadc52ca.jpg&w=3840&q=75",
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstanding.88ca9093.jpg&w=3840&q=75",
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fafar2.19c66129.jpg&w=3840&q=75",
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselfie3.0c0756bd.jpg&w=3840&q=75",
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fafar4.b210284c.jpg&w=3840&q=75"
  ];
  
  // Example bad images - you should replace these with actual bad example images
  const badExampleImages = [
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgroup.7b35dae7.png&w=1920&q=75", // These are placeholder images - replace with actual bad example images
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbadSelfie1.f59fb437.png&w=1920&q=75",
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmask.685e12b8.png&w=1920&q=75",
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FbadSelfie3.7ce8cb86.jpg&w=3840&q=75",
    "https://www.getphotoshootpro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finsta.2aafa4f8.png&w=1920&q=75"
  ];

  // Group images in sets of 3 for display
  const groupedGoodImages = [];
  for (let i = 0; i < goodExampleImages.length; i += 3) {
    groupedGoodImages.push(goodExampleImages.slice(i, i + 3));
  }

  const groupedBadImages = [];
  for (let i = 0; i < badExampleImages.length; i += 3) {
    groupedBadImages.push(badExampleImages.slice(i, i + 3));
  }

  // Function to handle scroll events and update active indicators
  const handleGoodScroll = () => {
    if (!goodScrollContainerRef.current) return;
    
    const scrollContainer = goodScrollContainerRef.current;
    const scrollPosition = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.clientWidth;
    
    // Calculate which slide is most visible
    const slideIndex = Math.round(scrollPosition / containerWidth);
    
    // Update the active indicator
    setActiveGoodIndicator(Math.min(slideIndex, groupedGoodImages.length - 1));
  };

  const handleBadScroll = () => {
    if (!badScrollContainerRef.current) return;
    
    const scrollContainer = badScrollContainerRef.current;
    const scrollPosition = scrollContainer.scrollLeft;
    const containerWidth = scrollContainer.clientWidth;
    
    // Calculate which slide is most visible
    const slideIndex = Math.round(scrollPosition / containerWidth);
    
    // Update the active indicator
    setActiveBadIndicator(Math.min(slideIndex, groupedBadImages.length - 1));
  };

  // Function to scroll to a specific indicator
  const scrollToGoodIndicator = (index: number) => {
    if (!goodScrollContainerRef.current) return;
    
    const scrollContainer = goodScrollContainerRef.current;
    const containerWidth = scrollContainer.clientWidth;
    
    scrollContainer.scrollTo({
      left: index * containerWidth,
      behavior: 'smooth'
    });
    
    setActiveGoodIndicator(index);
  };

  const scrollToBadIndicator = (index: number) => {
    if (!badScrollContainerRef.current) return;
    
    const scrollContainer = badScrollContainerRef.current;
    const containerWidth = scrollContainer.clientWidth;
    
    scrollContainer.scrollTo({
      left: index * containerWidth,
      behavior: 'smooth'
    });
    
    setActiveBadIndicator(index);
  };

  return (
    <div className="w-65 bg-gray-1000 text-white p-0 rounded-lg mb-4">
      <h2 className="text-2xl font-bold mb-4">
        Upload at least 10 recent photos of yourself. Preferably more than 20. The more and better the photos, the more accurate the model will be.
      </h2>
      
      {/* Good Photos Section */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold">Good Photos</h3>
      </div>
      
      <p className="text-slate-300 mb-0">
        Recent photos of you, a mix of close-ups and full-body shots in different locations, from different angles, in different outfits, and with different facial expressions - make sure they're current!
      </p>
      
      {/* Good Photos Scrollable container */}
      <div 
        ref={goodScrollContainerRef}
        className="w-100 h-40 overflow-x-auto mb-8 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800"
        onScroll={handleGoodScroll}
      >
        <div className="flex h-full w-fit">
          {groupedGoodImages.map((group, groupIndex) => (
            <div key={`good-group-${groupIndex}`} className="w-full h-full flex-shrink-0" style={{ width: '100%' }}>
              <div className="w-full h-full flex gap-2 px-2">
                {group.map((src, imageIndex) => (
                  <div key={`good-img-${groupIndex}-${imageIndex}`} className="w-1/3 h-full bg-slate-700 rounded overflow-hidden">
                    <img 
                      src={src} 
                      alt={`Example good photo ${groupIndex * 3 + imageIndex + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
                {/* Add placeholder divs if the group has less than 3 images */}
                {Array(3 - group.length).fill(null).map((_, i) => (
                  <div key={`good-placeholder-${i}`} className="w-1/3 h-full bg-slate-700 rounded overflow-hidden opacity-0"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bad Photos Section */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
          <X size={16} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold">Bad Photos</h3>
      </div>
      
      <p className="text-slate-300 mb-6">
        IG screenshots, heavy makeup, filters, little variety, group photos, other people/animals in the photo, sunglasses, hats, cropped or not visible face, and photos that are too old (because you might look different now)
      </p>
      
      {/* Bad Photos Scrollable container */}
      <div 
        ref={badScrollContainerRef}
        className="w-100 h-40 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800"
        onScroll={handleBadScroll}
      >
        <div className="flex h-full w-fit">
          {groupedBadImages.map((group, groupIndex) => (
            <div key={`bad-group-${groupIndex}`} className="w-full h-full flex-shrink-0" style={{ width: '100%' }}>
              <div className="w-full h-full flex gap-2 px-2">
                {group.map((src, imageIndex) => (
                  <div key={`bad-img-${groupIndex}-${imageIndex}`} className="w-1/3 h-full bg-slate-700 rounded overflow-hidden">
                    <img 
                      src={src} 
                      alt={`Example bad photo ${groupIndex * 3 + imageIndex + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
                {/* Add placeholder divs if the group has less than 3 images */}
                {Array(3 - group.length).fill(null).map((_, i) => (
                  <div key={`bad-placeholder-${i}`} className="w-1/3 h-full bg-slate-700 rounded overflow-hidden opacity-0"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGuidanceSection;