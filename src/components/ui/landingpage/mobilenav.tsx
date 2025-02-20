"use client";
import { Button, Divider, Drawer, Flex, Space, Typography } from "antd";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
const { Text } = Typography;

type NavigationProps = {
  navLinks: {
    label: string;
    href: string;
  }[];
};

export default function MobileNavBar({ navLinks }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <button
        className="active:opacity-70 lg:hidden"
        onClick={() => setOpen(true)}
      >
        {open ? (
          <IoClose className="duration-500 " size={30} />
        ) : (
          <TbMenu className="duration-500" size={30} />
        )}
      </button>

      <Drawer
        title={
          <Flex justify="space-between" align="center">
            <div className="flex-1 ">
              <h3 className="text-4xl font-bold  text-amber-500 ">Exaya</h3>
              <Text type="secondary" className="text-sm font-light">
                Sistema de Gestión de Viajes y Encomiendas.
              </Text>
            </div>
            <IoClose
              className="active:opacity-70"
              size={30}
              strokeWidth={2}
              onClick={() => setOpen(false)}
            />
          </Flex>
        }
        placement="right"
        className="overflow-hidden lg:hidden"
        closeIcon={null}
        onClose={() => setOpen(false)}
        open={open}
        size="large"
      >
        <div className="flex w-full flex-col justify-start">
          <Button
            className=" w-full flex-1 py-4 text-lg"
            size="large"
            onClick={() =>
              session ? router.push("/dashboard") : router.push("/login")
            }
            variant="link"
          >
            {session ? "Dashboard" : "Iniciar Sesión"}
          </Button>
          <Divider className="my-0" />
          {navLinks.map((link, index) => (
            <div key={index}>
              <Button
                className=" my-4 w-full flex-1 py-4 text-left text-lg"
                size="large"
                onClick={() => router.push(link.href)}
                variant="link"
              >
                {link.label}
              </Button>
              <Divider className="my-0" />
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
}
