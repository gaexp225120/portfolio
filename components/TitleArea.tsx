import { TextGenerateEffect } from "./ui/TextGeneratorEffect";

const TitleArea = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-center">
        <TextGenerateEffect
          className="text-[36px] text-lightPurple md:text-[40px] lg:text-[48px] max-w-md leading-normal "
          textColor={["text-mainWhite", "text-lightPurple"]}
          words="Hello I'm Rick."
        />
        <TextGenerateEffect
          className="text-lg md:text-xl lg:text-2xl max-w-md leading-normal"
          textColor={["text-mainWhite", "text-pureGrey"]}
          words="Software Engineer"
        />
        <TextGenerateEffect
          className="text-lg md:text-xl lg:text-[20px] max-w-md leading-normal"
          textColor={["text-mainWhite", "text-lightPurple"]}
          words="A Software developer with a passion for creating application with excellent design and user experience🔥！"
        />
      </div>
    </div>
  );
};

export default TitleArea;
