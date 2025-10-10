import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    title: "Master in Machine Learning",
    issuer: "Coding Blocks",
    link: "https://online.codingblocks.com/app/certificates/CBOL-299010-ae37babb",
    category: "Machine Learning"
  },
  {
    title: "Complete Generative AI Bootcamp",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-f6bef3c0-4c25-4c03-afe6-cdacd43940cf/",
    category: "Generative AI"
  },
  {
    title: "Build Autonomous AI Agents From Scratch with Python",
    issuer: "Udemy",
    link: "https://gale.udemy.com/certificate/UC-267f6c84-c96d-417e-b1f5-170e104af5c1",
    category: "AI Agents"
  },
  {
    title: "Movie Recommendation Project",
    issuer: "Scaler",
    link: "https://moonshot.scaler.com/s/sl/jsLOvyQEod?_gl=1*ilq6gl*FPAU*MTgxMjQzMTc5OC4xNzQwNzgxNzgx*_ga*Njg1MTU4MTgwLjE3NDA3ODE3ODA.*_ga_53S71ZZG1X*MTc0NTk1NDQyMi41MS4xLjE3NDU5NTQ0MzMuMC4wLjE0ODE0MDc3MTU",
    category: "ML Project"
  },
  {
    title: "Master Image Generation using Stable Diffusion",
    issuer: "Udemy",
    link: "https://gale.udemy.com/certificate/UC-74bd23fd-fe8a-4e1b-996d-9221eb14ea1e/",
    category: "Generative AI"
  }
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center float-up ${isVisible ? 'visible' : ''}`}>
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className={`card-glow bg-card border-border flex flex-col cursor-pointer hover:border-primary/50 transition-colors float-up stagger-${(index % 6) + 1} ${isVisible ? 'visible' : ''}`}
              onClick={() => window.open(cert.link, '_blank')}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Award className="h-6 w-6 text-primary flex-shrink-0" />
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end">
                <Badge variant="outline" className="text-xs w-fit">
                  {cert.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
