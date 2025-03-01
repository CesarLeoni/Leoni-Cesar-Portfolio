import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Martisor = () => {
  const bandRef = useRef(null);
  const bandRef1 = useRef(null);
  const bandRef2 = useRef(null);

  const today = new Date();

  // Check if today is between March 1st and March 8th
  const isMartisor = (date) => {
    return date.getMonth() === 2 && date.getDate() >= 1 && date.getDate() <= 8; // March
  };

  useEffect(() => {
    if (bandRef.current) {
      gsap.to(bandRef.current, {
        backgroundPosition: "800% 0", // Scrolls the stripes continuously
        duration: 100, // Adjust speed of scrolling
        repeat: -1, // Infinite animation loop
        ease: "linear",
      });
    }

    if (bandRef1.current) {
      gsap.to(bandRef1.current, {
        x: "-50%", // Moves only half of the duplicated content
        duration: 10, // Adjust scrolling speed
        repeat: -1, // Infinite animation
        ease: "linear",
      });
    }

    if (bandRef2.current) {
      gsap.to(bandRef2.current, {
        backgroundPosition: "800% 0", // Scrolls the stripes continuously
        duration: 100, // Adjust speed of scrolling
        repeat: -1, // Infinite animation loop
        ease: "linear",
      });
    }
  }, []);

  return (
    isMartisor(today) && (
      <div className="relative pt-1 pb-5">
        {/* Thin Scrolling Stripe */}
        <div
          ref={bandRef}
          className="relative overflow-hidden h-2 bg-stripe-martisor"
        ></div>

        {/* Moving Text Band */}
        <div className="relative overflow-hidden h-16 bg-stripe-martisor-thick">
          <div ref={bandRef1} className="flex items-center h-full whitespace-nowrap text-4xl font-bold text-pink-200 drop-shadow-lg">
            <div className="flex">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8">
                  La mulți ani de ziua femeii!
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Thin Scrolling Stripe */}
        <div
          ref={bandRef2}
          className="relative mb-8 overflow-hidden h-2 bg-stripe-martisor"
        ></div>
      </div>
    )
  );
};

export default Martisor;
