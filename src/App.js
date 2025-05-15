import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./component/modern-navigation";
import SmoothScroll from "smooth-scroll";
import AppIndex from "./AppIndex";
import { useEffect, useState } from "react";
import { Footer } from "./component/mainFooterSection";
import { BlogHomepage, ProductsHomepage } from "./component/ProductsHomepage";
import { BlogPostDetail } from "./component/blogPostDetail";
import { Gallery } from "./component/galleryMainSection";
import { ProductGridmainSection } from "./component/productGridmainSection";
import { ProductDetail } from "./component/productDetail";
import { MaintenanceMode } from "./component/MaintenanceMode";
import { BookFreeSiteVisitSection } from "./component/BookFreeSiteVisitSection";
import { ProfessionalCollections } from "./component/professionalCollectionsSection";
import ConcreteMattPage from "./component/ConcreteMattPage";
import { ContactPage } from "./component/contactPage";
import LoadingAM from "./assets/Frame 5.gif";
import HeroSection from "./component/heroSection";
import ExperienceSection from "./component/experienceSection";
import SkillsSection from "./component/skillsSection";
import { MercedesBenzTimeline } from "./component/mercedesBenzTimeline";
import ProjectsShowcase from "./component/projectsShowcase";
import AboutSection from "./component/aboutSection";
import ContactSection from "./component/contactSection";
// import Projects from "./component/projects";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {

  return (
    <>
      {/* <MaintenanceMode /> */}
      <Router>
        <div className="">
          <Navigation />
          <HeroSection />
          <ExperienceSection theme="blue" />
          <ExperienceSection titelHide theme="dark" />
          <ExperienceSection titelHide theme="blue" />
          <SkillsSection />
          <ProjectsShowcase />
          <AboutSection />
          <ContactSection />
          {/* <Projects />   */}
        </div>
      </Router>
    </>
  );
}

export default App;
