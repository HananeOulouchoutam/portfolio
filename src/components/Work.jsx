import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  const workData = [
    {
      role: "Full Stack Developer",
      company: "HR Platform",
      duration: "01/2025 - 06/2025",
      description:
        "Built a microservices-based HR platform using Spring Boot and Angular. Developed HR modules (leave, CRM, billing, projects), integrated Keycloak authentication, API Gateway, service discovery, and an AI RAG-based search feature.",
      color: "purple",
    },
    {
      role: "Front-end Developer",
      company: "GuildsPro",
      duration: "01/2024 - 03/2024",
      description:
        "Implemented UI components using HTML, CSS, and JavaScript. Collaborated with the team to improve UI/UX and fix frontend bugs.",
      color: "pink",
    },
    {
      role: "Back-end Developer",
      company: "Educational Platform",
      duration: "07/2023 - 08/2023",
      description:
        "Developed backend services with Flask and REST APIs. Integrated an AI module using GPT-3.5 Turbo and ensured smooth integration with the existing system.",
      color: "blue",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="experience"
      className="py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Work <span className="text-[#b820e6]">Experience</span>
        </h2>

        <p className="text-gray-500 dark:text-gray-300 text-center max-w-2xl mx-auto mb-16">
          My professional journey so far
        </p>

        <div className="max-w-3xl mx-auto space-y-12">
          {workData.map((data, index) => (
            <div
              key={index}
              className="relative pl-12 border-l-2 border-[#b820e6]/30 dark:border-[#b820e6]/20 cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-0.6rem] top-0 w-5 h-5 rounded-full bg-[#b820e6] shadow-[0_0_10px_rgba(184,32,230,0.4)]"></div>

              {/* Card */}
              <div className="bg-white dark:bg-darkHover border border-[#b820e6]/10 dark:border-white/10 rounded-2xl p-6 shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px] dark:shadow-black/20 transition-colors duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {data.role}
                  </h3>

                  <span className="px-3 py-1 bg-[#b820e6]/10 dark:bg-[#b820e6]/20 text-[#b820e6] rounded-full text-xs md:text-sm">
                    {data.duration}
                  </span>
                </div>

                <p className="text-gray-500 dark:text-gray-300 mb-2">
                  {data.company}
                </p>

                <p className="text-gray-600 dark:text-gray-400">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
