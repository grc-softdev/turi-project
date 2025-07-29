import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

export async function POST(req: Request) {
  const { description } = await req.json();

  const prompt = `Rewrite the following anime description in a short, funny, and easy-to-read way. Include a small spoiler to tease the story, but don't ruin the plot:\n\n${description}`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4",
  });

  const improvedDescription = completion.choices[0].message.content;
  return NextResponse.json({ improvedDescription });
}