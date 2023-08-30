"use client";
import AppHeader from "@/components/appheader";
import {
  DashboardOutlined,
  FieldTimeOutlined,
  LineChartOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  ReconciliationOutlined,
  ScheduleOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import "animate.css";
import { Title } from "@mantine/core";

const { Header, Content, Footer, Sider } = Layout;

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

const items: MenuItem[] = [
  getItem("Dashboard", "/dashboard", <DashboardOutlined />),

  getItem("Pasajes", "/pasajes", <ScheduleOutlined />),
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

export default function ExayaPage({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer = "#000" },
  } = theme.useToken();
  useEffect(() => {
    const audioElement = new Audio("../assets/audio/soundEffect.mp3");

    const playSound = () => {
      audioElement.play().catch((error) => {
        console.error("Error al reproducir el sonido:", error);
      });
    };

    audioElement.addEventListener("loadeddata", playSound);

    return () => {
      audioElement.removeEventListener("loadeddata", playSound);
    };
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        className="m-3.5 rounded-lg"
        collapsed={collapsed}
        style={{ background: colorBgContainer }}
        collapsedWidth={50}
        onCollapse={(value) => setCollapsed(value)}
      >
        <AppHeader setCollapsed={setCollapsed} collapsed={collapsed} />
        <Menu
          onClick={(item) => {
            alert(item.key);
          }}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="m-3.5 rounded-lg p-3.5 "
          style={{ background: colorBgContainer }}
        >
          <Title order={3} className="flex justify-end text-black">
            Dashboard
          </Title>
        </Header>
        <Content
          style={{ background: colorBgContainer }}
          className="m-3.5 rounded-lg"
        >
          Contenido
          {items.map(
            (item) =>
              item?.key === "1" && (
                <div
                  key={item.key}
                  className="animate__animated animate__fadeIn"
                >
                  {children}
                </div>
              )
          )}
        </Content>
        <Footer className="my-5 text-center text-sm text-slate-500 drop-shadow-sm">
          © Copyright 2024 Brayan Paucar . All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
}
