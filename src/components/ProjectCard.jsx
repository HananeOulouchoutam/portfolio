import React from "react";

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className="bg-white dark:bg-darkHover shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] dark:shadow-black/20 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer border border-[#b820e6]/10 dark:border-white/10">
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="text-gray-500 dark:text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#b820e6]/10 dark:bg-[#b820e6]/20 text-[#b820e6] rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href={demo || undefined}
            className={`flex-1 text-center px-3 py-1.5 rounded-lg font-medium transition duration-300 ${
              demo
                ? "bg-[#b820e6] text-white hover:bg-[#9e1fd0]"
                : "bg-gray-400 text-white cursor-not-allowed pointer-events-none"
            }`}
          >
            View Demo
          </a>

          <a
            href={code || undefined}
            className={`flex-1 text-center px-3 py-1.5 rounded-lg font-medium transition duration-300 ${
              code
                ? "border border-[#b820e6] text-[#b820e6] hover:bg-[#b820e6]/10 dark:hover:bg-[#b820e6]/20"
                : "border border-gray-400 text-gray-400 cursor-not-allowed pointer-events-none"
            }`}
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
