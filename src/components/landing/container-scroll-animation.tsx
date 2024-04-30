"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ExayaHeroLight from "@/assets/images/exaya-light.png";
import ExayaHeroDark from "@/assets/images/exaya-dark.png";
export const ContainerScroll = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 1] : [1.05, 1];
  };
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

  return (
    <div
      style={{
        perspective: "1000px",
      }}
      ref={containerRef}
    >
      <motion.div
        style={{
          rotateX: rotate,
          scale,
        }}
      >
        <img
          src={ExayaHeroLight.src}
          alt="banner"
          className="mx-auto"
          data-aos="fade-up"
        />
        <div className="dark:absolute dark:inset-0">
          <img
            src={ExayaHeroDark.src}
            alt="banner"
            className="mx-auto hidden  dark:block "
            data-aos="fade-up"
          />
        </div>
      </motion.div>
    </div>
  );
};
