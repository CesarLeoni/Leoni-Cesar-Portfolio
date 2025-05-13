import { useRef, useEffect } from "react";
import { EDUCATION } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".education-card", { opacity: 0, y: 50 }); // ✅ Ensures elements are hidden before animation
      gsap.set(".education-title", { opacity: 0, y: 50 }); // Hide education title initially

      // Animate project titles when the section enters the viewport
      gsap.fromTo(
        ".education-title",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".education-title", // Trigger is the title itself
            start: "top 75%", // Animate when the title enters the viewport
            end: "top 30%", // Animate when the title leaves the viewport
            toggleActions: "play none reverse none",
            scrub: 1,
            invalidateOnRefresh: true, // Recalculate trigger positions on viewport changes
            //markers: true, // Show markers for debugging
          },
        }
      );

      // Select all project cards
      gsap.utils.toArray(".education-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 150 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card, // Now each card has its own trigger
              start: "top 75%", // Animate when each card enters viewport
              end: "top 30%", // Animate when each card leaves viewport
              toggleActions: "play none reverse none",
              scrub: 1,
              invalidateOnRefresh: true, // Recalculate trigger positions when viewport changes
              //markers: true, // Show markers for debugging
            },
          }
        );
      });
    }, educationRef);

    return () => ctx.revert();
  })


  return (
    <section className="py-16" id="education" ref={educationRef}>
      <div className="mx-auto max-w-full px-4">
        <h2 className="education-title mb-12 text-center text-3xl font-medium lg:text-4xl">
          Education
        </h2>
        <div className="flex flex-col items-center lg:w-3/4 lg:mx-auto space-y-12">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="education-card group rounded-xl border border-purple-300/20 p-6 hover:transform hover:scale-110 hover:shadow-lg"
            >
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <h3 className="mb-2 text-lg lg:text-2xl group-hover:text-purple-400">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-medium lg:text-xl bg-gradient-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent">
                    {edu.institution}
                  </h4>
                  <p className="text-sm bg-gradient-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent lg:text-base">
                    {edu.duration}
                  </p>
                  <p className="mt-4 group-hover:text-gray-200">
                    {edu.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default Education;
