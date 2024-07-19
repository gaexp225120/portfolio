import React, { useEffect, useState } from "react";

interface TitleProps {
  text: string;
  applyMarginY?: boolean;
}

const Title: React.FC<TitleProps> = ({ text, applyMarginY = true }) => {
  const [isMdScreen, setIsMdScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768); // Tailwind's md breakpoint is 768px
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
      className={`font-oswald text-mainWhite text-[40px] sm:text-[50px] md:text-[60px] text-center ${
        applyMarginY ? "my-[45px] md:my-[60px]" : "mb-[45px] md:mb-[60px]"
      } `}
    >
      {text}
    </p>
  );
};

export default Title;
