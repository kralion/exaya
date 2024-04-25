import ConductorInfoStepSkeleton from "@/components/skeletons/conductor-step-skeleton";
import { api } from "@/utils/api";
import { Avatar, Button, Empty, List, Steps } from "antd";
import { Suspense, useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import ConductorModal from "./conductores/conductor-modal";
import Link from "next/link";

const items = [
  {
    title: "Nivel 1",
    description: "Licencia A2B",
  },
  {
    title: "Nivel 2",
    description: "Licencia A3B",
  },
  {
    title: "Nivel 3",
    description: "Licencia A3C",
  },
];

type TConductor = {
  id: string;
  conductorDni: string;
  nombres: string;
  apellidos: string;
  numeroLicencia: string;
  foto: string;
  telefono: string;
  disponibilidad: boolean;
  claseLicencia: string;
};

export function ConductoresInformacion() {
  const { data: conductoresRegistrados, isLoading } =
    api.conductores.getAllConductores.useQuery();

  return (
    <List
      loading={isLoading}
      itemLayout="horizontal"
      className=" w-[500px] rounded-lg "
      dataSource={conductoresRegistrados}
      renderItem={(conductor: TConductor, index) =>
        (conductoresRegistrados?.length ?? 0) > 0 ? (
          <Suspense fallback={<ConductorInfoStepSkeleton />}>
            <List.Item
              key={index}
              className="cursor-pointer  rounded-lg  shadow-lg  dark:shadow-white/10"
              style={{
                paddingLeft: 14,
                paddingRight: 14,
              }}
            >
              <List.Item.Meta
                avatar={<Avatar src={conductor.foto} />}
                title={
                  <div className="flex items-center gap-2">
                    <ConductorModal
                      activator={`${conductor.nombres} ${conductor.apellidos}`}
                      id={conductor.id}
                    />

                    {conductor.disponibilidad === true ? (
                      <AiFillCheckCircle className=" text-green-500" />
                    ) : (
                      <AiFillCloseCircle className=" text-red-500" />
                    )}
                  </div>
                }
                description={
                  <div className="flex items-center gap-3">
                    <p>{conductor.numeroLicencia}</p>
                  </div>
                }
              />
              <Steps
                style={{ marginTop: 8 }}
                type="inline"
                current={
                  conductor.claseLicencia === "A-IIIC"
                    ? 2
                    : conductor.claseLicencia === "A-IIIB"
                    ? 1
                    : 0
                }
                items={items}
              />
            </List.Item>
          </Suspense>
        ) : (
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 60 }}
            description={<span>No hay conductores</span>}
          />
        )
      }
    />
  );
}
