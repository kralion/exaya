import { useNotification } from "@/context/NotificationContext";
import type { ICliente, IUsuario } from "@/interfaces";
import { api } from "@/utils/api";
import { Button, Popconfirm, Space, Table, Tag, Alert, Avatar } from "antd";
import Link from "next/link";

export default function UsuariosTable() {
  const {
    mutateAsync: usuarioMutation,
    isLoading: isDeleting,
    isSuccess: isDeleted,
  } = api.usuarios.deleteUser.useMutation();
  const {
    data: usuarios,
    isLoading,
    isFetching,
    isError,
  } = api.usuarios.getAllUsuarios.useQuery();
  const { openNotification } = useNotification();
  const handleUserDelete = async (id: string) => {
    try {
      await usuarioMutation({
        id,
      });
      isDeleted &&
        openNotification({
          message: "Usuario Eliminado",
          description: "El usuario ha sido eliminado correctamente",
          type: "success",
          placement: "topRight",
        });
    } catch (error) {
      openNotification({
        message: "Error al eliminar el usuario",
        description: "El usuario no ha podido ser eliminado correctamente",
        type: "error",
        placement: "topRight",
      });
    }
  };
  const columns = [
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
      dataIndex: "cliente",
      key: "nombres",
      render: (cliente: ICliente) => <a>{cliente.nombres}</a>,
    },
    {
      title: "Apellidos",
      dataIndex: "cliente",
      key: "apellidos",
      render: (cliente: ICliente) => (
        <Tag className="font-semibold" key={cliente.dni}>
          {cliente.apellidoPaterno +
            (cliente.apellidoMaterno ? " " + cliente.apellidoMaterno : "") ||
            ""}
        </Tag>
      ),
    },
    {
      title: "DNI",
      dataIndex: "cliente",
      key: "dni",
      render: (cliente: ICliente) => (
        <Tag className="font-semibold" key={cliente.dni}>
          {cliente.dni}
        </Tag>
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
            rol === "administrador"
              ? "gold-inverse"
              : rol === "usuario"
              ? "blue-inverse"
              : rol === "supervisor"
              ? "green-inverse"
              : "purple-inverse"
          }
          className="rounded-full font-semibold shadow-md "
          key={rol}
        >
          {rol}
        </Tag>
      ),
    },
    {
      title: "Acciones",
      key: "acciones",
      render: (usuario: IUsuario) => {
        return (
          <Space size="middle">
            <Button type="dashed">
              Editar <code className="ml-2 underline">{usuario.nombres}</code>{" "}
            </Button>
            <Popconfirm
              okButtonProps={{
                style: {
                  backgroundColor: "#f5222d",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                },
              }}
              title="Confirmar Operacion ?"
            >
              <Button
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => handleUserDelete(usuario.id)}
                type="link"
                danger
              >
                Eliminar
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
      <Table
        columns={columns}
        dataSource={usuarios}
        loading={isLoading || isFetching || isDeleting}
      />
    </>
  );
}
