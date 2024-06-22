import React from "react";
import { Card, Typography } from "antd";
import { RxOpenInNewWindow } from "react-icons/rx";
const { Title } = Typography;
import Link from "next/link";
type Card = {
  cardTitle: string;
  children?: React.ReactNode;
  cardDescription: string;
  href: string;
};
const { Meta } = Card;

export const ControlPaneCard = ({
  cardTitle,
  children,
  cardDescription,
  href,
}: Card) => {
  return (
    <Card
      className="h-fit cursor-pointer border-1 backdrop-blur-3xl  duration-200 hover:shadow-xl dark:border-zinc-800   dark:hover:bg-black/50 lg:h-auto"
      type="inner"
      bordered={false}
      title={
        <Link
          href={href}
          className="group flex items-center justify-between duration-100"
        >
          <Title level={4} className="pt-2 group-hover:opacity-70 ">
            {cardTitle}
          </Title>
          <RxOpenInNewWindow
            className="text-black group-hover:opacity-70 dark:text-white"
            title="Ver más"
          />
        </Link>
      }
    >
      <Meta description={cardDescription} />
      {children}
    </Card>
  );
};
