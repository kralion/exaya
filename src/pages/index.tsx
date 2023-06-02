import React, { useState } from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';
import { Layout, Menu, Typography, Switch, Avatar, Space } from 'antd';
import type { MenuProps } from 'antd';
import Pasajes from './pasajes';
import { AppstoreOutlined, SettingOutlined, FieldTimeOutlined, ScheduleOutlined, LineChartOutlined, ReconciliationOutlined } from '@ant-design/icons';

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
			<Header className='flex justify-between items-center' style={{ backgroundColor: '#E74646', borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px' }}>
				<div className="flex items-center gap-1">

					<Image src={logo} width={50} height={50} alt='logo' />
					<Title level={5} style={{ color: 'white' }} className='font-Mansalva'>Expreso Ayacucho</Title>
				</div>
				<Switch
					onClick={onCollapse}
				/>
			</Header>
			<Content style={{ padding: '0 28px', margin: '28px 0', borderRadius: '10px' }}>

				<Layout style={{ padding: '24px 0', }}>
					<Sider style={{ backgroundColor: "white" }} collapsed={isCollapse} width={200}>
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
					<Content style={{ padding: '0 20px', minHeight: 590, }}>
						<Pasajes />
					</Content>
				</Layout>
			</Content>

		</Layout>
	);
}

