import AppHeader from "@/components/exaya/appheader";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { GrMoney } from "react-icons/gr";
import { HiOutlineSupport } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuLuggage } from "react-icons/lu";
import { MdCalendarMonth } from "react-icons/md";
import { AIAssistantInput } from "../ui/panel-de-control/ai-assistant-input";
const { Header, Footer, Sider, Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}
const items: MenuProps["items"] = [
  {
    label: <Link href="/dashboard">Dashboard</Link>,
    key: "dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    label: <Link href="/pasajes">Pasajes</Link>,
    key: "pasajes",
    icon: <IoTicketOutline />,
  },
  {
    label: <Link href="/encomiendas">Encomiendas</Link>,
    icon: <LuLuggage />,
    key: "encomiendas",
  },

  {
    key: "programacion",
    label: "Planner",
    icon: <MdCalendarMonth />,
    children: [
      {
        key: "bus-conductor",
        label: <Link href="/programacion/bus-conductor">Bus Conductor</Link>,
      },
      {
        key: "comprobantes",
        label: <Link href="/programacion/comprobantes">Comprobantes</Link>,
      },
      {
        key: "viajes",
        label: <Link href="/programacion/viajes">Viajes</Link>,
      },
    ],
  },
  {
    label: <Link href="/contable">Contable</Link>,
    icon: <GrMoney />,
    key: "contable",
  },
  {
    key: "administacion",
    label: <Link href="/administracion">Administración</Link>,
    icon: <AiOutlineSetting />,
  },
  {
    label: <Link href="/soporte">Soporte</Link>,
    key: "soporte",
    icon: <HiOutlineSupport />,
  },
];

export default function AppLayout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="  p-4">
      <Sider
        className="h-fit rounded-lg border-2 border-slate-200 border-opacity-50  shadow-xl  dark:border-zinc-800"
        collapsed={collapsed}
        style={{
          background: colorBgContainer,
          borderRadius: 21,
        }}
        collapsedWidth={50}
        onCollapse={(value) => setCollapsed(value)}
      >
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Menu
          selectable={true}
          mode="inline"
          items={items}
          // defaultSelectedKeys={[pathToKey[selectedKey] || "dashboard"]}
        />
        <div className=" px-2 pb-2">
          {collapsed ? (
            <Button
              type="text"
              danger
              className="rounded-b-xl rounded-t-md"
              icon={<CgLogOut />}
              onClick={() =>
                void signOut({
                  callbackUrl: "/login",
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
                  callbackUrl: "/login",
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
