import { Button } from 'antd'
import { FieldTimeOutlined } from "@ant-design/icons";
import React from 'react'
import "animate.css";

export function RoundedButton({ horaSalida }: { horaSalida: string }) {
    return (
        <Button value={horaSalida} icon={<FieldTimeOutlined />} shape="round" type='dashed' style={{ width: 100 }} className="items-center flex justify-between animate__animated animate__lightSpeedInRight">
            {horaSalida}
        </Button>
    )
}

