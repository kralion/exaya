"use client";
import AppHeader from "@/components/appheader";
import HeaderCard from "@/components/ui/header-card";
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
import { Steps } from "antd";

const description = "This is a description.";
import "animate.css";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
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
  // const router = useRouter();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = async (path: string) => {
    if (path === "/cerrar-sesion") {
      signOut();
    } else {
      // await router.push(path);
    }
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="m-3.5 rounded-lg"
        collapsed={collapsed}
        style={{ background: colorBgContainer, height: "100vh" }}
        collapsedWidth={50}
        onCollapse={(value) => setCollapsed(value)}
      >
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Menu
          defaultSelectedKeys={["/dashboard"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className=" m-3.5 flex  items-center justify-between  rounded-lg"
          style={{
            background: colorBgContainer,
          }}
        >
          <Steps
            current={1}
            size="small"
            style={{
              width: 600,
            }}
            items={[
              {
                title: "Viajes",
              },
              {
                title: "Facturas",
              },
              {
                title: "Boletas",
              },

              {
                title: "Actualización",
              },
            ]}
          />

          <Title
            order={3}
            className="flex items-center text-center  text-black"
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
