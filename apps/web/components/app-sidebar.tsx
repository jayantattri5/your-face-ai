'use client';
import { ChevronDown, Settings, Moon, Sun } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Train } from "./train";
import TextBox from "./textbox";
import { GenerateImage } from "./GeneratePhotos";

const menuSections = [
  { title: "Generate Images from Prompt" },
  { title: "Remix a Photo" },
  { title: "News + coming soon 🌟" },
  { title: "Create new AI model" },
  { title: "Export your model" },
];

export function AppSidebar() {
  // Set dark mode as default
  const [darkMode, setDarkMode] = useState(true);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Sidebar className={clsx(
      "w-70 min-h-screen",
      darkMode ? "bg-black text-white" : "bg-white text-black"
    )}>
      <SidebarGroupLabel className={darkMode ? "text-white" : ""}>
        This is a sidebar
      </SidebarGroupLabel>
      <SidebarContent>
        {menuSections.map((section, index) => (
          <Collapsible 
            key={index} 
            className={clsx(
              "border-b", 
              darkMode ? "border-gray-800" : "border-gray-800"
            )}
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
              className={clsx(
                "p-4",
                darkMode ? "bg-black text-white" : ""
              )}
            >
              {section.title === "Generate Images from Prompt" ? (
                <GenerateImage />
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
        <SidebarGroup className={clsx(
          "pl-6 py-2", 
          darkMode ? "text-gray-400" : "text-gray-400"
        )}>
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