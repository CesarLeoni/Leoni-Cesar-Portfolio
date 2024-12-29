import { RiGithubFill, RiLinkedinBoxFill, RiArrowRightUpLine } from "@remixicon/react";
import { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);

  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="mb-8 text-3xl font-medium lg:text-4xl">Contact</h2>
        <p className="mb-4 text-xl lg:text-2xl">
          Feel free to reach out via email: <br/>
          <a
            href="mailto:leoni.cesar.emanuele@gmail.com"
            className="inline-flex items-center space-x-2 border-b"
          >
            <RiArrowRightUpLine className="text-lg" />
            <span>leoni.cesar.emanuele@gmail.com</span>
          </a>
        </p>
        <p className="mb-4 text-xl lg:text-2xl">
        or visit my LinkedIn and Github
        </p>
        <div className="mt-4 flex justify-center space-x-10">
        
          <a
            href="https://www.linkedin.com/in/cesarleoni29/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my LinkedIn profile"
          >
            {/* LinkedIn Icon with proper size */}
            <RiLinkedinBoxFill className="w-[120px] h-[120px] hover:scale-110 hover:text-blue-600 transition-all duration-300" />
            </a>
          <a
            href="https://github.com/CesarLeoni"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my GitHub profile"
          >
            {/* GitHub Icon with proper size */}
            <RiGithubFill className="w-[120px] h-[120px] hover:scale-110 hover:text-[#181717] transition-all duration-300" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
