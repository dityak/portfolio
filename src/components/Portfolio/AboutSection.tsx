import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-6">
            About <span className="text-5xl font-playfair font-bold mb-6">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creative and motivated engineering student passionate about technology, 
            seeking to apply academic knowledge in dynamic corporate settings.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <Card className="lg:col-span-1 shadow-elegant hover:shadow-float transition-all duration-500">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4">Profile</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creative and motivated student pursuing undergraduate degree in engineering. 
                  Passionate singer and trained in equestrian. Seeking to apply academic knowledge 
                  and experience in a dynamic corporate setting.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card className="lg:col-span-2 shadow-elegant hover:shadow-float transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-playfair font-bold">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6 relative">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-0"></div>
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold text-foreground">
                      MS Ramaiah Institute of Technology
                    </h4>
                    <p className="text-primary font-medium">B.E Information Science Engineering</p>
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <Badge variant="secondary" className="bg-success/20 text-success-foreground">
                      CGPA: 9.10
                    </Badge>
                    <span className="text-sm text-muted-foreground">Current</span>
                  </div>
                  <p className="text-muted-foreground">
                    Pursuing final year undergraduate degree 
                  </p>
                </div>

                <div className="border-l-4 border-muted pl-6 relative">
                  <div className="absolute w-4 h-4 bg-muted rounded-full -left-2 top-0"></div>
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold text-foreground">PPEC High School</h4>
                    <p className="text-muted-foreground">High School Education - secured 9th State Rank in SSLC </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">Completed</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Overview */}
        <Card className="shadow-elegant hover:shadow-float transition-all duration-500">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold">Core Competencies</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-primary">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'React', 'Figma', 'SQL', 'AWS', 'JavaScript', 'TypeScript'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-accent">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Mentoring', 'Product Management', 'Leadership', 'Communication', 'Problem Solving'].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;