"use client";
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
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import HeaderCard from "@/components/ui/header-card";
import { useRouter } from "next/router";

const { Header, Footer, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: string,
  path: string,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key: path,
    label,
    path,
    icon,
    children,
  } as MenuItem;
}
interface LayoutProps {
  children: React.ReactNode;
}
const items: MenuItem[] = [
  getItem("Dashboard", "/dashboard", <DashboardOutlined />),

  getItem("Pasajes", "/venta-pasajes", <ScheduleOutlined />),
  getItem("Encomiendas", "/encomiendas", <ReconciliationOutlined />),

  getItem("Programacion", "/programacion", <FieldTimeOutlined />, [
    getItem("Conductores", "/programacion/conductores"),
    getItem("Comprobantes", "/programacion/comprobantes"),
    getItem("Viajes", "/programacion/viajes"),
  ]),

  getItem("Contable", "/contable", <LineChartOutlined />),
  getItem("Administracion", "/administracion", <AuditOutlined />),
  getItem("Soporte", "/soporte", <QuestionCircleOutlined />),
  getItem("Cerrar Sesión", "/cerrar-sesion", <LogoutOutlined />),
];
export default function AppLayout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = async (path: string) => {
    if (path === "/cerrar-sesion") {
      signOut();
    } else {
      await navigate(path);
    }
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="m-3.5 rounded-lg"
        collapsed={collapsed}
        style={{ background: colorBgContainer }}
        collapsedWidth={50}
        onCollapse={(value) => setCollapsed(value)}
      >
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Menu defaultSelectedKeys={["/dashboard"]} mode="inline" items={items}>
          {(item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Menu.Item>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="m-3.5 flex justify-between rounded-lg p-2  "
          style={{ background: colorBgContainer }}
        >
          <div className="flex gap-3">
            <HeaderCard
              title="Revision"
              icon="https://img.icons8.com/?size=512&id=65d90ratDWqL&format=png"
            />
            <HeaderCard
              title="Llamada"
              icon="https://img.icons8.com/?size=1x&id=WMy0gZYpVaBU&format=png"
            />
            <HeaderCard
              title="Liquidar"
              icon="https://img.icons8.com/?size=512&id=sYfZR37XSI27&format=png"
            />
          </div>
          <Title
            order={3}
            className="flex items-center pr-3 text-center  text-black"
          >
            Dashboard
          </Title>
        </Header>
        <Content
          style={{ background: colorBgContainer, padding: 21 }}
          className="m-3.5 rounded-lg"
        >
          {children}
        </Content>
        <Footer className="my-5 text-center text-sm text-slate-500 drop-shadow-sm">
          © Copyright 2024 Brayan Paucar . All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
}
