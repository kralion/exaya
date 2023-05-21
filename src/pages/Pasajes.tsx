import React, { useState } from "react";
import { Space, DatePicker } from "antd";
import Image from "next/image";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import llenoIcon from "../assets/icons/lleno-icon.png";
import llenandoIcon from "../assets/icons/llenando-icon.png";
import placaIcon from "../assets/icons/placa-icon.png";
import horaIcon from "../assets/icons/hora-icon.png";

import style from "../styles/extra.module.css";

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

			<div className="bg-white p-7 rounded-lg drop-shadow-md">
				<DatePicker
					className="cursor-pointer w-48 font-Literata drop-shadow-sm"
					onChange={onChange}
					onOk={onOk}
					placeholder="Buscar por fecha"
				/><div className="mt-7 overflow-x-auto">
					<table className="w-full whitespace-nowrap">
						<thead className="text-sm text-gray-700">
							<tr >
								<th >
									Nº
								</th>
								<th >
									Ruta
								</th>
								<th >
									Bus
								</th>
								<th >
									Fecha
								</th>
								<th >
									Hora
								</th>
								<th>
									Acciones
								</th>
							</tr>
							<br />
						</thead>

						<tbody className="text-gray-500 text-center align-middle">
							<tr className="h-16 border border-gray-100 align-middle self-center place-items-center justify-items-center hover:bg-gray-100/50">
								<td>
									1475

								</td>
								<td >


									Huancayo - Ayacucho

									<Image
										src={llenandoIcon}

										width={15}
										alt="icon"
									/>

								</td>
								<td >

									<Image
										src={placaIcon}
										width={20}
										alt="icon"
									/>

									ABG-14R


								</td>
								<td >

									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											d="M7.5 5H16.6667"
											stroke="#52525B"
											stroke-width="1.25"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M7.5 10H16.6667"
											stroke="#52525B"
											stroke-width="1.25"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M7.5 15H16.6667"
											stroke="#52525B"
											stroke-width="1.25"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M4.16669 5V5.00667"
											stroke="#52525B"
											stroke-width="1.25"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M4.16669 10V10.0067"
											stroke="#52525B"
											stroke-width="1.25"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M4.16669 15V15.0067"
											stroke="#52525B"
											stroke-width="1.25"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>

									05-01-2021


								</td>
								<td >

									<Image
										src={horaIcon}
										width={16}
										alt="icon"
									/>

									08:00{" "}
									<span className="bg-cyan-500 opacity-70 px-1.5 pb-0.5 rounded-md text-white  tracking-wide ">
										pm
									</span>


								</td>

								<td >
									<button className={style.styledbtn}>
										Registrar
									</button>
								</td>
								<td>
									<button className="eye-button pt-2 duration-300 pr-3">
										<svg
											fill="#5F6061"
											height="22px"
											width="22px"
											version="1.1"
											id="Layer_1"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											enable-background="new 0 0 512 512"
											stroke="#323842"
											className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
										>
											<g id="SVGRepo_bgCarrier" stroke-width="0" />
											<g id="SVGRepo_iconCarrier">
												{" "}
												<path d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128 s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96 c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z" />{" "}
											</g>
										</svg>
									</button>

								</td>
							</tr>
							<tr className="h-3" />
							<tr className="focus:outline-none  h-16 border border-gray-100 rounded hover:bg-gray-100">
								<td>
									<div className="ml-5">
										<span className="text-gray-600 text-sm">1479</span>
									</div>
								</td>
								<td className="focus:text-indigo-600 ">
									<div className="flex items-center pl-10">
										<p className="text-base font-medium leading-none text-gray-700 mr-2">
											Ayacucho - Huancayo
										</p>
									</div>
								</td>
								<td className="pl-20">
									<div className="flex items-center">
										<Image
											src={placaIcon}
											className="w-[20px] h-[20px] mt-0.5"
											alt=""
										/>
										<p className="text-sm leading-none text-gray-600 ml-2">
											CV2-B9Z
										</p>
									</div>
								</td>
								<td className="pl-5">
									<div className="flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
										>
											<path
												d="M7.5 5H16.6667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M7.5 10H16.6667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M7.5 15H16.6667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M4.16669 5V5.00667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M4.16669 10V10.0067"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M4.16669 15V15.0067"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p className="text-sm leading-none text-gray-600 ml-2">
											04-01-2021
										</p>
									</div>
								</td>
								<td className="pl-5">
									<div className="flex items-center">
										<Image
											src={horaIcon}
											className="w-[16px] h-[16px] mt-0.5"
											alt=""
										/>
										<p className="text-sm leading-none text-gray-600 ml-2">
											08:00{" "}
											<span className="bg-cyan-500 opacity-70 px-1.5 pb-0.5 ml-1 rounded-md text-white  tracking-wide ">
												pm
											</span>
										</p>
									</div>
								</td>
								<td className="pl-4">
									<button className={style.styledbtn}>
										Registrar
									</button>
								</td>
								<td>
									<div>
										<button className="eye-button pt-2 duration-300 pr-3 ">
											<svg
												fill="#5F6061"
												height="22px"
												width="22px"
												version="1.1"
												id="Layer_1"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												enable-background="new 0 0 512 512"
												stroke="#323842"
												className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
											>
												<g id="SVGRepo_bgCarrier" stroke-width="0" />
												<g id="SVGRepo_iconCarrier">
													{" "}
													<path d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128 s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96 c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z" />{" "}
												</g>
											</svg>
										</button>
									</div>
								</td>
							</tr>
							<tr className="h-3" />
							<tr className="focus:outline-none focus:text-indigo-600 h-16 border border-gray-100 rounded hover:bg-gray-100">
								<td>
									<div className="ml-5">
										<span className="text-gray-600 text-sm">1480</span>
									</div>
								</td>
								<td className="">
									<div className="flex items-center pl-10">
										<p className="text-base font-medium leading-none text-gray-700 mr-2">
											Huancayo - Ayacucho
										</p>
									</div>
								</td>
								<td className="pl-20">
									<div className="flex items-center">
										<Image
											src={placaIcon}
											className="w-[20px] h-[20px] mt-0.5"
											alt=""
										/>
										<p className="text-sm leading-none text-gray-600 ml-2">
											B8G-1TY
										</p>
									</div>
								</td>
								<td className="pl-5">
									<div className="flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
										>
											<path
												d="M7.5 5H16.6667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M7.5 10H16.6667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M7.5 15H16.6667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M4.16669 5V5.00667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M4.16669 10V10.0067"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M4.16669 15V15.0067"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p className="text-sm leading-none text-gray-600 ml-2">
											06-01-2021
										</p>
									</div>
								</td>
								<td className="pl-5">
									<div className="flex items-center">
										<Image
											src={horaIcon}
											className="w-[16px] h-[16px] mt-0.5"
											alt=""
										/>
										<p className="text-sm leading-none text-gray-600 ml-2">
											09:30
											<span className="bg-green-500 opacity-70 ml-2 px-1.5 pb-0.5 rounded-md text-white  tracking-wide ">
												am
											</span>
										</p>
									</div>
								</td>

								<td className="pl-4">
									<button className={style.styledbtn}>
										Registrar
									</button>
								</td>
								<td>
									<div>
										<button className="eye-button pt-2 duration-300 pr-3">
											<svg
												fill="#5F6061"
												height="22px"
												width="22px"
												version="1.1"
												id="Layer_1"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												enable-background="new 0 0 512 512"
												stroke="#323842"
												className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
											>
												<g id="SVGRepo_bgCarrier" stroke-width="0" />
												<g id="SVGRepo_iconCarrier">
													{" "}
													<path d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128 s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96 c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z" />{" "}
												</g>
											</svg>
										</button>
									</div>
								</td>
							</tr>
							<tr className="h-3" />
							<tr className="focus:outline-none h-16 border border-gray-100 rounded hover:bg-gray-100">
								<td>
									<div className="ml-5">
										<span className="text-gray-600 text-sm">1484</span>
									</div>
								</td>
								<td className="">
									<div className="flex items-center pl-10">
										<p className="text-base font-medium leading-none text-gray-700 mr-2">
											Ayacucho - Huancayo
										</p>
										<Image
											src={llenoIcon}
											className="w-[15px] h-[15px] mt-0.5 ml-2"
											alt=""
										/>
									</div>
								</td>
								<td className="pl-20">
									<div className="flex items-center">
										<Image
											src={placaIcon}
											className="w-[20px] h-[20px] mt-0.5"
											alt=""
										/>
										<p className="text-sm leading-none text-gray-600 ml-2">
											B9Y-15Q
										</p>
									</div>
								</td>
								<td className="pl-5">
									<div className="flex items-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
										>
											<path
												d="M7.5 5H16.6667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M7.5 10H16.6667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M7.5 15H16.6667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M4.16669 5V5.00667"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M4.16669 10V10.0067"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M4.16669 15V15.0067"
												stroke="#52525B"
												stroke-width="1.25"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
										<p className="text-sm leading-none text-gray-600 ml-2">
											05-01-2021
										</p>
									</div>
								</td>

								<td className="pl-5">
									<div className="flex items-center">
										<Image
											src={horaIcon}
											className="w-[16px] h-[16px] mt-0.5"
											alt=""
										/>
										<p className="text-sm leading-none text-gray-600 ml-2">
											08:00{" "}
											<span className="bg-cyan-500 opacity-70 px-1.5 pb-0.5 ml-1 rounded-md text-white  tracking-wide ">
												pm
											</span>
										</p>
									</div>
								</td>

								<td className="pl-4">
									<button className={style.styledbtn}>
										Registrar
									</button>
								</td>

								<td>
									<div>
										<button className="eye-button pt-2 duration-300 pr-3">
											<svg
												fill="#5F6061"
												height="22px"
												width="22px"
												version="1.1"
												id="Layer_1"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												enable-background="new 0 0 512 512"
												stroke="#323842"
												className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
											>
												<g id="SVGRepo_bgCarrier" stroke-width="0" />
												<g id="SVGRepo_iconCarrier">
													{" "}
													<path d="M0,226v32c128,192,384,192,512,0v-32C384,34,128,34,0,226z M256,370c-70.7,0-128-57.3-128-128s57.3-128,128-128 s128,57.3,128,128S326.7,370,256,370z M256,170c0-8.3,1.7-16.1,4.3-23.6c-1.5-0.1-2.8-0.4-4.3-0.4c-53,0-96,43-96,96s43,96,96,96 c53,0,96-43,96-96c0-1.5-0.4-2.8-0.4-4.3c-7.4,2.6-15.3,4.3-23.6,4.3C288.2,242,256,209.8,256,170z" />{" "}
												</g>
											</svg>
										</button>
									</div>
								</td>
							</tr>
							<tr className="h-3" />
						</tbody>
					</table>
				</div>
			</div>
		</div>


	);
}

export default Pasajes;
