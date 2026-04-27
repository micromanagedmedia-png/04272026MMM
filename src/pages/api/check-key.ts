import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
    const key = import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;
    return new Response(JSON.stringify({ 
        key: key?.substring(0, 5) + '...',
        len: key?.length
    }));
};
