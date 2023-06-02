import React, { useState } from "react";
import { DatePicker } from "antd";
import Image from "next/image";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import llenoIcon from "../assets/icons/lleno-icon.png";
import llenandoIcon from "../assets/icons/llenando-icon.png";
import placaIcon from "../assets/icons/placa-icon.png";
import horaIcon from "../assets/icons/hora-icon.png";
import { PasajesTable } from "~/components/ui/pasajes-table";

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
	const [date, setDate] = useState({
		startDate: null,
		endDate: null,
	});

	const handleDateChange = (newDate: any) => {
		setDate(newDate);
	};
	return (
		<div className="bg-[#F3F1EF] rounded-l-xl w-screen p-7 flex flex-col gap-7 font-Literata">

			<p className="text-xl">
				Viajes Disponibles
			</p>

			<div className="bg-white p-7 flex flex-col gap-7 rounded-lg ">
				<DatePicker
					className="cursor-pointer w-48 font-Literata drop-shadow-sm"
					onChange={onChange}
					onOk={onOk}
					placeholder="Buscar por fecha"
				/>

				<PasajesTable />
			</div>
		</div>


	);
}

export default Pasajes;
