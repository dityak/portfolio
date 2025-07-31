// import { Button } from "@/components/ui/button";
// import { Mail, Linkedin, Github, Download } from "lucide-react";

// const HeroSection = () => {
//   const scrollToSection = (sectionId: string) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center justify-center px-4">
//       {/* Floating Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl float" style={{ animationDelay: '0s' }}></div>
//         <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl float" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-xl float" style={{ animationDelay: '1s' }}></div>
//         <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-success/10 rounded-full blur-xl float" style={{ animationDelay: '3s' }}></div>
//       </div>

//       <div className="container mx-auto relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Text Content */}
//           <div className="text-center lg:text-left">
//             <div className="mb-6">
//               <h1 className="text-6xl lg:text-7xl font-playfair font-bold mb-4">
//                 <span className="text-foreground">Ditya</span>
//                 <br />
//                 <span className="text-foreground">Siddaraj</span>
//               </h1>
//               <p className="text-xl text-muted-foreground mb-2">
//                 Frontend Developer & Product Manager
//               </p>
//               <p className="text-lg text-muted-foreground">
//                 Creative Engineering Student | Passionate Singer | Equestrian
//               </p>
//             </div>

//             {/* Contact Info */}
//             <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
//               <a 
//                 href="mailto:dityasiddaraj@gmail.com" 
//                 className="flex items-center gap-2 px-4 py-2 glass rounded-full hover-scale"
//               >
//                 <Mail className="w-4 h-4" />
//                 <span className="text-sm">dityasiddaraj@gmail.com</span>
//               </a>
//               <a 
//                 href="https://linkedin.com/in/ditya-siddaraj-94a70334b/" 
//                 target="_blank"
//                 className="flex items-center gap-2 px-4 py-2 glass rounded-full hover-scale"
//               >
//                 <Linkedin className="w-4 h-4" />
//                 <span className="text-sm">LinkedIn</span>
//               </a>
//               <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
//                 <span className="text-sm">📞 7338567003</span>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <Button 
//                 variant="default" 
//                 size="lg" 
//                 className="bg-gradient-primary shadow-elegant hover:shadow-float transition-all duration-500"
//                 onClick={() => scrollToSection('projects')}
//               >
//                 View My Work
//               </Button>
//               <Button 
//                 variant="outline" 
//                 size="lg" 
//                 className="glass border-primary/30 hover:bg-primary/10"
//                 onClick={() => {
//                   // Create a link to download resume - you'll need to add your actual resume file to public folder
//                   const link = document.createElement('a');
//                   link.href = '/resume.pdf'; // You need to add your resume.pdf file to public folder
//                   link.download = 'Ditya_Siddaraj_Resume.pdf';
//                   document.body.appendChild(link);
//                   link.click();
//                   document.body.removeChild(link);
//                 }}
//               >
//                 <Download className="w-4 h-4 mr-2" />
//                 Download CV
//               </Button>
//             </div>
//           </div>

//           {/* Right Side - Profile Image */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative">
//               <div className="w-80 h-80 rounded-full bg-gradient-primary p-2 shadow-float">
//                 <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
//                   {/* Placeholder for profile image */}
//                   <div className="w-full h-full bg-gradient-secondary flex items-center justify-center text-4xl font-bold text-white">
//                     DS
//                   </div>
//                 </div>
//               </div>
//               </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <div className="animate-bounce">
//           <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center justify-center px-4">
      Background Image with Blur
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-m scale-110"
          style={{ backgroundImage: 'url("/bg1.jpeg")' }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-xl float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-success/10 rounded-full blur-xl float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-6xl lg:text-7xl font-playfair font-bold mb-4">
                <span className="text-foreground">Ditya</span>
                <br />
                <span className="text-foreground">Siddaraj</span>
              </h1>
              
              <p className="text-lg text-foreground">
                Creative Engineering Student | Passionate Singer | Equestrian
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="mailto:dityasiddaraj@gmail.com" 
                className="flex items-center gap-2 px-4 py-2 glass rounded-full hover-scale"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">dityasiddaraj@gmail.com</span>
              </a>
              <a 
                href="https://linkedin.com/in/ditya-siddaraj-94a70334b/" 
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 glass rounded-full hover-scale"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                <span className="text-sm">📞 7338567003</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-primary shadow-elegant hover:shadow-float transition-all duration-500"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="glass border-primary/30 hover:bg-primary/10"
                onClick={() => {
                  // Create a link to download resume - you'll need to add your actual resume file to public folder
                  const link = document.createElement('a');
                  link.href = '/DityaSiddarajfResume.pdf'; // You need to add your resume.pdf file to public folder
                  link.download = 'Ditya_Siddaraj_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-primary p-2 shadow-float">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  {/* Placeholder for profile image */}
                  {/* <div className="w-full h-full bg-gradient-secondary flex items-center justify-center text-4xl font-bold text-white">
                    DS
                  </div>
                  <img 
                    src="public/me2.jpeg" 
                    alt="Ditya Siddaraj" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div> */} 
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;