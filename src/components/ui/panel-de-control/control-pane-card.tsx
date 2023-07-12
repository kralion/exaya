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
  const [loading, setLoading] = React.useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div>
      <a href={href}>
        <Card
          className="cursor-pointer backdrop-blur-3xl duration-200 ease-in-out hover:rotate-1 hover:scale-105  hover:shadow-md dark:bg-white/20 "
          type="inner"
          loading={loading}
          style={{ width: 300 }}
          bordered={false}
          title={
            <Title order={3} className="text-zinc-700">
              {cardTitle}{" "}
            </Title>
          }
          extra={<ExpandAltOutlined title="Ver más" />}
        >
          <Skeleton loading={loading} avatar active>
            <Meta description={cardDescription} />
            {children}
          </Skeleton>
        </Card>
      </a>
    </div>
  );
};
