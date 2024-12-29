import React, { useEffect } from "react";
import { gsap } from "gsap";

const SantaSleigh = () => {
  const triggerSleighAnimation = () => {
    console.log("Creating sleigh...");

    // Create the sleigh element
    const sleigh = document.createElement("img");
    sleigh.src = "/assets/sleigh.webp"; // Ensure this path is correct
    sleigh.alt = "Santa's Sleigh";
    sleigh.style.position = "fixed";
    sleigh.style.left = "-150px"; // Start off-screen horizontally
    sleigh.style.zIndex = 99999;
    sleigh.style.width = "200px"; // Base size
    sleigh.style.height = "auto";

    // Debugging styles
    sleigh.style.backgroundColor = "red"; // TEMPORARY
    sleigh.style.border = "2px solid yellow"; // TEMPORARY

    // Append sleigh to the body
    document.body.appendChild(sleigh);
    console.log("Sleigh added to DOM");

    // GSAP animation
    gsap.fromTo(
      sleigh,
      { x: "-150px", y: "10vh", scale: 0.5, opacity: 1 },
      {
        x: "100vw",
        y: "50vh",
        scale: 3,
        opacity: 0,
        duration: 3, // Shortened for testing
        ease: "power1.inOut",
        onComplete: () => {
          sleigh.remove(); // Remove sleigh after animation
          console.log("Sleigh animation complete and removed");
        },
      }
    );
  };

  useEffect(() => {
    console.log("SantaSleigh component mounted.");
    const interval = setInterval(() => {
      console.log("Triggering animation...");
      triggerSleighAnimation();
    }, 3000); // Every 3 seconds for testing

    return () => {
      console.log("Cleaning up interval...");
      clearInterval(interval);
    };
  }, []);

  return null; // Component does not render anything directly
};

export default SantaSleigh;
