import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import Certifications from "./components/Certifications";

import "./index.css";

const App = () => (
  <>
    <NavBar />
    <HeroSection />
    <AboutSection/>
    <Certifications/>
    <ProjectsSection/>
    <ContactSection/>
    <FooterSection/>
  </>
);



export default App;