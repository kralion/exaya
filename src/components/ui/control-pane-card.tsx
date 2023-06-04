import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Space } from 'antd';
import { Title } from '@mantine/core';
type Card = {
    cardTitle: string;
    children?: React.ReactNode;
    cardDescription: string;
}
const { Meta } = Card;


export const ControlPaneCard = ({ cardTitle, children, cardDescription }: Card) => {
    const [loading, setLoading] = React.useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <div >

            <Card
                className='backdrop-blur-3xl duration-200 hover:shadow-md hover:scale-105 hover:rotate-1  ease-in-out dark:bg-white/20 '
                type='inner'
                loading={loading}

                style={{ width: 300 }}
                bordered={false}
                title={
                    <Title order={3} className='text-zinc-700' >{cardTitle} </ Title>
                }
                extra={<SettingOutlined title='ver' />}

            >


                <Skeleton loading={loading} avatar active>
                    <Meta

                        description={cardDescription}
                    />
                    {children}
                </Skeleton>

            </Card >
        </div>
    )
}


