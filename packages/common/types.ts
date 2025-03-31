import { z } from 'zod';

export const TrainModel = z.object({
    name: z.string(),
    type: z.enum(['Man', 'Woman', 'Other']),
    age: z.number(),
    ethinicity: z.enum(["White", 
        "Black",
        "Asian_American",
        "East_Asian",
        "South_East_Asian",
        "South_Asian",
        "Middle_Eastern",
        "Pacific",
        "Hispanic"
    ]),
    eyeColor: z.enum(["Brown",
        "Blue",
        "Hazel",
        "Gray"
    ]),
    bald: z.boolean(),
    zipUrl: z.string()
})

export const GenerateImage = z.object({
    prompt: z.string(),
    modelId: z.string(),
    num: z.number(),
})

export const GenerateImageRunware = z.object({
    taskType: z.literal("imageInference"),
    taskUUID: z.string(),
    positivePrompt: z.string(),
    model: z.string(),
    outputType: z.literal("URL"),
    outputFormat: z.literal("JPG"),
    uploadEndpoint: z.string(),
    includeCost: z.boolean(),
    negativePrompt: z.string(),
    height: z.number(),
    width: z.number(),
    numberResults: z.number(),
})

export const GenerateImagesFromPack= z.object({
    modelId: z.string(),
    packId: z.string(),
})
