import { fal } from "@fal-ai/client";
import { RunwareAIModel } from "./models/RunwareAIModel";
import express from "express";
import { TrainModel, GenerateImage, GenerateImagesFromPack } from "common/types";
import { prismaClient } from "db";
import { S3Client } from "bun";
import { FalAIModel } from "./models/FalAIModel";
import cors from "cors";
import { authMiddleware } from "./middleware";

const PORT = process.env.PORT || 8080;

const falAiModel = new FalAIModel();
const runwareModel = new RunwareAIModel();

const app = express();
const prisma = prismaClient;
app.use(cors());
app.use(express.json());

app.get("/pre-signed-url", async (req, res) => {
    const key = `models/${Date.now()}_${Math.random()}.zip`;
    const url = S3Client.presign(key, {
      method: "PUT",
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_KEY,
        endpoint: process.env.ENDPOINT,
        bucket: process.env.BUCKET_NAME,
        expiresIn: 60 * 5,
        type: "application/zip"
    })
    console.log(url)

    res.json({
        url,
        key
    })
})

app.post("/ai/training", authMiddleware, async (req, res) => {
  const parsedBody = TrainModel.safeParse(req.body)
  console.log(parsedBody.error)
  console.log(req.userId)
  if (!parsedBody.success) {
    res.status(411).json({
      message: 'Input incorrect'
    })
    return
  }

  const {request_id, response_url} = await falAiModel.trainModel(parsedBody.data.zipUrl, parsedBody.data.name);

  const data = await prismaClient.model.create({
    data: {
      name: parsedBody.data.name,
      type: parsedBody.data.type,
      age: parsedBody.data.age,
      ethinicity: parsedBody.data.ethinicity,
      eyeColor: parsedBody.data.eyeColor,
      bald: parsedBody.data.bald,
      userID: req.userId!,
      falAiRequestId: request_id,
      zipUrl: parsedBody.data.zipUrl,
    }
  })

  res.json({
    modelID: data.id
  })
})

app.post("/ai/generate", authMiddleware, async (req, res) => {
    const parsedBody = GenerateImage.safeParse(req.body)

    if (!parsedBody.success) {
        res.status(411).json({

        })
        return;
    }

    const model = await prismaClient.model.findUnique({
        where: {
            id: parsedBody.data.modelId
        }
    })

    if (!model || !model.tensorPath) {
        res.status(411).json({
            message: "Model not found"
        })
        return;
    }

    const {request_id, response_url} = await falAiModel.generateImage(parsedBody.data.prompt, model?.tensorPath);

    const data = await prismaClient.outputImages.create({
        data: {
            prompt: parsedBody.data.prompt,
            userId: req.userId!,
            modelId: parsedBody.data.modelId,
            imageUrl: "",
            falAiRequestId: request_id
        }
    })

    res.json({
        imageId: data.id
    })
})

