// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, 
// });

// export async function POST(req: Request) {
//   const { description, animeTitle } = await req.json();

//   const prompt = `Reescreva a seguinte descrição do anime "${animeTitle}" de forma mais envolvente e clara, mantendo o sentido original:\n\n${description}`;

//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: prompt }],
//     model: "gpt-4",
//   });

//   const improvedDescription = completion.choices[0].message.content;
//   return NextResponse.json({ improvedDescription });
// }