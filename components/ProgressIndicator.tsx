// ProgressIndicator.tsx
"use client"; // Ensure this is included at the top if using Next.js

import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div className="fixed top-4 left-4 z-50">
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        className="progress-wheel"
      >
        <circle cx="50" cy="50" r="45" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          pathLength="1"
          className="progress"
          style={{ strokeDashoffset }}
        />
      </svg>
    </motion.div>
  );
};

export default ProgressIndicator;
