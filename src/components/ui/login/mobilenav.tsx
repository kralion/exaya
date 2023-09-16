import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const items: MenuProps["items"] = [
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
  {
    type: "divider",
  },
  {
    label: <Link href="/login">Ingresar</Link>,
    key: "0",
  },
];

const MobileNav: React.FC = () => (
  <Dropdown
    overlayStyle={{
      width: "50%",
      marginTop: "2rem",
      textAlign: "right",
      borderWidth: "2px",
      borderRadius: "10px",
    }}
    menu={{ items }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <MenuOutlined className="text-xl " />
      </Space>
    </a>
  </Dropdown>
);

export default MobileNav;
