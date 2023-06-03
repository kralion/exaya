import React, { useState } from "react";
import { DatePicker } from "antd";
import Image from "next/image";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";

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

		<div className="p-7 flex flex-col gap-7 rounded-lg ">
			<DatePicker
				className="cursor-pointer self-end w-48 drop-shadow-sm"
				onChange={onChange}
				onOk={onOk}
				placeholder="Búsqueda por fecha"
			/>

			<PasajesTable />
		</div>



	);
}

export default Pasajes;
