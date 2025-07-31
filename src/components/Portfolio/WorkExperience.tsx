import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Web3 onwards NFThing",
      period: "Dec 2023 - Present",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Worked in the front end team in development of movie recommendation platform designed to deliver personalised movie suggestions incorporating user inputs.",
        "Worked on a project in creating college contributors page based on colleges and filters platform for the website."
      ],
      skills: ["React", "JavaScript", "Frontend Development", "UI/UX"]
    },
    {
      title: "Product Manager",
      company: "Web3 onwards NFThing",
      period: "Jan 2025 - Present",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Management of Deflix movie suggestion platform. Involving Product strategy and roadmap planning."
      ],
      skills: ["Product Management", "Strategy", "Roadmap Planning", "Team Leadership"]
    },
    {
      title: "Developer",
      company: "BuoyantWorx Solutions Private Limited",
      period: "March 2025 - May 2025",
      location: "Remote",
      type: "Contract",
      achievements: [
        "Working on building a scalable message notification service using AWS."
      ],
      skills: ["AWS", "Backend Development", "Scalable Systems", "Cloud Services"]
    },
    {
      title: "Centre Manager & Teacher",
      company: "U&I Organisation",
      period: "Aug 2022 - Nov 2024",
      location: "Remote",
      type: "Contract",
      achievements: [
        "Taught Science and Mathematics to students in Grades 10 and 12. Led the NGO center, overseeing day-to-day operations and management activities"
      ],
      skills: ["People Management","Leadership"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-6">
            Intern <span className="text-5xl font-playfair font-bold mb-6">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions and leading product development across multiple organizations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-5 h-5 bg-gradient-primary rounded-full border-4 border-white shadow-elegant"></div>
                  
                  {/* Experience Card */}
                  <div className="ml-20">
                    <Card className="shadow-elegant hover:shadow-float transition-all duration-500 group">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-2xl font-playfair group-hover:text-primary transition-colors">
                              {exp.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-lg text-accent-foreground mt-1">
                              <Building className="w-5 h-5" />
                              {exp.company}
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                            <Badge variant="outline" className="w-fit">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground leading-relaxed">
                                    {achievement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3 text-foreground">Technologies & Skills:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                <Badge 
                                  key={skill} 
                                  variant="secondary" 
                                  className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;