import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import Image from "next/image";
import Title from "./Title";
interface Experience {
  position: string;
  job: string[];
  date: string;
  url: string;
  techStack?: string[];
}

const EXPERIENCE_LIST: Experience[] = [
  {
    position: "Frontend Engineer @CyberLink",
    job: ["Developed an online generative AI photo and audio editing web."],
    date: "2022/08~2024/07",
    url: "https://www.cyberlink.com/index_en_US.html",
    techStack: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Material UI",
      "Figma",
      "Google Analytics",
    ],
  },
  {
    position: "SW Engineer(Intern) @TTC",
    job: [
      "Developed a base station signal monitoring website to monitor the data sent from the base station.",
    ],
    date: "2022/08~2024/07",
    url: "https://www.ttc.org.tw/Eng/",
    techStack: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "HTML",
      "CSS",
      "Docker",
    ],
  },
  {
    position: "SW Engineer(Intern) @TSMC",
    job: [
      "Use Tensorflow to build a defect detection model to determine the yield of wafer.",
      "Developed the internal staff schedule planning website.",
    ],
    date: "2022/08~2024/07",
    url: "https://www.tsmc.com/english",
    techStack: ["Python", "TensorFlow", "Docker"],
  },
  {
    position: "SW Engineer(Intern) @I-planet",
    job: ["Python crawls down data, and data processing and analysis."],
    date: "2022/08~2024/07",
    url: "https://i-planet.com.tw/",
    techStack: ["Python"],
  },
  {
    position: "SW Engineer(Intern) @III",
    job: [
      "Created a face recognition model.",
      "Developed the internal staff schedule planning website.",
    ],
    date: "2022/08~2024/07",
    url: "https://web.iii.org.tw/",
    techStack: ["Python"],
  },
];

const Experience = () => {
  const handleClickLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <Title text="Experience" />
      {EXPERIENCE_LIST.map((experience, index) => (
        <div className="mx-auto w-full my-8" key={index}>
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-darkBlue ">
            <div>
              <button
                className="flex flex-row items-center"
                onClick={() => handleClickLink(experience.url || "")}
              >
                <p className="text-left text-balance text-base md:text-xl lg:text-[22px] font-mono tracking-[-0.015em] text-mainWhite">
                  {experience.position}
                </p>
                <Image
                  src="link.svg"
                  width={25}
                  height={25}
                  alt="link"
                  className="ml-2 "
                />
              </button>
              <p className="text-left text-balance text-base md:text-xl lg:text-[18px] font-mono tracking-[-0.015em] text-white">
                {experience.date}
              </p>
              <ul className="list-disc pl-5 mt-4 text-accordionTitle font-mono ">
                {experience.job &&
                  Array.isArray(experience.job) &&
                  experience.job.map((line, idx) => <li key={idx}>{line}</li>)}
              </ul>
            </div>
          </BackgroundGradient>
        </div>
      ))}
      <button
        className="flex flex-row w-full justify-center mt-[48px] animate-bounce"
        onClick={() => handleClickLink("/resume/Resume.pdf" || "")}
      >
        <p className="text-left text-balance text-base md:text-xl lg:text-[30px] font-mono tracking-[-0.015em] text-mainWhite">
          View My full Résumé
        </p>
        <Image
          src="link.svg"
          width={25}
          height={25}
          alt="link"
          className="ml-2 "
        />
      </button>
    </div>
  );
};

export default Experience;
