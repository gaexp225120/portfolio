import { motion } from "framer-motion";
import React from "react";

const Project = () => {
  return (
    <motion.div
      whileHover={{
        opacity: 0,
      }}
    >
      Hover over me and I&apos;ll disappear!
    </motion.div>
  );
};

export default Project;
