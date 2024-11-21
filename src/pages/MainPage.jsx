import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ProjectsSection from "../components/ProjectsSection";
import ProcessSection from "../components/ProcessSection";

const MainPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <HeroSection />
    <StatsSection />
    <ProjectsSection />
    <ProcessSection />
  </div>
);

export default MainPage;
