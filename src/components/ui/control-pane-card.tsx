import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton } from 'antd';
type Card = {
    cardTitle: string;
    coverSrc: string;
    children?: React.ReactNode;
    cardDescription: string;
}
const { Meta } = Card;


export const ControlPaneCard = ({ cardTitle, coverSrc, children, cardDescription }: Card) => {
    const [loading, setLoading] = React.useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (

        <Card
            loading={loading}
            style={{ width: 300 }}

            hoverable={true}
            cover={
                < img
                    alt="cover"
                    src={coverSrc}

                />
            }

        >
            <Skeleton loading={loading} avatar active>
                <Meta
                    title={cardTitle}
                    description={cardDescription}
                />
                {children}
            </Skeleton>

        </Card >
    )
}


