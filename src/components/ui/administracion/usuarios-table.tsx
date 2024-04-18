import { useNotification } from "@/context/NotificationContext";
import { api } from "@/utils/api";
import { Button, Popconfirm, Space, Table, Tag, Alert, Avatar } from "antd";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";

export default function UsuariosTable() {
  const {
    data: usuarios,
    isLoading,
    isError,
    refetch,
  } = api.usuarios.getAllUsuarios.useQuery();
  const usuarioDeleteMutation = api.usuarios.deleteUser.useMutation();
  const { openNotification } = useNotification();

  const handleUserDelete = (id: string) => {
    usuarioDeleteMutation.mutate(
      { id },

      {
        onSuccess: (response) => {
          openNotification({
            message: "Operación Exitosa",
            description: response.message,
            type: "success",
            placement: "topRight",
          });
          void refetch();
        },
        onError: (error) => {
          openNotification({
            message: "Error en la Operación",
            description: error.message,
            type: "error",
            placement: "topRight",
          });
        },
      }
    );
  };

  const columns = [
    {
      title: "Foto",
      dataIndex: "foto",
      render: (foto: string) => {
        return <Avatar src={foto} size="large" shape="circle" />;
      },
    },
    {
      title: "Nombres",
      dataIndex: "nombres",
      render: (nombres: string) => (
        <span className="font-semibold">{nombres}</span>
      ),
    },
    {
      title: "Apellidos",
      dataIndex: "apellidos",
      render: (apellidos: string) => <span>{apellidos}</span>,
    },
    {
      title: "DNI",
      dataIndex: "usuarioDni",
      render: (usuarioDni: string) => (
        <Tag className="font-semibold">{usuarioDni}</Tag>
      ),
    },
    {
      title: "Sede Asignada",
      dataIndex: "sedeDelegacion",
    },
    {
      title: "Rol del Usuario",
      dataIndex: "rol",
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
      render: (record: { id: string }) => {
        return (
          <Space size="middle">
            <Popconfirm
              okButtonProps={{
                danger: true,
              }}
              onConfirm={() => handleUserDelete(record.id)}
              title="Estás segur@ de eliminar este usuario?"
              cancelText="No"
              okText="Sí"
            >
              <Button
                type="link"
                className="flex items-center justify-center"
                danger
                title="Eliminar Usuario"
              >
                <FaRegTrashCan
                  size="1.2em"
                  className="text-red-400 hover:text-red-600"
                />
              </Button>
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
