"use client";

import type { Variants } from "framer-motion";
import { motion, useAnimation } from "framer-motion";

const lidVariants: Variants = {
  normal: { y: 0 },
  animate: { y: -1.1 },
};

const cartVariants: Variants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.1,
    y: [0, -5, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      y: { repeat: 1, delay: 0.1, duration: 0.4 },
    },
  },
};

const springTransition = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

const LuggageIcon = () => {
  const controls = useAnimation();

  return (
    <div
      className="hover:bg-accent flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200"
      onMouseEnter={() => {
        void controls.start("hover");
      }}
      onMouseLeave={() => {
        void controls.start("normal");
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={cartVariants}
        animate={controls}
        transition={{ duration: 0.2 }}
      >
        <motion.path
          d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
          variants={lidVariants}
          animate={controls}
          transition={springTransition}
        />
      </motion.svg>
    </div>
  );
};

export { LuggageIcon };
