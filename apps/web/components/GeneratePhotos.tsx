'use client';
import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import TextBox from "./textbox"
import { Button } from "./ui/button"
import { BACKEND_URL } from "@/app/config";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";
import { Textarea } from "@headlessui/react";
import { SelectModel } from "./Models";
import toast from "react-hot-toast"

export function GenerateImage() {
    const [prompt, setPrompt] = useState("");
    const [selectedModel, setSelectedModel] = useState<string>();

    const { getToken } = useAuth()

    return <div className="h-[60vh] items-center justify-center flex">
        <div>
            <SelectModel 
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel} />
            <div className="flex justify-center">
            <Textarea onChange={(e) => {
                setPrompt(e.target.value);
            }} placeholder="Describe the image that you'd like to see" className="py-0 px-2 w-l" />
        </div>
            <div className="flex justify-center pt-1">
                <Button onClick={async () => {
                    const token = await getToken();
                    await axios.post(`${BACKEND_URL}/ai/generate`, {
                        prompt,
                        modelId: selectedModel,
                        num: 1
                    }, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    toast("Image generation in progress")
                    setPrompt("");
                    /// alert here
                }} variant={"secondary"}>Generate Image</Button>
            </div>
        </div>
    </div>
}

