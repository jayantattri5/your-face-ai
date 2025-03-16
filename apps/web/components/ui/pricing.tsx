'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center p-8 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-30 w-1/2 h-1/2 m-auto"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <h1 className="text-3xl font-bold z-10">Pricing and Plans</h1>
      <p className="text-gray-400 text-center max-w-lg mt-2 z-10">
        There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
      </p>
      
      <div className="flex items-center space-x-3 mt-6 z-10">
        <span>Pay Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-400 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <span>Pay Yearly</span>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-8 z-10">
        {[...Array(3)].map((_, index) => (
          <div key={index} className={`p-6 rounded-2xl bg-gray-900 text-center shadow-lg ${index === 1 ? 'border border-blue-500' : ''}`}>
            {index === 1 && <span className="text-sm text-blue-400 bg-blue-900 px-2 py-1 rounded-full">BEST CHOICE</span>}
            <h2 className="text-xl font-semibold mt-4">Standard Plan</h2>
            <p className="text-gray-400 line-through mt-2">$85</p>
            <p className="text-3xl font-bold">${isYearly ? '38.89' : '45'}</p>
            <p className="text-sm text-blue-400">/Month {isYearly ? '(annually billed)' : ''}</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">Choose Plan</button>
            <ul className="mt-4 text-sm text-gray-400 space-y-2">
              <li>✔ Priority email & chat support</li>
              <li>✔ Lifetime Access and Free Updates</li>
              <li>✔ Generate 1,000 AI Words/ month</li>
              <li>✔ Personal and Commercial Use</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;