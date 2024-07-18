import React from "react";

interface TitleProps {
  text: string;
  applyMarginY?: boolean;
}

const Title: React.FC<TitleProps> = ({ text, applyMarginY = true }) => {
  return (
    <p
      className={`font-oswald text-mainWhite text-[40px] sm:text-[50px] md:text-[60px] text-center ${
        applyMarginY ? "my-[45px] md:my-[60px]" : "mb-[45px] md:mb-[60px]"
      } `}
    >
      {text}
    </p>
  );
};

export default Title;
