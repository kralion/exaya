import React, { useState } from "react";
import {
  Badge,
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Space,
  Table,
  Typography,
} from "antd";
import type { Item, EditableCellProps } from "@/interfaces/interfaces";
import { originData } from "@/data/programacion-viajes";
import type { ColumnsType, TableProps } from "antd/es/table";
import { FieldTimeOutlined } from "@ant-design/icons";

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export function ProgramacionTable({ originData }: { originData: any }) {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      ruta: "",
      bus: "",
      fechaSalida: "",
      horaSalida: "",
      estado: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Error de Validacion de Datos", errInfo);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "viajeId",
      width: "5%",
    },
    {
      title: "Ruta",
      dataIndex: "ruta",
      width: "20%",
      editable: true,
      filters: [
        {
          text: "Huancayo - Ayacucho",
          value: "Huancayo - Ayacucho",
        },
        {
          text: "Ayacucho - Huancayo",
          value: "Ayacucho - Huancayo",
        },
      ],
      onFilter: (value: string, record) => record.ruta.indexOf(value) === 0,
    },
    {
      title: "Bus",
      dataIndex: "bus",
      width: "15%",
      editable: true,
      render: (text: string) => <Typography>{text}</Typography>,
    },
    {
      title: "Fecha Salida",
      dataIndex: "fechaSalida",
      width: "15%",
      editable: true,
    },
    {
      title: "Hora Salida",
      dataIndex: "horaSalida",
      width: "15%",
      editable: true,
      render: (text) => (
        <Button
          className="flex cursor-default items-center"
          type="text"
          icon={<FieldTimeOutlined />}
        >
          {parseInt(text) < 12 ? `${text} AM` : `${text} PM`}
        </Button>
      ),
    },
    {
      title: "Estado",
      dataIndex: "estado",
      width: "10%",
      editable: true,
      key: "state",
      render: () => <Badge status="success" text="Activo" />,
    },
    {
      title: "Acciones",
      dataIndex: "acciones",
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span className="flex items-baseline gap-5">
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              <Button>Guardar</Button>
            </Typography.Link>
            <Popconfirm
              okButtonProps={{
                style: {
                  backgroundColor: "#f5222d",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                },
              }}
              title="Estás seguro ?"
              onConfirm={cancel}
            >
              <a className="text-cyan-500">Cancelar</a>
            </Popconfirm>
          </span>
        ) : (
          <div className="flex items-baseline justify-center gap-5">
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              <Button>Editar</Button>
            </Typography.Link>
            <Button danger type="link">
              Eliminar
            </Button>
          </div>
        );
      },
    },
  ];
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        onChange={onChange}
        rowClassName="editable-row"
        pagination={{ pageSize: 10 }}
        scroll={{ y: 300 }}
      />
    </Form>
  );
}
