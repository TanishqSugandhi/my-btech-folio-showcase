import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const internships = [
    {
      company: "VISWAM.AI",
      role: "AI Developer Intern",
      duration: "Jun 2025 - Present",
      location: "Hyderabad, India",
      type: "Internship",
      description: "Contributing to AI development as part of the prestigious Summer of AI 2025 program organized by VISWAM.AI, in collaboration with Swecha, IIIT Hyderabad, Meta, and HSEA. Focused on building AI-powered applications and real-world solutions through collaborative learning and innovation.",
      technologies: ["Python", "Collaborative Software Tools", "AI Frameworks", "GIT"],
      achievements: [
        "Led the development of an AI-powered Rural Health Connect website",
        "Documented workflows and research for future scalability and improvements",
        "Gained proficiency in AI development practices through intensive, mentor-led training"
      ]
    },
    {
      company: "Codveda Technologies",
      role: "C/C++ Developmment Intern",
      duration: "Aug 2025 - Present",
      location: "Remote",
      type: "Internship",
      description: "C/C++ Development Intern at Codveda Technologies, contributing to systems programming and optimization.",
      technologies: ["C/C++"]
    },
    {
      company: "TechFest, IIT Bombay",
      role: "College Ambassador",
      duration: "Jul 2025 - Present",
      location: "Remote",
      type: "Internship",
      description: "Representing Techfest, IIT Bombay, to promote technology, innovation, and student engagement on campus.",
      technologies: ["Social Media Marketing", "Content Strategy", "Canva", "Event Managment Platform", "Email Campaign Tools"],
    },
    {
      company: "Mood Indigo, IIT Bombay",
      role: "Digital Marketing Intern – Indigo Squad Member",
      duration: "Oct 2024 - Dec 2024",
      location: "Remote",
      type: "Internship",
      description: "Contributed to the College Connect Program by executing outreach strategies to promote Mood Indigo 2024 across campuses.",
      technologies: ["Social Media Marketing", "Content Strategy", "Campaign Outreach", "Team Collaboration"],
      achievements: [
        "Recognized for top performance among campus ambassadors",
        "Drove digital engagement through targeted campaigns",
        "Coordinated outreach with IIT Bombay team"
      ]
    }
  ];

  const volunteering = [
    {
      organization: "ICFAI Tech Entrepreneurship Club",
      role: "Event Host",
      duration: "Feb 2025 - Present",
      description: "Coordinating engaging events and fostering collaboration.",
      impact: "Strengthened community engagement through events and networking."
    },
    {
      organization: "Excuria Club, IFHE University",
      role: "Volunteer at TEDxICFAI",
      duration: "April 2025",
      description: "Handled speaker coordination, stage setup & audience engagement.",
      impact: "Engaged with industry speakers & gained insights into personal branding & communication."
    },
    {
      organization: "ARC ICFAI Tech",
      role: "Volunteer at Flashback Fiesta",
      duration: "March 2025",
      description: "Supported coordination of ARC’s exclusive alumni networking event.",
      impact: "Assisted in event coordination & exposure to mentoring, and professional development."
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Internship: "bg-blue-100 text-blue-800",
      "Part-time": "bg-green-100 text-green-800",
      Volunteer: "bg-purple-100 text-purple-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="experience" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience & <span className="text-primary">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional experience and community contributions that shaped my journey
            </p>
          </div>

          {/* Internships Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-foreground">Internships & Work Experience</h3>
            </div>

            <div className="space-y-6">
              {internships.map((internship, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2">
                          {internship.role}
                        </CardTitle>
                        <div className="flex items-center text-primary font-medium">
                          <span className="text-lg">{internship.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <Badge className={getTypeColor(internship.type)}>
                          {internship.type}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar size={14} className="mr-1" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin size={14} className="mr-1" />
                          {internship.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {internship.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    {internship.achievements && internship.achievements.length > 0 && (
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {internship.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-muted-foreground text-sm flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Volunteering Section */}
          <div>
            <div className="flex items-center mb-8">
              <Users className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold text-foreground">Volunteering & Community</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteering.map((volunteer, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground text-lg mb-1">
                          {volunteer.role}
                        </h4>
                        <p className="text-primary font-medium">
                          {volunteer.organization}
                        </p>
                        <div className="flex items-center text-muted-foreground text-sm mt-2">
                          <Calendar size={14} className="mr-1" />
                          {volunteer.duration}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {volunteer.description}
                      </p>

                      <div className="pt-2 border-t border-border">
                        <p className="text-sm">
                          <span className="font-medium text-foreground">Impact: </span>
                          <span className="text-muted-foreground">{volunteer.impact}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
