// apps/web/components/horizontal-mobile-sidebar.tsx
'use client';
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { GeneratePhotos } from "./GeneratePhotos";
import Train from "./train";

const menuSections = [
  { title: "Generate Images from Prompt", icon: "🖌️" },
  { title: "Remix a Photo", icon: "🔄" },
  { title: "News + coming soon", icon: "🌟" },
  { title: "Export your model", icon: "📤" },
  { title: "Create new AI model", icon: "🤖" },
];

export function HorizontalMobileSidebar() {
  return (
    <div className="md:hidden w-full bg-black text-white overflow-x-auto">
      <div className="flex gap-2 p-2 overflow-x-auto snap-x scrollbar-hide">
        {menuSections.map((section, index) => (
          <Collapsible 
            key={index}
            className="min-w-32 flex-shrink-0 bg-gray-900 rounded-lg snap-start"
          >
            <CollapsibleTrigger 
              className="flex items-center justify-between p-2 w-full text-center"
            >
              <div className="flex flex-col items-center w-full">
                <span className="text-xl">{section.icon}</span>
                <span className="text-xs mt-1 truncate w-full">{section.title}</span>
                <ChevronDown className="w-4 h-4 mt-1" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent 
              className="p-2 bg-gray-800 rounded-b-lg"
            >
              {section.title === "Generate Images from Prompt" ? (
                <GeneratePhotos />
              ) : section.title === "Create new AI model" ? (
                <Train />
              ) : section.title === "Export your model" ? (
                "List of safetensors"
              ) : section.title === "Remix a Photo" ? (
                "Remix options"
              ) : (
                "Upcoming features"
              )}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}