import React from "react";
import Image from "next/image";
import { Tag } from "antd";
import { Title } from "@mantine/core";
type Props = {
  title: string;
  icon: string;
};

const tagItems = [
  {
    title: "In Progress",
    color: "blue",
  },
  {
    title: "Completed",
    color: "green",
  },
];

export default function HeaderCard({ title, icon }: Props) {
  return (
    <div className=" flex w-64 cursor-pointer items-center  justify-between gap-5  rounded-lg     bg-zinc-200 p-2  duration-500 ">
      <div className="flex items-center ">
        <Image
          className="animate__animated animate__flip flex     cursor-pointer items-center justify-center   "
          src={icon}
          width={30}
          height={30}
          alt="asset"
        />
        <Title order={2} size={12} className="flex justify-end ">
          {title}
        </Title>
      </div>

      <div className="flex">
        {tagItems.map((item, index) => (
          <Tag
            key={index}
            className="animate__animated animate__fadeIn text-500 flex cursor-pointer items-center justify-center rounded-full border-none bg-blue-200 hover:bg-blue-500  hover:text-white  "
          >
            {item.title}
          </Tag>
        ))}
      </div>
    </div>
  );
}
