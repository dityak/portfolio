import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Phone, Download, Send, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring ideas to life? Let's discuss opportunities and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-elegant hover:shadow-float transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:dityasiddaraj@gmail.com"
                        className="text-primary hover:text-primary-glow transition-colors"
                      >
                        dityasiddaraj@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a 
                        href="tel:+917338567003"
                        className="text-primary hover:text-primary-glow transition-colors"
                      >
                        +91 7338567003
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/ditya-siddaraj-94a70334b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-glow transition-colors"
                      >
                        ditya-siddaraj-94a70334b
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Bangalore, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button 
                    className="w-full bg-gradient-primary shadow-elegant hover:shadow-float transition-all duration-500"
                    size="lg"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resume.pdf';
                      link.download = 'Ditya_Siddaraj_Resume.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Professional Summary */}
            <Card className="shadow-elegant hover:shadow-float transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-xl font-playfair font-bold mb-4">Professional Summary</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                     <span className="font-medium text-foreground">Current Student:</span> B.E Information Science Engineering (CGPA: 9.25)
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Experience:</span> Frontend Development & Product Management
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Specialties:</span> React, Python, AWS, Product Strategy
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Interests:</span> IoT, Machine Learning, Cloud Services,Cyber Security
                  </p>
                  <p>
                     <span className="font-medium text-foreground">Hobbies:</span> Singing, Equestrian Sports
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant hover:shadow-float transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-6">Send a Message</h3>
              
              <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name"
                      className="glass border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name"
                      className="glass border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="glass border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Subject
                  </label>
                  <Input 
                    placeholder="What's this about?"
                    className="glass border-primary/30 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="glass border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary shadow-elegant hover:shadow-float transition-all duration-500"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  Typically responds within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block shadow-elegant bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Whether it's a new project, collaboration, or just a friendly chat about technology and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  className="glass border-primary/30 hover:bg-primary/10"
                  onClick={() => window.open('https://calendly.com/dityasiddaraj', '_blank')}
                >
                  Schedule a Call
                </Button>
                <Button 
                  className="bg-gradient-primary shadow-elegant hover:shadow-float transition-all duration-500"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start a Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;