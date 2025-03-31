"use client";

import React from "react";
import { Camera, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-black border-b border-gray-800">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
        <motion.svg 
                  className="w-14 h-14 mr-0"
                  animate={{ 
                    rotate: 360,
                    color: ['#f59e0b', '#3b82f6', '#10b981', '#f43f5e', '#8b5cf6']
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    color: { duration: 7, repeat: Infinity, repeatType: "loop" }
                  }}
                  viewBox="0 0 200 200" 
                  fill="currentColor"
                >
                  {/* Existing SVG code remains the same */}
                  {/* Outer Layer with Radial Gradient */}
                  <defs>
                    <radialGradient id="svgGradient" cx="50%" cy="50%" r="50%" spreadMethod="pad">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
                    </radialGradient>
                  </defs>

                  {/* Outer Circular Background */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="95" 
                    fill="url(#svgGradient)" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeOpacity="0.2"
                  />

                  {/* Mandala-like Intricate Layers */}
                  {[1, 0.8, 0.6].map((scale, index) => (
                    <motion.g
                      key={index}
                      animate={{ 
                        rotate: index % 2 === 0 ? 360 : -360,
                        scale: [scale, scale * 1.05, scale]
                      }}
                      transition={{
                        rotate: { 
                          duration: 20 * (index + 1), 
                          repeat: Infinity, 
                          ease: "linear" 
                        },
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }
                      }}
                    >
                      {[...Array(16)].map((_, i) => (
                        <path 
                          key={i}
                          d={`M100,30 
                              Q${100 + 30 * Math.cos(i * Math.PI / 8)},${100 + 30 * Math.sin(i * Math.PI / 8)} 
                              ${100 + 50 * Math.cos(i * Math.PI / 8)},${100 + 50 * Math.sin(i * Math.PI / 8)}
                              T100,170`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2 - (index * 0.5)}
                          strokeOpacity={0.3 - (index * 0.1)}
                          transform={`rotate(${i * 22.5} 100 100)`}
                        />
                      ))}
                    </motion.g>
                  ))}

                  {/* Central Pulsating Core */}
                  <motion.circle 
                    cx="100" 
                    cy="100" 
                    r="15"
                    fill="currentColor"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                    fillOpacity={0.8}
                  />
                </motion.svg>
          <div className="font-bold text-xl px-2 tracking-tight">
            <motion.span 
              className="bg-gradient-to-r from-fuchsia-500 via-rose-500 via-orange-500 via-amber-500 via-lime-500 via-green-500 to-emerald-600 to-teal-600 to-sky-600 to-blue-600 to-indigo-600 to-violet-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: [
                  '0% 50%', 
                  '100% 50%', 
                  '0% 50%'
                ]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '600% 100%'
              }}
            >
            Your Face  AI
            </motion.span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-2">
          <Button 
            className="bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center"
          >
            Take photo
            <Plus className="ml-1 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            className="bg-transparent border-gray-700 text-white hover:bg-gray-800"
          >
            Select
          </Button>
          
          <Button 
            variant="outline" 
            className="bg-transparent border-gray-700 text-white hover:bg-gray-800"
          >
            Upgrade
          </Button>
          
          <div className="flex items-center ml-2">
            <div className="flex items-center justify-center bg-green-500 rounded-full h-6 w-6 text-xs text-black">
              ⚡
            </div>
            <span className="ml-1 text-green-500 font-medium">894</span>
          </div>
        </div>
      </div>
    </header>
  );
}