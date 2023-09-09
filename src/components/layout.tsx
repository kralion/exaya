import AppHeader from "@/components/appheader";
import {
  AuditOutlined,
  DashboardOutlined,
  FieldTimeOutlined,
  LineChartOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  ReconciliationOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Title } from "@mantine/core";
import "animate.css";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { AIAssistantInput } from "./ui/panel-de-control/ai-assistant-input";
import Link from "next/link";

const { Header, Footer, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key: label?.toString(),
    label,
    icon,
    children,
  } as MenuItem;
}
interface LayoutProps {
  children: React.ReactNode;
}
const items: MenuItem[] = [
  getItem(<Link href="/dashboard">Dashboard</Link>, <DashboardOutlined />),

  getItem(<Link href="/venta-pasajes">Pasajes</Link>, <ScheduleOutlined />),
  getItem(
    <Link href="/encomiendas">Encomiendas</Link>,
    <ReconciliationOutlined />
  ),

  getItem("Programacion", <FieldTimeOutlined />, [
    getItem(<Link href="/programacion/bus-conductor">Bus-Conductor</Link>),
    getItem(<Link href="/programacion/comprobantes">Comprobantes</Link>),
    getItem(<Link href="/programacion/viajes">Viajes</Link>),
  ]),

  getItem(<Link href="/contable">Contable</Link>, <LineChartOutlined />),
  getItem(
    <Link href="/administracion">Administración</Link>,
    <AuditOutlined />
  ),
  getItem(<Link href="/soporte">Soporte</Link>, <QuestionCircleOutlined />),
  getItem(<Link href="/login">Cerrar Sesión</Link>, <LogoutOutlined />),
];
export default function AppLayout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      {/* //! Sider is one of components that cause the Hydration issue */}
      <Sider
        className=" m-2  rounded-lg border-2  border-slate-200 border-opacity-50 shadow-xl"
        collapsed={collapsed}
        style={{
          background: colorBgContainer,
          borderRadius: 21,
          maxHeight: "86vh",
        }}
        collapsedWidth={50}
        onCollapse={(value) => setCollapsed(value)}
      >
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Menu mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          className=" m-2 mt-2.5 flex  items-center justify-between  rounded-lg  border-2 border-slate-200  border-opacity-50 shadow-md"
          style={{
            background: colorBgContainer,
            borderRadius: 14,
          }}
        >
          <AIAssistantInput />
          <Title
            order={4}
            className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text font-black  text-transparent"
          >
            Tu Empresa
          </Title>
        </Header>
        <Content
          style={{
            background: colorBgContainer,
            padding: 21,
            borderRadius: 21,
          }}
          className=" m-2  rounded-lg border-2 border-slate-100  border-opacity-50  bg-purple-100  shadow-xl"
        >
          {children}
        </Content>
        <Footer className="my-5 text-center text-sm text-slate-500">
          © Copyright 2024 Brayan Paucar . All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
}
