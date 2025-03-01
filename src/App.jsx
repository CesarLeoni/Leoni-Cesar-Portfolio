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
import { useEffect } from "react";
import Martisor from "./components/Martisor";

const Projects = lazy(() => import("./components/Projects"));
const LinkedInPosts = lazy(() => import("./components/LinkedInPosts"));

const App = () => {
  const [showSnowflakes, setShowSnowflakes] = useState(true); // Initially show snowflakes
  const [winter, setWinter] = useState(false); // Add winter state

  // Function to toggle the visibility of snowflakes
  const toggleSnowflakes = () => {
    setShowSnowflakes(!showSnowflakes);
  };

  const isWinter = (month, hemisphere) => {
      if (hemisphere === 'northern') {
        return month === 12 || month === 1 || month === 2; // Dec, Jan, Feb
      } else if (hemisphere === 'southern') {
        return month === 6 || month === 7 || month === 8; // Jun, Jul, Aug
      }
      return false;
    }
  
    const getHemisphere = async () => {
      try {
        // Replace the token with the one you provided
        const response = await fetch('https://ipinfo.io/json?token=1584b09267e268'); 
        const data = await response.json();
        const latitude = parseFloat(data.loc.split(',')[0]);
        const hemisphere = latitude >= 0 ? 'northern' : 'southern';
    
        const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-based month
        const isItWinter = isWinter(currentMonth, hemisphere);
        setWinter(isItWinter);
      } catch (error) {
        console.error('Error fetching IP information:', error);
      }
    };
    
  
    useEffect(() => {
      getHemisphere(); // Call the function to determine winter
    }, []);

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
        {showSnowflakes && winter && <SnowEffect />}

        <Hero />

        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>

        <Skills />
        <Experience />
        <Education />

        {/* <Contact /> */}

        <RotatingPanel />

        <Martisor />

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
