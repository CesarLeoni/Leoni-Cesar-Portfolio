import {useRef,useEffect} from "react"
import {SKILLS} from "../constants"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () =>{
    const skillsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
          gsap.set(".skills-card", { opacity: 0, y: 50 }); // ✅ Ensures elements are hidden before animation
          gsap.set(".skills-title", { opacity: 0, y: 50 }); // Hide project title initially
    
          // Animate project titles when the section enters the viewport
          gsap.fromTo(
            ".skills-title",
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power1.out",
              scrollTrigger: {
                trigger: ".skills-title", // Trigger is the title itself
                start: "top 75%", // Animate when the title enters the viewport
                end: "top 30%", // Animate when the title leaves the viewport
                toggleActions: "play none reverse none",
                scrub:1,
                invalidateOnRefresh: true, // Recalculate trigger positions on viewport changes
              },
            }
          );
    
          // Select all project cards
          gsap.utils.toArray(".skills-card").forEach((card, index) => {
            gsap.fromTo(
              card,
              { opacity: 0, y: 100 },
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
                },
              }
            );
          });
        }, skillsRef);
    
        return () => ctx.revert();
      })
    

    return(
        <section className="py-16" id="skills" ref={skillsRef}>
            <div className="px-4">
                <h2 className="skills-title mb-12 text-center text-3xl font-medium lg:text-4xl">
                    Skills
                </h2>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4
                lg:grid-cols-5">
                    {SKILLS.map((skill,index) => (
                        <div key={index} className="skills-card flex flex-col items-center text-center">
                            <div className="mb-4 text-3xl">
                                {skill.icon}
                            </div>
                            <h3 className="mb-2 text-lg font-medium lg:text-xl">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Skills;