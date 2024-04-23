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
    <Link href={href}>
      <Card
        className="min-h-[250px] cursor-pointer border-1 backdrop-blur-3xl duration-200  hover:bg-orange-100/20  hover:shadow-md   dark:border-zinc-800 dark:hover:bg-black/50"
        type="inner"
        bordered={false}
        title={
          <Title className="pt-2" level={4}>
            {cardTitle}
          </Title>
        }
        extra={<RxOpenInNewWindow title="Ver más" />}
      >
        <Meta description={cardDescription} />
        {children}
      </Card>
    </Link>
  );
};
