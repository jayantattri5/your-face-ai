'use client';
import { ChevronDown } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import Train from "./train";
import { GeneratePhotos } from "./GeneratePhotos";

const menuSections = [
  { title: "Generate Images from Prompt" },
  { title: "Remix a Photo" },
  { title: "News + coming soon 🌟" },
  { title: "Export your model" },
  { title: "Create new AI model" },
];

export function AppSidebar() {

  return (
    <Sidebar className=" w-70 min-h-screen bg-black text-white">
      <SidebarGroupLabel className="text-white py-9">
        This is a sidebar
      </SidebarGroupLabel>
      <SidebarContent>
        {menuSections.map((section, index) => (  
          <Collapsible 
            key={index} 
            className="border-b border-gray-800"
          >
            <CollapsibleTrigger 
              title={section.title} 
              className="flex items-center justify-between px-4 py-3 w-full text-left"
            >
              {section.title}
              <ChevronDown className="transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent 
              title={section.title}
              className="p-4 bg-black text-white"
            >
              {section.title === "Generate Images from Prompt" ? (
                <GeneratePhotos />
              ) : section.title === "Create new AI model" ? (
                <Train />
              ): section.title === "Export your model" ? (
                "List of fileof safetensors of user's trained models Here"
              ) : section.title === "Remix a Photo" ? (
                "Description of the generated image with promt and other specifications"
              ) : (
                "Upcoming features of the app here"
              )}
            </CollapsibleContent>
          </Collapsible>
        ))}
        <SidebarGroup className="pl-6 py-2 text-gray-400">
          <SidebarMenu>
            <SidebarMenuItem>
            </SidebarMenuItem>
            <SidebarMenuItem>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}