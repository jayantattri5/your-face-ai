import React from "react";

const Explanation = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Upload your Selfies
        </span>{" "}
        and Start taking Stunning AI Photos now
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="grid grid-cols-0 gap-4">
          <img
            src="https://www.coryzue.com/images/ai-images/training-set.png"
            alt="Selfie"
            className="w-100 md:w-250 h-auto rounded-lg border border-gray-400"
          />
        </div>
        <div className="flex items-center">
          <img
            src="https://pub-1c024d6181db4a8d9ce127046cdbc59f.r2.dev/glowing-neon-arrow-rightdirectional-black-260nw-2528725087.jpg"
            alt="Arrow"
            className="w-16 h-16 md:w-50 md:h-25 transform rotate-90 md:rotate-0"
          />
        </div>
        <div className="relative">
          <img
            src="https://www.coryzue.com/images/ai-images/surferme.webp"
            alt="AI Generated Photo"
            className="w-72 md:w-110 h-98 rounded-lg border border-gray-400 object-cover"
          />
          <span className="absolute top-2 right-2 bg-green-500 text-black px-2 py-1 text-xs font-bold rounded">
            AI GENERATED PHOTO
          </span>
        </div>
      </div>
    </div>
  );
};

export default Explanation;