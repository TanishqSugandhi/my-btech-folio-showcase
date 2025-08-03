import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Code, Brain, Shield, Wifi } from "lucide-react";

const AboutSection = () => {
  const interests = [
    { icon: Code, title: "UI/UX Design", description: "UI/UX with wireframes, prototypes, and tools." },
    { icon: Brain, title: "Machine Learning", description: "AI/ML algorithms and data science" },
    { icon: Shield, title: "Drone Security", description: "Securing drones from hijacking and data breaches." },
    { icon: Wifi, title: "IoT", description: "Internet of Things and embedded systems" },
  ];

  const technologies = [
    "Python (Learning Actively)", "TypeScript (Exploring)", "Git", "C/C++",
    "Docker (Currently Exploring)", "TensorFlow (Exploring)", "AWS (Basic deployment)", "Linux (Exploring)"
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
             Fueled by a genuine passion for technology and 
              <br />
              a constant drive to learn, innovate, and grow in diverse domains.
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
                      I'm Tanishq Sugandhi, a 2nd-year B.Tech Electronics and Communication Engineering student at 
                      <span className="text-primary font-medium"> IFHE University</span>. 
                      What started as curiosity about technology has
                      <br />
                      grown into a passion for building real-world
                      <br />
                      solutions using drones, AI, and innovation.
                    </p>
                    <p>
                      Currently maintaining a <span className="text-primary font-medium">CGPA of 6.1</span>, 
                      I actively engage in tech events, hackathons, and innovation-driven projects, 
                      <br />
                      constantly seeking real-world opportunities to apply and 
                      <br />
                      expand my skills beyond theory.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Download Resume */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">View My Resume</h3>
                  <p className="text-muted-foreground mb-4">
                    Take a look at my resume to explore my skills, experience, and the work I've been involved in.
                  </p>
                   <a
                href="https://drive.google.com/file/d/1Fpli4Pi39tv4fjGBf4cazl-u-TYbLqEz/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                >
                  <Button className="gradient-primary hover:shadow-glow transition-smooth">
                    <Eye size={18} className="mr-2" />
                    View Resume
                  </Button>
                    </a>
                </CardContent>
              </Card>

              {/* Club Involvement */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Leadership & Clubs</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium">Core Team Member</h4>
                      <p className="text-sm text-muted-foreground">ICFAI Tech Entrepreneurship Club</p>
                    </div>
                    {/* <div className="border-l-4 border-primary pl-4"> */}
                    {/* <h4 className="font-medium">Core Team Member</h4> */}
                    {/* <p className="text-sm text-muted-foreground">AI/ML Society</p> */}
                    {/* </div> */}
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium">College Ambassador</h4>
                      <p className="text-sm text-muted-foreground">TechFest, IIT Bombay</p>
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
