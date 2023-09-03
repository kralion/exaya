import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">Login</a>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <a href="https://www.aliyun.com">Nosotros</a>,
    key: "3",
  },
  {
    label: <a href="https://www.aliyun.com">Planes</a>,
    key: "1",
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
