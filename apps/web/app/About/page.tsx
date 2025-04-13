"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// SEO metadata component
const SEOMetadata = () => (
  <>
    <title>About YourFace AI | Best AI Face Generator & Portrait Creator</title>
    <meta name="description" content="Discover YourFace AI - the leading AI face generator for creating hyper-realistic portraits in various styles. Transform your photos into fantasy characters, vintage models, and more!" />
    <meta name="keywords" content="AI face generator, AI portrait creator, facial transformation AI, personalized AI portraits, YourFace AI" />
    <meta property="og:title" content="About YourFace AI | Advanced AI Portrait Creator" />
    <meta property="og:description" content="Create stunning AI portraits from your photos in seconds. Fantasy, sci-fi, vintage and more styles available with our cutting-edge AI technology." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourfaceai.com/About" />
    <meta property="og:image" content="https://yourfaceai.com/images/yourfaceai-preview.jpg" />
    <link rel="canonical" href="https://yourfaceai.com/About" />
  </>
);

export default function About() {
  const [activeTab, setActiveTab] = useState("how-it-works");
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  // Example transformations to showcase
  const transformations = [
    "https://creator.nightcafe.studio/jobs/rGuFncaPyQeP8tjlQIdh/rGuFncaPyQeP8tjlQIdh--1--nqyu5.jpg",
    "https://i.pinimg.com/736x/ff/0f/fc/ff0ffc6f8ab0ece23f2e0236329b2521.jpg",
    "https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/66972744266f469fac16a1cf_6645f61fb19a2fc072cf700a_image_C1xvA-5C_1715856979048_raw.jpeg",
    "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/ai_cyberpunk_filter/ai_cyberpunk_filter/webp/3_style_graphics/001.webp",
  ];
  
  // Auto-rotate showcase images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % transformations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  
  // Check if element is in viewport for animations
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("features-section");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SEOMetadata />
      
      <div className="bg-gradient-to-b from-gray-950 to-black min-h-screen text-white">
        <div className="container mx-auto max-w-4xl px-4 py-12">
          {/* Hero Section with animated heading */}
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              About <span className="font-extrabold">YourFace AI</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
              The next-generation AI face generator creating stunning, hyper-personalized portraits that capture your essence in any style imaginable.
            </p>
          </motion.header>

          {/* Interactive Image Showcase */}
          <section className="mb-20 relative h-[0px] overflow-hidden rounded-xl">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {transformations.map((img, index) => (
                <div 
                  key={index} 
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                  style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                    <h3 className="text-xl font-bold text-white">
                      {index === 0 && "Fantasy Transformation"}
                      {index === 1 && "Sci-Fi Character"}
                      {index === 2 && "Vintage Portrait"}
                      {index === 3 && "Cyberpunk Avatar"}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </section>

          {/* Interactive Tabs Section */}
          <section className="mb-16">
            <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
              {["how-it-works", "features", "testimonials"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "bg-gray-900 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {tab === "how-it-works" && "How It Works"}
                  {tab === "features" && "Key Features"}
                  {tab === "testimonials" && "User Stories"}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-8">
              {activeTab === "how-it-works" && (
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold mb-6">Transform Your Face in Four Simple Steps</h2>
                  
                  {[
                    {
                      title: "Upload Your Photo",
                      description: "Provide a clear, front-facing image to let our AI learn your unique facial features and structure."
                    },
                    {
                      title: "Choose Your Pack",
                      description: "Select from dozens of curated packs including fantasy characters, historical figures, cinematic looks, and futuristic personas."
                    },
                    {
                      title: "Generate & Customize",
                      description: "Our proprietary AI engine creates multiple variations based on your face, allowing you to fine-tune details for the perfect result."
                    },
                    {
                      title: "Download & Share",
                      description: "Get instant access to high-resolution images optimized for social media, printing, and digital use."
                    }
                  ].map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === "features" && (
                <div id="features-section">
                  <h2 className="text-3xl font-bold mb-8">Why Choose YourFace AI?</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        title: "Hyper-Realistic Results",
                        description: "Our proprietary neural networks ensure ultra-detailed, lifelike portraits with accurate facial structure preservation."
                      },
                      {
                        title: "Privacy-First Approach",
                        description: "Your images are processed securely with end-to-end encryption and automatically deleted after processing unless you choose to save them."
                      },
                      {
                        title: "Unlimited Creativity",
                        description: "Access over 200+ styles and customization options with new additions every month based on user feedback and trends."
                      },
                      {
                        title: "Lightning-Fast Generation",
                        description: "Leveraging cutting-edge GPUs, receive your transformations in seconds rather than minutes compared to other services."
                      }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                        className="bg-gray-800 bg-opacity-50 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
                      >
                        <h3 className="text-xl font-bold mb-3 text-blue-400">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "testimonials" && (
                <div>
                  <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
                  <div className="space-y-6">
                    {[
                      {
                        name: "Sarah T.",
                        role: "Professional Photographer",
                        quote: "YourFace AI has revolutionized my client presentations. I can now show potential clients how they would look in different lighting and styles before the actual shoot."
                      },
                      {
                        name: "Marcus J.",
                        role: "Game Developer",
                        quote: "The fantasy character transformations are mind-blowing! I've used my generated portraits as inspiration for game character design."
                      },
                      {
                        name: "Elena K.",
                        role: "Social Media Influencer",
                        quote: "My followers absolutely love the themed content I create with YourFace AI. The vintage Hollywood transformation series was my most engaged post ever!"
                      }
                    ].map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        className="bg-gray-900 p-6 rounded-lg border border-gray-800"
                      >
                        <p className="italic text-gray-300 mb-4">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mr-3" />
                          <div>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mt-12 mb-8"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Yourself?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of users discovering new versions of themselves through YourFace AI. Unleash your imagination—because every face tells a unique story!
            </p>
            <a 
              href="https://yourfaceai.com"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Try YourFace AI Now
            </a>
            <p className="mt-4 text-gray-400">No credit card required. Start with 5 free transformations.</p>
          </motion.section>

          {/* Structured data for SEO */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "YourFace AI",
              "applicationCategory": "MultimediaApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AI-powered face transformation tool that creates personalized portraits in various styles",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1247"
              }
            })
          }} />
        </div>
      </div>
    </>
  );
}