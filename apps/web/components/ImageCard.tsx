import { Skeleton } from "./ui/skeleton";
import React, { useState } from 'react';
import { Heart, Download, Eye, RotateCw, Copy, Edit, Zap, ZoomOut, Video, Box } from 'lucide-react';
import { ImageEditor } from './ImageEditor';

export interface TImage {
    id: string;
    status: string;
    imageUrl: string;
}

export function ImageCard(props: TImage) {
    const [isLiked, setIsLiked] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [imageUrl, setImageUrl] = useState(props.imageUrl);
    
    const handleLike = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsLiked(!isLiked);
        // Here you would typically call an API to save the like status
    };
    
    // Improved download image function
    const handleDownload = async (e: React.MouseEvent) => {
        e.stopPropagation();
        
        try {
            setIsDownloading(true);
            
            // Fetch the image as a blob
            const response = await fetch(imageUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const blob = await response.blob();
            
            // Create object URL from blob
            const url = window.URL.createObjectURL(blob);
            
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = url;
            
            // Set filename based on the image ID or URL
            const filename = imageUrl.split('/').pop() || `image-${props.id}.jpg`;
            link.download = filename;
            
            // Append to body, click and remove
            document.body.appendChild(link);
            link.click();
            
            // Clean up
            setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
                setIsDownloading(false);
            }, 100);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download the image. Please try again.');
            setIsDownloading(false);
        }
    };
    
    // View image in fullscreen
    const handleView = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFullscreen(true);
    };
    
    // Copy image URL to clipboard
    const handleCopyPrompt = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            // This would typically copy some prompt text associated with the image
            // For now, let's copy the image URL as an example
            await navigator.clipboard.writeText(imageUrl);
            alert('URL copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };
    
    // Handle edit button click
    const handleEdit = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsEditing(true);
    };
    
    // Handle saving edited image
    const handleSaveEdit = (editedImageUrl: string) => {
        setImageUrl(editedImageUrl);
        setIsEditing(false);
        
        // Here you would typically call an API to save the edited image
        console.log('Image edited and saved:', editedImageUrl);
    };
    
    // Generic handler for other actions
    const handleAction = (action: string, e: React.MouseEvent) => {
        e.stopPropagation();
        console.log(`${action} action triggered for image: ${props.id}`);
        alert(`${action} feature would be implemented here`);
    };
    
    // Close fullscreen view
    const closeFullscreen = () => {
        setIsFullscreen(false);
    };
    
    return (
        <>
            <div className="relative border rounded-xl border-gray-700 max-w-[400px] overflow-hidden bg-black text-white group cursor-pointer">
                {/* Main image */}
                {props.status === "GENERATED" ? (
                    <img src={imageUrl} alt="Image" className="w-full h-64 object-cover" />
                ) : (
                    <div className="w-full h-64 bg-gray-800 animate-pulse" />
                )}
                
                {/* Heart button (visible always) */}
                <button 
                    className="absolute top-2 left-2 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition-all"
                    onClick={handleLike}
                >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                </button>
                
                {/* Action buttons (visible on hover) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4">
                        {/* Top row */}
                        <button 
                            className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-white/20 transition-all"
                            onClick={handleDownload}
                            disabled={isDownloading}
                        >
                            {isDownloading ? 
                                <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div> : 
                                <Download className="w-6 h-6" />
                            }
                            <span className="absolute text-xs mt-16">
                                {isDownloading ? 'DOWNLOADING...' : 'DOWNLOAD'}
                            </span>
                        </button>
                        
                        <button 
                            className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-white/20 transition-all"
                            onClick={handleView}
                        >
                            <Eye className="w-6 h-6" />
                            <span className="absolute text-xs mt-16">VIEW</span>
                        </button>
                        <button 
                            className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-white/20 transition-all"
                            onClick={(e) => handleAction('zoomOut', e)}
                        >
                            <ZoomOut className="w-6 h-6" />
                            <span className="absolute text-xs mt-16">ZOOM OUT</span>
                        </button>                        
                        
                        {/* Middle row */}
                        <button 
                            className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-white/20 transition-all"
                            onClick={handleCopyPrompt}
                        >
                            <Copy className="w-6 h-6" />
                            <span className="absolute text-xs mt-16">COPY PROMPT</span>
                        </button>
                        
                        <button 
                            className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-white/20 transition-all"
                            onClick={handleEdit}
                        >
                            <Edit className="w-6 h-6" />
                            <span className="absolute text-xs mt-16">EDIT</span>
                        </button>
                        
                        <button 
                            className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-white/20 transition-all"
                            onClick={(e) => handleAction('upscale', e)}
                        >
                            <Zap className="w-6 h-6" />
                            <span className="absolute text-xs mt-16">UPSCALE</span>
                        </button>
                        
                        {/* Bottom row */}
                        <button 
                            className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-white/20 transition-all"
                            onClick={(e) => handleAction('remix', e)}
                        >
                            <RotateCw className="w-6 h-6" />
                            <span className="absolute text-xs mt-16">REMIX</span>
                        </button>
                        
                        <button 
                            className="w-12 h-12 rounded-full bg-black/60 flex items-center justify-center hover:bg-white/20 transition-all"
                            onClick={(e) => handleAction('makeVideo', e)}
                        >
                            <Video className="w-6 h-6" />
                            <span className="absolute text-xs mt-16">MAKE VIDEO</span>
                        </button>
                    </div>
                </div>
                
                {/* Footer with PLUS tag */}
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    FLUX
                </div>
                
                {/* Optional watermark or footer info */}
                <div className="absolute bottom-1 right-2 text-xs text-gray-400">
                    harVie.ai, 9s ago, took 6s
                </div>
            </div>
            
            {/* Fullscreen view modal */}
            {isFullscreen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={closeFullscreen}>
                    <div className="relative max-w-6xl max-h-screen p-4">
                        <button 
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center hover:bg-white/20 transition-all text-white"
                            onClick={closeFullscreen}
                        >
                            ✕
                        </button>
                        <img 
                            src={imageUrl} 
                            alt="Fullscreen view" 
                            className="max-w-full max-h-screen object-contain"
                            onClick={(e) => e.stopPropagation()} 
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                            <button 
                                className="px-4 py-2 bg-white text-black rounded-full flex items-center gap-2 hover:bg-gray-200"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDownload(e);
                                }}
                            >
                                <Download className="w-4 h-4" />
                                Download
                            </button>
                            <button 
                                className="px-4 py-2 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    closeFullscreen();
                                    setIsEditing(true);
                                }}
                            >
                                <Edit className="w-4 h-4" />
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Image editor modal */}
            {isEditing && (
                <ImageEditor 
                    imageUrl={imageUrl}
                    onClose={() => setIsEditing(false)}
                    onSave={handleSaveEdit}
                />
            )}
        </>
    );
}

export function ImageCardSkeleton() {
    return <div className="border rounded-xl border-2 max-w-[400px] cursor-pointer">
        <div className="flex p-4 gap-4">
            <Skeleton className="rounded h-40 w-full" />
        </div>
    </div>
}