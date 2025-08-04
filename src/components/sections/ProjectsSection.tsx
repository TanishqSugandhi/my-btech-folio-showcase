import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with user authentication, payment integration, and admin dashboard. Built with modern technologies for scalable performance.",
      image: "/lovable-uploads/b0550cc6-2bc3-471e-a9c3-2769c65daea8.png",
      techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot using natural language processing to assist users with queries and provide automated support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      techStack: ["Python", "TensorFlow", "Flask", "NLP"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: true
    },
    {
      title: "IoT Home Automation",
      description: "Smart home system controlling lights, temperature, and security through mobile app and voice commands.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      techStack: ["Arduino", "React Native", "Firebase", "IoT"],
      githubUrl: "https://github.com",
      liveUrl: null,
      featured: false
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time crypto price monitoring with portfolio tracking, alerts, and detailed analytics dashboard.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop",
      techStack: ["Vue.js", "Chart.js", "CoinGecko API", "PWA"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: false
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with team features, deadline tracking, and productivity analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      techStack: ["Angular", "Express.js", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      featured: false
    },
    {
      title: "Weather Prediction ML",
      description: "Machine learning model for weather forecasting using historical data and advanced algorithms.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      techStack: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
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
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
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

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:shadow-glow transition-smooth"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    {project.liveUrl && (
                      <Button 
                        size="sm" 
                        className="flex-1 gradient-primary hover:shadow-glow transition-smooth"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12 animate-fade-in">
            <Button 
              variant="outline" 
              size="lg"
              className="hover:shadow-glow transition-smooth"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Code size={18} className="mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
