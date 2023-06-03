import React, { useState } from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';
import { Layout, Menu, Typography, Switch, Avatar, Space } from 'antd';
import type { MenuProps } from 'antd';
import Pasajes from './pasajes';
import { AppstoreOutlined, SettingOutlined, FieldTimeOutlined, ScheduleOutlined, LineChartOutlined, ReconciliationOutlined } from '@ant-design/icons';
import Contable from './contable';
import PanelControl from './panel-de-control';

type MenuItem = Required<MenuProps>['items'][number];
const { Header, Content, Sider } = Layout;
function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group',
	element?: React.ReactNode,
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
		element,
	} as MenuItem;
}
const items: MenuProps['items'] = [
	getItem('Panel de Control', '1', <AppstoreOutlined />),

	getItem('Pasajes', '2', <ScheduleOutlined />),
	getItem('Encomiendas', '3', <ReconciliationOutlined />),

	getItem('Programacion', 'programacion', <FieldTimeOutlined />, [
		getItem('Viajes', '4'),
		getItem('Conductores', '5'),
		getItem('Comprobantes', '6'),]),


	getItem('Contable', '7', <LineChartOutlined />),
	getItem('Administracion', '8', <SettingOutlined />),




];
const { Title } = Typography;

export default function Index() {
	const [isCollapse, setIsCollapse] = useState(false)
	const onCollapse = () => {
		setIsCollapse(!isCollapse)
	}

	return (



		<Layout >
			<Header className='flex justify-between items-center border-1 border-blue-500' style={{ backgroundColor: '#E6F4FF', borderBottomLeftRadius: 7, borderBottomRightRadius: 7 }}>
				<div className="flex items-center gap-1">

					<Image src={logo} width={50} height={50} alt='logo' />
					<Title level={5} style={{ color: '#EC9706' }} className='font-Kanit tracking-tight'>

						Expreso

						Ayacucho

					</Title>
				</div>
				<Switch
					onClick={onCollapse}
				/>
			</Header>
			<Content style={{ padding: '0 28px', margin: '28px 0' }}>

				<Layout style={{ padding: '28px 0', }} className='flex gap-[14px]'>
					<Sider style={{ backgroundColor: "white", borderRadius: 7 }} className='max-h-[600px]' collapsed={isCollapse} width={200} >
						<Space wrap size={1} className='my-14 flex flex-col'>
							<Avatar className='drop-shadow-md' size={60} src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" />
							{
								!isCollapse && <Title level={5} >Juan Perez</Title>
							}
						</Space>
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							items={items}
						/>
					</Sider>
					<Content style={{ padding: '0 28px', minHeight: 590, borderRadius: 7, backgroundColor: 'white' }}>
						<PanelControl />
					</Content>
				</Layout>
			</Content>

		</Layout>


	);
}

