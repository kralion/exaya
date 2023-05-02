import { DatePicker, Space, Input, Table, Card } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Image from "next/image";
import type { ColumnsType } from "antd/es/table";
import ingresoIcon from "../assets/icons/ingresoIcon.png";
import egresoIcon from "../assets/icons/egresoIcon.png";
import recaudadoIcon from "../assets/icons/recaudadoIcon.png";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";

const onChange = (
	value: DatePickerProps["value"],
	dateString: [string, string] | string,
) => {
	console.log("Fecha seleccionada: ", dateString);
};

const onOk = (value: DatePickerProps["value"]) => {
	console.log("onOk: ", value);
};

interface DataType {
	key: React.Key;
	destino: string;
	serie: string;
	numero: number;
	asiento: string;
	viaje: string;
	monto: string;
	clientedni: number;
}

const columns: ColumnsType<DataType> = [
	{
		title: "Destino",
		dataIndex: "destino",
	},
	{
		title: "Serie",
		dataIndex: "serie",
	},
	{
		title: "Numero",
		dataIndex: "numero",
	},
	{ title: "Asiento", dataIndex: "asiento" },
	{
		title: "Viaje",
		dataIndex: "viaje",
	},
	{ title: "Monto", dataIndex: "monto" },
	{
		title: "Cliente DNI",
		dataIndex: "clientedni",
	},
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
	data.push({
		key: i,
		destino: `Huancayo ${i}`,
		serie: "B003",
		numero: 3370 + i,
		asiento: `${i + 7}`,
		viaje: `1531${i}`,
		monto: "s/. 30.00",
		clientedni: 75994622 + i,
	});
}

const disabledDate: RangePickerProps["disabledDate"] = (current) => {
	return current && current < dayjs().endOf("day");
};
function Contable() {
	const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

	const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
		console.log("selectedRowKeys changed: ", newSelectedRowKeys);
		setSelectedRowKeys(newSelectedRowKeys);
	};

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};
	return (
		<div className="bg-[#F3F1EF] w-[1450px] h-auto rounded-l-xl">
			<div>
				<div>
					<p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 font-Nunito pt-7 pl-12 mt-4 ">
						Bienvenido de nuevo, Julio
					</p>
					<div className="flex gap-3 ml-12 mt-10">
						<button className="rounded-full  border border-zinc-500 font-Roboto px-5 text-slate-600 hover:bg-zinc-300 active:bg-zinc-400 ease-in-out duration-300 py-1 text-sm">
							Horario 9:30 PM
						</button>
						<button className="rounded-full  border border-zinc-500 font-Roboto px-5  bg-zinc-300 active:bg-zinc-400 ease-in-out text-zinc-600 duration-300 py-1 text-sm">
							Horario 10:00 PM
						</button>
						<button className="rounded-full  border border-zinc-500 font-Roboto px-5 text-slate-600 hover:bg-zinc-300 active:bg-zinc-400 ease-in-out duration-300 py-1 text-sm">
							Horario 9:30 AM
						</button>
						<button className="rounded-full  border border-zinc-500 font-Roboto px-5 text-slate-600 hover:bg-zinc-300 active:bg-zinc-400 ease-in-out duration-300 py-1 text-sm">
							Horario 12:30 PM
						</button>
						<button className="rounded-full  border border-zinc-500 font-Roboto px-5 text-slate-600 hover:bg-zinc-300 active:bg-zinc-400 ease-in-out duration-300 py-1 text-sm">
							Horario 8:00 PM
						</button>
					</div>
					<p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-xl font-bold leading-normal text-gray-800 font-Nunito pt-7 pl-12 ">
						Overview
					</p>
					<div className="flex gap-11 ml-12 mt-5">
						<Card
							style={{ width: 300 }}
							className="shadow-lg duration-200 hover:scale-105 cursor-default"
						>
							<p className="text-sm text-slate-400 font-semibold">
								Balance Total
							</p>
							<p className="text-2xl font-bold pt-2 font-Roboto">S./ 750.00</p>
							<div className="flex gap-2">
								<Image
									src={ingresoIcon}
									alt="ingresoIcon"
									width={22}
									height={22}
									className="mt-[17px]"
								/>
								<p className="text-slate-400 font-Roboto pt-5">
									75% total bruto
								</p>
							</div>
						</Card>
						<Card
							style={{ width: 300 }}
							className="shadow-lg duration-200 hover:scale-105 cursor-default"
						>
							<p className="text-sm text-slate-400 font-semibold">Comision</p>
							<p className="text-2xl font-bold pt-2 font-Roboto">S./ 168.00</p>
							<div className="flex gap-2">
								<Image
									src={egresoIcon}
									alt="egresoIcon"
									width={22}
									height={22}
									className="mt-[17px]"
								/>
								<p className="text-slate-400 font-Roboto pt-5">
									15% total bruto | encomiendas
								</p>
							</div>
						</Card>
						<Card
							style={{ width: 300 }}
							className="shadow-lg duration-200 hover:scale-105 cursor-default"
						>
							<p className="text-sm text-slate-400 font-semibold">
								Encomiendas
							</p>
							<p className="text-2xl font-bold pt-2 font-Roboto">S./ 80.00</p>
							<div className="flex gap-2">
								<Image
									src={ingresoIcon}
									alt="ingresoIcon"
									className="w-[22px] h-6 mt-[17px]"
								/>
								<p className="text-slate-400 font-Roboto pt-5">
									100% encomiendas registradas
								</p>
							</div>
						</Card>
						<Card
							style={{ width: 300 }}
							className="shadow-lg duration-200 hover:scale-105 cursor-default"
						>
							<p className="text-sm text-slate-400 font-semibold">
								Total Bruto
							</p>
							<p className="text-2xl font-bold pt-2 font-Roboto">S./ 1000.00</p>
							<div className="flex gap-2">
								<Image
									src={recaudadoIcon}
									alt="ingresoIcon"
									className="w-[22px] h-6 mt-[17px]"
								/>
								<p className="text-slate-400 font-Roboto pt-5">
									100% boletos vendidos
								</p>
							</div>
						</Card>
					</div>

					<p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-xl font-bold leading-normal text-gray-800 font-Nunito pt-7 pl-12 ">
						Historial de Registros
					</p>
					<div className=" my-4 ml-12 flex gap-3">
						<Space direction="vertical">
							<Input
								placeholder="Buscar"
								className="w-[350px] h-[35px] rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
								suffix={<SearchOutlined className="cursor-pointer" />}
							/>
						</Space>
						<Space direction="vertical" size={12}>
							<DatePicker
								className="cursor-pointer h-[35px] w-56"
								onChange={onChange}
								onOk={onOk}
								placeholder="Selecciona una fecha"
							/>
						</Space>
					</div>
					<Table
						className=" mx-12"
						rowSelection={rowSelection}
						columns={columns}
						dataSource={data}
					/>
				</div>
			</div>
		</div>
	);
}

export default Contable;
