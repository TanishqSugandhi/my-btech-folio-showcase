import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Code, Brain, Shield, Wifi } from "lucide-react";

const AboutSection = () => {
  const interests = [
    { icon: Code, title: "Web Development", description: "Full-stack development with modern frameworks" },
    { icon: Brain, title: "Machine Learning", description: "AI/ML algorithms and data science" },
    { icon: Shield, title: "Cybersecurity", description: "Information security and ethical hacking" },
    { icon: Wifi, title: "IoT", description: "Internet of Things and embedded systems" },
  ];

  const technologies = [
    "Python", "JavaScript", "React", "Node.js", "TypeScript", "Git",
    "Docker", "MongoDB", "PostgreSQL", "TensorFlow", "AWS", "Linux"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about technology and always eager to learn new things
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Biography */}
            <div className="space-y-6 animate-fade-in">
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I'm John Smith, a 3rd-year B.Tech Computer Science student at 
                      <span className="text-primary font-medium"> ABC University</span>. 
                      My journey in technology started with curiosity about how software works, 
                      and has evolved into a passion for creating solutions that make a difference.
                    </p>
                    <p>
                      Currently maintaining a <span className="text-primary font-medium">CGPA of 8.5</span>, 
                      I'm actively involved in various technical clubs and always looking for 
                      opportunities to apply my knowledge in real-world projects.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Download Resume */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Get My Resume</h3>
                  <p className="text-muted-foreground mb-4">
                    Download my detailed resume to learn more about my experience and qualifications.
                  </p>
                  <Button className="gradient-primary hover:shadow-glow transition-smooth">
                    <Download size={18} className="mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>

              {/* Club Involvement */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Leadership & Clubs</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium">Technical Lead</h4>
                      <p className="text-sm text-muted-foreground">University Coding Club</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium">Core Team Member</h4>
                      <p className="text-sm text-muted-foreground">AI/ML Society</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium">Event Coordinator</h4>
                      <p className="text-sm text-muted-foreground">Tech Fest Committee</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Skills and Interests */}
            <div className="space-y-8">
              {/* Domains of Interest */}
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-foreground mb-6">Domains of Interest</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {interests.map((interest, index) => {
                    const Icon = interest.icon;
                    return (
                      <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth group">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                              <Icon size={20} className="text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">{interest.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {interest.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Technologies */}
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technologies & Tools</h3>
                <Card className="shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-smooth"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;