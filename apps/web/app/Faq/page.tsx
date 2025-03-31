'use client';
import React, { useState } from 'react';

const FAQSection = () => {
  // Initialize with null instead of 0 to ensure all questions start closed
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What type of photos should I upload for creating an AI model",
      answer: "We recommend uploading photos with high variety, a mix of close-up selfies and full body shots in a variety of places, angles, clothes and expressions. Do not upload photos with low variety, group photos, other people, sunglasses, hats, photos where your face is cut off or not visible.If you’re creating an AI influencer from scratch, you don’t need to upload any photos though. You just design a new persona based on how you"
    },
    {
      question: "How does Your Face AI's Photo Generator work?",
      answer: "Photo AI lets you upload selfies, create AI models and then generate AI photos and videos with them. We teach the AI how you look and then it's able to generate photorealistic images and videos of you. You can put yourself in different settings, with different outfits, doing different actions, with different expressions.And best of all, you can do all this from your laptop or phone without having to pay an expensive photographer $100s or $1000s."
    },
    {
      question: "How much will my AI photos look like me?",
      answer: "The resemblance of the photos to you depends on the quality and variety of the photos you upload. The better and more varied your photos, the more accurately the AI can understand and represent your unique characteristics."
    },
    {
      question: "What file formats do you accept for creating an AI model?",
      answer: "We accept JPG, PNG files only. HEIC, WebP and AVIF is not supported now, so you'll have to convert those to JPG first"
    },
    {
      question: "How long will it  take to create my AI model?",
      answer: "Depending on your plan the time of training can range from 20 minutes to 35 minutes."
    }
  ];

  // Fixed toggle function
  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-16">
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Frequently
          </span>{" "}
           asked questions
           </h1>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-800 py-5">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex w-full justify-between items-center text-left focus:outline-none"
              >
                <h3 className="text-xl font-medium">{item.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  {openQuestion === index ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </span>
              </button>
              {openQuestion === index && (
                <div className="mt-3 pr-12">
                  <p className="text-gray-400">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;