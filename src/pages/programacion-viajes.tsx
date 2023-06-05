import { Title } from '@mantine/core'
import React from 'react'
import { ProgramacionTable } from '~/components/ui/programacion-viajes-table'

function ProgramacionViajes() {
    return (
        <div>
            <Title order={4}>
                Programacion de Viajes
            </Title>
            <ProgramacionTable />
        </div>
    )
}

export default ProgramacionViajes