import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import { Dispatch, SetStateAction } from "react";

type LoginProps = {
	setIsLogged: Dispatch<SetStateAction<boolean>>;
};

function Login({ setIsLogged }: LoginProps) {
	return (
		<div className="mx-5">
			<header
				data-aos="slide-right"
				data-aos-delay="200"
				data-aos-duration="1000"
			>
				<div className="flex items-center m-3">
					<Image width={40} height={40} src={logo} alt="logo" />
					<h2 className="text-center font-bold font-Mansalva mt-1">
						Expreso <br /> Ayacucho
					</h2>
				</div>
			</header>
			<div
				data-aos="flip-up"
				data-aos-duration="1000"
				data-aos-delay="200"
				className="flex justify-center font-Literata my-7 "
			>
				<div className="flex flex-col justify-center w-1/2">
					<div className="text-center mb-10">
						<h1 className="text-4xl font-semibold">EXAYA</h1>

						<h4 className="text-md mt-4">
							Las credenciales son precreadas, solicítalas en el área de TI
						</h4>
					</div>
					<div className="flex justify-center">
						<form className="flex flex-col justify-center w-[610px]">
							<div className="flex flex-col justify-center mb-7">
								<label className="text-xl font-black mb-3" htmlFor="username">
									Usuario
								</label>
								<input
									className="border-2 border-black py-2 px-5"
									type="text"
									name="username"
									placeholder="Ingrese el nombre de usuario"
								/>
							</div>
							<div className="flex flex-col justify-center">
								<label className="text-xl font-black mb-3" htmlFor="password">
									Contraseña
								</label>
								<input
									className="border-2 border-black py-2 px-5"
									type="password"
									name="password"
									placeholder="***************"
								/>
							</div>
							<div className="flex my-3">
								<input type="checkbox" className="mt-5 w-6 h-6 " />
								<label className="text-md mt-5 ml-2" htmlFor="remember">
									Recordar contraseña
								</label>
							</div>
							<Link href="/">
								<button
									onClick={() => setIsLogged(true)}
									className="bg-[#191818] mt-10 hover:bg-[#141313] active:bg-[#4d4c4c] text-white py-3 w-full px-4"
								>
									Ingresar
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
