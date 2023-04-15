import Pasajes_Card from "../../components/Pasajes_Card";
import Boletos_Card from "../../components/Boletos_Card";
import Viajes_Card from "../../components/Viajes_Card";
import { Link } from "react-router-dom";

function PanelControl() {
	return (
		<div className="bg-[#F3F1EF] px-[75px] py-3 rounded-l-xl items-center justify-center grid grid-cols-2 gap-7 ">
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
	);
}

export default PanelControl;
