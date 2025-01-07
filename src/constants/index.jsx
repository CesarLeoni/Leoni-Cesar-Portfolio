import project1 from "/assets/project1.webp";
import project2 from "/assets/project2.webp";
import project3 from "/assets/project3.webp";
import project4 from "/assets/project4.webp";
import project5 from "/assets/project5.webp";
import project6 from "/assets/old_project6.webp";
import personImage from "/assets/testimonial.webp";

import linkedin5 from "/assets/linkedin5.webp";
import linkedin4 from "/assets/linkedin4.webp";
import linkedin3 from "/assets/linkedin3.webp";
import linkedin2 from "/assets/linkedin2.webp";
import linkedin1 from "/assets/linkedin1.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
  { label: "LinkedIn Posts", href: "#linkedin" }, // New section
];


// Manually provide an array of post links (this could be in your index.jsx)
export const LINKEDIN_POSTS = [

{
  link:"https://www.linkedin.com/posts/cesarleoni29_linkedinrewind-2024wrapped-aiengineering-activity-7279932610749906944-GnIR",
  image:linkedin5,
  text:"My journey this year wasn't about collecting badges, but about connecting dots: from organizing charity runs to writing code, from acting to running a marathon.",
  date:"December 2024"
},

{link:"https://www.linkedin.com/posts/cesarleoni29_this-december-marks-the-end-of-my-journey-activity-7277296776129183744-5RyZ",  
 image:linkedin4,
 text:"This December marks the end of my journey with Liga Studenților Electroniști (LSE) as Sports Department Coordinator.",
 date:"December 2024"
},

{
  link:"https://www.linkedin.com/posts/cesarleoni29_devfest-google-devfest-activity-7263087085299920896-kqdk",
  image:linkedin3,
  text:"On November 13th, I had the fantastic opportunity to attend hashtag#DevFest, hosted by Digital Stack, Google Developer Groups (GDG), and Shortcut Bucharest !",
  date:"November 2024"
},

{
  link:"https://www.linkedin.com/posts/cesarleoni29_how-to-web-marked-the-beginning-of-a-new-activity-7248464566718808066-f6gY",
  image:linkedin2,
  text:"How to Web marked the beginning of a new academic year in the best way possible.",
  date:"October 2024"
},

{
  link:"https://www.linkedin.com/posts/cesarleoni29_yesterday-i-had-the-opportunity-to-meet-and-activity-7179460943100141568-p7IR",
  image:linkedin1,
  text:"Speakers like Emi Gal, Rahaf Harfoush, Ionut Stanimir, Alexandra Olaru, Cosmin Georgescu andy many more took the stage at the first event of this kind and magnitude in Craiova.",
  date:"March 2024"
}

];

const birthDate = new Date('2002-10-29'); // Replace with your actual birthdate (YYYY-MM-DD)
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const monthDifference = today.getMonth() - birthDate.getMonth();
const dayDifference = today.getDate() - birthDate.getDate();

if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
  age--; // If the birthday hasn't occurred yet this year
}

export const PROFILE = {
  name: "Leoni Cesar",
  role: "AI Developer",
  subheading: `Striving for growth and innovation over the past ${age} years, I’m driven by curiosity, eager to tackle challenges in cutting-edge technology with meaningful impact.`,
};

export const PROJECTS = [
  {
    id: 1,
    title: "Soft Hoarders Robotics Team",
    description:
      "Highscool robotics team participating in many national and international competitions that I was the leader of.",
    techStack: ["Assembling", "3D Printing", "Java","Creo Parametric" ,"Fundraising","Leadership"],
    imgSrc: project1,
    link: "https://www.soft-hoarders.com",
    skills: "Skills",
  },
  {
    id: 5,
    title: "Breast Cancer Detection",
    description:
      "Enhanced images from a mammography dataset in order to better detect malign tumors. Used techniques like: piecewise linear contrast, binarization and closing.",
    techStack: ["Image Processing","Python","Documentation","Research"],
    imgSrc: project5,
    link: "https://github.com/CesarLeoni/Medical_Imaging_Laboratory/tree/master/Project",
    skills: "Tech Skills",
  },
  {
    id: 4,
    title: "Signal Generator",
    description:
      "Sinusoidal, rectangular and triangular signal generator with variable output voltage and frequency. Developed for SMD technology, personalised printed circuit board with manually soldered parts.",
    techStack: ["Electronics","Orcad","PCB Layout","Soldering","Documentation"],
    imgSrc: project4,
    link: "/P1 Leoni Cesar Emanuele.pdf",
    skills: "Tech Skills",
  },
  
  {
    id: 3,
    title: "Faceshields for Heathcare",
    description:
      "During the Covid-19 pandemic I helped hundreds of healthcare workers with faceshields. Upgraded a 3d model for faster printing and built them by hand. Funding supported by my robotics team and sponsors were acquired in that occasion.",
    techStack: ["3D Design", "3D Printing","Volunteering","Communication","Fundraising"],
    imgSrc: project3,
    link: "https://www.youtube.com/watch?v=a-4ngBp47tc",
    skills: "Skills",
  },
 
  {
    id: 6,
    title: "Personal Portfolio Website",
    description:
      "Personal Portfolio to be continuously updated. Chose to do this project for the Internet Programming Technologies Course, as I saw it's utility in my job searching process.",
    techStack: ["React", "Tailwind","GSAP"],
    imgSrc: project6,
    link: "https://github.com/CesarLeoni/Leoni-Cesar-Portfolio",
    skills: "Tech Skills",
  },

  {
    id: 2,
    title: "Median Filter",
    description:
      "Image Median Filter for salt and pepper noise reduction. Had this homework for the programming course and the curiosity made me dive deeper into image processing.",
    techStack: ["C++", "Image Processing"],
    imgSrc: project2,
    link: "https://github.com/CesarLeoni/Median_filter",
    skills: "Tech Skills",
  },
  // {
  //   id: 3,
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
  //   techStack: ["Next.js", "Tailwind CSS"],
  //   imgSrc: project3,
  //   link: "https://myportfolio.com",
  //   skills: "Skills",
  // },
  // {
  //   id: 4,
  //   title: "Blog Platform",
  //   description:
  //     "A blogging platform with a content management system, user authentication, and an intuitive editor.",
  //   techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
  //   imgSrc: project4,
  //   link: "https://example-blogplatform.com",
  //   skills: "Skills",
  // },
  // {
  //   id: 5,
  //   title: "Task Management App",
  //   description:
  //     "A task management tool with user authentication, reminders, and collaboration features.",
  //   techStack: ["Angular", "Firebase", "Material UI"],
  //   imgSrc: project5,
  //   link: "https://example-taskapp.com",
  //   skills: "Skills",
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
  //   techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
  //   imgSrc: project6,
  //   link: "https://example-learningplatform.com",
  //   skills: "Skills",
  // },
];

