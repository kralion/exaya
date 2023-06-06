import { Title } from '@mantine/core'
import React from 'react'
import { ProgramacionTable } from '~/components/ui/programacion-viajes-table'

function ProgramacionViajes() {
    return (
        <div className='flex flex-col gap-7'>
            <Title order={4}>
                Programacion de Viajes
            </Title>
            <ProgramacionTable />
        </div>
    )
}

export default ProgramacionViajes