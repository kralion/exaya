"use client";
import { Divider, Drawer, Flex, Space, Typography } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
const { Text, Title } = Typography;

type NavigationProps = {
  navLinks: {
    label: string;
    href: string;
  }[];
};

export default function MobileNavBar({ navLinks }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      <button className="active:opacity-70" onClick={() => setOpen(true)}>
        {open ? (
          <IoClose className="duration-500 " size={30} />
        ) : (
          <TbMenu className="duration-500" size={30} />
        )}
      </button>

      <Drawer
        title={
          <Flex justify="space-between" align="center">
            <Space direction="vertical">
              <h3 className="text-4xl font-bold  text-amber-500 ">Exaya</h3>
              <Text type="secondary" className="text-sm font-light">
                Sistema de Gestión de Viajes y Encomiendas.
              </Text>
            </Space>
            <IoClose
              className="active:opacity-70"
              size={30}
              onClick={() => setOpen(false)}
            />
          </Flex>
        }
        placement="right"
        className="overflow-hidden "
        closeIcon={null}
        onClose={() => setOpen(false)}
        open={open}
        size="large"
      >
        <Space direction="vertical" className="w-full justify-start gap-8">
          <Link
            className=" text-sm lg:hidden"
            href={session ? "/dashboard" : "/login"}
          >
            {session ? (
              <button className=" text-lg active:opacity-70">
                Ir al Dashboard
              </button>
            ) : (
              <button className=" text-lg active:opacity-70">
                Iniciar Sesión
              </button>
            )}
          </Link>
          <Divider className="my-0" />
          {navLinks.map((link, index) => (
            <>
              <Link
                href={link.href}
                key={index}
                className="text-lg active:opacity-70"
              >
                {link.label}
              </Link>
              <Divider className="my-0" />
            </>
          ))}
        </Space>
      </Drawer>
    </>
  );
}
