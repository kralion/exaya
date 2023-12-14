import AppHeader from "@/components/appheader";
import styles from "@/styles/layout.module.css";
import "animate.css";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, Typography } from "antd";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BsCoin, BsTicketPerforated } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { HiOutlineSupport } from "react-icons/hi";
import { IoMdTimer } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiLuggageCartLine } from "react-icons/ri";
import { AIAssistantInput } from "./ui/panel-de-control/ai-assistant-input";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

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
    label: <Link href="/venta-pasajes">Pasajes</Link>,
    key: "venta-pasajes",
    icon: <BsTicketPerforated />,
  },
  {
    label: <Link href="/encomiendas">Encomiendas</Link>,
    icon: <RiLuggageCartLine />,
    key: "encomiendas",
  },

  {
    key: "programacion",
    label: "Planner",
    icon: <IoMdTimer />,
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
    icon: <BsCoin />,
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
    icon: <CgLogOut />,
    label: (
      <button
        onClick={() => void signOut({})}
        className="text-red-500 hover:text-red-600"
      >
        Salir
      </button>
    ),
    danger: true,
  },
];

export default function AppLayout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const selectedKey = router.pathname;
  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const pathToKey: { [key: string]: string } = {
    "/dashboard": "dashboard",
    "/venta-pasajes": "venta-pasajes",
    "/encomiendas": "encomiendas",
    "/programacion/bus-conductor": "bus-conductor",
    "/programacion/comprobantes": "comprobantes",
    "/programacion/viajes": "viajes",
    "/contable": "contable",
    "/administracion": "administracion",
    "/soporte": "soporte",
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
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
        <Menu
          selectable={true}
          mode="inline"
          items={items}
          defaultSelectedKeys={[pathToKey[selectedKey] || "dashboard"]}
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
            <h3 className=" pt-2 text-center font-bold text-yellow-500  ">
              Expreso Ayacucho S.A.C
            </h3>
          </div>
        </Header>
        {loading && <div className={styles.loader}></div>}

        <Content
          style={{
            background: colorBgContainer,
            padding: 21,
            borderRadius: 21,
          }}
          className=" animate__animated animate__zoomIn animate__delay-500 m-2  rounded-lg border-2 border-slate-100  border-opacity-50  bg-purple-100  shadow-xl"
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
