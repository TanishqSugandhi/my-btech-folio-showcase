import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with user authentication, payment integration, and admin dashboard. Built with modern technologies for scalable performance.",
      image: "/lovable-uploads/afd6eabd-699c-4e8a-a219-b7fbe0b18d46.png",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: true
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot using natural language processing to assist users with queries and provide automated support.",
      image: "/lovable-uploads/d304eb8a-2a8d-4ca5-b14e-2fdffd0248fb.png",
      techStack: ["Python", "TensorFlow", "Flask", "NLP"],
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: true
    },
    {
      title: "IoT Home Automation",
      description: "Smart home system controlling lights, temperature, and security through mobile app and voice commands.",
      image: "/lovable-uploads/a30d81c3-f10b-47cb-a3aa-c7f4c6c13d0c.png",
      techStack: ["Arduino", "React Native", "Firebase", "IoT"],
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: false
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto price monitoring with portfolio tracking, alerts, and detailed analytics dashboard.",
      image: "/lovable-uploads/2573c2ef-b095-4e8b-ab49-685680220fee.png",
      techStack: ["Vue.js", "Chart.js", "CoinGecko API", "PWA"],
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical skills and creativity through various projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`shadow-elegant hover:shadow-glow transition-smooth group ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-contain bg-muted group-hover:scale-105 transition-smooth"
                  />
                  {project.featured && (
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Status Message */}
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground italic text-center">
                      The source code will be made available shortly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
