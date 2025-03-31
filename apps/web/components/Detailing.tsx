"use client";

import React from "react";

const Detailing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <div className="text-center max-w-7xl">
        <h1 className="text-4xl font-bold text-white">
            The {" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            most detailed
            </span>{" "}
             AI photo generator ever with{" "}
             <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              next-level realism
            </span>
        </h1>
        <p className="text-lg text-white mt-4">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        YourFace AI
        </span>{" "}
         is a photo generator that lets you take real looking photos of yourself at home using AI.
        </p>
        <p className="text-lg text-white mt-4">
        It is capable of a large range of detail going from extremely wide shots to extreme close ups
        and even 📷{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        macro photography.
        </span>
        </p>
        <p className="text-lg text-white mt-4">
        It comes with built-in extreme detailing that you don't even need ✨{""}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
         Upscaling
        </span>{" "}
          to add more detail to any AI photo you take.
        </p>
        <p className="text-lg text-white mt-4">
        You can even turn any of your AI photos into a short high-resolution video by pressing 🎥
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
         Make video
        </span>{" "}
        after, featuring you!
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8 w-full max-w-6xl">
      <img src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/5cbf4929-75b1-4113-917e-8c265ed2f39a/original=true,quality=90/63941086.jpeg" alt="Image 2" className="w-full h-auto rounded-lg shadow-md border border-gray-700" />
        <img src="https://images.pexels.com/photos/4079215/pexels-photo-4079215.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" className="w-full h-auto rounded-lg shadow-md border border-gray-700" />
        <video className="w-full rounded-lg shadow-md border border-gray-700">
          <source src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/cc32609c-a5e9-45c8-b2e5-73351003bb58/transcode=true,original=true,quality=90/39030262.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video 
          className="w-full rounded-lg shadow-md border border-gray-700" 
          autoPlay 
          loop 
          muted
          playsInline 
  onEnded={(e) => { (e.target as HTMLVideoElement).play(); }} // Ensures autoplay after finishing
        >
          <source src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/cc32609c-a5e9-45c8-b2e5-73351003bb58/transcode=true,original=true,quality=90/39030262.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="mt-8 w-full max-w-2xl">
        
      </div>
    </div>
  );
};

export default Detailing;
