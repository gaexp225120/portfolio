import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import Image from "next/image";

interface Experience {
  position: string;
  job: string[];
  date: string;
  url?: string;
}

const EXPERIENCE_LIST: Experience[] = [
  {
    position: "Frontend Engineer @CyberLink",
    job: ["Developed an online generative AI photo and audio editing web."],
    date: "2022/08~2024/07",
  },
  {
    position: "SW Engineer(Intern) @TTC",
    job: [
      "Developed a base station signal monitoring website to monitor the data sent from the base station.",
    ],
    date: "2022/08~2024/07",
  },
  {
    position: "SW Engineer(Intern) @TSMC",
    job: [
      "Use Tensorflow to build a defect detection model to determine the yield of wafer.",
      "Developed the internal staff schedule planning website.",
    ],
    date: "2022/08~2024/07",
  },
  {
    position: "SW Engineer(Intern) @I-planet",
    job: ["Python crawls down data, and data processing and analysis."],
    date: "2022/08~2024/07",
  },
  {
    position: "SW Engineer(Intern) @III",
    job: [
      "Created a face recognition model.",
      "Developed the internal staff schedule planning website.",
    ],
    date: "2022/08~2024/07",
    url: "https://web.iii.org.tw/",
  },
];

const Experience = () => {
  return (
    <div>
      <p className="text-mainWhite font-sans text-[40px] sm:text-[50px] md:text-[60px] text-center">
        Experience
      </p>
      {EXPERIENCE_LIST.map((experience, index) => (
        <div className="mx-auto w-full my-5" key={index}>
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-darkBlue ">
            <div>
              <div className="flex flex-row items-center ">
                <a
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-balance text-base md:text-xl lg:text-[22px] font-mono tracking-[-0.015em] text-mainWhite"
                >
                  {experience.position}
                </a>
                <Image
                  src="goto.svg"
                  width={15}
                  height={15}
                  alt="Picture of the author"
                  className="ml-2 "
                />
              </div>
              <p className="text-left text-balance text-base md:text-xl lg:text-[18px] font-mono tracking-[-0.015em] text-white">
                {experience.date}
              </p>
              <ul className="list-disc pl-5 mt-4 text-accordionTitle font-mono">
                {experience.job &&
                  Array.isArray(experience.job) &&
                  experience.job.map((line, idx) => <li key={idx}>{line}</li>)}
              </ul>
            </div>
          </BackgroundGradient>
        </div>
      ))}
    </div>
  );
};

export default Experience;
