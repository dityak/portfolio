// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ExternalLink, Github, Calendar, Layers } from "lucide-react";
// import { useState } from "react";

// const ProjectsSection = () => {
//   const [hoveredProject, setHoveredProject] = useState<number | null>(null);

//   const projects = [
//     {
//       title: "Hydroponics Automated Monitoring",
//       period: "Jan 2024 - Present",
//       category: "IoT & Automation",
//       description: "Working on the automation of monitoring the plant growth in hydroponics set up by using sensors and object recognition and image segmentation, display real time data through website.",
//       technologies: ["Python", "Computer Vision", "IoT", "Sensors", "Web Development", "Image Processing"],
//       status: "In Development",
//       demoLink: "https://aviation-dashboard-1.onrender.com/", // To be added later
//       githubLink: "https://github.com/dityak/aviation-dashboard", // To be added later
//       features: [
//         "Real-time plant growth monitoring",
//         "Automated sensor integration",
//         "Computer vision for plant analysis",
//         "Live data visualization dashboard"
//       ]
//     },
//     {
//       title: "Real Time Aviation Dashboard",
//       period: "March 2025 - April 2025",
//       category: "Data Visualization",
//       description: "Comprehensive aviation dashboard providing real-time flight tracking, weather integration, and operational analytics for enhanced decision-making.",
//       technologies: ["React", "APIs", "Real-time Data", "Dashboard Design", "TypeScript"],
//       status: "Completed",
//       demoLink: "", // To be added later
//       githubLink: "", // To be added later
//       features: [
//         "Live flight tracking",
//         "Weather data integration",
//         "Interactive maps",
//         "Performance analytics"
//       ]
//     },
//     {
//       title: "Image Classification with TensorFlow",
//       period: "Sept 2024 - Dec 2024",
//       category: "Machine Learning",
//       description: "Usage of Inception V3, VGG-16 model for classifying and displaying the statistics for a given replay attack database.",
//       technologies: ["Python", "TensorFlow", "Inception V3", "VGG-16", "Machine Learning", "Data Analysis"],
//       status: "Completed",
//       demoLink: "", // To be added later
//       githubLink: "", // To be added later
//       features: [
//         "Advanced CNN models",
//         "Replay attack detection",
//         "Statistical analysis",
//         "Model comparison"
//       ]
//     },
//     {
//       title: "Movie Recommendation Platform",
//       period: "Dec 2023 - Present",
//       category: "Web Development",
//       description: "Frontend development for movie recommendation platform with personalized suggestions and college contributors filtering system.",
//       technologies: ["React", "JavaScript", "UI/UX", "Frontend Development", "API Integration"],
//       status: "In Development",
//       demoLink: "", // To be added later
//       githubLink: "", // To be added later
//       features: [
//         "Personalized recommendations",
//         "College-based filtering",
//         "Interactive UI",
//         "User preference analysis"
//       ]
//     }
//   ];

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "Completed":
//         return "bg-success/20 text-success-foreground";
//       case "In Development":
//         return "bg-primary/20 text-primary";
//       default:
//         return "bg-muted/20 text-muted-foreground";
//     }
//   };

//   return (
//     <section id="projects" className="py-24 px-4 bg-white/50">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-playfair font-bold mb-6">
//             Featured <span className="gradient-text">Projects</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Innovative solutions spanning IoT, machine learning, and web development
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Card 
//               key={index}
//               className="shadow-elegant hover:shadow-float transition-all duration-500 group cursor-pointer h-full"
//               onMouseEnter={() => setHoveredProject(index)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               <CardHeader className="pb-4">
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2 mb-2">
//                       <Layers className="w-5 h-5 text-primary" />
//                       <span className="text-sm text-primary font-medium">{project.category}</span>
//                     </div>
//                     <CardTitle className="text-2xl font-playfair group-hover:text-primary transition-colors">
//                       {project.title}
//                     </CardTitle>
//                     <div className="flex items-center gap-2 mt-2 text-muted-foreground">
//                       <Calendar className="w-4 h-4" />
//                       <span className="text-sm">{project.period}</span>
//                     </div>
//                   </div>
//                   <Badge className={getStatusColor(project.status)}>
//                     {project.status}
//                   </Badge>
//                 </div>
//               </CardHeader>
              
