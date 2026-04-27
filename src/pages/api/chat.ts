import type { APIRoute } from 'astro';
import { GoogleGenAI } from '@google/genai';
import { knowledgeBase } from '../../lib/knowledgeBase';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const messages = body.messages || [];

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "GEMINI_API_KEY is missing." }), { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are Gracie™, an AI receptionist for MicroManaged Media. You help local service contractors get more leads.

Below is the entire knowledge base for MicroManaged Media's services. Use THIS information as your absolute source of truth when answering questions. Do not make up services or pricing that are not listed here.

--- KNOWLEDGE BASE ---
${knowledgeBase}
--- END KNOWLEDGE BASE ---

Guidelines:
- Be concise, professional, friendly, and helpful. Use a warm, natural tone.
- Do not use overly formal or robotic language. Keep your responses short and punchy.
-Occasionally encourage the user to provide their contact info or ask about a free audit.
- If asked about something not in the knowledge base, say you aren't sure but can get a team member to follow up.`;

    const mappedMessages = messages.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content || "" }]
    }));

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: mappedMessages,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of responseStream) {
          const text = chunk.text;
          if (text) {
            controller.enqueue(new TextEncoder().encode(text));
          }
        }
        controller.close();
      }
    });

    return new Response(stream, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      }
    });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
