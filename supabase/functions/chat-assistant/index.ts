import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GITHUB_USERNAME = 'Info-stats-ai';

interface RepoInfo {
  name: string;
  description: string;
  url: string;
  readme: string;
  language: string;
}

async function fetchGitHubRepos(githubToken: string): Promise<RepoInfo[]> {
  try {
    console.log('Fetching GitHub repos...');
    const reposResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Lovable-Portfolio-Bot'
        }
      }
    );

    if (!reposResponse.ok) {
      console.error('GitHub API error:', reposResponse.status);
      return [];
    }

    const repos = await reposResponse.json();
    console.log(`Found ${repos.length} repos`);

    const repoInfos: RepoInfo[] = [];

    for (const repo of repos.slice(0, 20)) { // Limit to 20 most recent repos
      try {
        const readmeResponse = await fetch(
          `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`,
          {
            headers: {
              'Authorization': `Bearer ${githubToken}`,
              'Accept': 'application/vnd.github.v3.raw',
              'User-Agent': 'Lovable-Portfolio-Bot'
            }
          }
        );

        let readme = '';
        if (readmeResponse.ok) {
          readme = await readmeResponse.text();
          console.log(`Fetched README for ${repo.name} (${readme.length} chars)`);
        }

        repoInfos.push({
          name: repo.name,
          description: repo.description || '',
          url: repo.html_url,
          readme: readme.substring(0, 3000), // Limit README length
          language: repo.language || 'Unknown'
        });
      } catch (error) {
        console.error(`Error fetching README for ${repo.name}:`, error);
      }
    }

    return repoInfos;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return [];
  }
}

function searchRelevantRepos(query: string, repos: RepoInfo[]): RepoInfo[] {
  const queryLower = query.toLowerCase();
  const keywords = queryLower.split(' ').filter(word => word.length > 3);

  const scored = repos.map(repo => {
    let score = 0;
    const searchText = `${repo.name} ${repo.description} ${repo.readme}`.toLowerCase();

    // Exact matches in name or description get highest score
    if (repo.name.toLowerCase().includes(queryLower)) score += 10;
    if (repo.description.toLowerCase().includes(queryLower)) score += 8;

    // Keyword matches
    keywords.forEach(keyword => {
      const matches = (searchText.match(new RegExp(keyword, 'g')) || []).length;
      score += matches;
    });

    return { repo, score };
  });

  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3) // Top 3 most relevant repos
    .map(item => item.repo);
}

function buildContextFromRepos(repos: RepoInfo[]): string {
  if (repos.length === 0) {
    return "No specific repository information found for this query.";
  }

  let context = "\n\nRELEVANT REPOSITORY INFORMATION:\n\n";
  
  repos.forEach((repo, index) => {
    context += `${index + 1}. **${repo.name}**\n`;
    context += `   URL: ${repo.url}\n`;
    if (repo.description) context += `   Description: ${repo.description}\n`;
    if (repo.language) context += `   Language: ${repo.language}\n`;
    if (repo.readme) {
      context += `   README Content:\n${repo.readme.substring(0, 1000)}\n`;
    }
    context += '\n';
  });

  return context;
}

const basePrompt = `You are Omkar speaking directly. Respond in FIRST PERSON ("I", "my") as if Omkar is personally replying.

CRITICAL RULES:
- Maximum 4-5 lines per response, be crisp and direct
- Use chain of thought reasoning: review the conversation history and context before answering
- Handle misspellings and grammatically incorrect questions - understand the user's intent and respond naturally
- For questions about my work, projects, or experience, use the repository information and context provided to give accurate, detailed answers
- For general questions like "summarize your work", "tell me about projects", "what have you done", provide a comprehensive overview using ALL the information below
- When the user references "this project" or "that", look at previous messages to understand what they're referring to
- Answer ALL questions naturally and helpfully, whether they're about my work or general topics
- Always speak as "I" - you ARE Omkar
- For work-related questions, prioritize information from this prompt and the repository data - NEVER make up project details
- When mentioning specific projects, include the GitHub URL if available
- Before answering, mentally review the conversation to maintain context and coherence

About me:
I'm based in California, currently pursuing my Master's in Data Science at University of Maryland. I previously worked at The Builder Market as an AI intern (summer 2025) where I built production chatbots with hybrid search, and at UMD as a Graduate Assistant developing OpenTSLM, a novel time-series language model. Before that, I co-founded Kamdhenu Robotics in India (2021-2023), building object detection and NLP systems for industrial robots.

My technical stack: Python, Java, SQL, R, JavaScript/TypeScript, Machine Learning, Deep Learning, Generative AI, Computer Vision, NLP, Next.js, FastAPI, PyTorch, LangChain, Spark, Pandas, NumPy, Scikit-Learn, Keras, TensorFlow, PostgreSQL, MongoDB, Chroma DB, FAISS, Apache Cassandra, Pinecone, AWS, Cloudflare, Modal, Docker, MLflow, Linux, CI/CD, LangGraph, CrewAI, Hugging Face.

My experience:
- The Builder Market (AI Intern, June-Aug 2025): Built production chatbots with hybrid search using React, Express, MongoDB, NestJS, OpenSearch. Implemented TypeScript fallbacks to avoid hallucinations. Used XGBoost+LLM for forecasting on EC2/S3.
- University of Maryland (Graduate Assistant, June-Aug 2025): Developed OpenTSLM, a novel time-series language model integrating multimodal medical data (ECG, EEG, accelerometer) with Llama 3.2 LLMs, enabling natural language reasoning over clinical time-series data. Architected 5-stage curriculum learning pipeline with automated checkpoint management across TSQA, M4, HAR, SleepEDF, and ECG-QA datasets. Built comprehensive clinician evaluation system with automated Excel-based review workflows for 84 ECG cases.
- Kamdhenu Robotics (Co-Founder, June 2021-July 2023): Developed object-detection pipelines with Detectron2, Mask R-CNN, Cascade R-CNN. Built NLP/speech interfaces for robot control. Implemented CI/CD with Gazebo in GitHub Actions.

My certifications:
- Master in Machine Learning from Coding Blocks (https://online.codingblocks.com/app/certificates/CBOL-299010-ae37babb)
- Complete Generative AI Bootcamp from Udemy (https://www.udemy.com/certificate/UC-f6bef3c0-4c25-4c03-afe6-cdacd43940cf/)
- Build Autonomous AI Agents From Scratch with Python from Udemy (https://gale.udemy.com/certificate/UC-267f6c84-c96d-417e-b1f5-170e104af5c1)
- Movie Recommendation Project from Scaler (https://moonshot.scaler.com/s/sl/jsLOvyQEod)
- Master Image Generation using Stable Diffusion from Udemy (https://gale.udemy.com/certificate/UC-74bd23fd-fe8a-4e1b-996d-9221eb14ea1e/)`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    const GITHUB_TOKEN = Deno.env.get('GITHUB_TOKEN');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages array is required");
    }

    if (!GITHUB_TOKEN) {
      console.warn('GITHUB_TOKEN not configured, will respond without repo context');
    }

    const lastMessage = messages[messages.length - 1];
    console.log('User query:', lastMessage.content);
    console.log('Conversation history length:', messages.length);

    // Fetch and search GitHub repos for relevant context based on the latest message
    let repoContext = '';
    if (GITHUB_TOKEN) {
      const repos = await fetchGitHubRepos(GITHUB_TOKEN);
      
      // Check if this is a general question that doesn't need specific repos
      const generalKeywords = ['summarize', 'summary', 'tell me about', 'what have', 'your work', 'your projects', 'overview', 'experience'];
      const isGeneralQuestion = generalKeywords.some(keyword => 
        lastMessage.content.toLowerCase().includes(keyword)
      );
      
      if (isGeneralQuestion) {
        // For general questions, provide context from all repos or top repos
        console.log('General question detected, including broader context');
        repoContext = buildContextFromRepos(repos.slice(0, 5));
      } else {
        // For specific questions, search for relevant repos
        const relevantRepos = searchRelevantRepos(lastMessage.content, repos);
        repoContext = buildContextFromRepos(relevantRepos);
        console.log(`Found ${relevantRepos.length} relevant repos`);
      }
    }

    const systemPrompt = basePrompt + repoContext;

    // Include full conversation history for context-aware responses
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
          ...messages
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
