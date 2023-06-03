import { DatePicker, Space, Input, Table, Card, Select } from "antd";
import dayjs from "dayjs";
import "animate.css";
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
	const handleRuta = (value: { value: string; label: React.ReactNode }) => {
		console.log(value);
	};

	return (
		<div >
			<div className="flex flex-col gap-3">


				<p className="text-xl">
					Balance
				</p><div className="flex gap-64 ">
					<div className="flex gap-3">
						<button className=" animate__animated animate__lightSpeedInRight rounded-full  border border-zinc-500 font-Roboto px-5 text-slate-600 hover:bg-zinc-300 active:bg-zinc-400 ease-in-out duration-300 py-1 text-sm">
							Horario 9:30 PM
						</button>
						<button className="animate__animated animate__lightSpeedInRight  rounded-full  border border-zinc-500 font-Roboto px-5  bg-zinc-300 active:bg-zinc-400 ease-in-out text-zinc-600 duration-300 py-1 text-sm">
							Horario 10:00 PM
						</button>
						<button className=" animate__animated animate__lightSpeedInRight  rounded-full  border border-zinc-500 font-Roboto px-5 text-slate-600 hover:bg-zinc-300 active:bg-zinc-400 ease-in-out duration-300 py-1 text-sm">
							Horario 9:30 AM
						</button>
						<button className=" animate__animated animate__lightSpeedInRight  rounded-full  border border-zinc-500 font-Roboto px-5 text-slate-600 hover:bg-zinc-300 active:bg-zinc-400 ease-in-out duration-300 py-1 text-sm">
							Horario 12:30 PM
						</button>

					</div>

					<Select
						placeholder="Elige la ruta"
						style={{ width: 180 }}
						className="drop-shadow-sm"
						onChange={handleRuta}
						options={[
							{
								value: "RUTA-HA",
								label: "Huancayo - Ayacucho",
							},
							{
								value: "RUTA-AH",
								label: "Ayacucho - Huancayo",
							},
						]}
					/>

				</div>
				<div className="flex gap-5">
					<Card
						style={{ width: 260 }}
						className="animate__animated animate__flipInX  shadow-md"
					>
						<p className="text-sm text-slate-400 ">
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
								Viajes | Encomiendas
							</p>
						</div>
					</Card>
					<Card
						style={{ width: 260 }}
						className="animate__animated animate__flipInX shadow-md"
					>
						<p className="text-sm text-slate-400 ">
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
								75% | total bruto
							</p>
						</div>
					</Card>
					<Card
						style={{ width: 260 }}
						className="animate__animated animate__flipInX shadow-md"
					>
						<p className="text-sm text-slate-400 ">Comision</p>
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
								15% | total bruto
							</p>
						</div>
					</Card>
					<Card
						style={{ width: 260 }}
						className="animate__animated animate__flipInX  shadow-md"
					>
						<p className="text-sm text-slate-400 ">
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
								100% encomiendas
							</p>
						</div>
					</Card>

				</div>
			</div> <div className="flex flex-col gap-3">


				<p className=" text-xl ">
					Historial de Registros
				</p>
				<div className="flex gap-3">
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
							placeholder="Buscar por fecha"
						/>
					</Space>
				</div>
				<Table
					columns={columns}
					dataSource={data}
				/>
			</div></div>

	);
}

export default Contable;
