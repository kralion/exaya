import AppHeader from "@/components/exaya/appheader";
import { SelectedContext } from "@/context/MenuContext";
import { MessageProvider } from "@/context/MessageContext";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme, Typography } from "antd";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import {
  LuBaggageClaim,
  LuBarChart3,
  LuCircleDollarSign,
  LuFolderClock,
  LuHelpingHand,
  LuLayoutDashboard,
  LuLogOut,
  LuTicket,
} from "react-icons/lu";
import { AIAssistantInput } from "../ui/panel-de-control/ai-assistant-input";
import { api } from "@/utils/api";
const { Header, Footer, Sider, Content } = Layout;
const { Text } = Typography;

interface LayoutProps {
  children: React.ReactNode;
}

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Dashboard", "dashboard", <LuLayoutDashboard />),
  getItem("Pasajes", "pasajes", <LuTicket />),
  getItem("Encomiendas", "encomiendas", <LuBaggageClaim />),
  getItem("Planner", "programacion", <LuFolderClock />, [
    getItem("Bus Conductor", "programacion/bus-conductor"),
    getItem("Comprobantes", "programacion/comprobantes"),
    getItem("Viajes", "programacion/viajes"),
  ]),
  getItem("Contable", "contable", <LuCircleDollarSign />),
  getItem("Administración", "administracion", <LuBarChart3 />),
  getItem("Soporte", "soporte", <LuHelpingHand />),
];

export default function AppLayout({ children }: LayoutProps) {
  const { selectedKey, setSelectedKey } = useContext(SelectedContext);
  const router = useRouter();
  const { data: session } = useSession();
  const { data } = api.sedes.getSedeById.useQuery({
    id: session?.user.sedeId ?? "",
  });
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <MessageProvider>
      <Layout className="h-100dvh lg:min-h-screen lg:p-4">
        <Sider
          className=" z-2  h-fit rounded-lg rounded-xl border-transparent border-opacity-50 shadow-xl dark:border-zinc-800    lg:border-2"
          breakpoint="lg"
          style={{
            background: colorBgContainer,
          }}
          collapsedWidth="0"
        >
          <AppHeader />
          <Menu
            mode="inline"
            selectable={true}
            selectedKeys={[selectedKey]}
            items={
              session?.user?.rol === "ADMIN"
                ? items
                : items.filter(
                    (item) =>
                      item?.key !== "administracion" && item?.key !== "contable"
                  )
            }
            onSelect={(item) => {
              setSelectedKey(item.key);
              router.push(`/${item.key}`);
            }}
          />
          <div className=" px-2 pb-2">
            <Button
              type="text"
              className=" flex h-10 w-full items-center justify-start gap-2 rounded-b-xl rounded-t-lg pl-5   text-left"
              danger
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={handleSignOut}
            >
              <LuLogOut className="rotate-180" />
              Salir
            </Button>
          </div>
        </Sider>
        <Layout className=" space-y-2 duration-300 lg:ml-4  ">
          <Header
            className=" flex w-full items-center justify-between rounded border-2 border-transparent border-opacity-50 px-3  shadow-md dark:border-zinc-800    lg:rounded-xl  "
            style={{
              background: colorBgContainer,
            }}
          >
            <AIAssistantInput />
            <h3 className="hidden  font-bold text-primary lg:block">
              Expreso Ayacucho
            </h3>
            <div className="flex w-full items-center  justify-between lg:hidden">
              <h3 className="font-bold  text-primary">Expreso Ayacucho</h3>
              <Text type="secondary" className="text-sm">
                Agencia, {data?.response?.agencia}
              </Text>
            </div>
          </Header>

          <Content
            style={{
              background: colorBgContainer,
            }}
            className="overflow-x-hidden rounded-lg border-transparent border-opacity-50 bg-purple-100 p-4  pt-10 shadow-lg dark:border-zinc-800 dark:bg-zinc-700 lg:min-h-[620px] lg:border-2  lg:p-6  lg:pt-6"
          >
            {children}
          </Content>

          <Footer className="my-2 bg-transparent text-center text-sm text-zinc-400">
            © 2024 Exaya Inc. Todos los derechos reservados.
          </Footer>
        </Layout>
      </Layout>
    </MessageProvider>
  );
}
