import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        
        {/* Profile Photo */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <img 
              src={profilePhoto} 
              alt="Omkar Thakur" 
              className="w-64 h-64 rounded-full object-cover border-4 border-primary shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 pointer-events-none" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Bio */}
          <Card className="card-glow bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Background</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Data Scientist and AI Engineer pursuing my Master's in Data Science at the University of Maryland. 
                With a strong foundation in Machine Learning, Deep Learning, and Natural Language Processing, I specialize 
                in building intelligent systems that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My experience spans from co-founding a robotics startup to developing cutting-edge RAG systems and 
                multi-agent AI solutions. I'm passionate about pushing the boundaries of what's possible with AI while 
                maintaining a focus on practical, production-ready implementations.
              </p>
            </CardContent>
          </Card>
          
          {/* Quick Facts */}
          <div className="space-y-4">
            <Card className="card-glow bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Education</p>
                  <p className="text-sm text-muted-foreground">Master's in Data Science</p>
                  <p className="text-sm text-muted-foreground">University of Maryland</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-glow bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">Maryland, USA</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-glow bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <Mail className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground break-all">othakur@umd.edu</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-glow bg-card border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <Phone className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-muted-foreground">602-668-0832</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;