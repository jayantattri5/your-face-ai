"use client";

import React, { useState } from "react";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  // Pricing plans data structure for easy customization
  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: 12,
      annualPrice: 8,
      description: "Great for users who are just starting out",
      popular: false,
      features: [
        "All free features",
        "Take 50 AI Photos (credits)",
        "Create 3 AI Model per month",
        "Flux™ 1.1 photorealistic model",
        "Low quality photos",
        "Low resemblance",
        "Take 1 photo at a time",
        "Write your own prompts",
        "Use any photo pack",
        "For personal use only"
      ]
    },
    {
      name: "Pro",
      monthlyPrice: 40,
      annualPrice: 21, // 60% discount for annual
      description: "Best for users Pro at Generative AI",
      popular: false,
      features: [
        "All Starter features",
        "Take 500 AI Photos (credits)",
        "Create 7 AI Models per month",
        "Flux™ 1.1 photorealistic model",
        "Medium quality photos",
        "Passable resemblance",
        "Take up to 4 photos in parallel",
        "Commercial use license"
      ]
    },
    {
      name: "Pro Max",
      monthlyPrice: 99,
      annualPrice: 40, // 60% discount for annual
      description: "Best for users Pro Max in this art of generating Images",
      popular: true,
      features: [
        "Take 2000 AI Photos (credits)",
        "Create 15 AI Models per month",
        "Flux™ 1.1 photorealistic model",
        "High quality photos",
        "High resemblance",
        "Take up to 8 photos in parallel",
        "Can recharge with more photo credits",
        "Early access to new features"
      ]
    },
    {
      name: "Ultra Pro Max",
      monthlyPrice: 249,
      annualPrice: 80, // 60% discount for annual
      description: "This is for Ultra Pro Max people who rarely take birth on planet Earth",
      popular: false,
      features: [
        "Take 5000 AI Photos (credits)",
        "Create 50 AI Models per month",
        "Flux™ 1.1 photorealistic model",
        "Ultra-high quality photos",
        "Ultra-high resemblance",
        "Take up to 16 photos in parallel",
        "Unlimited photo storage",
        "Can recharge with more photo credits",
        "Priority: faster response times",
        "NEW: ♻️ Export your models"
      ]
    }
  ];

  // Separate last plan for horizontal display
  const lastPlan = {
    name: "Free forever",
    monthlyPrice: 0,
    annualPrice: 0, // 20% discount for annual
    description: "This is just for bringing traffic to our website",
    popular: false,
    features: [
      "Create 1 AI Model",
      "Generate 3 photos using that model",
      "Flux™ 1.1 photorealistic model",
      "Access to other public models",
      "Very Low quality photos",
      "Very Low resemblance",
      "Very slow response time",
      "Take 1 photo at a time",
      "Write your own prompts",
      "Use any photo pack",
      "Generate Infinite photos in Infinite Section 🔥",
      "Infinite photo storage 🔥",
      "No need to pay 🔥",
      "Just need to sign up 🔥",
    ]
  };

  // Calculate total annual price for each plan
  const calculateTotalAnnualPrice = (annualPrice: number) => {
    return annualPrice * 12;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-9 px-4 relative overflow-hidden">
      <h1 className="text-4xl font-semibold text-center">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Simple
        </span>{" "}
        and Affordable Pricing Plans
      </h1>
      
      {/* Toggle button for Annual/Monthly pricing */}
      <div className="mt-6 bg-black-500 p-1 rounded-lg inline-flex">
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            isAnnual ? "bg-orange-500 text-white" : "text-gray-300"
          }`}
          onClick={() => setIsAnnual(true)}
        >
          Annual🔥
        </button>
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            !isAnnual ? "bg-orange-500 text-white" : "text-gray-300"
          }`}
          onClick={() => setIsAnnual(false)}
        >
          Monthly
        </button>
      </div>
      
        <div className="mt-2 text-green-500 text-sm">
          Save upto 60% with annual billing
        </div>

      {/* Shining effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-96 bg-white opacity-25 blur-[500px]"></div>
        <div className="absolute top-0 right-1/4 w-1/3 h-80 bg-white opacity-20 blur-[500px]"></div>
      </div>

      {/* Main vertical pricing cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`bg-black p-6 rounded-2xl shadow-lg text-center border border-gray-700 relative overflow-hidden ${
              index === 1 || index === 2 ? "brightness-125" : "brightness-90"
            }`}
          >
            {plan.popular && (
              <span className="absolute top-2 right-4 bg-orange-500 text-xs px-2 py-1 rounded">
                Most Popular
              </span>
            )}
            <h2 className="text-xl font-semibold relative">{plan.name}</h2>
            <p className="text-4xl font-bold mt-2 relative">
              ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
              <span className="text-lg font-normal">/{isAnnual ? "year" : "month"}</span>
            </p>
            {/* Added "Billed annually" text with total annual price for annual plans */}
            {isAnnual && (
              <div className="text-sm text-gray-400 mt-1">
                <p>Billed annually</p>
                <p className="mt-1">Total: ${plan.annualPrice * 12}/year</p>
              </div>
            )}
            <p className="text-gray-400 mt-2 relative">{plan.description}</p>
            <button className="mt-4 w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 relative">
              Sign Up with {plan.name}
            </button>
            <ul className="mt-6 space-y-2 text-left text-gray-300 relative">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-5 h-5 flex items-center justify-center bg-green-500 rounded-full">
                    ✔
                  </span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Horizontal last plan */}
      <div className="mt-8 w-full max-w-6xl">
        <div className="bg-black p-6 rounded-2xl shadow-lg border border-gray-700 relative overflow-hidden brightness-90">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Plan details */}
            <div className="md:w-1/3 p-4 flex flex-col justify-center">
              <h2 className="text-xl font-semibold">{lastPlan.name}</h2>
              <p className="text-4xl font-bold mt-2">
                ${isAnnual ? lastPlan.annualPrice : lastPlan.monthlyPrice}
                <span className="text-lg font-normal">/{isAnnual ? "year" : "month"}</span>
              </p>
              {/* Added "Billed annually" text with total annual price for annual plans */}
              {isAnnual && (
                <div className="text-sm text-gray-400 mt-1">
                  <p>Billed annually</p>
                  <p className="mt-1">Total: ${lastPlan.annualPrice * 12}/year</p>
                </div>
              )}
              <p className="text-gray-400 mt-2">{lastPlan.description}</p>
              <button className="mt-4 w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600">
                Sign Up with {lastPlan.name}
              </button>
            </div>
            
            {/* Right side - Features */}
            <div className="md:w-2/3 p-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {lastPlan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-green-500 rounded-full">
                      ✔
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;