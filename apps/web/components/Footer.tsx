"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/120">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2">
            <motion.svg 
                  className="w-15 h-15 mr-0"
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
              <div className="font-bold text-2xl px-0 tracking-tight">
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

            <p className="mt-4 max-w-sm text-muted-foreground">
              Transform your photos with AI-powered editing tools. Create
              stunning visuals with just a few clicks.
            </p>

            <div className="mt-6 flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-4">
              <p className="font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">Company</p>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/About"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  href="/Pricing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
                <Link
                  href="/Blog"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </nav>
            </div>

            <div className="space-y-4">
              <p className="font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">Help</p>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/Faq"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  FAQ
                </Link>
                <Link
                  href="/Legal/Contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
                <Link
                  href="/Legal/Refund"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Return & Refunds
                </Link>
                <Link
                  href="/Legal"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms & Conditions
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Fabric Bazaar. All rights reserved.
            </p>

            <div className="flex gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="/Legal/Contact"
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="/Legal"
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Terms & Conditions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}