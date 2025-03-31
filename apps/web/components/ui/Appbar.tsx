"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Appbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 825);
    };

    // Check device width on mount and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    handleResize();

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-transparent flex justify-center">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-2 z-50 w-[95%] sm:w-[90%] p-1 sm:p-2 transition-all duration-300 ease-in-out rounded-xl sm:rounded-2xl ${
          isScrolled 
            ? "backdrop-blur-xl bg-background/50 border-b border-neutral-300 dark:border-neutral-900 shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto max-w-6xl px-2 sm:px-4 lg:px-8 rounded-5xl"
        >
          <div className="flex h-10 sm:h-12 items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="flex items-center space-x-1 sm:space-x-2 transition-opacity hover:opacity-90"
              >
                <motion.svg 
                  className="w-16 h-16 sm:w-14 sm:h-14 mr-0"
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
                  <motion.svg 
                  className="w-8 h-8 sm:w-10 sm:h-10 mr-2 sm:mr-4"
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
                </motion.svg>
                <div className="font-bold text-lg sm:text-2xl tracking-tight">
                  {!isMobile && (
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
                      Your Face AI
                    </motion.span>
                  )}
                  {isMobile && (
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
                  )}
                </div>
              </Link>
            </motion.div>

            {/* Auth & Pricing */}
            <div className="flex items-center gap-1 md:gap-4">
              <SignedIn>
                {!isMobile && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs sm:text-sm dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                      asChild
                    >
                      <Link href="/Dashboard">Dashboard</Link>
                    </Button> 
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs sm:text-sm dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                      asChild
                    >
                      <Link href="/purchases">My Purchases</Link>
                    </Button>
                  </>
                )}
                {isMobile && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs p-1 sm:p-2 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                    asChild
                  >
                    <Link href="/Dashboard">Menu</Link>
                  </Button>
                )}
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox:
                        "h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-primary/10 transition-all hover:ring-primary/30",
                      userButtonPopover: "right-0 mt-2",
                    },
                  }}
                />
              </SignedIn>
              <SignedOut>
                {!isMobile && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs sm:text-sm dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                    asChild
                  >
                    <Link href="/Legal">Legal</Link>
                  </Button>
                )}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="default"
                    size="sm"
                    className="text-xs sm:text-sm relative overflow-hidden bg-gradient-to-r from-neutral-800 to-neutral-900 text-white dark:from-neutral-700 dark:to-neutral-800 border border-neutral-600 dark:border-neutral-700 rounded-lg shadow-md shadow-neutral-800/20 dark:shadow-black/30 px-2 sm:px-4 py-1 sm:py-2 font-medium tracking-wide transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:from-neutral-700 hover:to-neutral-900 dark:hover:from-neutral-600 dark:hover:to-neutral-750"
                    asChild
                  >
                    <SignInButton mode="modal">
                      <span>Sign In</span>
                    </SignInButton>
                  </Button>
                </motion.div>
              </SignedOut>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </div>
  );
}