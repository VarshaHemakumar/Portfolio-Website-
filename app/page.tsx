import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import EducationSec from "./components/EducationSec";
import SkillsCarousel from "./components/SkillsCarousel";
import FoundationalStrip from "./components/FoundationalStrip";
import FeaturedProjects from "./components/ProjectZigZag";
import ProjectZigZag from "./components/ProjectZigZag";

import ExperienceSec from "./components/Experience";

import { RESUME_PROJECTS } from "./data/resumeProjects";

export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen bg-transparent">
      {}
      {}
      <HeroSection />

      {}
      <AboutSection />

      <div className="container mx-auto max-w-[2000px] px-12 py-4">

        <ExperienceSec />
        
        <EducationSec />
        
        <ProjectZigZag 
        
  items={RESUME_PROJECTS}
  title="Projects"
  sub="Three highlights from my resume."
  ctaHref="/projects"
/>
        <FoundationalStrip />
        <SkillsCarousel />
        <EmailSection />
        <footer className="mt-20  py-8 text-center text-sm text-white/70">
  <p className="text-lg font-semibold text-white">
    Built with ❤️ by <span className="text-violet-400">Varsha Hemakumar</span>
  </p>
  <p className="mt-2 text-white/60">
    Turning ideas into code • One project at a time 
  </p>
  <p className="mt-6 text-xs text-white/40">
     {new Date().getFullYear()} All rights reserved.
  </p>
</footer>

      </div>
      
    </div>
    
  );
}
