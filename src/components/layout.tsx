import AppHeader from "@/components/appheader";
import "animate.css";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
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
import { AIAssistantInput } from "./ui/panel-de-control/ai-assistant-input";
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
  {
    key: "logout",
    label: (
      <Link href="/login" onClick={() => void signOut()}>
        Salir
      </Link>
    ),
    icon: <CgLogOut />,
    danger: true,
  },
];

export default function AppLayout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "123vh",
      }}
    >
      <Sider
        className=" m-2  rounded-lg border-2  border-slate-200 border-opacity-50 shadow-xl"
        collapsed={collapsed}
        style={{
          background: colorBgContainer,
          borderRadius: 21,
          height: "105vh",
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
      </Sider>
      <Layout>
        <Header
          className=" relative m-2 mt-2.5 flex  items-center  rounded-lg  border-2 border-slate-200  border-opacity-50 shadow-md"
          style={{
            background: colorBgContainer,
            borderRadius: 14,
          }}
        >
          <div className="absolute left-2.5 flex w-full items-center justify-between pr-7">
            <AIAssistantInput />
            <h3 className=" pt-2 text-center font-bold text-primary  ">
              Expreso Ayacucho S.A.C
            </h3>
          </div>
        </Header>

        <Content
          style={{
            background: colorBgContainer,
            padding: 21,
            borderRadius: 21,
          }}
          className=" animate__animated animate__zoomIn animate__delay-500 m-2   rounded-lg border-2 border-slate-100  border-opacity-50  bg-purple-100  shadow-xl"
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