app.post("/runware/generate", async (req, res) => {
  try {
    const { imageUUID, taskUUID, imageURL, cost, seed, userId, prompt, runwareRequestId } = req.body;

    if (!imageUUID || !taskUUID || !imageURL || !userId || !prompt) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Store the generated image
    const generatedImage = await prisma.generatedImage.create({
      data: {
        imageUUID,
        taskUUID,
        imageURL,
        cost,
        seed,
      },
    });

    // Link it to OutputImages
    const outputImage = await prisma.outputImages.create({
      data: {
        imageUrl: imageURL,
        userId: String(req.body.userId),
        prompt,
        provider: "RUNWARE",
        runwareRequestId,
        generatedImageId: generatedImage.imageUUID,
        status: "GENERATED",
      },
    });

    res.json({ success: true, generatedImage, outputImage });
  } catch (error) {
    console.error("Error storing Runware image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/pack/generate", authMiddleware, async (req, res) => {
    const parsedBody = GenerateImagesFromPack.safeParse(req.body)

    if (!parsedBody.success) {
        res.status(411).json({
            message: "Input incorrect"
        })
        return;
    }

    const prompts = await prismaClient.packPrompts.findMany({
        where: {
            packId: parsedBody.data.packId
        }
    })

    const model = await prismaClient.model.findFirst({
      where: {
        id: parsedBody.data.modelId
      }
    })

    if (!model) {
      return res.status(411).json({
        "message": "Model nnot found"
      })
    }

    let requestIds: { request_id: string}[] = await Promise.all(prompts.map((prompt) => falAiModel.generateImage(prompt.prompt, model.tensorPath!)));

    const images = await prismaClient.outputImages.createManyAndReturn({
        data: prompts.map((prompt, index) => ({
            prompt: prompt.prompt,
            userId: req.userId!,
            modelId: parsedBody.data.modelId,
            imageUrl: "",
            falAiRequestId: requestIds[index].request_id
        }))
    })

    res.json({
        imageIds: images.map((image) => image.id)
    })
})

app.get("/pack/bulk", async (req, res) => {
  const packs = await prismaClient.packs.findMany({})

    res.json({
      packs
    })
})

app.get("/image/bulk", authMiddleware, async (req, res) => {
  console.log('Request received at /image/bulk');
  console.log('Query params:', req.query);
  
  // Parse the query parameters
  let ids;
  if (typeof req.query.ids === 'string') {
    ids = req.query.ids.split(',');
    console.log('Parsed IDs from string:', ids);
  } else if (Array.isArray(req.query.ids)) {
    ids = req.query.ids;
    console.log('IDs as array:', ids);
  } else {
    ids = [];
    console.log('No IDs provided');
  }
  
  const limit = typeof req.query.limit === 'string' ? parseInt(req.query.limit) : 10;
  const offset = typeof req.query.offset === 'string' ? parseInt(req.query.offset) : 0;

  try {
    // If no IDs provided, fetch all images for this user
    const where = ids.length > 0 
      ? { id: { in: ids }, userId: req.userId! }
      : { userId: req.userId! };
      
    const imagesData = await prismaClient.outputImages.findMany({
      where,
      skip: offset,
      take: limit,
      orderBy: {
      createdat: 'desc'  // Most recent images first
      }
    });

    console.log(`Found ${imagesData.length} images`);
    
    res.json({
      images: imagesData
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({
      message: 'Error fetching images',
      error: error.message
    });
  }
});

app.get("/models", authMiddleware, async(req, res) => {
  try {
    console.log("User Id:", req.userId); // Log to confirm user ID is present
    
    const models = await prismaClient.model.findMany({
      where: {
        OR: [{ userId: req.userId }, {open: true }]
      }
    });
    
    console.log("Found models:", models.length);
    
    res.json({
      models
    });
  } catch (error) {
    console.error("Error fetching models:", error);
    res.status(500).json({
      message: "Error fetching models",
      error: error.message
    });
  }
});

app.post("/fal-ai/webhook/train", async (req, res) => {
    console.log("fal-ai/webhook/train")
    console.log(JSON.stringify(req.body))
    // update the image url in the database
    const requestId = req.body.request_id as string;

    const result = await fal.queue.result("fal-ai/flux-lora", {
      requestId
    });

    const { imageUrl } = await falAiModel.generateImageSync(result.data.diffusers_lora_file.url)

    await prismaClient.model.updateMany({
        where: {
         falAiRequestId: requestId
        },
        data: {
          trainingStatus: "APPROVED",
          tensorPath: result.data.diffusers_lora_file.url,
          thumbnail: imageUrl
        }
    })

  res.json({
    message: "Webhook received"
  })
})

app.post("/fal-ai/webhook/image", async (req, res) => {
  console.log("fal-ai/webhook/image")
  console.log("Request body:", JSON.stringify(req.body, null, 2));
  
  const requestId = req.body.request_id;
  
  // Check if the payload structure matches what you expect
  if (req.body.payload && req.body.payload.images && req.body.payload.images.length > 0) {
      const imageUrl = req.body.payload.images[0].url;
      console.log("Image URL found:", imageUrl);
      
      await prismaClient.outputImages.updateMany({
          where: {
              falAiRequestId: requestId
          },
          data: {
              status: "GENERATED",
              imageUrl: imageUrl
          }
      });
      
      console.log("Database updated successfully");
  } else {
      console.error("Expected payload structure not found:", req.body);
  }
  
  res.json({
      message: "Webhook received"
  });
})



app.listen(PORT, () => {
  console.log('Server is running on port 8080');
})