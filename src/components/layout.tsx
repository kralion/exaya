import AppHeader from "@/components/appheader";
import Pasajes from "@/pages/venta-pasajes";
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
import { Layout, Menu, Steps, theme } from "antd";
import React, { useState } from "react";

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

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* //! Sider is one of components that cause the Hydration issue */}
      <Sider
        className="m-2 rounded-lg  border-2 border-slate-200  border-opacity-50    shadow-xl"
        collapsed={collapsed}
        style={{
          background: colorBgContainer,
          borderRadius: 42,
        }}
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
          className=" my-2 mr-2 flex items-center justify-between rounded-lg  border-2 border-slate-200  border-opacity-50    shadow-sm"
          style={{
            background: colorBgContainer,
            borderRadius: 14,
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
                title: "Boletos",
              },

              {
                title: "Actualización",
              },
            ]}
          />

          <Title
            order={4}
            className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text font-black  text-transparent"
          >
            Tu Empresa
          </Title>
        </Header>
        <Content
          style={{
            background: colorBgContainer,
            padding: 21,
            borderRadius: 14,
          }}
          className=" mr-2 rounded-lg border-2 border-slate-100  border-opacity-50  bg-purple-100  shadow-lg"
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
