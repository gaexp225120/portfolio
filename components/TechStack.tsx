"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Image from "next/image";
import Title from "./Title";
import { useInView } from "react-intersection-observer";

const TECH_TYPE: { [key: string]: string } = {
  FRONT_END: "Front End",
  BACK_END: "Back End",
  OTHERS: "Others",
  LEARNING: "Learning",
};
const FRONT_END: string[] = [
  "react",
  "js",
  "html5",
  "css3",
  "material-ui",
  "tailwind",
  "bootstrap",
];
const BACK_END: string[] = [
  "python",
  "flask",
  "node-js",
  "express-js",
  "mongodb",
  "mysql",
];
const OTHERS: string[] = ["git", "github", "gitlab", "docker"];
const LEARNING: string[] = ["ts", "next-js", "go"];

interface StackCardProps {
  type: string;
  stack: string[];
}

const StackCard: React.FC<StackCardProps> = ({ type, stack }) => {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-transparent relative w-full h-auto rounded-[20px] ">
        <CardItem
          translateZ="25"
          className="text-xl font-bold text-neutral-600 cursor-default"
        >
          <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-pureBlack rounded-lg group bg-gradient-to-br from-purple-300 to-blue-200">
            <span className="text-[19px]  relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md">
              {type}
            </span>
          </div>
        </CardItem>
        <div className="flex flex-wrap justify-center mt-5 gap-x-2 gap-y-1">
          {stack.map((item: string, index: number) => (
            <CardItem
              key={index} // Ensure each item has a unique key
              translateZ="25"
              as="button"
              className="p-2 rounded-xl text-white text-xs font-bold cursor-default"
            >
              <div className="flex items-center px-[10px]">
                <Image src={`${item}.svg`} alt={item} width={60} height={60} />
              </div>
            </CardItem>
          ))}
        </div>
      </CardBody>
    </CardContainer>
  );
};

const TechStack = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 10% of the element is in view
  });

  return (
    <div className="overflow-hidden">
      <div
        ref={ref}
        className={`flex flex-col ${inView ? "animate__animated animate__lightSpeedInRight" : ""}`}
      >
        <Title text="My Toolkit" />
        <StackCard type={TECH_TYPE.FRONT_END} stack={FRONT_END} />
        <StackCard type={TECH_TYPE.BACK_END} stack={BACK_END} />
        <StackCard type={TECH_TYPE.OTHERS} stack={OTHERS} />
        <StackCard type={TECH_TYPE.LEARNING} stack={LEARNING} />
      </div>
    </div>
  );
};

export default TechStack;
