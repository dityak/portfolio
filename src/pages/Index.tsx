import Navigation from "@/components/Portfolio/Navigation";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import WorkExperience from "@/components/Portfolio/WorkExperience";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import ArtSection from "@/components/Portfolio/ArtSection";
import ContactSection from "@/components/Portfolio/ContactSection";
import Footer from "@/components/Portfolio/Footer";

const Index = () => {
  return (
    <div id="top" className="min-h-screen custom-scrollbar">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkExperience />
      <ProjectsSection />
      <ArtSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
