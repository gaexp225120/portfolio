"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const TechStack = () => {
  const TECH_TYPE: { [key: string]: string } = {
    FRONT_END: "Front End",
    BACK_END: "Back End",
    OTHERS: "Others",
    KEEPING: "Keeping Going",
  };

  const FRONT_END: string[] = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Material UI",
    "Styled-component",
    "Tailwind",
    "BootStrap",
  ];

  const BACK_END: string[] = [
    "Python",
    "Node Js",
    "Express Js",
    "MongoDB",
    "MySQL",
  ];
  const OTHERS: string[] = ["Git", "GitHub", "Gitlab", "Docker"];

  const KEEPING: string[] = ["TypeScript", "Next Js", "Golang"];

  interface StackCardProps {
    type: string;
    stack: string[];
  }

  const StackCard: React.FC<StackCardProps> = ({ type, stack }) => {
    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="25"
            className="text-xl font-bold text-neutral-600 cursor-default"
          >
            <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:outline-none focus:ring-blue-300 ">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                {type}
              </span>
            </div>
          </CardItem>
          <div className="flex mt-5 flex-wrap gap-x-2 gap-y-1">
            {stack.map((item: string, index: number) => (
              <CardItem
                key={index} // Ensure each item has a unique key
                translateZ="25"
                as="button"
                className="py-2 rounded-xl text-white text-xs font-bold cursor-default"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="div"
                  className=" bg-white text-black flex items-center"
                >
                  <span>{item}</span>
                </HoverBorderGradient>
              </CardItem>
            ))}
          </div>
        </CardBody>
      </CardContainer>
    );
  };

  return (
    <div className="flex flex-col ">
      <StackCard type={TECH_TYPE.FRONT_END} stack={FRONT_END} />
      <StackCard type={TECH_TYPE.BACK_END} stack={BACK_END} />
      <StackCard type={TECH_TYPE.OTHERS} stack={OTHERS} />
      <StackCard type={TECH_TYPE.KEEPING} stack={KEEPING} />
    </div>
  );
};

export default TechStack;
