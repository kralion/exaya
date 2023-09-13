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
      className="w-80 space-y-14 rounded-xl border-2 bg-yellow-200 p-7 shadow-md  duration-300  hover:scale-105 hover:shadow-xl "
    >
      <Image
        src={cardImage}
        className="rounded-full border-4 border-white shadow-lg"
        width={70}
        height={70}
        alt="card"
      />
      <div className="space-y-2 text-left">
        <h1 className="text-xl font-semibold">{cardTitle}</h1>
        <h4 className=" text-zinc-700">{cardDescription}</h4>
      </div>
    </div>
  );
}
