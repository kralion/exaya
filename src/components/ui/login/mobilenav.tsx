import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const items: MenuProps["items"] = [
  {
    label: <Link href="/login">Login</Link>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <Link href="/features">Features</Link>,
    key: "1",
  },
  {
    label: <Link href="/planes">Planes</Link>,
    key: "2",
  },
  {
    label: <Link href="/nosotros">Nosotros</Link>,
    key: "3",
  },
];

const MobileNav: React.FC = () => (
  <Dropdown
    overlayStyle={{
      width: "100%",
      marginTop: "1rem",
      textAlign: "center",
      borderWidth: "2px",
      borderRadius: "10px",
      borderColor: "rgb(144,96,189)",
    }}
    menu={{ items }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <MenuOutlined className="text-2xl text-purple-100" />
      </Space>
    </a>
  </Dropdown>
);

export default MobileNav;
