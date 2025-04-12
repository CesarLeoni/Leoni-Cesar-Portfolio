import { useEffect,useRef } from "react";
import { EXPERIENCES } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.set(".experience-card", { opacity: 0, y: 50 }); // ✅ Ensures elements are hidden before animation
        gsap.set(".experience-title", { opacity: 0, y: 50 }); // Hide experience title initially
  
        // Animate project titles when the section enters the viewport
        gsap.fromTo(
          ".experience-title",
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
              trigger: ".experience-title", // Trigger is the title itself
              start: "top 75%", // Animate when the title enters the viewport
              end: "top 30%", // Animate when the title leaves the viewport
              toggleActions: "play none reverse none",
              scrub:1,
              invalidateOnRefresh: true, // Recalculate trigger positions on viewport changes
              //markers: true, // Show markers for debugging
            },
          }
        );
  
        // Select all project cards
        gsap.utils.toArray(".experience-card").forEach((card, index) => {
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
      }, experienceRef);
  
      return () => ctx.revert();
    })

  return (
    <section className="py-16" id="work" ref={experienceRef}>
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="experience-title mb-12 text-center text-3xl font-medium lg:text-4xl">
          Work Experience
        </h2>
        <div className="flex flex-col space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="experience-card flex flex-col items-start justify-between md:flex-row rounded-xl border border-purple-300/20 p-4"
            >
              <div className="w-full text-sm font-semibold text-stone-300 md:w-1/4 lg:text-lg">
                {exp.yearRange}
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="mb-2 text-lg lg:text-2xl">
                  {exp.role} - {" "}
                  <span className="bg-gradient-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent">
                    {exp.company}
                  </span>
                </h3>
                <p className="mb-4 text-sm lg:text-base">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, id) => (
                    <span
                      key={id}
                      className="rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
