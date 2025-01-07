import {useRef} from "react"
import {SKILLS} from "../constants"

const Skills = () =>{
    const skillsRef = useRef(null)
    return(
        <section className="py-16" id="skills" ref={skillsRef}>
            <div className="px-4">
                <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
                    Skills
                </h2>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4
                lg:grid-cols-5">
                    {SKILLS.map((skill,index) => (
                        <div key={index} className="flex flex-col items-center text-center">
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