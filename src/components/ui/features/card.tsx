import React from "react";
import Image from "next/image";
type CardProps = {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
};
export default function Card({
  cardTitle,
  cardDescription,
  cardImage,
}: CardProps) {
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="500"
      className="w-80  space-y-14 rounded-xl border-2 bg-gradient-to-r from-orange-300 to-yellow-200 p-7   shadow-md duration-300  hover:scale-105  hover:shadow-xl  "
    >
      <Image
        src={cardImage}
        className="ml-24 rounded-full border-4 border-white shadow-lg lg:ml-0"
        width={70}
        height={70}
        alt="card"
      />
      <div className="space-y-2 lg:text-left">
        <h1 className="font-semibold lg:text-xl">{cardTitle}</h1>
        <h4 className="lg:text-md text-sm text-zinc-700">{cardDescription}</h4>
      </div>
    </div>
  );
}
