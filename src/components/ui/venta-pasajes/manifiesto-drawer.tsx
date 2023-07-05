import React, { useState } from "react";
import { Drawer } from "antd";

type Props = {
  showDrawer: () => void;
};

export function ManifiestoDrawer({ showDrawer }: Props) {
  const [open, setOpen] = useState(false);

  const showDrawers = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
