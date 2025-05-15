import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./component/modern-navigation";
import SmoothScroll from "smooth-scroll";
import HeroSection from "./component/heroSection";
import ExperienceSection from "./component/experienceSection";
import SkillsSection from "./component/skillsSection";
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
