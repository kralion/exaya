import React, { useState } from "react";
import { Space, DatePicker, Select, TimePicker } from "antd";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import placaIcon from "../../assets/icons/placa-icon.png";
import horaIcon from "../../assets/icons/hora-icon.png";
import Image from "next/image";
import style from "../../styles/extra.module.css";

const format = "HH:mm";

const handleRuta = (value: { value: string; label: React.ReactNode }) => {
	console.log(value);
};
const handleBus = (value: { value: string; label: React.ReactNode }) => {
	console.log(value);
};

const buses = ["BG8-145", "BYZ-148", "BG8-145", "BYZ-148"];

const onTimeChange = (time: Dayjs, timeString: string) => {
	console.log("Tiempo seleccionado: ", timeString, time);
};
const onDateChange = (
	value: DatePickerProps["value"],
	dateString: [string, string] | string,
) => {
	console.log("Fecha seleccionada: ", dateString);
};
const onOk = (value: DatePickerProps["value"]) => {
	console.log("onOk: ", value);
};

function ProgramacionViajes() {
	return (
		<div className="bg-[#F3F1EF] w-[1450px] h-auto min-h-screen rounded-l-xl">
			<div className="mx-10 my-5">
				<div className="sm:px-6 w-full">
					<p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-xl font-bold leading-normal text-gray-800 font-Nunito py-7 pl-5 ">
						PROGRAMAR VIAJE
					</p>

					<div className="bg-white py-2 mb-5 pb-5 px-4 pl-16  rounded-lg drop-shadow-lg font-Roboto">
						<form action="">
							<div className="mt-2 overflow-x-auto flex gap-7">
								<div className="my-2">
									<label htmlFor="rutaProgramacion" className=" pl-3">
										Ruta :
									</label>
									<br />
									<Select
										placeholder="Selecciona la ruta"
										style={{ width: 240 }}
										className="mt-2 ml-2 font-semibold"
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
								<div className="my-2">
									<label htmlFor="rutaProgramacion" className="pl-3">
										Bus :
									</label>
									<br />
									<Select
										placeholder="Selecciona el BUS"
										style={{ width: 240 }}
										className="mt-2 ml-2 font-semibold"
										onChange={handleBus}
										options={[
											{
												value: "BG8-145",
												label: "BG8-145",
											},
											{
												value: "BYZ-148",
												label: "BYZ-148",
											},
											{
												value: "BG8-146",
												label: "BG8-146",
											},
											{
												value: "BYZ-147",
												label: "BYZ-147",
											},
										]}
									/>
								</div>
								<div className="font-Roboto space-y-[6px] pt-[10px]">
									<label className="pl-1 text-[16px]" htmlFor="datepicker">
										Fecha :{" "}
									</label>
									<br />
									<DatePicker
										className=" cursor-pointer font-semibold w-56"
										onChange={onDateChange}
										onOk={onOk}
										placeholder="Selecciona la fecha"
									/>
								</div>
								<div className="">
									<p className="pt-3 pl-1">Hora :</p>
									<TimePicker
										format={format}
										onChange={onTimeChange}
										className="cursor-pointer w-48 mt-1 font-semibold "
										defaultOpenValue={dayjs("07:00", format)}
										minuteStep={15}
										placeholder="Selecciona la hora"
									/>
								</div>

								<div className="">
									<button className="btn-crear mt-[35px] ml-12 text-sm">
										Crear
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10 rounded-lg drop-shadow-lg">
						<div className="mt-7 overflow-x-auto">
							<table className="w-full whitespace-nowrap">
								<thead>
									<tr className="focus:outline-none h-16 border border-gray-100 rounded">
										<th className="pl-12 text-sm font-medium leading-none text-gray-500">
											Viaje ID
										</th>
										<th className="pr-16 text-sm font-medium leading-none text-gray-500">
											Ruta
										</th>
										<th className="text-sm font-medium leading-none text-gray-500">
											Bus
										</th>
										<th className="text-sm font-medium leading-none text-gray-500">
											Fecha
										</th>
										<th className=" text-sm font-medium leading-none text-gray-500">
											Hora
										</th>
										<th className=" text-sm font-medium leading-none text-gray-500">
											Estado
										</th>
										<th className=" text-sm font-medium leading-none text-gray-500">
											Acción
										</th>
									</tr>
								</thead>

								<tbody>
									<tr className="focus:outline-none focus:text-indigo-600 h-16 border border-gray-100 hover:bg-gray-100 rounded">
										<td>
											<div className="ml-12">
												<span className="text-gray-600 text-sm">1474</span>
											</div>
										</td>
										<td className="w-96">
											<div className="flex items-center pl-10">
												<p className="text-base font-medium leading-none text-gray-700 mr-2">
													Huancayo - Ayacucho
												</p>
											</div>
										</td>
										<td className="pr-10">
											<div className="flex items-center">
												<Image
													src={placaIcon}
													className="w-[20px] h-[20px] mt-0.5"
													alt=""
												/>
												<p className="text-sm leading-none text-gray-600 ml-2">
													C2V-12T
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
										<td className="pl-10 w-44">
											<div className=" flex items-center">
												<Image
													src={horaIcon}
													className="w-[16px] h-[16px] mt-0.5"
													alt=""
												/>
												<p className="text-sm leading-none text-gray-600 ml-2">
													08:30
													<span className="bg-cyan-500 opacity-70 ml-2 px-1.5 pb-0.5 rounded-md text-white font-bold tracking-wide ">
														am
													</span>
												</p>
											</div>
										</td>
										<td>
											<div className="bg-green-200 py-3 rounded-full text-center text-green-600 text-sm font-semibold">
												Habilitado
											</div>
										</td>
										<td>
											<div className="flex justify-center gap-7">
												<button className="styled-btn font-bold">Editar</button>
												<button
													className={`${style.extrastyledbutton} duration-300 pr-3`}
												>
													<svg
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
														fill="#5F6061"
														height="22px"
														width="22px"
														stroke="#323842"
														className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
													>
														<g id="SVGRepo_bgCarrier" stroke-width="1" />
														<g id="SVGRepo_iconCarrier">
															<title>delete_2_line</title>{" "}
															<g
																id="页面-1"
																stroke="none"
																stroke-width="1"
																fill="none"
																fill-rule="evenodd"
															>
																<g
																	id="System"
																	transform="translate(-576.000000, -192.000000)"
																	fill-rule="nonzero"
																>
																	<g
																		id="delete_2_line"
																		transform="translate(576.000000, 192.000000)"
																	>
																		<path
																			d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
																			id="MingCute"
																			fill-rule="nonzero"
																		/>
																		<path
																			d="M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z"
																			id="形状"
																			fill="#5F6061"
																		/>
																	</g>
																</g>
															</g>
														</g>
													</svg>
												</button>
											</div>
										</td>
									</tr>
									<tr className="h-3" />
									<tr className="focus:outline-none focus:text-indigo-600 h-16 border border-gray-100 hover:bg-gray-100 rounded">
										<td>
											<div className="ml-12">
												<span className="text-gray-600 text-sm">1474</span>
											</div>
										</td>
										<td className="w-96">
											<div className="flex items-center pl-10">
												<p className="text-base font-medium leading-none text-gray-700 mr-2">
													Huancayo - Ayacucho
												</p>
											</div>
										</td>
										<td className="pr-10">
											<div className="flex items-center">
												<Image
													src={placaIcon}
													className="w-[20px] h-[20px] mt-0.5"
													alt=""
												/>
												<p className="text-sm leading-none text-gray-600 ml-2">
													C2V-12T
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
										<td className="pl-10 w-44">
											<div className=" flex items-center">
												<Image
													src={horaIcon}
													className="w-[16px] h-[16px] mt-0.5"
													alt=""
												/>
												<p className="text-sm leading-none text-gray-600 ml-2">
													08:30
													<span className="bg-cyan-500 opacity-70 ml-2 px-1.5 pb-0.5 rounded-md text-white font-bold tracking-wide ">
														am
													</span>
												</p>
											</div>
										</td>
										<td>
											<div className="bg-green-200 py-3 rounded-full text-center text-green-600 text-sm font-semibold">
												Habilitado
											</div>
										</td>
										<td>
											<div className="flex justify-center gap-7">
												<button className="styled-btn font-bold">Editar</button>
												<button
													className={`${style.extrastyledbutton} duration-300 pr-3`}
												>
													<svg
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
														fill="#5F6061"
														height="22px"
														width="22px"
														stroke="#323842"
														className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
													>
														<g id="SVGRepo_bgCarrier" stroke-width="1" />
														<g id="SVGRepo_iconCarrier">
															<title>delete_2_line</title>{" "}
															<g
																id="页面-1"
																stroke="none"
																stroke-width="1"
																fill="none"
																fill-rule="evenodd"
															>
																<g
																	id="System"
																	transform="translate(-576.000000, -192.000000)"
																	fill-rule="nonzero"
																>
																	<g
																		id="delete_2_line"
																		transform="translate(576.000000, 192.000000)"
																	>
																		<path
																			d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
																			id="MingCute"
																			fill-rule="nonzero"
																		/>
																		<path
																			d="M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z"
																			id="形状"
																			fill="#5F6061"
																		/>
																	</g>
																</g>
															</g>
														</g>
													</svg>
												</button>
											</div>
										</td>
									</tr>
									<tr className="h-3" />
									<tr className="focus:outline-none focus:text-indigo-600 h-16 border border-gray-100 hover:bg-gray-100 rounded">
										<td>
											<div className="ml-12">
												<span className="text-gray-600 text-sm">1480</span>
											</div>
										</td>
										<td className="w-96">
											<div className="flex items-center pl-10">
												<p className="text-base font-medium leading-none text-gray-700 mr-2">
													Ayacucho-Huancayo
												</p>
											</div>
										</td>
										<td className="pr-10">
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
										<td className="pl-10 w-44">
											<div className=" flex items-center">
												<Image
													src={horaIcon}
													className="w-[16px] h-[16px] mt-0.5"
													alt=""
												/>
												<p className="text-sm leading-none text-gray-600 ml-2">
													09:30
													<span className="bg-green-500 opacity-70 ml-2 px-1.5 pb-0.5 rounded-md text-white font-bold tracking-wide ">
														am
													</span>
												</p>
											</div>
										</td>
										<td>
											<div className="bg-red-200 py-3 rounded-full text-center text-red-600 text-sm font-semibold">
												Desactivado
											</div>
										</td>
										<td>
											<div className="flex justify-center gap-7">
												<button className="styled-btn font-bold">Editar</button>
												<button
													className={`${style.extrastyledbutton} duration-300 pr-3`}
												>
													<svg
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
														fill="#5F6061"
														height="22px"
														width="22px"
														stroke="#323842"
														className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
													>
														<g id="SVGRepo_bgCarrier" stroke-width="1" />
														<g id="SVGRepo_iconCarrier">
															<title>delete_2_line</title>{" "}
															<g
																id="页面-1"
																stroke="none"
																stroke-width="1"
																fill="none"
																fill-rule="evenodd"
															>
																<g
																	id="System"
																	transform="translate(-576.000000, -192.000000)"
																	fill-rule="nonzero"
																>
																	<g
																		id="delete_2_line"
																		transform="translate(576.000000, 192.000000)"
																	>
																		<path
																			d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
																			id="MingCute"
																			fill-rule="nonzero"
																		/>
																		<path
																			d="M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z"
																			id="形状"
																			fill="#5F6061"
																		/>
																	</g>
																</g>
															</g>
														</g>
													</svg>
												</button>
											</div>
										</td>
									</tr>
									<tr className="h-3" />
									<tr className="focus:outline-none focus:text-indigo-600 h-16 border border-gray-100 hover:bg-gray-100 rounded">
										<td>
											<div className="ml-12">
												<span className="text-gray-600 text-sm">1474</span>
											</div>
										</td>
										<td className="w-96">
											<div className="flex items-center pl-10">
												<p className="text-base font-medium leading-none text-gray-700 mr-2">
													Huancayo - Ayacucho
												</p>
											</div>
										</td>
										<td className="pr-10">
											<div className="flex items-center">
												<Image
													src={placaIcon}
													className="w-[20px] h-[20px] mt-0.5"
													alt=""
												/>
												<p className="text-sm leading-none text-gray-600 ml-2">
													C2V-12T
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
										<td className="pl-10 w-44">
											<div className=" flex items-center">
												<Image
													src={horaIcon}
													className="w-[16px] h-[16px] mt-0.5"
													alt=""
												/>
												<p className="text-sm leading-none text-gray-600 ml-2">
													08:30
													<span className="bg-cyan-500 opacity-70 ml-2 px-1.5 pb-0.5 rounded-md text-white font-bold tracking-wide ">
														am
													</span>
												</p>
											</div>
										</td>
										<td>
											<div className="bg-green-200 py-3 rounded-full text-center text-green-600 text-sm font-semibold">
												Habilitado
											</div>
										</td>
										<td>
											<div className="flex justify-center gap-7">
												<button className="styled-btn font-bold">Editar</button>
												<button
													className={`${style.extrastyledbutton} duration-300 pr-3`}
												>
													<svg
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
														fill="#5F6061"
														height="22px"
														width="22px"
														stroke="#323842"
														className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
													>
														<g id="SVGRepo_bgCarrier" stroke-width="1" />
														<g id="SVGRepo_iconCarrier">
															<title>delete_2_line</title>{" "}
															<g
																id="页面-1"
																stroke="none"
																stroke-width="1"
																fill="none"
																fill-rule="evenodd"
															>
																<g
																	id="System"
																	transform="translate(-576.000000, -192.000000)"
																	fill-rule="nonzero"
																>
																	<g
																		id="delete_2_line"
																		transform="translate(576.000000, 192.000000)"
																	>
																		<path
																			d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
																			id="MingCute"
																			fill-rule="nonzero"
																		/>
																		<path
																			d="M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z"
																			id="形状"
																			fill="#5F6061"
																		/>
																	</g>
																</g>
															</g>
														</g>
													</svg>
												</button>
											</div>
										</td>
									</tr>

									<tr className="h-3" />
									<tr className="focus:outline-none focus:text-indigo-600 h-16 border border-gray-100 hover:bg-gray-100 rounded">
										<td>
											<div className="ml-12">
												<span className="text-gray-600 text-sm">1478</span>
											</div>
										</td>
										<td className="w-96">
											<div className="flex items-center pl-10">
												<p className="text-base font-medium leading-none text-gray-700 mr-2">
													Huancayo - Ayacucho
												</p>
											</div>
										</td>
										<td className="pr-10">
											<div className="flex items-center">
												<Image
													src={placaIcon}
													className="w-[20px] h-[20px] mt-0.5"
													alt=""
												/>
												<p className="text-sm leading-none text-gray-600 ml-2">
													B9Z-14C
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
										<td className="pl-10 w-44">
											<div className=" flex items-center">
												<Image
													src={horaIcon}
													className="w-[16px] h-[16px] mt-0.5"
													alt=""
												/>
												<p className="text-sm leading-none text-gray-600 ml-2">
													09:30
													<span className="bg-green-500 opacity-70 ml-2 px-1.5 pb-0.5 rounded-md text-white font-bold tracking-wide ">
														am
													</span>
												</p>
											</div>
										</td>
										<td>
											<div className="bg-orange-200 py-3 rounded-full text-center text-orange-600 text-sm font-semibold">
												Suspendido
											</div>
										</td>
										<td>
											<div className="flex justify-center gap-7">
												<button className="styled-btn font-bold">Editar</button>
												<button
													className={`${style.extrastyledbutton} duration-300 pr-3`}
												>
													<svg
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
														fill="#5F6061"
														height="22px"
														width="22px"
														stroke="#323842"
														className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
													>
														<g id="SVGRepo_bgCarrier" stroke-width="1" />
														<g id="SVGRepo_iconCarrier">
															<title>delete_2_line</title>{" "}
															<g
																id="页面-1"
																stroke="none"
																stroke-width="1"
																fill="none"
																fill-rule="evenodd"
															>
																<g
																	id="System"
																	transform="translate(-576.000000, -192.000000)"
																	fill-rule="nonzero"
																>
																	<g
																		id="delete_2_line"
																		transform="translate(576.000000, 192.000000)"
																	>
																		<path
																			d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
																			id="MingCute"
																			fill-rule="nonzero"
																		/>
																		<path
																			d="M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z"
																			id="形状"
																			fill="#5F6061"
																		/>
																	</g>
																</g>
															</g>
														</g>
													</svg>
												</button>
											</div>
										</td>
									</tr>

									<tr className="h-3" />
									<tr className="focus:outline-none focus:text-indigo-600 h-16 border border-gray-100 hover:bg-gray-100 rounded">
										<td>
											<div className="ml-12">
												<span className="text-gray-600 text-sm">1474</span>
											</div>
										</td>
										<td className="w-96">
											<div className="flex items-center pl-10">
												<p className="text-base font-medium leading-none text-gray-700 mr-2">
													Huancayo - Ayacucho
												</p>
											</div>
										</td>
										<td className="pr-10">
											<div className="flex items-center">
												<Image
													src={placaIcon}
													className="w-[20px] h-[20px] mt-0.5"
													alt=""
												/>
												<p className="text-sm leading-none text-gray-600 ml-2">
													C2V-12T
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
										<td className="pl-10 w-44">
											<div className=" flex items-center">
												<Image
													src={horaIcon}
													className="w-[16px] h-[16px] mt-0.5"
													alt=""
												/>
												<p className="text-sm leading-none text-gray-600 ml-2">
													08:30
													<span className="bg-cyan-500 opacity-70 ml-2 px-1.5 pb-0.5 rounded-md text-white font-bold tracking-wide ">
														am
													</span>
												</p>
											</div>
										</td>
										<td>
											<div className="bg-green-200 py-3 rounded-full text-center text-green-600 text-sm font-semibold">
												Habilitado
											</div>
										</td>
										<td>
											<div className="flex justify-center gap-7">
												<button className="styled-btn font-bold">Editar</button>
												<button
													className={`${style.extrastyledbutton} duration-300 pr-3`}
												>
													<svg
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
														fill="#5F6061"
														height="22px"
														width="22px"
														stroke="#323842"
														className="hover:fill-current hover:text-gray-600 duration-300 hover:stroke-current hover:scale-125 transform-gpu"
													>
														<g id="SVGRepo_bgCarrier" stroke-width="1" />
														<g id="SVGRepo_iconCarrier">
															<title>delete_2_line</title>{" "}
															<g
																id="页面-1"
																stroke="none"
																stroke-width="1"
																fill="none"
																fill-rule="evenodd"
															>
																<g
																	id="System"
																	transform="translate(-576.000000, -192.000000)"
																	fill-rule="nonzero"
																>
																	<g
																		id="delete_2_line"
																		transform="translate(576.000000, 192.000000)"
																	>
																		<path
																			d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
																			id="MingCute"
																			fill-rule="nonzero"
																		/>
																		<path
																			d="M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z"
																			id="形状"
																			fill="#5F6061"
																		/>
																	</g>
																</g>
															</g>
														</g>
													</svg>
												</button>
											</div>
										</td>
									</tr>
									<tr className="h-3">
										<td className="h-3" />
										<td className="h-3" />
										<td className="h-3" />
										<td className="h-3" />

										<td className="h-3" colSpan={5}>
											<div className=" mt-5 bg-white py-3">
												<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
													<div>
														<nav
															className="isolate inline-flex pl-64 rounded-md shadow-sm"
															aria-label="Pagination"
														>
															<a
																href="#"
																className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
																rel="noreferrer"
															>
																<svg
																	className="h-5 w-5"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	aria-hidden="true"
																>
																	<path
																		fill-rule="evenodd"
																		d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
																		clip-rule="evenodd"
																	/>
																</svg>
															</a>

															<a
																href="google.com"
																aria-current="page"
																className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
															>
																1
															</a>
															<a
																href="google.com"
																className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
															>
																2
															</a>
															<a
																href="google.com"
																className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
															>
																3
															</a>
															<span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
																...
															</span>
															<a
																href="google.com"
																className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
															>
																8
															</a>
															<a
																href="google.com"
																className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
															>
																9
															</a>
															<a
																href="google.com"
																className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
															>
																10
															</a>
															<a
																href="google.com"
																className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
															>
																<svg
																	className="h-5 w-5"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	aria-hidden="true"
																>
																	<path
																		fill-rule="evenodd"
																		d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
																		clip-rule="evenodd"
																	/>
																</svg>
															</a>
														</nav>
													</div>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProgramacionViajes;
