import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "The Builder Market",
    role: "AI Product and Prototyping Intern",
    location: "Los Angeles, USA",
    period: "June 2025 - August 2025",
    highlights: [
      "Developed production-level code managing data versions and entire backend/frontend using React, Express, MongoDB, NestJS, and OpenSearch",
      "Built multi-model chatbot with hybrid search for semantics, increasing output generation efficiency",
      "Implemented fallbacks to avoid hallucinations in TypeScript and integrated real-time querying agents",
      "Assisted with forecasting using LLM + XGBoost for real-time predictions on EC2 and S3"
    ]
  },
  {
    company: "University of Maryland",
    role: "Graduate Student Assistant - Computer Science Dept.",
    location: "Maryland, USA",
    period: "June 2025 - August 2025",
    highlights: [
      "Developed local RAG system for querying PDF/text files offline with strict data privacy requirements",
      "Implemented multi-stage reasoning pipeline using custom Genetic Loop architecture",
      "Utilized Chain-of-Thought (CoT) and Blendfilter Framework for enhanced retrieval",
      "Fine-tuned with PEFT for efficient handling of millions of files with personalized answers"
    ]
  },
  {
    company: "Kamdhenu Robotics",
    role: "Co-Founder and Data Scientist",
    location: "Bengaluru, India",
    period: "June 2021 - July 2023",
    highlights: [
      "Developed industrial object-detection pipelines using Detectron2, Mask R-CNN/Cascade R-CNN",
      "Built NLP/speech-processing interfaces for robot command and natural language control",
      "Implemented automated CI/CD simulation pipelines using Gazebo in GitHub Actions",
      "Enabled continuous testing and validation of vision/NLP modules before deployment"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-glow bg-card border-border">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                    <div className="flex items-center gap-2 text-lg text-primary">
                      <Briefcase className="h-5 w-5" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 w-fit">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;