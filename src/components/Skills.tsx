import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, Wrench, Cloud, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "Java", "SQL", "R", "JavaScript/TypeScript"]
  },
  {
    title: "AI/ML Pipelines",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "Computer Vision", "NLP"]
  },
  {
    title: "Frameworks",
    icon: Wrench,
    skills: ["Next.js", "FastAPI", "PyTorch", "LangChain", "Spark", "Pandas", "NumPy", "Scikit-Learn", "Keras", "TensorFlow"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Chroma DB", "FAISS", "Apache Cassandra", "Pinecone"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Cloudflare", "Modal", "Docker", "MLflow", "Linux", "CI/CD"]
  },
  {
    title: "AI Tools",
    icon: Eye,
    skills: ["LangGraph", "CrewAI", "Hugging Face", "LLM Function Calling", "Prompt Engineering", "N8N"]
  }
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center float-up ${isVisible ? 'visible' : ''}`}>Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`card-glow bg-card border-border float-up stagger-${(index % 6) + 1} ${isVisible ? 'visible' : ''}`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <Badge 
                      key={sIndex} 
                      variant="secondary"
                      className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;