import { viajesDiarios } from "@/data";
import type { EditableCellProps, Item } from "@/interfaces/interfaces";
import { FieldTimeOutlined } from "@ant-design/icons";
import {
  Badge,
  Button,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
} from "antd";
import type { TableProps } from "antd/es/table";
import React, { useState } from "react";

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

export function ProgramacionTable() {
  const [form] = Form.useForm();
  const [data, setData] = useState(viajesDiarios);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({
      origen: "",
      destino: "",
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
      dataIndex: "key",
      width: "5%",
    },

    {
      title: "Origen",
      dataIndex: "origen",

      editable: true,
      filters: [
        {
          text: "Huancayo",
          value: "Huancayo",
        },
        {
          text: "Ayacucho",
          value: "Ayacucho",
        },
      ],
      onFilter: (value: string, record) => record.origen.indexOf(value) === 0,
    },
    {
      title: "Destino",
      dataIndex: "destino",

      editable: true,
      filters: [
        {
          text: "Lima",
          value: "Lima",
        },
        {
          text: "Selva Central",
          value: "Selva Central",
        },
      ],
      onFilter: (value: string, record) => record.destino.indexOf(value) === 0,
    },
    {
      title: "Bus",
      dataIndex: "placaBus",
      width: "10%",

      editable: true,
      render: (text: string) => <Typography>{text}</Typography>,
    },
    {
      title: "Fecha ",
      dataIndex: "fecha",
      width: "12%",
      editable: true,
    },
    {
      title: "Hora",
      dataIndex: "horaSalida",

      editable: true,
      render: (text: string) => (
        <Button
          className="flex cursor-default items-center "
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
      render: (text: string) => (
        <Badge
          color={
            text === "Lleno"
              ? "green"
              : text === "Venta"
              ? "orange"
              : text === "Inactivo"
              ? "red"
              : "gray"
          }
          count={text}
        />
      ),
    },
    {
      title: "Acciones",
      dataIndex: "acciones",
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <p className="flex items-baseline">
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              <Button>Guardar</Button>
            </Typography.Link>
            <a onClick={cancel} className="text-cyan-500">
              Cancelar
            </a>
          </p>
        ) : (
          <div className="flex items-baseline justify-center">
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              <Button>Editar</Button>
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
              <Button danger type="link">
                Eliminar
              </Button>
            </Popconfirm>
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
