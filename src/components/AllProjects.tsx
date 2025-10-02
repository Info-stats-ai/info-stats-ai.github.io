import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Wrench, BookOpen } from "lucide-react";

interface ProjectData {
  title: string;
  description: string;
  language: string;
  url: string;
  updated: string;
  tags?: string[];
  metrics?: string[];
  skills?: string[];
  tools?: string[];
}

const allProjects: ProjectData[] = [
  {
    title: "YOLO Object Detection",
    description: "Implementation of YOLO algorithm for real-time object detection",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Yolo",
    updated: "Sep 24, 2025",
    metrics: ["Real-time detection", "High precision"],
    skills: ["Computer Vision", "Object Detection", "Model Optimization"],
    tools: ["YOLO", "PyTorch", "OpenCV"]
  },
  {
    title: "Stable Diffusion",
    description: "Generative AI project using stable diffusion models",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Stable-Diffusion",
    updated: "Sep 23, 2025",
    metrics: ["High-quality generation"],
    skills: ["Generative AI", "Diffusion Models", "Image Processing"],
    tools: ["Stable Diffusion", "PyTorch", "Hugging Face"]
  },
  {
    title: "Time Series Analysis - Auto Industry",
    description: "Forecasting and analysis project for automobile industry data",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Time_Series_Analysis-Auto_mobile_industy_project",
    updated: "Sep 19, 2025",
    metrics: ["Predictive accuracy"],
    skills: ["Time Series Analysis", "Forecasting", "Statistical Modeling"],
    tools: ["ARIMA", "Prophet", "Pandas"]
  },
  {
    title: "CAFB Food Challenge",
    description: "CAF Bank AI Challenge - RAG pipeline for banking applications",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/CAFB",
    updated: "Sep 17, 2025",
    metrics: ["FAISS vector search", "Dynamic API augmentation"],
    skills: ["RAG Pipeline", "Information Retrieval", "API Integration"],
    tools: ["FAISS", "BlendFilter", "DuckDuckGo", "Wikipedia API"]
  },
  {
    title: "Phishing Detection - End-to-End",
    description: "Complete ML pipeline for detecting phishing attacks with 85% accuracy",
    language: "Python",
    url: "https://github.com/Info-stats-ai/Detect-Phishing-Attack-End-to_end-project",
    updated: "Sep 15, 2025",
    metrics: ["85% accuracy", "Real-time inference"],
    skills: ["ML Pipeline", "MLOps", "Data Drift Detection"],
    tools: ["MLflow", "DagsHub", "FastAPI", "S3"]
  },
  {
    title: "Wine Quality Prediction",
    description: "End-to-end ML project for predicting wine quality",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/End-to-End-ML-Wine-Quality-Prediction",
    updated: "Sep 14, 2025",
    metrics: ["End-to-end pipeline"],
    skills: ["ML Pipeline", "Feature Engineering", "Model Deployment"],
    tools: ["scikit-learn", "Flask", "Docker"]
  },
  {
    title: "ETL Pipeline - PostGres AWS",
    description: "ETL pipeline using Apache Airflow with PostgreSQL and AWS",
    language: "Python",
    url: "https://github.com/Info-stats-ai/ETL-Pipeline-PostGres-AWS-Astrocloud",
    updated: "Sep 6, 2025",
    metrics: ["Scalable architecture"],
    skills: ["ETL Design", "Cloud Infrastructure", "Database Management"],
    tools: ["Apache Airflow", "PostgreSQL", "AWS S3"]
  },
  {
    title: "Amex ML Project",
    description: "ML models for prediction on large American Express dataset",
    language: "Jupyter Notebook",
    tags: ["Random Forest", "Decision Trees", "Boosting"],
    url: "https://github.com/Info-stats-ai/Project_Amex-Part1-ML",
    updated: "Sep 4, 2025",
    metrics: ["Large-scale dataset handling"],
    skills: ["Ensemble Methods", "Hyperparameter Tuning", "Imbalanced Data"],
    tools: ["Random Forest", "GridSearchCV", "SMOTE"]
  },
  {
    title: "Neurotics NLP Task",
    description: "Natural Language Processing projects and study materials",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Neurotics-NLP-task",
    updated: "Sep 1, 2025",
    metrics: ["Multi-task NLP"],
    skills: ["NLP", "Text Processing", "Sentiment Analysis"],
    tools: ["BERT", "Transformers", "spaCy"]
  },
  {
    title: "Machine Learning Collection",
    description: "Comprehensive collection of ML projects and study materials",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Machine_Learning",
    updated: "Sep 1, 2025",
    skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
    tools: ["scikit-learn", "TensorFlow", "Keras"]
  },
  {
    title: "Spotify Business Case Study",
    description: "Data analysis and insights from Spotify business data",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Spotify_Business_case_study",
    updated: "Sep 1, 2025",
    metrics: ["Business insights"],
    skills: ["Data Analysis", "Visualization", "Business Intelligence"],
    tools: ["Pandas", "Matplotlib", "Seaborn"]
  },
  {
    title: "Recommendation System",
    description: "Building recommendation systems using collaborative filtering",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Recommendation_system",
    updated: "Aug 2025",
    metrics: ["Personalized recommendations"],
    skills: ["Recommendation Algorithms", "Matrix Factorization"],
    tools: ["Surprise", "Pandas", "NumPy"]
  },
  {
    title: "Advanced ML-610",
    description: "Advanced machine learning coursework and projects",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/Advance_ML-610",
    updated: "Sep 18, 2025",
    skills: ["Advanced ML Concepts", "Research Implementation"],
    tools: ["PyTorch", "TensorFlow", "Research Papers"]
  },
  {
    title: "UMBC Hack DoIT",
    description: "Hackathon project showcasing innovative data science solutions",
    language: "Jupyter Notebook",
    url: "https://github.com/Info-stats-ai/UMBC_Hack_DoIT",
    updated: "Sep 29, 2025",
    skills: ["Rapid Prototyping", "Team Collaboration", "Innovation"],
    tools: ["Python", "Data Science Stack"]
  }
];

const AllProjects = () => {
  return (
    <section id="all-projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">All GitHub Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my complete collection of data science, machine learning, and AI projects with detailed metrics, skills learned, and tools used.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {allProjects.map((project, index) => (
            <Card 
              key={index} 
              className="card-glow bg-card border-border flex flex-col animate-fade-in opacity-0 hover-scale" 
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                  <Github className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <CardDescription className="text-sm line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Metrics */}
                  {project.metrics && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <TrendingUp className="h-3 w-3 text-primary" />
                        <span>Key Metrics</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.metrics.map((metric, mIndex) => (
                          <Badge key={mIndex} variant="secondary" className="text-xs px-2 py-0.5">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  {project.skills && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <BookOpen className="h-3 w-3 text-primary" />
                        <span>Skills Learned</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.skills.map((skill, sIndex) => (
                          <Badge key={sIndex} variant="outline" className="text-xs px-2 py-0.5">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tools */}
                  {project.tools && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <Wrench className="h-3 w-3 text-primary" />
                        <span>Tools Used</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool, tIndex) => (
                          <Badge key={tIndex} className="text-xs px-2 py-0.5 bg-primary/20 text-primary border-primary/30">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Language & Tags */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {project.language}
                  </div>
                  {project.tags && (
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, tIndex) => (
                        <Badge key={tIndex} variant="outline" className="text-xs px-2 py-0.5">
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