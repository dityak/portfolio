import { Button } from "@/components/ui/button";
import { Heart, ArrowUp, Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground/5 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Button
            onClick={scrollToTop}
            className="bg-gradient-primary shadow-elegant hover:shadow-float transition-all duration-500 rounded-full p-3"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-playfair font-bold gradient-text mb-2">
              Ditya Siddaraj
            </h3>
          
            <p className="text-sm text-muted-foreground mt-1">
              Building innovative solutions with passion
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <p 
                className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Me
              </p>
              <p 
                className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Projects
              </p>
              <p 
                className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                onClick={() => document.getElementById('art')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Creative Arts
              </p>
              <p 
                className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact
              </p>
            </div>
          </div>

          {/* Connect */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-3">
              <a 
                href="mailto:dityasiddaraj@gmail.com"
                className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-soft"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/ditya-siddaraj-94a70334b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-soft"
              >
                <Linkedin className="w-5 h-5 text-accent-foreground" />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-soft"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 text-center">
          
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 Ditya Siddaraj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;