import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

function Login() {
	return (
		<div className="mx-5">
			<header>
				<div className="flex gap-1 ">
					<Image width={60} height={60} src={logo} alt="logo" />
					<h2 className="text-center font-bold font-Mansalva mt-1">
						Expreso <br /> Ayacucho
					</h2>
				</div>
			</header>
			<div className="flex justify-center font-Literata my-7 ">
				<div className="flex flex-col justify-center w-1/2">
					<div className="text-center mb-10">
						<h1 className="text-4xl">LOGIN Molibus 2.0</h1>

						<h4 className="text-md mt-4">
							Los credenciales para el ingreso lo maneja el área de Gerencia
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
								<button className="bg-[#191818] mt-10 hover:bg-[#141313] active:bg-[#4d4c4c] text-white py-3 w-full px-4">
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
