import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPEN_AI_SECRET_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { prompt, numberOfImages, size } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!config.apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 400 });
    }

    if (!prompt) {
      return new NextResponse("Image prompt is required", { status: 400 });
    }

    if (!numberOfImages) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!size) {
      return new NextResponse("Image Size is required", { status: 400 });
    }
    const response = await openai.createImage({
      prompt,
      n: parseInt(numberOfImages, 10),
      size,
    });

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
