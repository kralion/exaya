import React from "react";
import { DatePicker } from "antd";
import type { DatePickerProps } from "antd/es/date-picker";

import { PasajesTable } from "~/components/ui/venta-pasajes/pasajes-table";
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

function Pasajes() {


	return (

		<div className="flex flex-col gap-7 rounded-lg ">
			<div className="flex justify-between items-center">
				<Title order={4}>
					Venta de Pasajes
				</Title>
				<DatePicker
					className="cursor-pointer self-end w-48 drop-shadow-sm"
					onChange={onChange}
					onOk={onOk}
					placeholder="Búsqueda por fecha"
				/>
			</div>

			<PasajesTable />
		</div>



	);
}

export default Pasajes;
