/* eslint-disable @typescript-eslint/no-unsafe-call */
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
        <Image
          src={ExayaPreview}
          alt="banner"
          className="mx-auto drop-shadow-xl "
          data-aos="fade-up"
          width={1100}
          height={800}
          priority
        />
      </motion.div>
    </div>
  );
};
