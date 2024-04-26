import AppHeader from "@/components/exaya/appheader";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { GrMoney } from "react-icons/gr";
import { HiOutlineSupport } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuLuggage } from "react-icons/lu";
import { MdCalendarMonth } from "react-icons/md";
import { AIAssistantInput } from "../ui/panel-de-control/ai-assistant-input";
import { usePathname, useRouter } from "next/navigation";
const { Header, Footer, Sider, Content } = Layout;
import { useContext } from "react";
import { SelectedContext, CollapsedContext } from "@/context/MenuContext";
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
  getItem("Pasajes", "pasajes", <IoTicketOutline />),
  getItem("Encomiendas", "encomiendas", <LuLuggage />),
  getItem("Planner", "programacion", <MdCalendarMonth />, [
    getItem("Bus Conductor", "programacion/bus-conductor"),
    getItem("Comprobantes", "programacion/comprobantes"),
    getItem("Viajes", "programacion/viajes"),
  ]),
  getItem("Contable", "contable", <GrMoney />),
  getItem("Administración", "administracion", <AiOutlineSetting />),
  getItem("Soporte", "soporte", <HiOutlineSupport />),
];

export default function AppLayout({ children }: LayoutProps) {
  const { isCollapsed, toggleCollapsed } = useContext(CollapsedContext);
  const { selectedKey, setSelectedKey } = useContext(SelectedContext);
  const router = useRouter();
  const pathname = usePathname();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="  p-4">
      <Sider
        className="h-fit rounded-lg border-2 border-slate-200 border-opacity-50  shadow-xl  dark:border-zinc-800"
        collapsed={isCollapsed}
        style={{
          background: colorBgContainer,
          borderRadius: 21,
        }}
        collapsedWidth={50}
      >
        <AppHeader />
        <Menu
          mode="inline"
          selectable={true}
          inlineCollapsed={isCollapsed}
          selectedKeys={[selectedKey]}
          items={items}
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
              icon={<CgLogOut />}
              onClick={() =>
                void signOut({
                  callbackUrl: `${process.env.NEXTAUTH_URL ?? ""}/login`,
                  redirect: true,
                })
              }
            />
          ) : (
            <Button
              type="text"
              className=" flex h-10 w-full items-center gap-2 rounded-b-xl rounded-t-lg pl-5 text-left"
              danger
              onClick={() =>
                void signOut({
                  callbackUrl: `${process.env.NEXTAUTH_URL ?? ""}/login`,
                  redirect: true,
                })
              }
            >
              <CgLogOut />
              Salir
            </Button>
          )}
        </div>
      </Sider>
      <Layout className="ml-4 space-y-4">
        <Header
          className="  relative flex rounded-lg border-2 border-slate-200 border-opacity-50 px-3  shadow-md dark:border-zinc-800"
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
            borderRadius: 21,
          }}
          className="min-h-[620px] rounded-lg border-2 border-slate-100 border-opacity-50  bg-purple-100  shadow-lg  dark:border-zinc-800"
        >
          {children}
        </Content>
        <Footer className="my-5 text-center text-sm text-zinc-400">
          © 2024 Expreso Ayacucho S.A.C. Todos los derechos reservados.
        </Footer>
      </Layout>
    </Layout>
  );
}
