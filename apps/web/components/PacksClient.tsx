"use client";
import { useState } from "react";
import { SelectModel } from "./Models";
import { PackCard, TPack } from "./PackCard";

export function PacksClient({packs}: {
    packs:TPack[]
}) {
    const [selectedModelId, setSelectedModelId] = useState<string>();
    
    return <>
        <div className="text-3xl pb-2 py-12 text-white">Step-1 Choose the model</div>
        <SelectModel selectedModel={selectedModelId} setSelectedModel={setSelectedModelId} />
        <div className="text-3xl pb-4 text-white">Step-2 Choose the pack for the model</div>
        <div className="grid md:grid-cols-2 gap-4 p-0 grids-cols-1">
            {packs?.map(p => <PackCard key={p.id} selectedModelId={selectedModelId!} {...p} />)}
        </div>
    </>
}