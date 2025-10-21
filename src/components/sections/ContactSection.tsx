import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Whatsapp, Phone, MapPin, Github } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tanishqsugandhi19@gmail.com",
      href: "mailto:tanishqsugandhi19@gmail.com",
      color: "text-red-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8985473086",
      href: "tel:+918985473086",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: null,
      color: "text-blue-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@TanishqSugandhi",
      href: "https://github.com/TanishqSugandhi",
      color: "text-gray-700",
      bgColor: "bg-gray-100 hover:bg-gray-200"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Tanishq Sugandhi",
      href: "https://www.linkedin.com/in/tanishq-sugandhi19/",
      color: "text-blue-600",
      bgColor: "bg-blue-100 hover:bg-blue-200"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's connect! Whether you have opportunities, collaborations, or just want to chat about technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <div key={index} className="flex items-center space-x-4 group">
                          <div className={`p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth`}>
                            <Icon size={20} className={contact.color} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground">{contact.label}</p>
                            {contact.href ? (
                              <a 
                                href={contact.href}
                                className="text-foreground font-medium hover:text-primary transition-smooth"
                              >
                                {contact.value}
                              </a>
                            ) : (
                              <p className="text-foreground font-medium">{contact.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Message */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Message</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a conversation about technology and innovation.
                  </p>
                  <Button 
                    className="gradient-primary hover:shadow-glow transition-smooth w-full"
                    onClick={() => window.open('mailto:tanishqsugandhi19@gmail.com', '_blank')}
                  >
                    <Mail size={18} className="mr-2" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div className="space-y-6 animate-fade-in">
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Connect on Social</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <div key={index} className="group">
                          <Button
                            variant="ghost"
                            className={`w-full justify-start h-auto p-4 ${social.bgColor} transition-smooth`}
                            onClick={() => window.open(social.href, '_blank')}
                          >
                            <div className="flex items-center space-x-4">
                              <div className={`p-2 rounded-lg bg-background`}>
                                <Icon size={20} className={social.color} />
                              </div>
                              <div className="text-left">
                                <p className="font-medium text-foreground">{social.label}</p>
                                <p className="text-sm text-muted-foreground">{social.username}</p>
                              </div>
                            </div>
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Current Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-muted-foreground">Available for opportunities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Open to collaborations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">Seeking internships</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      💡 Best time to reach me: 9 AM - 6 PM IST
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Response Time */}
          <div className="mt-12 text-center animate-fade-in">
            <Card className="shadow-elegant max-w-md mx-auto">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to emails within <span className="text-primary font-medium">24 hours</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
