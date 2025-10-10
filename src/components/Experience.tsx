import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
      "Developed OpenTSLM, a novel time-series language model integrating multimodal medical data (ECG, EEG, accelerometer) with Llama 3.2 LLMs, enabling natural language reasoning over clinical time-series data for automated ECG interpretation, sleep staging, and activity recognition with chain-of-thought explainability",
      "Architected and implemented a 5-stage curriculum learning pipeline with automated checkpoint management and progressive training across TSQA, M4, HAR, SleepEDF, and ECG-QA datasets, achieving end-to-end model training with gradient checkpointing for memory optimization on CUDA/MPS hardware",
      "Built a comprehensive clinician evaluation system with automated Excel-based review workflows for 84 ECG cases, enabling multi-reviewer assessment of AI-generated medical interpretations across pattern recognition, clinical reasoning, and context integration dimensions with inter-rater reliability metrics"
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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center float-up ${isVisible ? 'visible' : ''}`}>Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className={`card-glow bg-card border-border slide-in-left stagger-${index + 1} ${isVisible ? 'visible' : ''}`}>
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