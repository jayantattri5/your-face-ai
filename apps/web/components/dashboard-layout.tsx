import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brush, Grid, Image, ArrowUpRight, SquarePen, Sparkles } from "lucide-react";
import { Packs } from "@/components/Packs";
import Saved from "@/components/Saved";
import GeneratedImages from "@/components/GeneratedImages";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Examples from "./ui/examples";
import { Navbar } from "@/components/navbar"; // Import the Navbar component

interface DashboardLayoutProps {
    children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            {/* Fixed navbar at the top */}
            <Navbar />
            
            {/* Content area below navbar */}
            <div className="flex flex-1 overflow-hidden">
                <SidebarProvider>
                    <AppSidebar />
                    
                    <main className="flex-1 overflow-auto">
                        
                        {/* Main content area */}
                        <div className="px-4">
                            {children}
                        </div>
                        
                        {/* Tabs section */}
                        <div className="mt-4 px-4">
                            <Tabs defaultValue="gallery" className="w-full">
                                {/* Tabs navigation */}
                                <div className="sticky top-5 flex justify-center mb-8">
                                    <TabsList className="flex justify-between items-center bg-transparent">
                                        
                                        <TabsTrigger value="packs" className="flex flex-col items-center text-white px-4">
                                            <div className="p-2 rounded-lg mb-2">
                                                <Brush size={20} />
                                            </div>
                                            <span>Packs</span>
                                        </TabsTrigger>
                                        
                                        <TabsTrigger value="examples" className="flex flex-col items-center text-white px-4">
                                            <div className="p-2 rounded-lg mb-2">
                                                <Grid size={20} />
                                            </div>
                                            <span>Examples</span>
                                        </TabsTrigger>
                                        
                                        {/* Featured Gallery tab */}
                                        <TabsTrigger value="gallery" className="flex flex-col items-center text-white px-4">
                                            <div className="p-4 bg-white text-black rounded-full mb-2 relative ring-4">
                                                <Image size={24} />
                                            </div>
                                            <span>Gallery</span>
                                        </TabsTrigger>
                                        
                                        <TabsTrigger value="upscaler" className="flex flex-col items-center text-white px-4">
                                            <div className="p-2 rounded-lg mb-2">
                                                <ArrowUpRight size={20} />
                                            </div>
                                            <span>Upscaler</span>
                                        </TabsTrigger>
                                        
                                        <TabsTrigger value="canvas-editor" className="flex flex-col items-center text-white px-4">
                                            <div className="p-2 rounded-lg mb-2">
                                                <Sparkles size={20} />
                                            </div>
                                            <span>Canvas Editor</span>
                                        </TabsTrigger>
                                    </TabsList>
                                </div>
                                
                                {/* Tab content */}
                                <TabsContent value="packs">
                                    <div className="p-4">
                                        <Packs />
                                    </div>
                                </TabsContent>
                                
                                <TabsContent value="examples">
                                    <div className="p-4">
                                        <Examples />
                                    </div>
                                </TabsContent>
                                
                                <TabsContent value="gallery">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                                        <GeneratedImages />
                                    </div>
                                </TabsContent>
                                
                                <TabsContent value="upscaler">
                                    <div className="p-4">
                                        <Saved />
                                    </div>
                                </TabsContent>
                                
                                <TabsContent value="canvas-editor">
                                    <div className="p-4">
                                        <p>Canvas editor features will appear here.</p>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </main>
                </SidebarProvider>
            </div>
        </div>
    );
}