"use client";
import { useAuth } from "@clerk/nextjs"
import { BACKEND_URL } from "@/app/config"
import axios from "axios";
import { useEffect, useState } from "react";
import { ImageCard, ImageCardSkeleton, TImage } from "./ImageCard";

export default function GeneratedImages() {
    const [images, setImages] = useState<TImage[]>([]);
    const [imagesLoading, setImagesLoading] = useState(true);
    const { getToken } = useAuth()

    useEffect(() => {
        (async() => {
            try {
                const token = await getToken();
                const response = await axios.get(`${BACKEND_URL}/image/bulk`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                console.log(response.data);
                setImages(response.data.images);
                setImagesLoading(false);
                console.log('Response data:', response.data);
            } catch(error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);
    
    // The parent component in dashboard-layout.tsx already has the grid structure
    // So we just need to return the image cards correctly
    return (
        <>
            {images?.map(image => (
                <div key={image.id} className="mb-4">
                    <ImageCard {...image} />
                </div>
            ))}
            
            {imagesLoading && (
                <>
                    <div className="mb-4"><ImageCardSkeleton /></div>
                    <div className="mb-4"><ImageCardSkeleton /></div>
                    <div className="mb-4"><ImageCardSkeleton /></div>
                </>
            )}
        </>
    );
}