"use client";
import { BACKEND_URL } from "@/app/config";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";

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
    const { getToken } = useAuth()
    const [modelLoading, setModelLoading] = useState(true);
    const [models, setModels] = useState<TModel[]>([]);

    useEffect(() => {
        (async() => {
            const token = await getToken();
            const response = await axios.get(`${BACKEND_URL}/models`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            setModels(response.data.models);
            setSelectedModel(response.data.models[0]?.id);
            setModelLoading(false)
        })()
    }, [])

    return <>

    <div className="max-w-xl">
        <div className="grid grid-cols-5 gap-2 p-4">
        {models.filter(model => model.trainingStatus ==="APPROVED").map(model => <div 
            key={model.id}
            className={`${selectedModel === model.id ? "border-red-300" : ""} cursor-pointer rounded border p-2 w-full`} 
            onClick={() => {
                setSelectedModel(model.id);
            }}>
                <div className="flex justify-between flex-col h-full">
                    <div>
                        <img src={model.thumbnail} className="rounded" alt={model.name} />
                    </div>
                    <div className="pt-8 text-xl text-gray-400">
                        {model.name}
                    </div>
                </div>
            </div>)}
        </div>

        {modelLoading && <div className="flex gap-2 p-4">
            <Skeleton className="h-40 w-full rounded" />
            <Skeleton className="h-40 w-full rounded" />
            <Skeleton className="h-40 w-full rounded" />
            <Skeleton className="h-40 w-full rounded" />
        </div>}
        
    </div>
</>
}