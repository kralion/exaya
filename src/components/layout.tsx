import React from "react";
import { Layout } from "antd";
import Header from "./appheader";
import AppMenu from "./appmenu";

const { Content, Sider } = Layout;

type LayoutProps = {
  collapsed: boolean;
  toggleCollapse: () => void;
  activeWindow: string;
  handleMenuItemClick: (key: React.Key) => void;
  items: MenuItem[];
  children: React.ReactNode;
};

const CustomLayout: React.FC<LayoutProps> = ({
  collapsed,
  toggleCollapse,
  activeWindow,
  handleMenuItemClick,
  items,
  children,
}) => {
  return (
    <Layout style={{ padding: 28 }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={200}
        style={{
          background: "white",
          borderRadius: 7,
          padding: 7,
          height: "100%",
        }}
      >
        <Header collapsed={collapsed} />
        {/* Resto del código... */}
        <AppMenu
          items={items}
          activeWindow={activeWindow}
          handleMenuItemClick={handleMenuItemClick}
        />
      </Sider>
      <Layout style={{ paddingLeft: 14 }}>
        <Content
          style={{
            padding: 28,
            margin: 0,
            borderRadius: 7,
            minHeight: 280,
            background: "white",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
