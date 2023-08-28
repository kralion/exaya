import React from "react";
import { ExpandAltOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Title } from "@mantine/core";
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
    <a href={href}>
      <Card
        className="cursor-pointe min-h-[250px] border-1   backdrop-blur-3xl hover:border-cyan-500 hover:bg-cyan-50/20 hover:shadow-md"
        type="inner"
        bordered={false}
        title={<Title order={3}>{cardTitle}</Title>}
        extra={<ExpandAltOutlined title="Ver más" />}
      >
        <Meta description={cardDescription} />
        {children}
      </Card>
    </a>
  );
};
