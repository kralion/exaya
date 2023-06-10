import { columns, dataSource } from '~/data/encomiendas';
import React from 'react'
import { Title } from '@mantine/core';
import { Table } from 'antd';

export function EncomiendasTable() {
    return (
        <div className='space-y-3.5'>
            <Title order={4} className='mt-7'>
                Historial de Encomiendas
            </Title>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}

