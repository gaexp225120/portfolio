import { TextGenerateEffect } from "./ui/TextGeneratorEffect";

const Introduction = () => {
  return (
    <div className=" pb-20 pt-36 flex flex-row ">
      <div className="flex flex-col justify-center">
        <div className="flex justify-start text-[40px]">
          <p className="bg-clip-text drop-shadow-2xl text-lightPurple headerText">
            Hello I&apos;m Rick. 👋
          </p>
        </div>
        <TextGenerateEffect
          className="text-center text-xl md:text-2xl lg:text-3xl"
          words="A SOFTWARE ENGINEER, FULL-STACK DEVELOP"
        />
      </div>
    </div>
  );
};

export default Introduction;
