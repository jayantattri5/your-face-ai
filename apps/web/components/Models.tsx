"use client";
import { BACKEND_URL } from "@/app/config";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TModel {
    id: string;
    thumbnail: string;
    name: string;
    trainingStatus: "APPROVED" | "PENDING"
}

export function SelectModel({setSelectedModel, selectedModel}: {
    setSelectedModel: (model: string) => void;
    selectedModel?: string;
}) {
    const { getToken } = useAuth();
    const [modelLoading, setModelLoading] = useState(true);
    const [models, setModels] = useState<TModel[]>([]);
    const sliderRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        (async() => {
            const token = await getToken();
            const response = await axios.get(`${BACKEND_URL}/models`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            setModels(response.data.models);
            setSelectedModel(response.data.models[0]?.id);
            setModelLoading(false);
        })();
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = 220; // Width of model card + gap
            if (direction === 'left') {
                sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="max-w-xl relative">
            {!modelLoading && models.length > 0 && (
                <>
                    <button 
                        onClick={() => scroll('left')} 
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/70 rounded-full p-1 text-white hover:bg-gray-700"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    
                    <button 
                        onClick={() => scroll('right')} 
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/70 rounded-full p-1 text-white hover:bg-gray-700"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}
            
            <div 
                ref={sliderRef}
                className="flex overflow-x-auto scrollbar-hide gap-2 p-4 snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {models.filter(model => model.trainingStatus === "APPROVED").map(model => (
                    <div 
                        key={model.id}
                        className={`${selectedModel === model.id ? "border-red-300" : ""} flex-shrink-0 cursor-pointer rounded border p-2 w-48 snap-start`} 
                        onClick={() => {
                            setSelectedModel(model.id);
                        }}
                    >
                        <div className="flex justify-between flex-col h-full">
                            <div>
                                <img src={model.thumbnail} className="rounded w-full h-36 object-cover" alt={model.name} />
                            </div>
                            <div className="pt-4 text-xl text-gray-400 truncate">
                                {model.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {modelLoading && (
                <div className="flex gap-2 p-4 overflow-x-auto">
                    <Skeleton className="h-40 w-48 flex-shrink-0 rounded" />
                    <Skeleton className="h-40 w-48 flex-shrink-0 rounded" />
                    <Skeleton className="h-40 w-48 flex-shrink-0 rounded" />
                </div>
            )}
        </div>
    );
}