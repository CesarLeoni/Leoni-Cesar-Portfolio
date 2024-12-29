import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Pending from "./components/Pending";
import LinkedInPosts from "./components/LinkedInPosts";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Credits from "./components/Credits";
import SnowEffect from "./components/SnowEffect";
import SantaSleigh from "./components/SantaSleigh";

const App = () => {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div
        className="bg-image fixed inset-0 
       bg-cover bg-center"
      ></div>
      <div className="relative z-10">
        <Navbar />
        <SnowEffect />
        {/* <SantaSleigh /> */}
        <Hero />
        <Projects />
        <Skills />
        
        <Experience />
        <Education />
        <Contact />
        <LinkedInPosts />
        <Pending />
        <Credits />
      </div>
    </main>
  );
};

export default App;
