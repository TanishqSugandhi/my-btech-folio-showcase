import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const internships = [
    {
      company: "TechCorp Solutions",
      role: "Software Development Intern",
      duration: "Jun 2024 - Aug 2024",
      location: "Bangalore, India",
      type: "Internship",
      description: "Developed responsive web applications using React and Node.js, improving user experience by 40%",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      achievements: [
        "Built 3 full-stack web applications",
        "Optimized database queries reducing load time by 30%",
        "Collaborated with 5-member development team"
      ]
    },
    {
      company: "DataMind Analytics",
      role: "ML Research Intern",
      duration: "Dec 2023 - Feb 2024",
      location: "Mumbai, India",
      type: "Internship",
      description: "Worked on machine learning models for predictive analytics in healthcare domain",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      achievements: [
        "Improved model accuracy by 15%",
        "Published research paper on healthcare analytics",
        "Presented findings to senior management"
      ]
    },
    {
      company: "StartupHub Incubator",
      role: "Technical Consultant",
      duration: "Sep 2023 - Nov 2023",
      location: "Remote",
      type: "Part-time",
      description: "Provided technical guidance to early-stage startups on technology stack selection and architecture",
      technologies: ["JavaScript", "Python", "Cloud Computing", "DevOps"],
      achievements: [
        "Consulted for 8 different startups",
        "Helped reduce development costs by 25%",
        "Mentored junior developers"
      ]
    }
  ];

  const volunteering = [
    {
      organization: "CodeForGood Initiative",
      role: "Volunteer Developer",
      duration: "Jan 2023 - Present",
      description: "Building digital solutions for NGOs and social causes",
      impact: "Developed websites for 5+ NGOs, reaching 10,000+ beneficiaries"
    },
    {
      organization: "University Tech Club",
      role: "Workshop Organizer",
      duration: "Aug 2022 - Present",
      description: "Organizing coding workshops and technical seminars for students",
      impact: "Conducted 15+ workshops, trained 200+ students"
    },
    {
      organization: "Coding Bootcamp for Schools",
      role: "Mentor & Speaker",
      duration: "Jun 2023 - Aug 2023",
      description: "Teaching programming fundamentals to high school students",
      impact: "Mentored 50+ students, 80% showed significant improvement"
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