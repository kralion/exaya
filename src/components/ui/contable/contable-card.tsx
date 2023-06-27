import { Card, Typography } from 'antd'
import React from 'react'
import Image from 'next/image'
type Card = {
    cardTitle: string
    cardIcon: string,
    cardConcept: string
    cardValue: number
}
export function ContableCard({ cardTitle, cardIcon, cardConcept, cardValue }: Card) {
    return (
        <Card
            style={{ width: 260 }}
            className="animate__animated animate__flipInX  shadow-md"
        >
            <p className="text-sm text-slate-400 ">{cardTitle}</p>
            <p className="text-2xl font-bold pt-[10px] font-Roboto">S./ {cardValue}</p>

            <Typography.Text className="text-slate-400 font-Roboto pt-5 flex gap-1 items-center">

                <Image
                    src={cardIcon}
                    alt="icon"
                    width={20}
                    height={20}
                />
                {cardConcept}
            </Typography.Text>



        </Card>
    )
}

