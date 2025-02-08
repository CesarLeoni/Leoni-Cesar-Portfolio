import { useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import Pending from "./components/Pending";
// import LinkedInPosts from "./components/LinkedInPosts";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Credits from "./components/Credits";
import SnowEffect from "./components/SnowEffect";
import RotatingPanel from "./components/RotatingPanel";

const Projects = lazy(() => import("./components/Projects"));
const LinkedInPosts = lazy(() => import("./components/LinkedInPosts"));

const App = () => {
  const [showSnowflakes, setShowSnowflakes] = useState(true); // Initially show snowflakes

  // Function to toggle the visibility of snowflakes
  const toggleSnowflakes = () => {
    setShowSnowflakes(!showSnowflakes);
  };

  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div
        className="bg-image fixed inset-0 
       bg-cover bg-center"
      ></div>
      <div className="relative z-10">
        <Navbar
          toggleSnowflakes={toggleSnowflakes}
          showSnowflakes={showSnowflakes}
        />

        {/* Conditionally render the SnowEffect based on the state */}
        {showSnowflakes && <SnowEffect />}

        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>

        <Skills />
        <Experience />
        <Education />
        {/* <Contact /> */}
        <RotatingPanel />
        <Suspense fallback={<div>Loading...</div>}>
          <LinkedInPosts />
        </Suspense>

        

        {/* <Pending /> */}
        <Credits />
      </div>
    </main>
  );
};

export default App;
