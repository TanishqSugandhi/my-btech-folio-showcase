import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero.png";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen hero-section flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-10">
        <img 
          src={heroImage} 
          alt="a picture of tanishq" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Profile Image Placeholder */}
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary shadow-glow animate-float flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground"></span>
              <img 
          src={heroImage} 
          alt="a picture of tanishq" 
          className="w-full h-full mx-auto rounded-full object-cover opacity-80"
        />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Hi, I'm <span className="text-primary">Tanishq Sugandhi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Technologist | Impact-Driven Builder | Always Growing
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             B.Tech Electronics and Communication Engineering student transforming ideas <br />
             into real-world solutions. Bridging hardware and software, I build <br />
             innovative projects with Embedded systems, AI, and modern web technologies <br />
             to shape the future of technology.
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-8">
              <a href="https://github.com/TanishqSugandhi" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:shadow-glow transition-smooth">
                <Github size={20} />
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/tanishq-sugandhi19/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:shadow-glow transition-smooth">
                <Linkedin size={20} />
              </Button>
              </a>
               <a href="mailto:tanishqsugandhi19@gmail.com">
              <Button variant="outline" size="icon" className="hover:shadow-glow transition-smooth">
                <Mail size={20} />
              </Button>
            </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                onClick={scrollToAbout}
                className="gradient-primary hover:shadow-glow transition-smooth"
                size="lg"
              >
                Learn About Me
              </Button>
              <Button 
                onClick={scrollToProjects}
                variant="outline" 
                size="lg"
                className="hover:shadow-glow transition-smooth"
              >
                View My Projects
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
