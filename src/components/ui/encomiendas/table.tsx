import { columns } from './columns';
import React from 'react'
import { Title } from '@mantine/core';
import { Table } from 'antd';
import { useEncomiendasContext } from '~/context/EncomiendasContext';


export function EncomiendasTable() {
    const { encomiendas } = useEncomiendasContext();

    return (
        <div className='space-y-3.5'>
            <Title order={4} className='mt-7'>
                Historial de Encomiendas
            </Title>
            <Table dataSource={encomiendas} columns={columns} />
        </div>
    )
}

