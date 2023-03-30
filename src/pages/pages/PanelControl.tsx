import Pasajes_Card from "../../components/Pasajes_Card";
import Boletos_Card from "../../components/Boletos_Card";
import Viajes_Card from "../../components/Viajes_Card";
import { Link } from "react-router-dom";

function PanelControl() {
	return (
		<div className="">
			<div className="bg-[#F3F1EF] w-[1450px] h-screen rounded-l-xl grid grid-cols-2">
				<Link to="/pasajes">
					<Pasajes_Card />
				</Link>
				<Link to="/programacion-viajes">
					<Viajes_Card />
				</Link>
				<Link to="/programacion-comprobantes">
					<Boletos_Card />
				</Link>
			</div>
		</div>
	);
}

export default PanelControl;
