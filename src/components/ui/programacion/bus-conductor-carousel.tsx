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
    src: "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    src: "https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    src: "https://images.pexels.com/photos/1386649/pexels-photo-1386649.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    src: "https://images.pexels.com/photos/1135379/pexels-photo-1135379.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      <div key={index}>
        <Image
          style={contentStyle}
          className="rounded-lg object-cover"
          src={cover.src}
          alt="Picture of the author"
          width={600}
          height={300}
        />
      </div>
    ))}
  </Carousel>
);
