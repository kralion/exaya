import { api } from "@/utils/api";
import { Avatar, Empty, List, Steps } from "antd";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import ConductorModal from "./conductores/conductor-modal";

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

export function ConductoresInformacion({
  setConductorIdToEdit,
  setIsModalOpen,
}: {
  setConductorIdToEdit: (id: string) => void;
  setIsModalOpen: (value: boolean) => void;
}) {
  const { data: conductoresRegistrados, isLoading } =
    api.conductores.getAllConductores.useQuery();
  function capitalizeFirstLetter(string: string | undefined) {
    if (string === undefined) {
      return "";
    }
    return string
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return (
    <List
      loading={isLoading}
      itemLayout="horizontal"
      className=" w-[500px] "
      dataSource={conductoresRegistrados}
      renderItem={(conductor: TConductor, index) =>
        (conductoresRegistrados?.length ?? 0) > 0 ? (
          <List.Item
            key={index}
            className="w-[350px] rounded shadow dark:shadow-black/30 lg:w-full lg:px-14"
          >
            <List.Item.Meta
              className="w-full px-4"
              avatar={<Avatar src={conductor.foto} size="large" />}
              title={
                <div className="flex items-center gap-2">
                  <ConductorModal
                    setIsModalOpen={setIsModalOpen}
                    setConductorIdToEdit={setConductorIdToEdit}
                    activator={`${capitalizeFirstLetter(
                      conductor.nombres
                    )} ${capitalizeFirstLetter(conductor.apellidos)}`}
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
            <div className="hidden lg:block">
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
            </div>
          </List.Item>
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
