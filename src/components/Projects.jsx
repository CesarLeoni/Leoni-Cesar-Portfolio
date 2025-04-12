import { useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".project-card", { opacity: 0, y: 50 }); // ✅ Ensures elements are hidden before animation
      gsap.set(".project-title", { opacity: 0, y: 50 }); // Hide project title initially

      // Animate project titles when the section enters the viewport
      gsap.fromTo(
        ".project-title",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".project-title", // Trigger is the title itself
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
      gsap.utils.toArray(".project-card").forEach((card, index) => {
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
    }, projectsRef);

    return () => ctx.revert();
  })


  return (
    <section className="pt-8" id="projects" ref={projectsRef}>
      <div className="pt-2">
        <h2 className="project-title mb-8 text-center text-3xl font-medium lg:text-4xl">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card flex w-full flex-col p-4 md:w-1/2 lg:w-1/3"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-60 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-medium lg:text-2xl group-hover:text-purple-500">
                      {project.title}
                    </h3>
                    <p className="mg-4">{project.description}</p>
                    <div className="pt-2">
                      <span className="font-bold mb-2 block">
                        {project.skills}
                      </span>
                      <ul>
                        {project.techStack.map((tech, index) => (
                          <li
                            key={index}
                            className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-semibold group-hover:bg-pink-500/10"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
