import React from "react";
import Title from "./Title";

type TextBlockProps = {
  text: string;
};

const TextBlock: React.FC<TextBlockProps> = ({ text }) => (
  <p className="text-[16px] text-mainWhite mb-5 md:text-[19px]">{text}</p>
);

const TEXT = [
  `I have approximately 2 and a half years of Full-stack development
            experience and half a year of AI modeling experience. I started
            taking on cases with my classmates during my senior year of college.`,
  `I&apos;m outgoing and friendly, getting along and collaborating well
            with everyone. I love learning new technologies and exploring new
            things, and I am diligently working to enhance my skills and become
            a more proficient engineer.`,
  `When I&apos;m not on the computer, I usually work out at gym, go
            indoor rock climbing, play some video games, or hang out with my
            friends or family`,
];

const Introduction = () => {
  return (
    <div>
      <Title text="About Me" applyMarginY={false} />
      <div className="flex flex-row ">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-start ">
            {TEXT.map((text, index) => (
              <TextBlock key={index} text={text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
