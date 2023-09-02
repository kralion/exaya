import React from "react";
import { ExpandAltOutlined } from "@ant-design/icons";
import { Card } from "antd";
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
        className="min-h-[250px] cursor-pointer border-1   backdrop-blur-3xl   hover:bg-blue-100/20 hover:shadow-md"
        type="inner"
        bordered={false}
        title={<Title order={3}>{cardTitle}</Title>}
        extra={<ExpandAltOutlined title="Ver más" />}
      >
        <Meta description={cardDescription} />
        {children}
      </Card>
    </Link>
  );
};