//               <CardContent className="space-y-6">
//                 <p className="text-muted-foreground leading-relaxed">
//                   {project.description}
//                 </p>

//                 {/* Key Features */}
//                 <div>
//                   <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
//                   <ul className="space-y-1">
//                     {project.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start gap-2">
//                         <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
//                         <span className="text-sm text-muted-foreground">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Technologies */}
//                 <div>
//                   <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => (
//                       <Badge 
//                         key={tech} 
//                         variant="secondary" 
//                         className="bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex gap-3 pt-2">
//                   <Button 
//                     variant="outline" 
//                     size="sm" 
//                     className="flex-1 glass border-primary/30 hover:bg-primary/10"
//                     disabled={!project.demoLink}
//                     onClick={() => project.demoLink && window.open(project.demoLink, '_blank')}
//                   >
//                     <ExternalLink className="w-4 h-4 mr-2" />
//                     {project.demoLink ? "Live Demo" : "Demo Coming Soon"}
//                   </Button>
//                   <Button 
//                     variant="outline" 
//                     size="sm" 
//                     className="flex-1 glass border-accent/30 hover:bg-accent/10"
//                     disabled={!project.githubLink}
//                     onClick={() => project.demoLink && window.open(project.demoLink, '_blank')}
//                   >
//                     <Github className="w-4 h-4 mr-2" />
//                     {project.githubLink ? "View Code" : "Code Coming Soon"}
//                   </Button>
//                 </div>

