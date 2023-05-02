import Image from "next/image";

// Importacion de Assets
import panelControl from "../assets/icons/paneldecontrol_icon.png";
import pasajesIcon from "../assets/icons/pasajes_icon.png";
import contableIcon from "../assets/icons/contable_icon.png";
import programacionIcon from "../assets/icons/programacion_icon.png";
import encomiendasIcon from "../assets/icons/encomiendas_icon.png";
import administracionIcon from "../assets/icons/administracion_icon.png";
import logo from "../assets/logo.png";
import userThumbnail from "../assets/users_image/julio_osorio.png";
import Link from "next/link";
import { useRouter } from "next/router";

// Importacion de React Router

function LandingPage() {
	return (
		<div className="flex">
			<div
				data-aos="slide-right"
				data-aos-duration="1000"
				data-aos-delay="200"
				className=" mt-2 mx-8 pr-3"
			>
				<Link href="/panel-de-control">
					<div className=" hover:text-slate-700 flex items-center ">
						<Image width={40} height={40} src={logo} alt="logo" />

						<button className=" text-center text-sm font-bold font-Mansalva mt-1">
							Expreso <br /> Ayacucho
						</button>
					</div>
				</Link>
				<div
					className=" my-12 p-3 flex flex-col justify-center items-center font-Literata"
					id="userVar"
				>
					<Image
						className="drop-shadow-lg rounded-full"
						src={userThumbnail}
						alt="userThumbnail"
						width={70}
					/>
					<h3 className="font-bold">Julio Osorio</h3>
					<span className="bg-red-200 border-2 border-red-400 text-red-500 rounded px-2 pb-0.5 flex items-center text-sm">
						Gerente
					</span>
				</div>
				<div className="text-[#353030]">
					<Link href="/panel-de-control">
						<div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
							<button className="px-6 py-3 hover:bg-[#F3F1EF] active:bg-[#b6b5b4] duration-200 rounded-lg">
								<div className="flex gap-3">
									<Image
										src={panelControl}
										className="w-[20px] h-[22px]"
										alt="home"
									/>
									<h3 className="text-center  ">Panel de Control</h3>
								</div>
							</button>
						</div>
					</Link>
					<Link href="/pasajes">
						<div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
							<button className="px-6 py-3 hover:bg-[#F3F1EF] active:bg-[#b6b5b4] duration-200 rounded-lg">
								<div className="flex gap-3">
									<Image
										src={pasajesIcon}
										className="w-[20px] h-[22px]"
										alt="home"
									/>
									<h3 className="text-center  ">Venta de Pasajes</h3>
								</div>
							</button>
						</div>
					</Link>
					<Link href="/contable">
						<div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
							<button className="px-6 py-3 hover:bg-[#F3F1EF] active:bg-[#b6b5b4] duration-200 rounded-lg">
								<div className="flex gap-3">
									<Image
										src={contableIcon}
										className="w-[20px] h-[22px]"
										alt="home"
									/>
									<h3 className="text-center  ">Contable</h3>
								</div>
							</button>
						</div>
					</Link>

					<div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
						<div className="group inline-block">
							<button className="px-6 py-3 rounded-lg  hover:bg-[#F3F1EF] flex items-center ">
								<div className="flex gap-3">
									<Image
										src={programacionIcon}
										className="w-[20px] h-[22px]"
										alt="home"
									/>
									<span className="text-center">Programacion</span>
								</div>

								<span className="pl-5">
									<svg
										className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</span>
							</button>
							<ul className="bg-white hover:shadow-xl rounded-lg mt-0.5 transform border scale-0 group-hover:scale-100 absolute transition font-semibold duration-150 ease-in-out origin-top">
								<Link href="/programacion-viajes">
									<button className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
										Viajes
									</button>
								</Link>

								<Link href="/programacion-bus-conductor">
									<button className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
										Bus - Conductor
									</button>
								</Link>
								<Link href="/programacion-comprobantes">
									<button className="rounded-md w-full text-left pl-5 py-3 hover:bg-[#e6e4e3] active:bg-[#b6b5b4] duration-200">
										Comprobantes
									</button>
								</Link>
							</ul>
						</div>
					</div>

					<Link href="/encomiendas">
						<div className="flex flex-col gap-2 mb-2 font-Literata font-bold text-[14px]">
							<button className="px-6 py-3 hover:bg-[#F3F1EF] active:bg-[#b6b5b4] duration-200 rounded-lg">
								<div className="flex gap-3">
									<Image
										src={encomiendasIcon}
										className="w-[20px] h-[22px]"
										alt="home"
									/>
									<h3 className="text-center  ">Encomiendas</h3>
								</div>
							</button>
						</div>
					</Link>
					<Link href="/administracion">
						<div className="flex flex-col gap-2 font-Literata font-bold text-[14px]">
							<button className="px-6 py-3 hover:bg-[#F3F1EF] active:bg-[#b6b5b4] duration-200 rounded-lg">
								<div className="flex gap-3">
									<Image
										src={administracionIcon}
										className="w-[20px] h-[22px]"
										alt="home"
									/>
									<h3 className="text-center  ">Administracion</h3>
								</div>
							</button>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
