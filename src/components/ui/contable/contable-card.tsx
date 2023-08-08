import { Card, Typography } from "antd";
import React from "react";
import Image from "next/image";
type Card = {
  cardTitle: string;
  cardIcon: string;
  cardConcept: string;
  cardValue: number;
};
export function ContableCard({
  cardTitle,
  cardIcon,
  cardConcept,
  cardValue,
}: Card) {
  return (
    <Card
      style={{ width: 260 }}
      className="animate__animated animate__flipInX  shadow-md duration-200 hover:shadow-lg"
    >
      <p className="text-sm text-slate-400 ">{cardTitle}</p>
      <p className="font-Roboto pt-[10px] text-2xl font-bold">
        S./ {cardValue}
      </p>

      <Typography.Text className="font-Roboto flex items-center gap-1 pt-5 text-slate-400">
        <Image src={cardIcon} alt="icon" width={20} height={20} />
        {cardConcept}
      </Typography.Text>
    </Card>
  );
}