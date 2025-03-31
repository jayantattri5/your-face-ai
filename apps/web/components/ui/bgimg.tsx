'use client';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    buttonAnimationFrame?: number;
  }
}
import { useState, useEffect, useRef } from 'react';
import Showcase from './Logoshowcase';

export default function Netflix() {
  const mainHeadlineRef = useRef<HTMLHeadingElement>(null);
  const subHeadlineRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Set mobile state on client side
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    // Get references to the headline elements
    const mainHeadline = mainHeadlineRef.current;
    const subHeadline = subHeadlineRef.current;
    const button = buttonRef.current;
    
    if (!mainHeadline || !subHeadline || !button) return;
    
    // Arrays to hold the letter spans
    let mainLetters: HTMLSpanElement[] = [];
    let subLetters: HTMLSpanElement[] = [];
    
    // Create spans for main headline
    const mainText = "F*ck Waiting for the Perfect Shot";
    mainHeadline.innerHTML = '';
    
    for (let i = 0; i < mainText.length; i++) {
      const letter = document.createElement('span');
      letter.innerHTML = mainText[i] === ' ' ? '&nbsp;' : mainText[i] || '';
      letter.style.display = 'inline-block';
      letter.style.transition = 'color 0.5s ease-in-out';
      letter.style.color = '#FFFFFF';
      mainHeadline.appendChild(letter);
      mainLetters.push(letter);
    }
    
    // Create spans for sub headline
    const subText = "Generate It!";
    subHeadline.innerHTML = '';
    
    for (let i = 0; i < subText.length; i++) {
      const letter = document.createElement('span');
      letter.innerHTML = subText[i] === ' ' ? '&nbsp;' : subText[i] || '';
      letter.style.display = 'inline-block';
      letter.style.transition = 'color 0.5s ease-in-out';
      letter.style.color = '#FFFFFF';
      subHeadline.appendChild(letter);
      subLetters.push(letter);
    }
    
    // Color palettes - premium looking combinations
    const colorPalettes = [
      ['#f59e0b', '#f97316', '#ea580c', '#c2410c'], // Amber/Orange
      ['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af'], // Blues
      ['#10b981', '#059669', '#047857', '#065f46'], // Emeralds
      ['#f43f5e', '#e11d48', '#be123c', '#9f1239'], // Roses
      ['#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6']  // Purples
    ];
    
    let currentPaletteIndex = 0;
    
    // Function to animate letter colors like diffusing in water
    const animateLetters = () => {
      const palette = colorPalettes[currentPaletteIndex];
      if (!palette) return;
      currentPaletteIndex = (currentPaletteIndex + 1) % colorPalettes.length;
      
      // Animate main headline with ripple effect
      const mainLetterDelay = 100; // ms between each letter
      
      // Start from the center and move outwards
      const centerIndex = Math.floor(mainLetters.length / 2);
      
      // Forward direction (center to right)
      for (let i = centerIndex; i < mainLetters.length; i++) {
        const delay = (i - centerIndex) * mainLetterDelay;
        setTimeout(() => {
          if (!palette) return;
          const colorIndex = Math.floor(Math.random() * palette.length);
          if (mainLetters[i] && palette[colorIndex]) {
            mainLetters[i].style.color = palette[colorIndex]!;
          }
        }, delay);
      }
      
      // Backward direction (center to left)
      for (let i = centerIndex - 1; i >= 0; i--) {
        const delay = (centerIndex - i) * mainLetterDelay;
        setTimeout(() => {
          if (!palette) return;
          const colorIndex = Math.floor(Math.random() * palette.length);
          if (mainLetters[i] && palette[colorIndex]) {
            mainLetters[i].style.color = palette[colorIndex]!;
          }
        }, delay);
      }
      
      // Animate sub headline with a different pattern
      const subLetterDelay = 150; // ms between each letter
      
      // Left to right animation
      for (let i = 0; i < subLetters.length; i++) {
        const delay = i * subLetterDelay + 1500; // Start after main headline
        setTimeout(() => {
          if (!palette) return;
          const colorIndex = Math.floor(Math.random() * palette.length);
          if (subLetters[i] && palette[colorIndex]) {
            subLetters[i].style.color = palette[colorIndex];
          }
        }, delay);
      }
      
      // Animate button with water diffusion effect
      // Reduce animation complexity on mobile devices
      const currentIsMobile = window.innerWidth < 768;
      if (!currentIsMobile) {
        animateButtonDiffusion(palette);
      } else {
        animateSimpleButtonColor(palette);
      }
    };
    
    // Simpler button animation for mobile devices
    const animateSimpleButtonColor = (palette: string[] | undefined) => {
      if (!palette || palette.length < 2) return;
      
      // Remove existing gradient classes
      button.classList.remove('bg-gradient-to-r', 'from-amber-400', 'to-amber-300');
      
      // Set simple gradient background
      button.style.background = `linear-gradient(to right, ${palette[0]}, ${palette[1]})`;
    };
    
    // Function to animate button with water-like color diffusion
    const animateButtonDiffusion = (palette: string[] | undefined) => {
      if (!palette || palette.length < 2) return;
      
      // Remove existing gradient classes
      button.classList.remove('bg-gradient-to-r', 'from-amber-400', 'to-amber-300');
      
      // Create water diffusion effect
      const width = button.offsetWidth;
      const height = button.offsetHeight;
      
      // Create canvas for diffusion effect
      let canvas = button.querySelector('canvas');
      if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.borderRadius = 'inherit';
        canvas.style.zIndex = '-1';
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.style.backgroundColor = 'transparent';
        button.appendChild(canvas);
      }
      
      const ctx = canvas.getContext('2d');
      
      // Create initial gradient background
      if (!ctx) return;
      const grd = ctx.createLinearGradient(0, 0, width, 0);
      if (palette[0] && palette[1]) {
        grd.addColorStop(0, palette[0]);
        grd.addColorStop(1, palette[1]);
      }
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);
      
      // Create diffusion points - reduce number for mobile
      const isMobile = window.innerWidth < 768;
      const numPoints = isMobile ? 2 : 5; // Further reduced for better performance
      
      const points: { x: number; y: number; radius: number; maxRadius: number; color: any; speed: number; }[] = [];
      
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 0,
          maxRadius: Math.max(width, height) * 0.8,
          color: palette[Math.floor(Math.random() * palette.length)],
          speed: 1 + Math.random() * 2
        });
      }
      
      let animationFrame;
      let startTime = Date.now();
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        
        // Redraw base gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, width, height);
        
        // Draw diffusion points
        points.forEach(point => {
          point.radius = Math.min(elapsed / 1000 * point.speed * 50, point.maxRadius);
          
          // Create radial gradient for each point
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, point.radius
          );
          
          gradient.addColorStop(0, point.color + 'CC'); // Semi-transparent
          gradient.addColorStop(0.7, point.color + '00'); // Fully transparent
          
          ctx.globalCompositeOperation = 'screen';
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalCompositeOperation = 'source-over';
        });
        
        // Shorten animation duration on mobile
        const currentIsMobile = window.innerWidth < 768;
        const animDuration = currentIsMobile ? 3000 : 6500; // Further shortened
        if (elapsed < animDuration) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      // Cancel any existing animation
      if (window.buttonAnimationFrame) {
        cancelAnimationFrame(window.buttonAnimationFrame);
      }
      
      // Start animation
      window.buttonAnimationFrame = requestAnimationFrame(animate);
    };
    
    // Check for window resize to adapt animations
    const handleResize = () => {
      // Redraw animations based on new screen size
      animateLetters();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initial animation
    animateLetters();
    
    // Adjust interval for mobile (less frequent animations to save battery)
    const currentIsMobile = window.innerWidth < 768;
    const intervalDuration = currentIsMobile ? 12000 : 7000; // Even longer interval to save battery
    
    // Set interval for continuous animation
    const intervalId = setInterval(animateLetters, intervalDuration);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      if (window.buttonAnimationFrame) {
        cancelAnimationFrame(window.buttonAnimationFrame);
      }
    };
  }, []); // Only run once at mount
  
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Scrolling Image Collage with Dimming Overlay - Faster on mobile */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ 
          repeat: Infinity, 
          duration: isMobile ? 120 : 175, // Much faster on mobile
          ease: 'linear' 
        }}
      >
        <div className="flex">
          {/* Reduced number of images and size for mobile */}
          {[...Array(isMobile ? 3 : 10)].map((_, i) => (
            <div key={i} className="relative h-screen w-screen">
              <img
                src={isMobile 
                  ? "https://pub-1c024d6181db4a8d9ce127046cdbc59f.r2.dev/Backgroundimg.png" // Use smaller image for mobile
                  : "https://pub-1c024d6181db4a8d9ce127046cdbc59f.r2.dev/Backgroundimg.png"
                }
                alt=""
                className={`h-screen w-screen object-cover ${isMobile ? 'brightness-75' : 'brightness-80'} filter`} // Less dark on mobile
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Premium Dark Overlay with Subtle Gradient - Lighter on mobile */}
      <div className={`absolute top-0 left-0 w-full h-full 
        ${isMobile 
          ? 'bg-gradient-to-b from-black/50 via-black/60 to-black/60' // Lighter overlay for mobile
          : 'bg-gradient-to-b from-black/70 via-black/50 to-black/80'
        } z-5`}></div>
      
      {/* Overlay Content with Premium Styling - Responsive adjustments */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 md:px-6 text-center">
        <div className="max-w-4xl">
          <div className="mb-2 md:mb-6"> {/* Reduced margin on mobile */}
            <div className="flex flex-col md:flex-row items-center justify-center mb-2">
              <motion.svg 
                className="w-16 h-16 md:w-24 md:h-24 mb-2 md:mr-4" // Smaller on mobile
                animate={{ 
                  color: ['#f59e0b', '#3b82f6', '#10b981', '#f43f5e', '#8b5cf6'],
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                viewBox="0 0 200 200" 
                fill="currentColor"
              >
                {/* Outer rotating mandala layers */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  {/* Outer decorative border */}
                  <path d="M100,10 C152,10 195,53 195,105 C195,157 152,200 100,200 C48,200 5,157 5,105 C5,53 48,10 100,10 Z M100,20 C146,20 185,59 185,105 C185,151 146,190 100,190 C54,190 15,151 15,105 C15,59 54,20 100,20 Z" fillOpacity="0.3" />
                  
                  {/* Outer petal shapes */}
                  {[...Array(16)].map((_, i) => (
                    <path 
                      key={i} 
                      d={`M100,25 C110,35 120,45 100,65 C80,45 90,35 100,25`} 
                      transform={`rotate(${i * 22.5} 100 100)`}
                      fillOpacity="0.5"
                    />
                  ))}
                  
                  {/* Decorative circles along the border */}
                  {[...Array(32)].map((_, i) => (
                    <circle 
                      key={i} 
                      cx={100 + 75 * Math.cos(i * Math.PI / 16)} 
                      cy={100 + 75 * Math.sin(i * Math.PI / 16)} 
                      r="3" 
                      fillOpacity="0.7"
                    />
                  ))}
                </motion.g>
                
                {/* Middle layer rotating in opposite direction */}
                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                >
                  {/* Middle circular border */}
                  <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
                  
                  {/* Grid pattern inside */}
                  <path d="M70,70 L130,70 L130,130 L70,130 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
                  {[...Array(5)].map((_, i) => (
                    <line 
                      key={i} 
                      x1="70" 
                      y1={70 + i * 15} 
                      x2="130" 
                      y2={70 + i * 15} 
                      stroke="currentColor" 
                      strokeWidth="0.5" 
                      strokeOpacity="0.3" 
                    />
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <line 
                      key={i} 
                      x1={70 + i * 15} 
                      y1="70" 
                      x2={70 + i * 15} 
                      y2="130" 
                      stroke="currentColor" 
                      strokeWidth="0.5" 
                      strokeOpacity="0.3" 
                    />
                  ))}
                </motion.g>
                
                {/* Center lotus flower */}
                <motion.g
                  animate={{ 
                    scale: [1, 1.05, 1, 0.95, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  {/* Lotus petals */}
                  {[...Array(8)].map((_, i) => (
                    <path 
                      key={i} 
                      d={`M100,60 C110,70 110,90 100,100 C90,90 90,70 100,60`} 
                      transform={`rotate(${i * 45} 100 100)`}
                      fill="currentColor"
                      fillOpacity="0.9"
                    />
                  ))}
                  
                  {/* Inner petals */}
                  {[...Array(8)].map((_, i) => (
                    <path 
                      key={i} 
                      d={`M100,70 C105,75 105,85 100,90 C95,85 95,75 100,70`} 
                      transform={`rotate(${i * 45} 100 100)`}
                      fill="currentColor"
                      fillOpacity="0.7"
                    />
                  ))}
                  
                  {/* Center circle */}
                  <circle cx="100" cy="100" r="5" fillOpacity="0.9" />
                </motion.g>
              </motion.svg>
              
              <h1 
                ref={mainHeadlineRef}
                className="text-2xl md:text-5xl font-bold tracking-tight drop-shadow-lg" // Smaller text on mobile
              >
                {/* Text content will be replaced by JS */}
              </h1>
            </div>
            
            <h1 
              ref={subHeadlineRef}
              className="text-2xl md:text-5xl font-black tracking-wide drop-shadow-xl py-0" // Smaller text on mobile
            >
              {/* Text content will be replaced by JS */}
            </h1>
            
            <p className="text-lg md:text-2xl font-bold text-neutral-300 mt-2 md:mt-6 mb-4 md:mb-10 tracking-wide drop-shadow-lg"> {/* Reduced margins/text size on mobile */}
              Turn Your Face Into a {" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                Masterpiece
              </span>{" "}!!
            </p>
          </div>
          
          <motion.button
            ref={buttonRef}
            className="px-5 md:px-10 py-2 md:py-5 text-base md:text-lg font-semibold text-neutral-900 rounded-full hover:opacity-90 transition-all duration-300 transform shadow-lg hover:shadow-xl" // Smaller padding on mobile
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Creating Now
          </motion.button>
        </div>
      </div>
      
      {/* Showcase component with automatic mobile detection */}
      <div className="hidden md:block">
        <Showcase />
      </div>
      <div className="block md:hidden">
        <Showcase />
      </div>
      
      {/* Wave Section with Smaller Crest - Reduced height on mobile */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-6 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none"> {/* Even smaller height on mobile */}
          <path d="M0,60 C200,90,400,90,600,60 S1000,30,1200,60 V120 H0 Z" className="fill-black"></path>
        </svg>
      </div>
    </div>
  );
}