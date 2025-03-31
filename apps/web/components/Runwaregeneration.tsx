"use client";
import { useState, useRef, useEffect } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import axios from "axios";
import { BACKEND_URL, CLOUDFLARE_URL } from "@/app/config";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import GeneratedImages from "./GeneratedImages";

export function RunwareGeneratePhotos() {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [generationTime, setGenerationTime] = useState<string | null>(null);
    const [displayPlaceholder, setDisplayPlaceholder] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
    const currentPlaceholderRef = useRef<string>("");
    const currentCharIndexRef = useRef<number>(0);
    const currentPhaseRef = useRef<"appearing" | "complete" | "disappearing">("appearing");
    const { getToken } = useAuth();
    const { user } = useUser();
    
    // Check for a saved prompt on component mount
    useEffect(() => {
        const savedPrompt = localStorage.getItem('selectedPrompt');
        if (savedPrompt) {
            setPrompt(savedPrompt);
            // Clear the saved prompt to prevent it from being used again on refresh
            localStorage.removeItem('selectedPrompt');
            
            // Auto-focus the textarea
            if (textareaRef.current) {
                textareaRef.current.focus();
            }
            
            // Optionally, you could auto-generate the image too
            // If you want that, uncomment the next line
            // setTimeout(() => handleGenerate(), 500);
        }
    }, []);
    
    // Placeholder messages that will rotate
    const placeholders = [
        "Ask YourFaceAi to imagine a picture that...",
        "Ask YourFaceAI to generate an image that looks like...",
        "Ask YourFaceAI to capture the moment two parallel worlds collide....",
        "Ask YourFaceAI to imagine an empire where reality is rewritten daily...",
        "Ask YourFaceAI to create a forbidden library where books glow with untold power...",
        "Ask YourFaceAI to summon an ancient god whose reflection bends reality itself...",
        "Ask YourFaceAI to paint a battlefield where beings shape the fate of existence...",
        "Ask YourFaceAI to unveil a titan, with stars burning in its veins...",
        "Create a visual for an idea or concept you have in mind...",
    ];

    // Auto-resize textarea height based on content
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = `${scrollHeight}px`;
        }
    }, [prompt]);
    
    // Advanced word-by-word animation for placeholders
    useEffect(() => {
        // Don't animate placeholder if we already have a prompt
        if (prompt) {
            setDisplayPlaceholder("");
            return;
        }
        
        let placeholderIndex = 0;
        
        const startNextPlaceholder = () => {
            // Select the next placeholder
            currentPlaceholderRef.current = placeholders[placeholderIndex] || "";
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
            
            // Split into words for animation
            currentCharIndexRef.current = 0;
            currentPhaseRef.current = "appearing";
            
            // Start the animation
            animatePlaceholder();
        };
        
        const animatePlaceholder = () => {
            // If a prompt has been set, stop animation
            if (prompt) {
                setDisplayPlaceholder("");
                return;
            }
            
            if (animationTimerRef.current) {
                clearTimeout(animationTimerRef.current);
            }
            
            // Handle different animation phases
            if (currentPhaseRef.current === 'appearing') {
                // Add words one by one from left to right
                if (currentCharIndexRef.current < currentPlaceholderRef.current.length) {
                    setDisplayPlaceholder(currentPlaceholderRef.current.slice(0, currentCharIndexRef.current + 1));
                    currentCharIndexRef.current++;
                    
                    // Schedule next word to appear
                    animationTimerRef.current = setTimeout(animatePlaceholder, 70) as NodeJS.Timeout;
                } else {
                    // All words are visible, pause before disappearing
                    currentPhaseRef.current = 'complete';
                    animationTimerRef.current = setTimeout(animatePlaceholder, 2000) as NodeJS.Timeout;
                }
            } else if (currentPhaseRef.current === 'complete') {
                // Start disappearing phase
                currentPhaseRef.current = 'disappearing';
                currentCharIndexRef.current = currentPlaceholderRef.current.length;
                animationTimerRef.current = setTimeout(animatePlaceholder, 70) as NodeJS.Timeout;
            } else if (currentPhaseRef.current === 'disappearing') {
                // Remove words one by one from right to left
                if (currentCharIndexRef.current > 0) {
                    setDisplayPlaceholder(currentPlaceholderRef.current.slice(0, currentCharIndexRef.current - 1));
                    currentCharIndexRef.current--;
                    
                    // Schedule next word to disappear
                    animationTimerRef.current = setTimeout(animatePlaceholder, 0) as NodeJS.Timeout;
                } else {
                    // 🛠 Fix: Make sure the text stays blank before moving to the next placeholder
                    setDisplayPlaceholder(""); // Ensure it stays empty for a moment
                    // All words have disappeared, start next placeholder
                    animationTimerRef.current = setTimeout(startNextPlaceholder, 500) as NodeJS.Timeout;
                }
            }
        };
        
        // Start the animation cycle
        startNextPlaceholder();
        
        
        // Cleanup
        return () => {
            if (animationTimerRef.current) {
                clearTimeout(animationTimerRef.current);
            }
        };
    }, [prompt]); // Added prompt to dependencies to stop animation when prompt is set

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            toast.error("Please enter a prompt.");
            return;
        }

        const taskUUID = uuidv4();
        const startTime = new Date().getTime();

        setLoading(true);
        setImageLoading(true);
        setImageUrl(null);
        setGenerationTime(null);
        toast("Generating image...");

        try {
            const apiKey = process.env.NEXT_PUBLIC_RUNWARE_API_KEY;
            if (!apiKey) {
                throw new Error("Runware API key is not configured");
            }

            const response = await axios.post(
                "https://api.runware.ai/v1",
                [
                    {
                        taskType: "imageInference",
                        taskUUID: taskUUID,
                        positivePrompt: prompt,
                        model: "runware:100@1",
                        outputType: "URL",
                        outputFormat: "JPG",
                        uploadEndpoint: CLOUDFLARE_URL,
                        includeCost: true,
                        negativePrompt: "worst quality, normal quality, low quality, low res, blurry, distortion, text, watermark, logo, banner, extra digits, cropped, jpeg artifacts, signature, username, error, sketch, duplicate, ugly, monochrome, horror, geometry, mutation, disgusting, bad anatomy, bad proportions, bad quality, deformed, disconnected limbs, out of frame, out of focus, dehydrated, disfigured, extra arms, extra limbs, extra hands, fused fingers, gross proportions, long neck, jpeg, malformed limbs, mutated, mutated hands, mutated limbs, missing arms, missing fingers, picture frame, poorly drawn hands, poorly drawn face, collage, pixel, pixelated, grainy, color aberration, amputee, autograph, bad illustration, beyond the borders, blank background, body out of frame, boring background, branding, cut off, dismembered, disproportioned, distorted, draft, duplicated features, extra fingers, extra legs, fault, flaw, grains, hazy, identifying mark, improper scale, incorrect physiology, incorrect ratio, indistinct, kitsch, low resolution, macabre, malformed, mark, misshapen, missing hands, missing legs, mistake, morbid, mutilated, off-screen, outside the picture, poorly drawn feet, printed words, render, repellent, replicate, reproduce, revolting dimensions, script, shortened, sign, split image, squint, storyboard, tiling, trimmed, unfocused, unattractive, unnatural pose, unreal engine, unsightly, written language",
                        height: 512,
                        width: 512,
                        numberResults: 1,
                    },
                ],
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Full API Response:", response.data);

            // Calculate generation time
            const endTime = new Date().getTime();
            const timeTaken = ((endTime - startTime) / 1000).toFixed(1);
            setGenerationTime(timeTaken);

            // Extract image URL from the response
            const imageData = response.data?.data?.[0];
            if (imageData?.imageURL) {
                console.log("Image URL:", imageData.imageURL);
                setImageUrl(imageData.imageURL);
                toast.success("Image generated successfully!");

                // Send the image data to your backend to store it
                await saveImageToDatabase(
                    imageData.imageURL, 
                    taskUUID, 
                    imageData.cost, 
                    parseFloat(timeTaken)
                );
            } else {
                throw new Error("No valid image URL found in the response");
            }
        } catch (error) {
            console.error("Image Generation Error:", error);
            toast.error("Failed to generate image. Please check the console for details.");
        } finally {
            setLoading(false);
            setImageLoading(false); // Ensure we stop loading state even on error
        }
    };

    const saveImageToDatabase = async (imageURL: string, taskUUID: string, cost: number, generationTime: number) => {
        try {
            const token = await getToken();
            const userId = user?.id;

            if (!userId) {
                toast.error("User not authenticated.");
                return;
            }
            
            const response = await axios.post(`${BACKEND_URL}/runware/generate`, {
                imageUUID: uuidv4(),
                taskUUID,
                imageURL,
                cost,
                seed: String(Date.now()),
                userId,
                prompt,
                runwareRequestId: taskUUID,
                generationTime
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            
            console.log("Image saved to DB:", response.data);
            toast.success("Image saved to database!");
        } catch (error) {
            console.error("Error saving image to database:", error);
            toast.error("Failed to save image to database.");
        }
    };

    return (
        <div className="h-screen w-full py-10 relative overflow-y-auto overflow-x-hidden bg-gradient-to-br from-gray-900 to-black">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
                Use your{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        Infinite
        </span>{" "}
        to Use this{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        Infinite
        </span>
      </h1>
      <p className="text-3xl md:text-2xl text-center mb-8">
        As this section has{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        no Limitations
        </span>{" "}
      </p>
      <p className="text-3xl md:text-2xl text-center mb-8">
        Generate as much images as you want{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        Forever
        </span>{" "}
      </p>
            {/* Main content area with proper scrolling */}
            <div className="min-h-screen ml-0 relative pb-32">
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/50 -z-5"></div>
                
                {/* Fixed input area at the top */}
                <div className="fixed top-110 left-0 right-0 z-30">
                    <div className="flex justify-center ml-50">
                        <div className="w-full max-w-2xl px-4">
                            <div className="relative group">
                                {/* Textarea with scrolling and blurred background */}
                                <div className="relative">
                                    {/* Blurred background */}
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-2xl"></div>
                                    <div className="relative flex items-start py-2">
                                        <textarea
                                            ref={textareaRef}
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)}
                                            placeholder={displayPlaceholder}
                                            className="w-full bg-transparent text-white py-5 px-6 rounded-2xl outline-none placeholder:text-gray-400 relative z-10 min-h-20 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent resize-none"
                                            style={{ 
                                                paddingRight: "3rem",
                                                scrollbarWidth: "thin", // For Firefox
                                            }}
                                            rows={2}
                                        />
                                        <button
                                            onClick={handleGenerate}
                                            disabled={loading}
                                            className="absolute right-4 top-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                                        >
                                            {loading ? (
                                                <span className="block w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                </svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Custom scrollbar and animation styles */}
                                <style jsx global>{`
                                    /* Custom scrollbar for Webkit browsers */
                                    textarea::-webkit-scrollbar {
                                        width: 6px;
                                    }
                                    
                                    textarea::-webkit-scrollbar-track {
                                        background: transparent;
                                    }
                                    
                                    textarea::-webkit-scrollbar-thumb {
                                        background-color: rgba(255, 255, 255, 0.2);
                                        border-radius: 3px;
                                    }
                                    
                                    textarea::-webkit-scrollbar-thumb:hover {
                                        background-color: rgba(255, 255, 255, 0.3);
                                    }
                                    
                                    /* Smooth transition for placeholder text */
                                    textarea::placeholder {
                                        transition: all 0.2s ease;
                                        white-space: nowrap;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                    }
                                    
                                    /* Word-by-word animation styles */
                                    @keyframes wordFadeIn {
                                        from { opacity: 0; transform: translateX(-5px); }
                                        to { opacity: 1; transform: translateX(0); }
                                    }
                                    
                                    @keyframes wordFadeOut {
                                        from { opacity: 1; transform: translateX(0); }
                                        to { opacity: 0; transform: translateX(5px); }
                                    }
                                `}</style>

                                {/* Controls that appear below the input */}
                                <div className="flex justify-center mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex space-x-4 bg-black/40 backdrop-blur-md rounded-full px-4 py-2">
                                        <button className="text-white/70 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            </svg>
                                        </button>
                                        <button className="text-white/70 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M6 9h12"></path>
                                                <path d="M6 12h12"></path>
                                                <path d="M6 15h12"></path>
                                            </svg>
                                        </button>
                                        <button className="text-white/70 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 3v18"></path>
                                                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            </svg>
                                        </button>
                                        <button className="text-white/70 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                <path d="M12 17h.01"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Current image section */}
                <div className="relative pt-5 z-10">
                    <div className="flex justify-center mb-16">
                        {imageUrl || imageLoading ? (
                            <div className="bg-black/40 backdrop-blur-md rounded-lg p-4 max-w-md transition-all duration-300 ease-in-out transform hover:scale-105">
                                <div className="relative aspect-square w-full">
                                    {imageLoading && !imageUrl && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/50 rounded-lg">
                                            <div className="relative w-20 h-20">
                                                <div className="absolute inset-0 border-4 border-gray-300/30 rounded-full"></div>
                                                <div className="absolute inset-0 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                                            </div>
                                            <p className="mt-4 text-white text-sm font-medium">Generating your masterpiece...</p>
                                        </div>
                                    )}
                                    
                                    {imageUrl && (
                                        <>
                                            <div className={`absolute inset-0 flex items-center justify-center ${imageLoading ? 'opacity-100' : 'opacity-0'} z-10 transition-opacity duration-300`}>
                                                <span className="block w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
                                            </div>
                                            <Image 
                                                src={imageUrl} 
                                                alt={prompt}
                                                width={512} 
                                                height={512}
                                                className={`rounded-lg w-full object-cover ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                                                onLoadStart={() => setImageLoading(true)}
                                                onLoad={() => setImageLoading(false)}
                                                priority
                                            />
                                        </>
                                    )}
                                </div>
                                {imageUrl && (
                                    <div className="mt-3">
                                        <p className="text-white text-sm font-medium leading-relaxed">{prompt}</p>
                                        <div className="flex justify-between items-center mt-2 text-xs text-gray-300">
                                            <div>
                                                <span>{new Date().toLocaleString()}</span>
                                                {generationTime && (
                                                    <span className="ml-2 bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                                                        {generationTime}s
                                                    </span>
                                                )}
                                            </div>
                                            <button className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                    <polyline points="7 10 12 15 17 10"></polyline>
                                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                                </svg>
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center text-white/80">
                                <div className="bg-black/30 backdrop-blur-md rounded-lg p-8 max-w-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-white/50 mb-4">
                                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                                        <circle cx="9" cy="9" r="2"></circle>
                                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                                    </svg>
                                    <h3 className="text-xl font-semibold mb-2">Enter a prompt to generate an image</h3>
                                    <p className="text-white/60">Your generated image will appear here. Be descriptive for better results!</p>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Generated images gallery section with 4-column grid */}
                    <div className="mt-8 mx-4">
                        <h2 className="text-xl font-semibold text-white mb-6 pl-2 border-l-4 border-blue-500">Your Generated Images</h2>
                        
                        <style jsx>{`
                            /* Custom style to modify GeneratedImages component */
                            :global(.generated-images-wrapper) {
                                display: grid;
                                grid-template-columns: repeat(1, 1fr);
                                gap: 0rem;
                                width: 100%;
                            }
                            
                            @media (min-width: 768px) {
                                :global(.generated-images-wrapper) {
                                    grid-template-columns: repeat(4, 1fr);
                                }
                            }
                        `}</style>
                        
                        {/* Custom wrapper for GeneratedImages component */}
                        <div className="generated-images-wrapper">
                            <GeneratedImages />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}