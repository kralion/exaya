import AppHeader from "@/components/exaya/appheader";
import { CollapsedContext, SelectedContext } from "@/context/MenuContext";
import { MessageProvider } from "@/context/MessageContext";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
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
  LuTicket,
  LuLogOut,
} from "react-icons/lu";
import { AIAssistantInput } from "../ui/panel-de-control/ai-assistant-input";
const { Header, Footer, Sider, Content } = Layout;

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
  const { isCollapsed } = useContext(CollapsedContext);
  const { selectedKey, setSelectedKey } = useContext(SelectedContext);
  const router = useRouter();
  const { data: session } = useSession();
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <MessageProvider>
      <Layout className="p-4">
        <Sider
          className="h-fit rounded-lg border-2 border-transparent border-opacity-50  shadow-xl  dark:border-zinc-800"
          collapsed={isCollapsed}
          style={{
            position: "fixed",
            top: 14,
            left: 14,
            background: colorBgContainer,
            borderRadius: 21,
          }}
          collapsedWidth={50}
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
            {isCollapsed ? (
              <Button
                type="text"
                danger
                className="rounded-b-xl rounded-t-md"
                icon={<LuLogOut className="rotate-180" />}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={handleSignOut}
              />
            ) : (
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
            )}
          </div>
        </Sider>
        <Layout
          className={`space-y-2 duration-500 ${
            isCollapsed ? "ml-14 " : "ml-52"
          }`}
        >
          <Header
            className="  relative flex rounded-lg border-2 border-transparent border-opacity-50 px-3  shadow-md dark:border-zinc-800"
            style={{
              background: colorBgContainer,
              borderRadius: 14,
            }}
          >
            <AIAssistantInput />
            <h3 className=" absolute right-5  text-center font-bold text-primary  ">
              Expreso Ayacucho
            </h3>
          </Header>

          <Content
            style={{
              background: colorBgContainer,
              padding: 21,
              borderRadius: 14,
            }}
            className="min-h-[620px] rounded-lg border-2 border-transparent border-opacity-50  bg-purple-100  shadow-lg  dark:border-zinc-800"
          >
            {children}
          </Content>
          <Footer className="my-5 text-center text-sm text-zinc-400">
            © 2024 Exaya Inc. Todos los derechos reservados.
          </Footer>
        </Layout>
      </Layout>
    </MessageProvider>
  );
}
