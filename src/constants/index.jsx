import project1 from "/assets/project1.webp";
import project2 from "/assets/project2.webp";
import project3 from "/assets/project3.webp";
import project4 from "/assets/project4.webp";
import project5 from "/assets/project5.webp";
import project6 from "/assets/project6.webp";
import personImage from "/assets/testimonial.webp";

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

// Manually provide an array of post links (this could be in your index.jsx)
export const LINKEDIN_POSTS = [

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

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "LinkedIn Posts", href: "#linkedin" }, // New section
  { label: "Contact", href: "#contact" },
];


export const PROFILE = {
  name: "Leoni Cesar",
  role: "AI Developer",
  subheading:
    "Curious, open minded and ready to tackle any challenge. Especially if it impacts the world and it's cutting edge technology",
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
    id: 2,
    title: "Median Filter",
    description:
      "Image Median Filter for salt and pepper noise reduction",
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
    degree: "Bachelor of Science in Computer Science",
    institution: "Stanford University",
    duration: "2012 - 2016",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
  {
    id: 2,
    degree: "Master of Science in Software Engineering",
    institution: "MIT",
    duration: "2016 - 2018",
    description:
      "Focused on advanced software engineering concepts, system design, and AI technologies. Completed a thesis on machine learning applications in real-time data processing.",
  },
  {
    id: 3,
    degree: "Certified React Developer",
    institution: "Udacity Nanodegree",
    duration: "2019",
    description:
      "Earned a certification in advanced React.js development, including hooks, context API, and performance optimization.",
  },
];

export const TESTIMONIAL = {
  name: "Sarah Doe",
  title: "CEO, TechCorp",
  quote:
    "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: personImage,
};
