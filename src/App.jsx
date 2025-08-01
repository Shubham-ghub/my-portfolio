import React, { useRef } from "react";

import Projects from "./components/FeatureProject";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import UiDesign from "./components/UiDesign"
import Footer from "./components/Footer"

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      
      <section ref={homeRef}><HeroSection/></section>
      <section ref={aboutRef}><About /></section>
      <section ref={skillsRef}><Skills /></section>
      <section ref={projectsRef}><Projects /></section>
      <UiDesign/>
      <section ref={contactRef}><Contact /></section>
      <Footer/>
    </>
  );
}

export default App;
 