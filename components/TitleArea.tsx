import { TextGenerateEffect } from "./ui/TextGeneratorEffect";

const TitleArea = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-center">
        <TextGenerateEffect
          className="text-[36px] text-lightPurple md:text-[40px] lg:text-[48px] max-w-md leading-normal "
          textColor={["text-mainWhite", "text-lightPurple"]}
          words="Hello I'm XX."
        />
        <TextGenerateEffect
          className="text-lg md:text-xl lg:text-2xl max-w-md leading-normal"
          textColor={["text-mainWhite", "text-pureGrey"]}
          words="Full-Stack Engineer"
        />
        <TextGenerateEffect
          className="text-lg md:text-xl lg:text-2xl max-w-md leading-normal"
          textColor={["text-mainWhite", "text-lightPurple"]}
          words="Full-stack engineer who writes clean, reusable and elegant code"
        />
      </div>
    </div>
  );
};

export default TitleArea;
