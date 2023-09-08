import React from "react";
import { Card } from "antd";
import { RxOpenInNewWindow } from "react-icons/rx";
import { Title } from "@mantine/core";
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
    <Link href={href}>
      <Card
        className="min-h-[250px] cursor-pointer border-1   backdrop-blur-3xl   hover:bg-orange-100/20 hover:shadow-md"
        type="inner"
        bordered={false}
        title={<Title order={3}>{cardTitle}</Title>}
        extra={<RxOpenInNewWindow title="Ver más" />}
      >
        <Meta description={cardDescription} />
        {children}
      </Card>
    </Link>
  );
};
