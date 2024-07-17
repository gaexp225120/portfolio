import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EXPERIENCE_LIST = [
  {
    position: "Frontend Engineer @ CyberLink",
    job: "Developed an online generative AI photo and audio editing web.",
    date: "2022/08~2024/07",
  },
  {
    position: "SW Engineer(Intern) @ TTC",
    job: [
      "Use Tensorflow to build a defect detection model to determine the yield of wafer.",
      "Developed the internal staff schedule planning website.",
    ],
    date: "2022/08~2024/07",
  },
  {
    position: "SW Engineer(Intern) @ TTC",
    job: "Developing an online generative AI photo and audio editing web.",
    date: "2022/08~2024/07",
  },
  {
    position: "SW Engineer(Intern) @ I-planet",
    job: "Developing an online generative AI photo and audio editing web.",
    date: "2022/08~2024/07",
  },
  {
    position: "SW Engineer(Intern) @ TTC",
    job: "Developing an online generative AI photo and audio editing web.",
    date: "2022/08~2024/07",
  },
];

const Experience = () => {
  return (
    <div>
      {EXPERIENCE_LIST.map((experience, index) => (
        <div key={index}>
          <Accordion
            type="single"
            collapsible
            className="bg-accordion-gradient bg-origin-border text-accordionTitle border-transparent border-4 rounded-lg my-4 px-5 py-1.5"
          >
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>
                <div className="flex w-full justify-between">
                  <div>{experience.position}</div>
                  <div className="mr-2">{experience.date}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-accordionContent">
                <ol type="1">
                  {experience.job &&
                    Array.isArray(experience.job) &&
                    experience.job.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Experience;
