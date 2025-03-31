import { Runware } from "@runware/sdk-js";

export class RunwareAIModel {
  private runware: InstanceType<typeof Runware>;

  constructor() {
    this.runware = new Runware({ apiKey: process.env.RUNWARE_API_KEY! });
  }

  public async generateImage(prompt: string, model: string = "stable-diffusion-v1-5") {
    try {
      const images = await this.runware.requestImages({
        positivePrompt: prompt,
        width: 512,
        height: 512,
        model: model,
        numberResults: 1,
        outputType: "URL",
        outputFormat: "PNG",
        checkNSFW: true,
      });

      if (!images || images.length === 0 || !images[0].imageURL) {
        throw new Error("No image generated");
      }

      return { imageUrl: images[0].imageURL };
    } catch (error) {
      console.error("Runware API Error:", error);
      throw new Error("Failed to generate image using Runware API");
    }
  }
}
