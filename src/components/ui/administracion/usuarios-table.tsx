import { useMessageContext } from "@/context/MessageContext";
import { api } from "@/utils/api";
import {
  Button,
  Popconfirm,
  Space,
  Table,
  Tag,
  Alert,
  Avatar,
  Typography,
} from "antd";
import Link from "next/link";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import type { ColumnsType } from "antd/es/table";
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
  const usuarioDeleteMutation = api.usuarios.deleteUser.useMutation();
  const { openMessage } = useMessageContext();
  function capitalizeFirstLetter(string: string | undefined) {
    if (string === undefined) {
      return "";
    }
    const lowerCaseString = string.toLowerCase();
    return lowerCaseString.charAt(0).toUpperCase() + lowerCaseString.slice(1);
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

  const columns: ColumnsType = [
    {
      title: "Foto",
      dataIndex: "foto",
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
      dataIndex: "apellidos",
      key: "apellidos",
      render: (apellidos: string) => (
        <Text>{capitalizeFirstLetter(apellidos)}</Text>
      ),
    },
    {
      title: "DNI",
      dataIndex: "usuarioDni",
      key: "usuarioDni",
      render: (usuarioDni: string) => (
        <Tag className="font-semibold">{usuarioDni}</Tag>
      ),
    },
    {
      title: "Sede Asignada",
      dataIndex: "sedeDelegacion",
      key: "sedeDelegacion",
    },
    {
      title: "Rol del Usuario",
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
            <Button
              onClick={() => {
                setUsuarioIdToEdit(record.id);
                setIsModalOpen(true);
              }}
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
                title="Eliminar"
                icon={<FaRegTrashCan />}
                type="text"
                danger
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
