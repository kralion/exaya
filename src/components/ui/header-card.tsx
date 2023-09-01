import React from "react";
import Image from "next/image";
import { Tag } from "antd";
import { Title } from "@mantine/core";
type Props = {
  title: string;
  icon: string;
};

export default function HeaderCard({ title, icon }: Props) {
  return (
    <div className=" flex w-64 cursor-pointer  items-center justify-between rounded-lg  bg-zinc-100/70  px-2 duration-500 hover:bg-zinc-200 hover:bg-gradient-to-r hover:shadow-sm  ">
      <div className="flex items-center gap-2">
        <Image
          className="animate__animated animate__flip flex     cursor-pointer items-center justify-center   "
          src={icon}
          width={30}
          height={30}
          alt="logo"
        />
        <Title order={2} size={12} className="flex justify-end ">
          {title}
        </Title>
      </div>

      <div className="flex">
        <Tag color="green">In Progress</Tag>

        <Tag color="blue">Done</Tag>
      </div>
    </div>
  );
}
