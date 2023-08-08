import React from "react";
import { ExpandAltOutlined } from "@ant-design/icons";
import { Card, Skeleton } from "antd";
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
        className="cursor-pointer bg-cyan-100/20  backdrop-blur-3xl  hover:shadow-md  "
        type="inner"
        style={{ width: 300 }}
        bordered={false}
        title={
          <Title order={3} className="text-zinc-700">
            {cardTitle}{" "}
          </Title>
        }
        extra={<ExpandAltOutlined title="Ver más" />}
      >
        <Meta description={cardDescription} />
        {children}
      </Card>
    </a>
  );
};
