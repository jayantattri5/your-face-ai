import React from "react";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <h1 className="text-4xl font-semibold text-center">Simple and Affordable Pricing Plans</h1>
      
      {/* Shining effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-96 bg-white opacity-25 blur-[120px]"></div>
        <div className="absolute top-0 right-1/4 w-1/3 h-80 bg-white opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {["Basic", "Pro", "Pro Max", "Ultra Pro Max"].map((plan, index) => (
          <div key={index} className={`bg-black p-6 rounded-2xl shadow-lg text-center border border-gray-700 relative overflow-hidden ${index === 1 || index === 2 ? 'brightness-125' : 'brightness-90'}`}>
            {plan === "Pro Max" && <span className="absolute top-2 right-4 bg-orange-500 text-xs px-2 py-1 rounded">Most Popular</span>}
            <h2 className="text-xl font-semibold relative">{plan}</h2>
            <p className="text-4xl font-bold mt-2 relative">${index * 40}<span className="text-lg font-normal">/month</span></p>
            <p className="text-gray-400 mt-2 relative">{plan === "Basic" ? "Great for users who are just starting out" : plan === "Pro" ? "Best for users Pro at Generative AI" : plan === "Pro Max" ? "Best for users Pro Max in this art of generating Images" : "This is for Ultra Pro Max people who rarely take birth on planet Earth"}</p>
            <button className={`mt-4 w-full py-2 rounded-lg ${plan === "Professional" ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-500 hover:bg-orange-600'} relative`}>Sign Up with {plan}</button>
            <ul className="mt-6 space-y-2 text-left text-gray-300 relative">
              {([
                ["Take 50 AI Photos (credits)", "Create 1 AI Model per month", "Flux™ 1.1 photorealistic model", "Low quality photos", "Low resemblance", "Take 1 photo at a time", "Use any photo pack", "For personal use only"],
                ["Take 1,000 AI Photos (credits)", "Create 3 AI Models per month", "Flux™ 1.1 photorealistic model", "Medium quality photos", "Passable resemblance", "Take up to 4 photos in parallel", "Write your own prompts", "Commercial use license"],
                ["Take 3,000 AI Photos (credits)", "Create 10 AI Models per month", "Flux™ 1.1 photorealistic model", "High quality photos", "High resemblance", "Take up to 8 photos in parallel", "Use the magic photo editor", "Early access to new features"],
                ["Take 10,000 AI Photos (credits)", "Create 50 AI Models per month", "Flux™ 1.1 photorealistic model", "Ultra-high quality photos", "Ultra-high resemblance", "Take up to 16 photos in parallel", "Unlimited photo storage", "Priority: faster response times", "NEW: ♻️ Export your models"]
              ][index] || []).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-5 h-5 flex items-center justify-center bg-green-500 rounded-full">✔</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
