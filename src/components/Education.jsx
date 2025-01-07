import { useRef } from "react";
import { EDUCATION } from "../constants";

const Education = () => {
  const educationRef = useRef(null);
  return (
    <section className="py-16" id="education" ref={educationRef}>
      <div className="mx-auto max-w-full px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Education
        </h2>
        <div className="flex flex-col items-center lg:w-3/4 lg:mx-auto space-y-8">
  {EDUCATION.map((edu) => (
    <div
      key={edu.id}
      className="rounded-xl border border-purple-300/20 p-6 transition-transform duration-300 ease-in-out transform group hover:scale-105 hover:shadow-lg"
    >
      <a
        href={edu.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div>
          <h3 className="mb-2 text-lg lg:text-2xl group-hover:text-purple-400">
            {edu.degree}
          </h3>
          <h4 className="text-lg font-medium lg:text-xl bg-gradient-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent ">
            {edu.institution}
          </h4>
          <p className="text-sm bg-gradient-to-b from-purple-400 to-pink-200 bg-clip-text text-transparent lg:text-base">{edu.duration}</p>
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
