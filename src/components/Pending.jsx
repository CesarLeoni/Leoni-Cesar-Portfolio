import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { RiLinkedinBoxFill } from "@remixicon/react";

const Pending = () => {
  const bandRef = useRef(null);

  useEffect(() => {
    // GSAP animation for seamless scrolling from right to left
    gsap.to(bandRef.current, {
      x: "-100%", // Move the text to the left
      duration: 10, // Time for one full scroll
      repeat: -1, // Repeat infinitely
      ease: "linear",
    });
  }, []);

  return (
    <div className="relative pt-10 pb-5">
      {/* Main Text */}
      <div className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-center text-2xl tracking-tighter text-transparent px-8">
        This Portfolio is in progress.
        <br /> There is much more to see!
        <br /> For further details, download my CV above<br/> or visit my {" "}
        
        <a
          href="https://www.linkedin.com/in/cesarleoni29/"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linked
          <RiLinkedinBoxFill className="inline-flex"/>
        </a>
      </div>

      {/* Scrolling Band with Custom Dark Background */}
      <div className="relative mt-8 overflow-hidden h-16 bg-stripe-dark">
        <div
          ref={bandRef}
          className="flex items-center h-full whitespace-nowrap text-4xl font-bold text-white"
        >
          {/* Repeated Text with Separator */}
          <span className="mx-8">More features coming soon</span>
          <span className="mx-8">|</span>
          <span className="mx-8">More features coming soon</span>
          <span className="mx-8">|</span>
          <span className="mx-8">More features coming soon</span>
          <span className="mx-8">|</span>
          <span className="mx-8">More features coming soon</span>
        </div>
      </div>
    </div>
  );
};

export default Pending;
