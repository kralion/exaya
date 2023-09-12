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
    <div className="w-80 space-y-14  rounded-xl border-1 bg-gradient-to-l from-orange-200 to-yellow-200 p-7 duration-200 ">
      <Image
        src={cardImage}
        className="rounded-full border-2 border-white shadow-lg"
        width={70}
        height={70}
        alt="card"
      />
      <p className="space-y-2 text-left">
        <h1 className="text-xl font-semibold">{cardTitle}</h1>
        <h4 className=" text-zinc-500">{cardDescription}</h4>
      </p>
    </div>
  );
}
