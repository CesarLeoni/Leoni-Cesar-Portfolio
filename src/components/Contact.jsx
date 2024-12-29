import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react"
import { useRef } from "react"

const Contact = () =>{
    const contactRef = useRef(null)

    return(
        <section className="py-16" id="contact" ref={contactRef}>
            <div className="px-4 text-center">
                <h2 className="mb-8 text-3xl font-medium lg:text-4xl">
                    Contact
                </h2>
                <p className="mb-4 text-lg lg:text-xl">
                    Feel free to reach out via email: {" "}
                        <a href="mailto:leoni.cesar.emanuele@gmail.com" className="border-b">
                            leoni.cesar.emanuele@gmail.com
                        </a>
                </p>
                <div className="mt-8 flex justify-center space-x-6">
                    <a href="https://www.linkedin.com/in/cesarleoni29/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                    aria-label="Visit my Linkedin profile">
                        <RiLinkedinBoxFill className="text-[1000px]"/>
                    </a>
                    <a href="https://github.com/CesarLeoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                    aria-label="Visit my Github profile">
                        <RiGithubFill className="text-[100px]"/>
                    </a>
                    
                </div>
            </div>
        </section>
    )
}

export default Contact;