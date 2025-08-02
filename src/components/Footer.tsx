import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-background/80 text-sm leading-relaxed">
                B.Tech Computer Science student passionate about creating innovative 
                solutions through technology and making a positive impact.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Projects", href: "#projects" },
                  { label: "Experience", href: "#experience" },
                  { label: "Contact", href: "#contact" }
                ].map((link) => (
                  <button
                    key={link.label}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-background/80 hover:text-background transition-smooth text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="mailto:johnsmith@email.com"
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-smooth"
                >
                  <Mail size={18} />
                </a>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-smooth"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-smooth"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              <p className="text-background/80 text-sm">
                johnsmith@email.com<br />
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-background/80 text-sm">
                © {currentYear} John Smith. All rights reserved.
              </p>
              <div className="flex items-center text-background/80 text-sm">
                <span>Made with</span>
                <Heart size={14} className="mx-1 text-red-400" />
                <span>using React & TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;