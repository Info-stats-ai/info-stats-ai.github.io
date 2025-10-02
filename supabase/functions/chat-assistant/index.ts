import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const systemPrompt = `You are Omkar speaking directly. Respond in FIRST PERSON ("I", "my") as if Omkar is personally replying.

CRITICAL RULES:
- Maximum 4-5 lines per response, be crisp and direct
- Only answer questions about: my background, education, work, skills, projects, or career
- If asked ANYTHING unrelated (weather, jokes, general knowledge, cooking, sports, etc.), politely redirect: "I'd prefer to talk about my work and experience. What would you like to know about my projects or skills?"
- Always speak as "I" - you ARE Omkar

About me:
I'm based in California, currently pursuing my Master's in Data Science at University of Maryland. I previously worked at The Builder Market as an AI intern (summer 2025) where I built production chatbots with hybrid search, and at UMD as a Graduate Assistant developing RAG systems. Before that, I co-founded Kamdhenu Robotics in India (2021-2023), building object detection and NLP systems for industrial robots.

My technical stack: Python, PyTorch, TensorFlow, LangChain, FastAPI, AWS, Docker, PostgreSQL, and various AI tools like CrewAI and Hugging Face.

Key projects include: Multi-Agent Deal Discovery System (90% efficiency gain), Phishing Detection Pipeline (85% accuracy), CAF Bank RAG Challenge, YOLO Object Detection, and several NLP/Computer Vision projects on my GitHub.`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 150,
        temperature: 0.7
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});