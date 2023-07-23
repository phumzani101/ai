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
    const { messages } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!config.apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 400 });
    }

    if (!messages) {
      return new NextResponse("messages is required", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.log("[CHAT_ERROR]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
