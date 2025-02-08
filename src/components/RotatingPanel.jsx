import { useRef, useState,useEffect } from "react";
import { gsap } from "gsap";
import ContactCard from "./ContactCard"; // Import the Contact component
import { PROFILE } from "../constants";
import { TextPlugin } from "gsap/TextPlugin"; // Importing the plugin

gsap.registerPlugin(TextPlugin); // Register the plugin

export default function RotatingPanel() {
  const panelRef = useRef(null);
  const [rotated, setRotated] = useState(false); // Track rotation state

  const quoteRef = useRef(null);
  
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const cycleQuotes = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % PROFILE.quotes.length);
  };

  // Animation for writing and erasing text
  const animateText = (text) => {
    // First clear the text, then write it
    gsap.to(quoteRef.current, {
      duration: 1.5,
      text: " ",
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(quoteRef.current, {
          duration: 3,
          text: text,
          ease: "power2.inOut",
        });
      },
    });
  };

    useEffect(() => {
      // Writing effect 
      const quoteInterval = setInterval(() => {
        const currentQuote = PROFILE.quotes[currentQuoteIndex];
        animateText(currentQuote);
        cycleQuotes();
      }, 5000); // change the quote every 5 seconds
  
      // Cleanup interval on unmount
      return () => clearInterval(quoteInterval);

    }, [currentQuoteIndex]); // This effect runs only once when the component is mounted
  

  const handleClick = () => {
    gsap.to(panelRef.current, {
      rotateY: rotated ? 0 : 180,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        setRotated(!rotated);
      },
    });
  };

  return (
    <section id="panel" className="mb-20 mt-10">
    <div className="flex justify-center items-center p-4">
      <div
        ref={panelRef}
        onClick={handleClick}
        className="relative w-[80vw] max-w-[450px] aspect-[3/2] cursor-pointer transform-style-3d"
      >
        <div
          className="relative w-full h-full bg-gradient-to-br from-purple-100/40 to-purple-900/40 text-white rounded-xl shadow-2xl transition-transform duration-1000 transform-style-3d"
        >
          {/* Front Side */}
          <div className="absolute w-full h-full flex flex-col items-center justify-center front p-4">
            <div className="text-center space-y-6">
              {/* Name */}
              <p className="text-4xl font-extrabold text-purple-100 mb-2 drop-shadow-lg">
                {PROFILE.name}
              </p>

              {/* Role */}
              <p className="text-2xl text-purple-300 font-medium tracking-wide">
                {PROFILE.role}
              </p>

              {/* Quote with incline */}
              <p ref={quoteRef} className="text-xl text-purple-300 italic mt-4 tracking-wide"
              style={{
                minHeight: "60px", // Ensure the text area has a fixed height
                // lineHeight: "1.5",
              }}>
              
              </p>
            </div>
          </div>


          {/* Back Side */}
          <div className="absolute w-full h-full flex items-center justify-center text-xl font-semibold cursor-pointer rounded-xl shadow-2xl back transform rotateY-180 p-6">
            {/* Render the ContactCard component inside the back side */}
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}