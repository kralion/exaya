/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ExayaPreview from "@/assets/exaya-preview.png";
import Image from "next/image";
export const ContainerScroll = () => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    smooth: 0.5,
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
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
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
        <Image
          src={ExayaPreview}
          alt="banner"
          className="rounded-2xl drop-shadow-xl lg:-mt-28"
          data-aos="fade-up"
          width={1500}
          height={900}
          priority
        />
      </motion.div>
    </div>
  );
};
