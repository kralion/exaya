import { ControlPaneCard } from "~/components/ui/control-pane-card";
import { Title } from "@mantine/core";
import { Col, Progress, Row, Statistic, Typography, Card } from 'antd';
import { FieldTimeOutlined, ArrowDownOutlined, ProfileOutlined, ContainerOutlined } from '@ant-design/icons';



const totalViajesProgramados = 4;
const viajesActivos = 2;
function PanelControl() {

	return (
		<div className="p-7 space-align-container flex flex-col gap-7">

			<Title order={4} >
				Panel de Control
			</Title>

			<div className="flex gap-7">


				<ControlPaneCard cardTitle="Viajes" cardDescription="Información sobre la cantidad de viajes programados para hoy" coverSrc="https://images.pexels.com/photos/1426516/pexels-photo-1426516.jpeg?auto=compress&cs=tinysrgb&w=600">
					<div className="flex justify-between pt-7">

						<Statistic title="Programados" value={totalViajesProgramados} prefix={<FieldTimeOutlined className="flex items-stretch mr-3" />} />

						<Statistic title="Activos" value={viajesActivos} suffix={`/ ${totalViajesProgramados}`} />
					</div>
				</ControlPaneCard>
				<ControlPaneCard cardDescription="Último código de boleto de viaje vendido." cardTitle="Boletos" coverSrc="https://images.pexels.com/photos/69866/pexels-photo-69866.jpeg?auto=compress&cs=tinysrgb&w=600">

					<div className="flex justify-between items-center">

						<div className="pt-7 flex flex-col gap-3">
							<Typography.Text type="secondary" >Factura</Typography.Text>
							<div className="flex gap-1 text-2xl items-center" >
								<ContainerOutlined />
								<Typography.Text strong className="text-xl"  >F003125</Typography.Text>
							</div>
						</div>

						<div className="pt-7 flex flex-col gap-3">
							<Typography.Text type="secondary" >Boleta</Typography.Text>
							<div className="flex gap-1 text-2xl items-center" style={{ color: '#3f8600' }}>
								<ContainerOutlined />
								<Typography.Text strong type="success" className="text-xl"  >B003548</Typography.Text>
							</div>
						</div>
					</div>


				</ControlPaneCard>
				<ControlPaneCard cardDescription="Porcentaje de ocupación de asientos para cada viaje." cardTitle="Asientos Ocupados" coverSrc="https://images.pexels.com/photos/1746192/pexels-photo-1746192.jpeg?auto=compress&cs=tinysrgb&w=600">
					<div style={{ width: 170, paddingTop: 28 }}><Typography.Text strong>Horario 20:00</Typography.Text>
						<Progress percent={100} size="small" /><Typography.Text >Horario 21:00</Typography.Text>
						<Progress percent={70} size="small" />
						<Typography.Text >Horario 21:30</Typography.Text>
						<Progress percent={30} size="small" />


					</div>
				</ControlPaneCard>
			</div>





		</div >
	);
}

export default PanelControl;
