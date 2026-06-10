import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaStripe } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import ProjectCard from "./ProjectCard";
import { useState } from "react";

export default function Work() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const projects = [
    {
      title: "Food Delivery Website",
      description:
        "A full stack food ordering platform with online payments and cart management.",
      image: "./assets/project3.avif",
      tech: ["MongoDB", "Express.js", "ReactJs", "Node.js", "Stripe"],
      icons: [FaReact, FaNodeJs, FaDatabase, FaCreditCard],
      demo: "",
      code: "https://github.com/HananeOulouchoutam/Food-Del",
    },
    {
      title: "AI Powered Blog App",
      description:
        "A full stack blog app with AI-generated content and image management.",
      image: "./assets/project2.avif",
      tech: [
        "MongoDB",
        "Express.js",
        "ReactJs",
        "Node.js",
        "Google Gemini",
        "ImageKit",
      ],
      icons: [FaReact, FaNodeJs, FaDatabase, FaCloud],
      demo: "https://blogly-liard.vercel.app/",
      code: "https://github.com/HananeOulouchoutam/Blogly",
    },
    {
      title: "Real Estate Website",
      description:
        "A modern real estate platform for buying and renting properties.",
      image: "./assets/project1.avif",
      tech: ["ReactJs", "Tailwind CSS"],
      icons: [FaReact, FaCss3Alt],
      demo: "https://velhouse.vercel.app/",
      code: "https://github.com/HananeOulouchoutam/velhouse",
    },
    {
      title: "User Management System",
      description:
        "A full-stack MENS stack application for managing users with complete CRUD operations.",
      image: "./assets/project4.avif",
      tech: ["MongoDB", "Express.js", "Node.js", "Tailwind CSS", "CRUD"],
      icons: [FaUsers, FaNodeJs, FaDatabase, FaLock],
      demo: "https://user-management-eight-ivory.vercel.app/",
      code: "https://github.com/HananeOulouchoutam/user-management",
    },
  ];
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        {" "}
        Welcome to my portfolio! Here you can explore my latest projects built
        with the MERN stack, showcasing my skills in full-stack web development,
        clean design, and responsive user experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-8 dark:text-black">
        {/* Project Card */}
        {projects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="flex justify-center gap-4 my-20">
        {visibleProjects < projects.length ? (
          <button
            onClick={() => setVisibleProjects(visibleProjects + 3)}
            className="flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 duration-300 dark:text-white"
          >
            Show more
            <img
              src="./assets/right-arrow-bold.png"
              alt=""
              className="w-4 dark:hidden"
            />
            <img
              src="./assets/right-arrow-bold-dark.png"
              alt=""
              className="w-4 hidden dark:block"
            />
          </button>
        ) : (
          <button
            onClick={() => setVisibleProjects(3)}
            className="flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 duration-300 dark:text-white"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
}
