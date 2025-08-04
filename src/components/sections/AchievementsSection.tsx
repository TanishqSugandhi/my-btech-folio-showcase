import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, Star, Lightbulb, GraduationCap, Calendar } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "2nd Place - Design Thinking Workshop & Hackathon",
      organization: "ICFAI Tech School",
      date: "March 2025",
      description: "Developed innovative IoT solution for smart agriculture",
      icon: Trophy,
      type: "Competition",
      color: "text-yellow-600"
    },
     {
      title: "Workshop on Aerial Drone Technology",
      organization: "Department of Mechanical & Aerospace Engineering, Mahindra University",
      date: "January 2025",
      description: "Hands-on workshop on drone design, assembly, and real-world applications",
      icon: GraduationCap,
      type: "Workshop",
      color: "text-red-600"
    },
    {
      title: "Smart India Hackathon 2024 – Internal Hackathon Winner",
      organization: "ICFAI Foundation for Higher Education, ICFAI Tech",
      date: "September 2024",
      description: "Selected for national round based on internal hackathon performance.",
      icon: Lightbulb,
      type: "Competition",
      color: "text-orange-600"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Competition: "bg-yellow-100 text-yellow-800",
      Certification: "bg-blue-100 text-blue-800",
      Academic: "bg-purple-100 text-purple-800",
      Scholarship: "bg-green-100 text-green-800"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Achievements & <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that reflect my dedication to learning and excellence
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-elegant hover:shadow-glow transition-smooth group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth`}>
                        <Icon size={24} className={achievement.color} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <h3 className="font-semibold text-foreground mb-2 leading-tight">
                          {achievement.title}
                        </h3>

                        {/* Organization */}
                        <p className="text-primary font-medium text-sm mb-2">
                          {achievement.organization}
                        </p>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                          {achievement.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between">
                          <Badge className={getTypeColor(achievement.type)}>
                            {achievement.type}
                          </Badge>
                          
                          <div className="flex items-center text-muted-foreground text-xs">
                            <Calendar size={12} className="mr-1" />
                            {achievement.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats Summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">8.5</div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">₹50K</div>
              <div className="text-sm text-muted-foreground">Scholarship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
