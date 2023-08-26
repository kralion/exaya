import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  width: "100%",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "5px",
};

const carouselCoves = [
  {
    src: "https://as2.ftcdn.net/v2/jpg/00/15/87/43/1000_F_15874302_bLzQdaHAna8f2B6U9AB9VfBjsZs73wXU.jpg",
  },
  {
    src: "https://as2.ftcdn.net/v2/jpg/00/79/37/93/1000_F_79379331_whtyjmrNLOopad3WLx2fcOBu9MWahqtT.jpg",
  },
  {
    src: "https://as2.ftcdn.net/v2/jpg/00/83/85/71/1000_F_83857168_WPpPQ43NSulwOfRAlxfspdUe8C3b1rnO.jpg",
  },
  {
    src: "https://as1.ftcdn.net/v2/jpg/00/26/35/76/1000_F_26357625_vY97e3M5M2XjyHHm4naUIb1AqnAsmFvY.jpg",
  },
  {
    src: "https://as1.ftcdn.net/v2/jpg/02/51/00/36/1000_F_251003601_0su7oPQkRf93HTByHOA7oFhC0ZdExXRo.jpg",
  },
];

export const BusConductorCarousel: React.FC = () => (
  <Carousel
    style={{
      width: "50%",
    }}
    autoplay
    autoplaySpeed={1500}
  >
    {carouselCoves.map((cover, index) => (
      <Image
        key={index}
        style={contentStyle}
        className="object-fit rounded-lg"
        src={cover.src}
        alt="Picture of the author"
        width={600}
        height={300}
      />
    ))}
  </Carousel>
);
