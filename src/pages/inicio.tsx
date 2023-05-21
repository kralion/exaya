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

function LandingPage() {
	const router = useRouter();

	return (

		<div
			data-aos="slide-right"
			data-aos-duration="1000"
			data-aos-delay="200"
			className="h-screen flex flex-col text-zinc-900 gap-16 p-2 font-Literata "

		>

			<Link href="/panel-de-control">
				<div className={`hover:text-slate-700 flex items-center ${router.pathname === '/panel-de-control' ? 'active' : ''} `}>
					<Image width={40} height={40} src={logo} alt="logo" />

					<button className=" text-center text-sm font-bold font-Mansalva mt-1">
						Expreso <br /> Ayacucho
					</button>
				</div>
			</Link>

			<div
				className="text-center text-sm"
				id="userVar"
			>


				<Image
					className="drop-shadow-lg ml-[75px] rounded-full "
					src={userThumbnail}
					alt="userThumbnail"
					height={50}
				/>


				Jhon Doe


			</div>
			<div className="text-sm flex flex-col gap-7 w-44 ml-5">
				<Link href="/panel-de-control">
					<div className={`hover:font-semibold flex gap-2  ${router.pathname === '/panel-de-control' ? 'active' : ''}`}>
						<Image
							src={panelControl}
							width={20}
							alt="frame"
						/>
						<h3>Panel de Control</h3>

					</div>
				</Link>

				<Link href="/pasajes">
					<div className={`hover:font-semibold flex gap-2  ${router.pathname === '/pasajes' ? 'active' : ''}`}>
						<Image
							src={pasajesIcon}
							width={20}
							alt="frame"
						/>
						<h3>Pasajes</h3>

					</div>
				</Link>
				<Link href="/contable">
					<div className={`hover:font-semibold flex gap-2  ${router.pathname === '/contable' ? 'active' : ''}`}>
						<Image
							src={panelControl}
							width={20}
							alt="frame"
						/>
						<h3>Contable</h3>

					</div>
				</Link>

				<div className="flex gap-2 ">
					<div className="cursor-default group flex gap-2">
						<Image
							src={programacionIcon}
							width={20}
							alt="home"

						/>
						<span className="text-center">Programacion</span>
						<span className="pl-3 pt-1">

							<svg
								className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</span>

						<ul className="bg-white shadow-md rounded-lg mt- transform border scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top mt-5 p-3 flex flex-col gap-5 pl-7 w-48">
							<Link className={`hover:font-semibold ${router.pathname === '/programacion-viajes' ? 'active' : ''}`} href="/programacion-viajes">P. Viajes</Link>

							<Link className={`hover:font-semibold ${router.pathname === '/programacion-bus-conductor' ? 'active' : ''}`} href="/programacion-bus-conductor">P. Bus/Conductor</Link>
							<Link className={`hover:font-semibold ${router.pathname === '/programacion-comprobantes' ? 'active' : ''}`} href="/programacion-comprobantes">P. Comprobantes</Link>
						</ul>
					</div>
				</div>

				<Link href="/encomiendas">
					<div className={`hover:font-semibold flex gap-2 ${router.pathname === '/encomiendas' ? 'active' : ''}`}>

						<Image
							src={encomiendasIcon}
							width={20}
							alt="frame"
						/>

						<h3>Encomiendas</h3>

					</div>
				</Link>
				<Link href="/administracion">
					<div className={`hover:font-semibold flex gap-2 ${router.pathname === '/administracion' ? 'active' : ''}`}>

						<Image
							src={administracionIcon}
							width={20}
							alt="frame"
						/>
						<h3>Administracion</h3>


					</div>
				</Link>
			</div>
		</div>

	);
}

export default LandingPage;
