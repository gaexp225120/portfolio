import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGeneratorEffect";

const Hero = () => {
  return (
    <div className=" pb-20 pt-36 ">
      <div>
        {/* <Spotlight
          className=" -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        /> */}
      </div>
      <div className="flex justify-center text-[40px]">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Gradients X Anima tions
        </p>
      </div>

      <TextGenerateEffect
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
        words="Hello there Hello there Hello there Hello there Hello there Hello there"
      />
    </div>
  );
};

export default Hero;
