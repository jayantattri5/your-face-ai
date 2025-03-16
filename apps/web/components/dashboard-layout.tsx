"use client";
// components/dashboard-layout.tsx
import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brush, Grid, Image, ArrowUpRight, SquarePen, Sparkles } from "lucide-react";
import Examples from "@/components/example";
import { Packs } from "@/components/Packs";
import Saved from "@/components/Saved";
import GeneratedImages from "@/components/GeneratedImages";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

interface DashboardLayoutProps {
    children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <SidebarProvider>
            <div className="flex flex-col md:flex-row min-h-screen">
                <AppSidebar />
                <main className="flex-1 pl-o md:pl-2 w-full">
                    <div className="p-2">
                        <SidebarTrigger />
                        {children}
                    </div>
                    
                    <div className="flex flex-col items-center w-full">
                        <div className="w-full max-w-3xl px-4 mt-2">
                            <Tabs defaultValue="image-creation" className="w-full">
                                <div className="flex justify-center mb-6">
                                    <TabsList className="flex justify-between items-center bg-black rounded-full p-3 w-full max-w-2xl relative px-60">
                                        <div className="absolute py-5 inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-50 rounded-full px-30 "></div>
                                        <TabsTrigger value="packs" className="flex flex-col items-center text-white relative z-10">
                                            <Brush size={20} />
                                            <span className="text-xs mt-1">Packs</span>
                                        </TabsTrigger>
                                        <TabsTrigger value="examples" className="flex flex-col items-center text-white relative z-10">
                                            <Grid size={20} />
                                            <span className="text-xs mt-1">Examples</span>
                                        </TabsTrigger>
                                        <TabsTrigger value="gallery" className="flex flex-col items-center bg-white text-black p-4 rounded-full shadow-lg w-24 h-24 flex justify-center items-center aspect-square relative z-10 ring-4 ring-black-500">
                                            <Image size={28} />
                                            <span className="text-sm mt-1">Gallery</span>
                                        </TabsTrigger>
                                        <TabsTrigger value="upscaler" className="flex flex-col items-center text-white relative z-10">
                                            <ArrowUpRight size={20} />
                                            <span className="text-xs mt-1">Upscaler</span>
                                        </TabsTrigger>
                                        <TabsTrigger value="canvas-editor" className="flex flex-col items-center text-white relative z-10">
                                            <Sparkles size={20} />
                                            <span className="text-xs mt-1">Canvas Editor</span>
                                        </TabsTrigger>
                                    </TabsList>
                                </div>
                                
                                <div className="mt-4">
                                    <TabsContent value="packs" className="p-2">
                                        <Packs />
                                        <p className="mt-4">Show the list of all packs here.</p>
                                    </TabsContent>
                                    <TabsContent value="examples" className="p-2">
                                        <Examples />
                                    </TabsContent>
                                    <TabsContent value="gallery" className="p-2">
                                        <GeneratedImages />
                                    </TabsContent>
                                    <TabsContent value="upscaler" className="p-2">
                                        <Saved />
                                        <p className="mt-4">Show the upscaled images here.</p>
                                    </TabsContent>
                                    <TabsContent value="canvas-editor" className="p-2">
                                        <p>Show the canvas editor features here.</p>
                                    </TabsContent>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
}