import { SiCplusplus } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { BiCube } from 'react-icons/bi';

export const SKILLS = [
  {
    name: "C++",
    icon: <SiCplusplus className="text-blue-500" />,
  },
  
  {
    name: "Python",
    icon: <SiPython className="text-yellow-500" />,
  },
  {
    name: "Generative AI",
    icon: <SiOpenai className="text-green-500" />,
  },
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  
  {
    name: "Java",
    icon: <FaJava className="text-red-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },

  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  
  {
    name: "3D Modelling",
    icon: <BiCube className="text-purple-500" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Iul 2024 - Oct 2024",
    role: "Java Software Developer Intern",
    company: "Siveco Technology",
    description:
      "Created a fullstack application, using REST and OOP principles for the backend and an Angular framework for the frontend. Also worked in a chatbot project.",
    techStack: ["Java", "Angular", "Typescript", "Generative AI"],
  },
   {
    yearRange: "Oct 2023 - Feb 2024",
    role: "Laboratory Assistant",
    company: "National University of Science and Technology POLITEHNICA Bucharest",
    description:
      "Held the laboratory of data structures and algorithms in C++ to 2nd year bachelor's students",
    techStack: ["C++", "OOP", "Moodle", "Presentation Skills"],
  },
  {
    yearRange: "Iul 2023 - Sept 2023",
    role: "Corporate Volunteer",
    company: "Legambiente Milano",
    description:
      "Took part in organising activities for green space redevelopment, acquiring team management skills, and the ability to follow a full-time schedule for the first time as an employee.",
    techStack: ["Italian", "Teamwork", "Organising"],
  },
  {
    yearRange: "Dec 2022 - Dec 2024",
    role: "Sports Department Coordinator",
    company: "Electronics Students League (LSE)",
    description:
      "The passion for transforming ideas into real events was greatly fulfilled by this position, such as the 'Run for Life' charity cross, various sports tournaments, and workshops. My ambition-driven mindset took me on the way to obtaining the coordinator position, that aligns much better with my potential and capabilities.",
    techStack: ["Volunteering", "Google Suite", "Team Management", "Communication","Collaboration"],
  },
 
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor's in Applied Electronics",
    institution: "National University of Science and Technology POLITEHNICA Bucharest - ETTI Faculty",
    duration: "2021 - 2025",
    link: "https://etti.upb.ro/",
    description:
      "Includes courses such as: Object Oriented Programming, Internet Porgramming Technologies and Neural Netwoks and Fuzzy Logic. Average mark: 9.45",
  },
  {
    id: 2,
    degree: "Generative AI Certified Professional",
    institution: "Oracle Cloud Infrastructure",
    duration: "2024",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B8DDA8265682812BD27815516C8DE816497690BA532EA9070E626D321D5F7605",
    description:
      "Skills: Artificial Intelligence (AI) · Large Language Models (LLM) · Retrieval Augmented Generation (RAG) · Oracle Cloud Infrastructure · Generative AI · Natural Language Processing (NLP)",
  },
  {
    id: 3,
    degree: "Java Development",
    institution: "Digital Stack - Google",
    duration: "2023",
    link: "https://learn.digitalstack.ro/mod/linkedincert/verify_certificate.php?code=NsriNuyLmS",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
  {
    id: 4,
    degree: "Baccalaureate",
    institution: "National College 'Frații Buzești' ",
    duration: "2017 - 2021",
    link: "https://www.cnfb.ro/",
    description:
      "Graduated Highschool with Mathematics Informatics Bilingual German. Average mark: 9.975. Baccalaureate marks: Maths - 9.65, Physics - 10, Romanian: 9.35",
  },
];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
