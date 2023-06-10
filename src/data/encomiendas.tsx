import { Button, Tag, Typography } from "antd";

export const dataSource = [
  {
    key: "1",
    receiverName: "Mike Jhon Doe",
    senderName: "Mike Jhon Doe",
    price: 32.00,
    destination: "Terminal Terrestre - Ayacucho",
    dateSent: "2021-09-01",
  },
  {
    key: "2",
    receiverName: "Mike Jhon Doe",
    senderName: "Mike Jhon Doe",
    price: 32.00,
    destination: "Jr. Angaraes 123 - Huancayo",
    dateSent: "2021-09-01",
  },
  {
    key: "3",
    receiverName: "Mike Jhon Doe",
    senderName: "Mike Jhon Doe",
    price: 32.00,
    destination: "Terminal Terrestre - Ayacucho",
    dateSent: "2021-09-01",
  },

];

export const columns = [
  {
    title: "Receptor",
    dataIndex: "receiverName",
    key: "receiverName",
  },
  {
    title: "Remitente",
    dataIndex: "senderName",
    key: "senderName",
  },
  {
    title: "Precio",
    dataIndex: "price",
    key: "price",
    render: (text: number) => (

      <Tag color='green'>
        S/. {text} .00
      </Tag>

    ),
  },
  {
    title: "Destino",
    dataIndex: "destination",
    key: "destination",
  },
  {
    title: "Fecha de Envío",
    dataIndex: "dateSent",
    key: "dateSent",
  },
  {
    title: "Acciones",
    key: "action",
    render: (text: any, record: any) => (
      <div className='flex items-baseline gap-5'>

        <Typography.Link >
          <Button>
            Editar
          </Button>
        </Typography.Link>
        <Button danger type='link' >
          Eliminar
        </Button>
      </div>
    ),
  },
];
