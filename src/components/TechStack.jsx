import React from "react"
import { motion } from "motion/react";

// Add tools and logos from here: https://devicon.dev/
const tools = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "Neos CMS", logo: "https://logosandtypes.com/wp-content/uploads/2023/04/neos-cms.svg" },
  { name: "TYPO3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typo3/typo3-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "MariaDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },


];

const ScrollingRow = ({ speed = 20, reverse = false, offset = 0 }) => (
  <motion.div
    className="flex gap-6 py-4"
    initial={{ x: offset }} 
    animate={{
      x: reverse ? ['0%', '-100%'] : ['-100%', '0%'], 
    }}
    transition={{
      x: {
        duration: speed,
        ease: 'linear',
        repeat: Infinity,
      },
    }}
  >
    {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
      <div
        key={`${tool.name}-${index}`}
        className="group relative sm:w-24 w-14 h-14 p-4 bg-base-200 backdrop-blur-sm shadow-lg rounded-lg flex justify-center items-center flex-shrink-0 border border-white/10 select-none"
      >
        <img
          src={tool.logo}
          alt={tool.name}
          className="w-10 h-10"
        />
        <div className="absolute inset-0 bg-black/80 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:flex hidden">
          <div className="text-white text-xs text-center px-2">
            <div className="font-semibold mb-1">{tool.name}</div>
          </div>
        </div>
      </div>
    ))}
  </motion.div>
);


export default function TechStack() {
  return (
    <div className="w-full overflow-hidden bg-transparent py-10">
      
      <div className="relative">
        {/* First row - slower */}
        <div className="relative">
          <ScrollingRow speed={30} reverse={false} offset={0} />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-base-100 via-base-100 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-base-100 via-base-100 to-transparent z-10" />
        </div>

        {/* Second row - faster */}
        <div className="relative">
          <ScrollingRow speed={15} reverse={true} offset={0} />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-base-100 via-base-100 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-base-100 via-base-100 to-transparent z-10" />
        </div>
      </div>
    </div>
  );
}