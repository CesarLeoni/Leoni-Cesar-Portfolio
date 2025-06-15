import project1 from "/assets/project1.webp";
import project2 from "/assets/project2.webp";
import project3 from "/assets/project3.webp";
import project4 from "/assets/project4.webp";
import project5 from "/assets/project5.webp";
import project6 from "/assets/site_preview.webp";
import project7 from "/assets/project7.webp";
import project8 from "/assets/project8.webp";
import project9 from "/assets/project9.webp";



import linkedin8 from "/assets/linkedin8.webp";
import linkedin7 from "/assets/linkedin7.webp";
import linkedin6 from "/assets/site_preview.webp";
import linkedin5 from "/assets/linkedin5.webp";
import linkedin4 from "/assets/linkedin4.webp";
import linkedin3 from "/assets/linkedin3.webp";
import linkedin2 from "/assets/linkedin2.webp";
import linkedin1 from "/assets/linkedin1.webp";
import linkedin9 from "/assets/linkedin9.webp";
import linkedin10 from "/assets/linkedin10.webp";
import linkedin11 from "/assets/linkedin11.webp";


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
  { label: "Contact", href: "#panel" },
  { label: "LinkedIn Posts", href: "#linkedin" }, // New section
];


const birthDate = new Date('2002-10-29');
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const monthDifference = today.getMonth() - birthDate.getMonth();
const dayDifference = today.getDate() - birthDate.getDate();

if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
  age--; // If the birthday hasn't occurred yet this year
}

export const PROFILE = {
  name: "Leoni Cesar",
  role: "AI Passionate Student",
  subheading: `Striving for growth and innovation over the past ${age} years, driven by curiosity and eager to tackle challenges in cutting-edge technology with meaningful impact.`,
  quotes:["Ad augusta per angusta","Ad aspera per astra","Ex ungue leonem","Carpe diem"],
};

export const PROJECTS = [
    {
    id: 9,
    title: "ALMA - ongoing",
    description:
      "Conversational intelligent agent for psychological support based on user interactions analysis. Includes voice emotion detection and natural speech-to-speech experience. Bachelor's Thesis. Click here to try it yourself!",
    techStack: ["Generative AI","OpenAI API","Python","Prompt Engineering", "Speech-to-Text","Text-to-Speech"],
    imgSrc: project9,
    link: "https://t.me/PsychoTest1Cesar_bot",
    skills: "Tech Skills",
  },
   {
    id: 7,
    title: "TranscriptAI",
    description:
      "Transcription Web APP for audio files. Used Whisper API to transcribe the audio and a simple streamlit frontend.",
    techStack: ["Python", "Streamlit", "OpenAI API","Generative AI"],
    imgSrc: project7,
    link: "https://transcriptai25.streamlit.app/",
    skills: "Tech Skills",
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
    // link: "https://www.gds.ro/Educatie/2020-04-01/elevi-din-craiova-fac-viziere-pentru-cadrele-medicale/"
    // link: "https://www.cancan.ro/ei-sunt-elevii-voluntari-care-ii-ajuta-pe-medici-in-vremuri-tulburi-putem-20173702"
    skills: "Skills",
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

    {
    id: 8,
    title: "AImunca.ro",
    description:
      "Workforce aquisition start-up for the blue-collar sector. With AI system that screens candidates by phone and ranks them based on their answers.",
    techStack: ["Project Management","Marketing","Teamwork","Python", "Google STT","Twilio", "OpenAI API"],
    imgSrc: project8,
    link: "https://www.linkedin.com/company/aimunca-ro/about/",
    skills: "Product and Tech Skills",
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
    id: 1,
    title: "Soft Hoarders Robotics Team",
    description:
      "Highscool robotics team participating in many national and international competitions that I was the leader of.",
    techStack: ["Assembling", "3D Printing", "Java","Creo PTC","Fundraising","Leadership"],
    imgSrc: project1,
    link: "https://www.soft-hoarders.com",
    skills: "Skills",
  },


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
    yearRange: "May 2025 - Present",
    role: "Community Manager",
    company: "Leaders Foundation",
    description:
      "Organising educational programs for highschool students, providing help in communicating with the students, teachers, parents and the project manager.",
    techStack: ["Volunteering", "Google Suite", "Communication","Collaboration"],
  },
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
      "Studied courses like: Object Oriented Programming, Internet Porgramming Technologies and Neural Netwoks and Fuzzy Logic. Average mark: 9.45",
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
    id: 4,
    degree: "Leadership Certificate",
    institution: "LEADERS Foundation",
    duration: "2025",
    link: "https://drive.google.com/file/d/1sPK8cT2vKGMfq_nJWrsM8kV0u3TkinPm/view?usp=drive_link",
    description: "Leaders Explore programme · Problem Solving · Personal efficiency · Taking initiative · Teamwork · Communication",
  },
  {
    id: 3,
    degree: "Java Development",
    institution: "Digital Stack - Google",
    duration: "2023",
    link: "https://drive.google.com/file/d/1Nd3pkfEo2WhLOqg7dmBN2DOVWIGo3pg1/view?usp=sharing",
    // "https://learn.digitalstack.ro/mod/linkedincert/verify_certificate.php?code=NsriNuyLmS"
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

// Manually provide an array of post links (this could be in your index.jsx)
export const LINKEDIN_POSTS = [
  {
    link:"https://www.linkedin.com/posts/cesarleoni29_devtalksromania-was-a-blast-won-an-incredible-activity-7337505952813699073-qYsr",
    image:linkedin11,
    text:"DevTalksRomania was a blast! Enjoyed a number of great presentations, especially on AI, product management and Quantum computing - my favourite fields right now.",
    date:"March 2025"
  },
  {
    link:"https://www.linkedin.com/posts/cesarleoni29_leadersexplore-leadershipdevelopment-livewithintention-activity-7323035982595805184-ohIM",
    image:linkedin10,
    text:"Grateful. Energized. Changed. That’s how I’d sum up my journey with the Leaders Explore program by Fundația LEADERS and Sievo.",
    date:"April 2025"
  },
  {
    link:"https://www.linkedin.com/posts/cesarleoni29_innovationlabs2025-boostday-aimunca-activity-7321176013449621504-QGsk",
    image:linkedin9,
    text:"Pitching AImunca.ro to a panel of seasoned mentors and investors was both exhilarating and enlightening. An experience like no other at Innovation Labs Boost Day 2025! 🐷🚀",
    date:"April 2025"
  },
  {
    link:"https://www.linkedin.com/posts/cesarleoni29_this-weekend-i-embarked-on-an-incredible-activity-7304562102734655488-Pvlx",
    image:linkedin8,
    text:"Innovation Labs Romania 2025 and the qualification for their pre-seed mentorship started an incredible journey with my 'co-founders' Vlad Ciolacu and Andreas Bașchir!",
    date:"March 2025"
  },
  {
    link:"https://www.linkedin.com/posts/cesarleoni29_another-amazing-experience-at-stagii-pe-bune-activity-7301719238489088000-9tTh",
    image:linkedin7,
    text:"Another amazing experience at Stagii pe Bune, a job fair I've enjoyed attending for three years now - yet it never ceases to surprise me! 🚀",
    date:"March 2025"
  },
  {
    link:"https://www.linkedin.com/posts/cesarleoni29_leoni-cesar-online-portfolio-activity-7282659546043441153--iAG",
    image:linkedin6,
    text:"2025 kicks off in style! 🤩 I'm thrilled to announce the launch of my first online portfolio, a project close to my heart that I've been eager to bring to life for quite some time.",
    date:"January 2025"
  },

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
