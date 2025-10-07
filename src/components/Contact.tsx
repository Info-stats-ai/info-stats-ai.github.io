import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-4xl font-bold mb-6 float-up ${isVisible ? 'visible' : ''}`}>Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities, collaborations, and interesting projects. 
          Feel free to reach out if you'd like to connect!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className={`card-glow bg-card border-border float-up stagger-1 ${isVisible ? 'visible' : ''}`}>
            <CardContent className="p-8">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a 
                href="mailto:othakur@umd.edu" 
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                othakur@umd.edu
              </a>
            </CardContent>
          </Card>
          
          <Card className={`card-glow bg-card border-border float-up stagger-2 ${isVisible ? 'visible' : ''}`}>
            <CardContent className="p-8">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a 
                href="tel:602-668-0832" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                602-668-0832
              </a>
            </CardContent>
          </Card>
          
          <Card className={`card-glow bg-card border-border float-up stagger-3 ${isVisible ? 'visible' : ''}`}>
            <CardContent className="p-8">
              <Linkedin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/info-stats-ai/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                /in/info-stats-ai
              </a>
            </CardContent>
          </Card>
          
          <Card className={`card-glow bg-card border-border float-up stagger-4 ${isVisible ? 'visible' : ''}`}>
            <CardContent className="p-8">
              <Github className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a 
                href="https://github.com/Info-stats-ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Info-stats-ai
              </a>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Based in California, USA</span>
        </div>
        
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          onClick={() => window.location.href = 'mailto:othakur@umd.edu'}
        >
          <Mail className="mr-2 h-5 w-5" />
          Send Email
        </Button>
      </div>
    </section>
  );
};

export default Contact;