import { fal } from "@fal-ai/client";
import { BaseModel } from "./BaseModel";

export class FalAIModel {
  constructor() {
  }

  public async generateImage(prompt: string, tensorPath: string) {
  //  const { request_id, response_url } = await fal.queue.submit("fal-ai/flux-lora", {
  //    input: {
  //          prompt: prompt,
  //          loras: [{ path: tensorPath, scale: 1 }]
  //      },
  //      webhookUrl: `${process.env.WEBHOOK_BASE_URL}/fal-ai/webhook/image`,
  // });
 
   return { request_id: "", response_url: "" };
  }

  public async trainModel(zipUrl: string, triggerWord: string) {

  //  const { request_id, response_url } = await fal.queue.submit("fal-ai/flux-lora-fast-training", {
  //      input: {
  //          images_data_url: zipUrl,
  //          trigger_word: triggerWord
  //      },
  //      webhookUrl: `${process.env.WEBHOOK_BASE_URL}/fal-ai/webhook/train`,
  //  });

    return {request_id: "", response_url: ""};
  }

  public async generateImageSync(prompt: string, tensorPath: string) {
    const response = await fal.subscribe("fal-ai/flux-lora", {
      input: {
        prompt: "A professional actor headshot of a confident model, taken in a well-lit studio with a plain backdrop. The model is dressed in if(gender=f){a simple, elegant black top with natural makeup and soft curls} if(gender=m){a fitted dark-colored shirt with neatly styled hair}. The lighting is soft and even, highlighting their facial features with a natural and approachable expression. The focus is sharp, capturing the model's eyes and subtle smile, creating a perfect headshot for auditions and casting calls.",
        loras: [{ path: tensorPath, scale: 1 }]
      },
    })
    return {
      imageUrl: response.data.images[0].url
    }
  }
}