//                 {/* Hover Effect Indicator */}
//                 {hoveredProject === index && (
//                   <div className="text-center pt-2">
//                     <p className="text-xs text-primary font-medium">
//                       💡 Project links will be added once deployed
//                     </p>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <Card className="inline-block shadow-elegant">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-playfair font-bold mb-4">
//                 Want to see more projects?
//               </h3>
//               <p className="text-muted-foreground mb-6">
//                 I'm constantly working on new ideas and innovations. Let's connect to discuss potential collaborations!
//               </p>
//               <Button 
//                 size="lg" 
//                 className="bg-gradient-primary shadow-elegant hover:shadow-float transition-all duration-500"
//                 onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//               >
//                 Get In Touch
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Layers } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Hydroponics Automated Monitoring",
      period: "Jan 2024 - Present",
      category: "IoT & Automation",
      description: "Working on the automation of monitoring the plant growth in hydroponics set up by using sensors and object recognition and image segmentation, display real time data through website.",
      technologies: ["Python", "Computer Vision", "IoT", "Sensors", "Web Development", "Image Processing"],
      status: "In Development",
      demoLink: "", // To be added later
      githubLink: "https://github.com/dityak/HydroponicsWebsite", // To be added later
      features: [
        "Real-time plant growth monitoring",
        "Automated sensor integration",
        "Computer vision for plant analysis",
        "Live data visualization dashboard"
      ]
    },
    {
      title: "Real Time Aviation Dashboard",
      period: "March 2025 - April 2025",
      category: "Data Visualization",
      description: "Comprehensive aviation dashboard providing real-time flight tracking, weather integration, and operational analytics for enhanced decision-making.",
      technologies: ["React", "APIs", "Real-time Data", "Dashboard Design", "TypeScript"],
      status: "Completed",
      demoLink: "https://aviation-dashboard-1.onrender.com/", // To be added later
      githubLink: "https://github.com/dityak/aviation-dashboard", // To be added later
      features: [
        "Live flight tracking",
        "Weather data integration",
        "Interactive maps",
        "Performance analytics"
      ]
    },
    {
      title: "Smart Traffic Management & Emergency Vehile Detection",
      period: "April 2024 - June 2025",
      category: "Machine Learning",
      description: "Dual-model AI system using CNN for emergency vehicle detection and XGBoost for dynamic traffic signal timing based on real-time data, aimed at optimizing urban traffic flow and prioritizing emergency response.",
      technologies: ["Python", "TensorFlow", "CNN", "XGBoost", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Machine Learning", "Computer Vision", "Data Analysis"],
      status: "Completed",
      demoLink: "https://smart-traffic-management-htnkb4u3vvrqxnfiuk68ui.streamlit.app/",
      githubLink: "https://github.com/dityak/smart-traffic-management/blob/main/Copy%20of%20finalml.ipynb", // To be added later
      features: [
        "Emergency vehicle detection using CNN",
  "Dynamic signal timing prediction using XGBoost",
  "Real-time traffic adaptation",
  "Dual-model integration",
  "Traffic and weather-based signal optimization",
  "Confusion matrix and feature importance visualization",
  "Edge deployment readiness"
      ]
    },
    {
      title: "Movie Recommendation Platform",
      period: "Dec 2023 - Present",
      category: "Web Development",
      description: "Frontend development for movie recommendation platform with personalized suggestions and college contributors filtering system.",
      technologies: ["React", "JavaScript", "UI/UX", "Frontend Development", "API Integration"],
      status: "In Development",
      demoLink: "", // To be added later
      githubLink: "", // To be added later
      features: [
        "Personalized recommendations",
        "College-based filtering",
        "Interactive UI",
        "User preference analysis"
      ]
    },
    {
      title: "Sign Language Translator",
      period: "June 2025 - Present",
      category: "Web Development",
      description: "Frontend development for movie recommendation platform with personalized suggestions and college contributors filtering system.",
      technologies: ["React", "JavaScript", "UI/UX", "Frontend Development", "API Integration"],
      status: "In Development",
      demoLink: "", // To be added later
      githubLink: "", // To be added later
      features: [
        "Personalized recommendations",
        "College-based filtering",
        "Interactive UI",
        "User preference analysis"
      ]
    },
    {
      title: "Daily Question Wall",
      period: "May 2025 - June 2025",
      category: "Devops, Web Development",
      description: "Frontend development for movie recommendation platform with personalized suggestions and college contributors filtering system.",
      technologies: ["React", "JavaScript", "UI/UX", "Frontend Development", "API Integration"],
      status: "In Development",
      demoLink: "", // To be added later
      githubLink: "", // To be added later
      features: [
        "Personalized recommendations",
        "College-based filtering",
        "Interactive UI",
        "User preference analysis"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-success/20 text-success-foreground";
      case "In Development":
        return "bg-primary/20 text-primary";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-24 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-playfair font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning IoT, machine learning, and web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="shadow-elegant hover:shadow-float transition-all duration-500 group cursor-pointer h-full"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="w-5 h-5 text-primary" />
                      <span className="text-sm text-primary font-medium">{project.category}</span>
                    </div>
                    <CardTitle className="text-2xl font-playfair group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 glass border-primary/30 hover:bg-primary/10"
                    disabled={!project.demoLink}
                    onClick={() => project.demoLink && window.open(project.demoLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.demoLink ? "Live Demo" : "Demo Coming Soon"}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 glass border-accent/30 hover:bg-accent/10"
                    disabled={!project.githubLink}
                    onClick={() => project.githubLink && window.open(project.githubLink, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {project.githubLink ? "View Code" : "Code Coming Soon"}
                  </Button>
                </div>

                {/* Hover Effect Indicator */}
                {hoveredProject === index && (
                  <div className="text-center pt-2">
                    <p className="text-xs text-primary font-medium">
                      💡 Project links will be added once deployed
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Want to see more projects?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new ideas and innovations. Let's connect to discuss potential collaborations!
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary shadow-elegant hover:shadow-float transition-all duration-500"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;