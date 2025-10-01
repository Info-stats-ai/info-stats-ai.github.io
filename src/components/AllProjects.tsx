import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const allProjects = [
  {
    title: "UMBC Hack DoIT",
    description: "Hackathon project showcasing innovative data science solutions",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/UMBC_Hack_DoIT",
    updated: "Sep 29, 2025"
  },
  {
    title: "YOLO Object Detection",
    description: "Implementation of YOLO algorithm for real-time object detection",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Yolo",
    updated: "Sep 24, 2025"
  },
  {
    title: "Stable Diffusion",
    description: "Generative AI project using stable diffusion models",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Stable-Diffusion",
    updated: "Sep 23, 2025"
  },
  {
    title: "Time Series Analysis - Auto Industry",
    description: "Forecasting and analysis project for automobile industry data",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Time_Series_Analysis-Auto_mobile_industy_project",
    updated: "Sep 19, 2025"
  },
  {
    title: "Advanced ML-610",
    description: "Advanced machine learning coursework and projects",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Advance_ML-610",
    updated: "Sep 18, 2025"
  },
  {
    title: "CAFB Food Challenge",
    description: "CAF Bank AI Challenge - RAG pipeline for banking applications",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/CAFB",
    updated: "Sep 17, 2025"
  },
  {
    title: "Phishing Detection - End-to-End",
    description: "Complete ML pipeline for detecting phishing attacks with 85% accuracy",
    language: "Python",
    url: "https://github.com/Info-stats-ai/Detect-Phishing-Attack-End-to_end-project",
    updated: "Sep 15, 2025"
  },
  {
    title: "Wine Quality Prediction",
    description: "End-to-end ML project for predicting wine quality",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/End-to-End-ML-Wine-Quality-Prediction",
    updated: "Sep 14, 2025"
  },
  {
    title: "Forecasting with XGBoost & LLM",
    description: "RAG fine-tuning and ML forecasting on Azure",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Forecasting_Using_XGboost_and_LLM",
    updated: "Sep 12, 2025"
  },
  {
    title: "ETL Pipeline - PostGres AWS",
    description: "ETL pipeline using Apache Airflow with PostgreSQL and AWS",
    language: "Python",
    url: "https://github.com/Info-stats-ai/ETL-Pipeline-PostGres-AWS-Astrocloud",
    updated: "Sep 6, 2025"
  },
  {
    title: "Amex ML Project",
    description: "ML models for prediction on large American Express dataset",
    language: "Jupyter Notebook",
    tags: ["Random Forest", "Decision Trees", "Boosting", "GridSearchCV", "SMOTE"],
    url: "https://github.com/Info-stats-ai/Project_Amex-Part1-ML",
    updated: "Sep 4, 2025"
  },
  {
    title: "Neurotics NLP Task",
    description: "Natural Language Processing projects and study materials",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Neurotics-NLP-task",
    updated: "Sep 1, 2025"
  },
  {
    title: "Machine Learning Collection",
    description: "Comprehensive collection of ML projects and study materials",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Machine_Learning",
    updated: "Sep 1, 2025"
  },
  {
    title: "Spotify Business Case Study",
    description: "Data analysis and insights from Spotify business data",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Spotify_Business_case_study",
    updated: "Sep 1, 2025"
  },
  {
    title: "Recommendation System",
    description: "Building recommendation systems using collaborative filtering",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Recommendation_system",
    updated: "Aug 2025"
  }
];

const AllProjects = () => {
  return (
    <section id="all-projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">All GitHub Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my complete collection of data science, machine learning, and AI projects from my GitHub portfolio.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {allProjects.map((project, index) => (
            <Card key={index} className="card-glow bg-card border-border flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                  <Github className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <CardDescription className="text-sm line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    {project.language}
                  </div>
                  {project.tags && (
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, tIndex) => (
                        <Badge key={tIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground">Updated {project.updated}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  View Repository
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open('https://github.com/Info-stats-ai?tab=repositories', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;