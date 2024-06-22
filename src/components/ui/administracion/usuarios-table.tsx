import { useMessageContext } from "@/context/MessageContext";
import { api } from "@/utils/api";
import { CiTrash } from "react-icons/ci";
import { LuTrash2 } from "react-icons/lu";

import {
  Alert,
  Avatar,
  Button,
  Popconfirm,
  Space,
  Table,
  Tag,
  Typography,
} from "antd";
import Link from "next/link";
import { TbLockX } from "react-icons/tb";

import type { ColumnsType } from "antd/es/table";
import { FiEdit3 } from "react-icons/fi";
const { Text } = Typography;
export default function UsuariosTable({
  setUsuarioIdToEdit,
  setIsModalOpen,
}: {
  setUsuarioIdToEdit: (id: string) => void;
  setIsModalOpen: (value: boolean) => void;
}) {
  const {
    data: usuarios,
    isLoading,
    isError,
    refetch,
  } = api.usuarios.getAllUsuarios.useQuery();
  const usuarioDisableMutation = api.usuarios.disableUser.useMutation();
  const usuarioDeleteMutation = api.usuarios.deleteUser.useMutation();
  const { openMessage } = useMessageContext();
  function capitalizeFirstLetter(string: string | undefined) {
    if (string === undefined) {
      return "";
    }
    return string
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const handleDeleteUser = (id: string) => {
    usuarioDeleteMutation.mutate(
      { id },
      {
        onSuccess: (response) => {
          openMessage({
            content: response.message,
            type: "success",
            duration: 3,
          });
        },
        onError: (error) => {
          openMessage({
            content: error.message,
            type: "error",
            duration: 3,
          });
        },
        onSettled: () => {
          void refetch();
        },
      }
    );
  };

  const handleDisableUser = (id: string) => {
    usuarioDisableMutation.mutate(
      { id },

      {
        onSuccess: (response) => {
          openMessage({
            content: response.message,
            type: "success",
            duration: 3,
          });
        },
        onError: (error) => {
          openMessage({
            content: error.message,
            type: "error",
            duration: 3,
          });
        },
        onSettled: () => {
          void refetch();
        },
      }
    );
  };

  const columns: ColumnsType = [
    {
      title: "Foto",
      dataIndex: "foto",
      responsive: ["lg"],

      key: "foto",
      render: (foto: string) => {
        return <Avatar src={foto} size="large" shape="circle" />;
      },
    },
    {
      title: "Nombres",
      dataIndex: "nombres",
      key: "nombres",
      render: (nombres: string) => (
        <Text>{capitalizeFirstLetter(nombres)}</Text>
      ),
    },
    {
      title: "Apellidos",
      responsive: ["lg"],
      dataIndex: "apellidos",
      key: "apellidos",
      render: (apellidos: string) => (
        <Text>{capitalizeFirstLetter(apellidos)}</Text>
      ),
    },
    {
      title: "DNI",
      dataIndex: "usuarioDni",
      responsive: ["lg"],

      key: "usuarioDni",
      render: (usuarioDni: string) => (
        <Tag className="font-semibold">{usuarioDni}</Tag>
      ),
    },
    {
      title: "Sede Asignada",

      dataIndex: "sede",
      key: "sedeDelegacion",
      render: (sede: { agencia: string }) => <Text>{sede?.agencia}</Text>,
    },
    {
      title: "Rol del Usuario",
      responsive: ["lg"],

      dataIndex: "rol",
      key: "rol",
      render: (rol: string) => (
        <Tag
          color={
            rol === "ADMIN"
              ? "gold-inverse"
              : rol === "USER"
              ? "green-inverse"
              : "blue-inverse"
          }
          className="rounded-full font-semibold shadow-md "
        >
          {rol}
        </Tag>
      ),
    },
    {
      title: "Acciones",
      key: "acciones",
      render: (record: { id: string }) => {
        return (
          <Space className="items-baseline gap-2">
            <Popconfirm
              okButtonProps={{
                danger: true,
              }}
              title="Estás segur@ de deshabilitar este usuario?"
              okText="Sí"
              cancelText="No"
              onConfirm={() => handleDisableUser(record.id)}
            >
              <Button
                title="Deshabilitar"
                icon={<TbLockX />}
                type="text"
                danger
              />
            </Popconfirm>
            <Button
              onClick={() => {
                setUsuarioIdToEdit(record.id);
                setIsModalOpen(true);
              }}
              loading={usuarioDisableMutation.isLoading}
              title="Editar"
              icon={<FiEdit3 />}
            />
            <Popconfirm
              okButtonProps={{
                danger: true,
              }}
              title="Estás segur@ de eliminar este usuario?"
              okText="Sí"
              cancelText="No"
              onConfirm={() => handleDeleteUser(record.id)}
            >
              <Button
                type="primary"
                danger
                title="Eliminar"
                icon={<LuTrash2 />}
              />
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  return (
    <>
      {isError && (
        <Alert
          message={
            <p>
              Error al obtener los datos de los
              <code className="ml-2 underline">Usuarios</code> por favor
              <a href="." className="ml-2 underline">
                recarge la página
              </a>{" "}
              . Si el error persiste contacte con el área de
              <Link href="/soporte">
                <code className="ml-2 underline">Soporte</code>
              </Link>
            </p>
          }
          type="error"
          showIcon
        />
      )}
      <Table columns={columns} dataSource={usuarios} loading={isLoading} />
    </>
  );
}
