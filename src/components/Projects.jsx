import { useRef } from "react"
import { PROJECTS } from "../constants"

const Projects = () =>{
    const projectsRef = useRef(null)
    return (
        <section className="pt-8" id="projects" ref={projectsRef}>
            <div className="pt-2">
                <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
                    Projects
                </h2>
                <div className="flex flex-wrap justify-center">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="flex w-full flex-xol p-4 md:w-1/2 lg:w-1/3">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20">
                                    <img src={project.imgSrc} alt={project.title} 
                                    className="h-60 w-full object-cover"/> 
                                
                                <div className="p-6">
                                    <h3 className="mb-2 text-lg font-medium lg:text-2xl">{project.title}</h3>
                                    <p className="mg-4">{project.description}</p>
                                    <div className="pt-2">
                                            <span className="font-bold mb-2 block">
                                                {project.skills}
                                            </span>
                                        <ul>
                                            {project.techStack.map((tech,index) => (
                                                <li key={index} className="mb-1 mr-2 inline-block rounded-full border-2 border-pink-500/30
                                                 px-3 py-1 text-sm font-semibold">{tech}</li>
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
    )
}

export default Projects;