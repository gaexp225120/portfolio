import React, { useEffect, useState } from "react";

interface TitleProps {
  text: string;
  applyMarginY?: boolean;
}

const Title: React.FC<TitleProps> = ({ text, applyMarginY = true }) => {
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024); // Tailwind's md breakpoint is 768px
    };

    window.addEventListener("resize", handleResize);

    // Set initial state
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <p
      className={`font-oswald text-mainWhite text-[40px] sm:text-[50px] md:text-[52px] text-center ${
        isLgScreen
          ? applyMarginY
            ? "my-[45px] md:my-[60px]"
            : "mb-[45px] md:mb-[60px]"
          : "my-[45px] md:my-[60px]"
      } `}
    >
      {text}
    </p>
  );
};

export default Title;
