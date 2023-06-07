import type { ColumnsType } from 'antd/lib/table';
import type { PasajesDataType } from '~/interfaces/interfaces';
import { Table, Tag, Space, Button } from 'antd';
import { EyeOutlined } from "@ant-design/icons"
import dataDiaria from '~/data/viajes-diarios.json';
import { dataSource } from '~/data/viajes-diarios';
const columns: ColumnsType<PasajesDataType> = [
    {
        title: 'Origen',
        dataIndex: 'origen',
        key: 'origen',

    },
    {
        title: 'Destino',
        dataIndex: 'destino',
        key: 'destino',
    },
    {
        title: 'Bus',
        dataIndex: 'placaBus',
        key: 'placaBus',
    },
    {
        title: 'Hora Salida',
        dataIndex: 'horaSalida',
        key: 'horaSalida',
        render: (horaSalida: string) => (
            parseInt(horaSalida) < 12 ? <Tag color='green'>{horaSalida} am</Tag> : <Tag color='red'>{horaSalida} pm</Tag>
        )
    },
    {
        title: 'Precios',
        key: 'precios',
        dataIndex: 'precios',
        render: (_, { precios }) => (
            <>
                {precios.map((precio) => {
                    let color = precio > 25 ? 'green' : 'geekblue';
                    if (precio === 20) {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={precio}>
                            {precio}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Acciones',
        key: 'acciones',
        render: () => (
            <Space size="middle">
                <Button type='primary' >Registrar</Button>
                <Button className='flex items-center' icon={<EyeOutlined />} > Ver Manifiesto</Button>

            </Space>
        ),
    },
];

const pasajesDiarios: PasajesDataType[] = dataSource;

export const PasajesTable: React.FC = () => <Table className='shadow-md rounded-md' columns={columns} dataSource={pasajesDiarios} />;

