import { Menu, Typography, Layout } from "antd";
import React from "react";
import { useRouter } from "next/router";
import { Link } from "react-router-dom";
type AppMenuProps = {
  items: MenuItem[];
  activeWindow: string;
  handleMenuItemClick: (key: React.Key) => void;
};
type MenuItem = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
};
const AppMenu: React.FC<AppMenuProps> = ({
  items,
  activeWindow,
  handleMenuItemClick,
}) => {
  const router = useRouter();
  const { pathname } = router;

  const renderMenuItems = (menuItems: MenuItem[]): React.ReactNode => {
    return menuItems.map((menuItem) => {
      if (menuItem.children) {
        // Resto del código...
      } else {
        return (
          <Menu.Item key={menuItem.key} icon={menuItem.icon}>
            <Link href={`/${menuItem.key}`}>{menuItem.label}</Link>
          </Menu.Item>
        );
      }
    });
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      items={items}
      onClick={({ key }) => handleMenuItemClick(key)}
    >
      {renderMenuItems(
        items?.filter((item) => item?.type !== "group") as MenuItem[]
      )}
    </Menu>
  );
};

export default AppMenu;
