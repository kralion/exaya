import { Title } from '@mantine/core'
import React from 'react'
import { ProgramacionTable } from '~/components/ui/programacion-viajes-table'
import { ViajesForm } from '~/components/ui/programacion/viajes-form'

function ProgramacionViajes() {
    return (
        <div className='flex flex-col gap-7'>
            <Title order={4}>
                Programacion de Viajes
            </Title>
            <div className='flex flex-col gap-7'>
                <ViajesForm />
                <ProgramacionTable />
            </div>
        </div>
    )
}

export default ProgramacionViajes