"use client";
import React, { useState, useEffect } from 'react';
import { ExternalLink, Camera, User, Briefcase, Zap, Layers, CheckCircle } from 'lucide-react';

// Main component with animations and styling
export default function AIHeadshotsBlog() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  
  // Intersection Observer to trigger animations when elements scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-section').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Animation classes based on visibility
  const getAnimationClass = (id: string) => {
    return isVisible[id] 
      ? 'opacity-100 translate-y-0 transition-all duration-1000' 
      : 'opacity-0 translate-y-8 transition-all duration-1000';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* SEO-optimized header */}
      <header id="header" className="animate-section mb-12 text-center">
        <div className={getAnimationClass('header')}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Are AI Headshots? A Beginner's Guide
          </h1>
          <div className="flex items-center justify-center text-gray-600 mb-6">
            <span className="inline-flex items-center">
              <span className="font-medium">Published by YourFaceAI</span>
              <span className="mx-2">|</span>
              <span>April 2025</span>
            </span>
          </div>
        </div>
      </header>
      
      {/* Introduction Section */}
      <section id="introduction" className="animate-section mb-12">
        <div className={getAnimationClass('introduction')}>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <Camera size={28} className="text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                In a world where first impressions are digital, your profile picture speaks before you do. 
                Whether it's LinkedIn, Twitter, or a dating app, your image sets the tone. But what if you 
                could create stunning, studio-quality headshots — without ever stepping into a studio?
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                That's where <span className="font-semibold">AI headshots</span> come in.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What Is an AI Headshot Section */}
      <section id="what-is" className="animate-section mb-12">
        <div className={getAnimationClass('what-is')}>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <Zap size={28} className="text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">What Is an AI Headshot?</h2>
              <p className="text-gray-700 leading-relaxed">
                An <span className="font-semibold">AI headshot</span> is a computer-generated portrait 
                created from a few of your real selfies. By using machine learning models trained on thousands 
                of photo styles, AI can replicate realistic lighting, camera angles, expressions, and 
                outfits — all digitally.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                These headshots can look corporate, creative, cinematic, futuristic, or even fantasy-based — 
                depending on the style you choose.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How Does It Work Section with animated steps */}
      <section id="how-it-works" className="animate-section mb-12">
        <div className={getAnimationClass('how-it-works')}>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <Layers size={28} className="text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">How Does It Work?</h2>
              
              <div className="space-y-6 mt-4">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">You upload 5–10 selfies</span> — different angles, expressions, lighting.
                  </p>
                </div>
                
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">The AI is trained on your face</span> to understand key features like skin tone, facial structure, and hairstyle.
                  </p>
                </div>
                
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Styles are applied</span> — like filters on steroids — from professional to playful.
                  </p>
                </div>
                
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold">Results are rendered</span> in high resolution and ready to download.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mt-4">
                On platforms like <span className="font-semibold">YourFaceAI</span>, it takes just 10-20 minutes to receive over 50 styled photos tailored to your preferences, faster than other competitors in the market.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who Should Use AI Headshots Section */}
      <section id="who-should-use" className="animate-section mb-12">
        <div className={getAnimationClass('who-should-use')}>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <User size={28} className="text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Who Should Use AI Headshots?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="font-semibold mb-1 text-blue-600">Job Seekers</div>
                  <p className="text-gray-700">Impress with polished LinkedIn photos.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="font-semibold mb-1 text-blue-600">Content Creators & Influencers</div>
                  <p className="text-gray-700">Keep your visuals fresh without regular photoshoots.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="font-semibold mb-1 text-blue-600">Startup Founders</div>
                  <p className="text-gray-700">Get branded portraits without the production cost.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="font-semibold mb-1 text-blue-600">Anyone wanting a glow-up</div>
                  <p className="text-gray-700">Let's be real, it's fun!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section with table */}
      <section id="use-cases" className="animate-section mb-12">
        <div className={getAnimationClass('use-cases')}>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <Briefcase size={28} className="text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Use Cases</h2>
              
              <div className="overflow-hidden rounded-lg shadow mt-4">
                <table className="min-w-full bg-white">
                  <thead className="bg-blue-500 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Audience</th>
                      <th className="py-3 px-4 text-left">Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">Professionals</td>
                      <td className="py-3 px-4">LinkedIn, resumes, business websites</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">Creatives</td>
                      <td className="py-3 px-4">Portfolio covers, social media bios</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">Gamers/Streamers</td>
                      <td className="py-3 px-4">Profile avatars, thumbnails</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <td className="py-3 px-4 font-medium">Online Daters</td>
                      <td className="py-3 px-4">Eye-catching profile pictures</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Use YourFaceAI Section */}
      <section id="why-use" className="animate-section mb-12">
        <div className={getAnimationClass('why-use')}>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <CheckCircle size={28} className="text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Why Use YourFaceAI?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🧠</span>
                    <span className="font-semibold text-blue-600">Hyper-Personalized</span>
                  </div>
                  <p className="text-gray-700">Styles match your vibe — from Netflix drama to Vogue shoot.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🚀</span>
                    <span className="font-semibold text-blue-600">Fast Turnaround</span>
                  </div>
                  <p className="text-gray-700">Get results in under an hour.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">💎</span>
                    <span className="font-semibold text-blue-600">High-Quality</span>
                  </div>
                  <p className="text-gray-700">Studio-grade resolution, optimized for web and print.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🖼️</span>
                    <span className="font-semibold text-blue-600">No Two Shots Alike</span>
                  </div>
                  <p className="text-gray-700">Every image feels unique and natural.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tips for Better AI Results */}
      <section id="tips" className="animate-section mb-12">
        <div className={getAnimationClass('tips')}>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <Camera size={28} className="text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Tips for Better AI Results</h2>
              
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-500 rounded-full p-1 mr-3 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <p className="text-gray-700">Use <span className="font-semibold">natural lighting</span> in your selfies.</p>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-500 rounded-full p-1 mr-3 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <p className="text-gray-700">Include <span className="font-semibold">variety</span>: side angles, smiles, serious faces.</p>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-500 rounded-full p-1 mr-3 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <p className="text-gray-700">Avoid heavy makeup or sunglasses (unless it's part of the look you want).</p>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-blue-100 text-blue-500 rounded-full p-1 mr-3 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <p className="text-gray-700">The more diversity in your selfies, the better the results.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final Thoughts Section */}
      <section id="final-thoughts" className="animate-section mb-12">
        <div className={getAnimationClass('final-thoughts')}>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white shadow-lg">
            <h2 className="text-2xl font-bold mb-3">Final Thoughts</h2>
            <p className="leading-relaxed">
              AI headshots aren't just a trend — they're the future of digital identity. Whether you're leveling up your career or just having fun, tools like <span className="font-semibold">YourFaceAI</span> are making professional-quality portraits more accessible than ever.
            </p>
            <p className="text-xl font-medium mt-4">
              ✨ Ready to see yourself reimagined?
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Button with animation */}
      <section id="cta" className="animate-section text-center mb-12">
        <div className={getAnimationClass('cta')}>
          <a 
            href="https://yourfaceai.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Get Your AI Headshots Now</span>
            <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </section>
      
      {/* SEO-rich footer with additional keywords */}
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
        <p className="mb-2">
          <span className="font-semibold">YourFaceAI</span> - The leading platform for artificial intelligence generated professional headshots, 
          profile pictures, and digital portraits.
        </p>
        <p className="hidden">
          Keywords: AI headshots, artificial intelligence portraits, professional profile pictures, 
          digital headshots, AI-generated photos, professional selfies, LinkedIn profile pictures, 
          social media profile images, YourFaceAI
        </p>
        <p className="mt-4">© 2025 YourFaceAI. All rights reserved.</p>
      </footer>
      
      {/* Structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "What Are AI Headshots? A Beginner's Guide",
          "description": "Learn about AI-generated headshots and how they can transform your professional and social media profiles.",
          "image": "https://yourfaceai.com/blog/ai-headshots-guide/featured-image.jpg",
          "author": {
            "@type": "Organization",
            "name": "YourFaceAI"
          },
          "publisher": {
            "@type": "Organization",
            "name": "YourFaceAI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://yourfaceai.com/logo.png"
            }
          },
          "datePublished": "2025-04-01",
          "dateModified": "2025-04-13"
        })
      }} />
    </div>
  );
}