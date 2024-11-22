import React from "react";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ProjectsSection from "../components/ProjectsSection";
import ProcessSection from "../components/ProcessSection";

const MainPage = () => (
  <div className="min-h-screen bg-gray-50">
    <HeroSection />
    <StatsSection />
    <ProjectsSection />
    <ProcessSection />
  </div>
);

export default MainPage;
