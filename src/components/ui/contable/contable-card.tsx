import { Card, Skeleton, Space, Typography } from "antd";
import Image from "next/image";
type Card = {
  cardTitle: string;
  cardIcon: string;
  cardConcept: string;
  cardValue: number | undefined;
  isLoading: boolean;
};
const { Paragraph } = Typography;
export function ContableCard({
  cardTitle,
  cardIcon,
  cardConcept,
  cardValue,
  isLoading,
}: Card) {
  return (
    <Card
      title={cardTitle}
      className="w-full shadow-md duration-200 hover:shadow-lg dark:hover:bg-black/50"
    >
      {isLoading ? (
        <Skeleton.Button
          style={{
            width: 150,
            height: 25,
          }}
          active
        />
      ) : (
        <Typography.Title level={3}>
          {cardValue?.toLocaleString("es-PE", {
            style: "currency",
            currency: "PEN",
          })}
        </Typography.Title>
      )}
      <Card.Meta
        description={
          <Space className="mt-2 flex items-center gap-1">
            <Image src={cardIcon} alt="icon" width={20} height={20} />
            {cardConcept}
          </Space>
        }
        className="font-Roboto text-[13px] text-slate-400"
      />
    </Card>
  );
}
