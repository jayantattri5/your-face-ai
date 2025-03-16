'use client';
import React, { useState } from 'react';

const TextBox = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="bg-gray-900 p-8">
      <div className="relative w-full bg-gray-900 rounded-lg overflow-hidden">
        {/* Border with glow effect */}
        <div className="absolute inset-0 rounded-lg border border-yellow-500 shadow-[0_0_10px_rgba(74,222,128,0.6)] pointer-events-none"></div>
        
        <div className="p-4">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What do you want to create?"
            className="w-full bg-transparent text-gray-200 outline-none resize-none h-20"
          />
          <div className="absolute bottom-4 left-4 flex space-x-3">
            <button className="text-gray-500 hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBox;