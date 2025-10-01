import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Multi-Agent LLM System for Real-Time Deal Discovery",
    description: "Built a GPT-4 powered multi-agent system using CrewAI and Pydantic to extract and rank deals from RSS feeds, reducing manual effort by 90%.",
    highlights: [
      "Custom RAG pipeline with Chroma DB and 3D embedding visualization",
      "LLM + Random Forest ensemble model with real-time monitoring",
      "20% improvement in product similarity search accuracy",
      "15% reduction in price prediction error"
    ],
    tags: ["GPT-4", "CrewAI", "Pydantic", "RAG", "Chroma DB", "Modal", "Gradio"]
  },
  {
    title: "Phishing Detection - End-to-End ML Pipeline",
    description: "Complete ML pipeline from ingestion to deployment with reproducible artifacts, logging, and monitoring capabilities.",
    highlights: [
      "Schema validation and data-drift reporting",
      "MLflow/DagsHub tracking with S3 artifact sync",
      "FastAPI production inference with interactive docs",
      "Docker deployment with 85% accuracy"
    ],
    tags: ["Python", "FastAPI", "MLflow", "Docker", "S3", "Scikit-Learn"]
  },
  {
    title: "CAF Bank AI Challenge",
    description: "Scalable RAG pipeline for banking applications with advanced retrieval techniques and dynamic API augmentation.",
    highlights: [
      "FAISS vector search integration",
      "BlendFilter-enhanced retrieval",
      "Dynamic API augmentation (DuckDuckGo, Wikipedia)",
      "Accurate content generation for banking queries"
    ],
    tags: ["RAG", "FAISS", "LangChain", "NLP", "API Integration"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-glow bg-card border-border flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIndex) => (
                    <Badge key={tIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open('https://github.com/Info-stats-ai', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;