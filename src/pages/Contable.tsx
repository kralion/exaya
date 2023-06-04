import { DatePicker, Space, Input, Table, Select, Typography } from "antd";
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
import type { PasajesDataType } from "~/interfaces/interfaces";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { RoundedButton } from "~/components/ui/rounded-button";
import { ContableCard } from "~/components/ui/contable-card";
import { Title } from "@mantine/core";

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
export default function Contable() {
	const handleRuta = (value: { value: string; label: React.ReactNode }) => {
		console.log(value);
	};

	return (
		<div>
			<div className="flex flex-col gap-3.5">

				<Title order={4} className="text-slate-800">
					Turnos
				</Title>
				<div className="flex justify-between ">

					<div className="flex gap-[14px] items-center">
						<RoundedButton horaSalida="20:15" />
						<RoundedButton horaSalida="20:30" />
						<RoundedButton horaSalida="21:00" />
					</div>

					<Select
						placeholder="Ruta"
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
				<div className="flex gap-7">
					<ContableCard cardTitle="Recaudado"
						cardValue={1000}
						cardIcon="https://img.icons8.com/?size=1x&id=104073&format=png"
						cardConcept="Viajes | Encomiendas"

					/>
					<ContableCard cardTitle="Ingresos"
						cardValue={1000}
						cardIcon="https://img.icons8.com/?size=1x&id=53863&format=png"
						cardConcept="75% recaudado"
					/>
					<ContableCard cardTitle="Comision"
						cardValue={168}
						cardIcon="https://img.icons8.com/?size=1x&id=Yljd2UCqSpbe&format=png"
						cardConcept="15% | total bruto"
					/>
					<ContableCard cardTitle="Encomiendas"
						cardValue={80}
						cardIcon="https://img.icons8.com/?size=1x&id=13133&format=png"
						cardConcept="Ingresos - Egresos"
					/>
				</div>
			</div> <div className="space-y-7">
				<Title order={4} className="text-slate-800 pt-7 tracking-tight">
					Historial de Registros
				</Title>
				<div className='space-y-3.5'>

					<div className="flex gap-7">
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
						className="shadow-md"
						columns={columns}
						dataSource={data}
					/>
				</div>
			</div>
		</div>

	);
}

