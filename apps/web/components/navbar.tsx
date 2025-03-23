import React from "react";
import { Camera, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-black border-b border-gray-800">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
          <div className="font-bold text-white text-xl px-2 tracking-tight">
            Your Face <span className="text-white">AI</span>
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