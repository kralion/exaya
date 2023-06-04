import React, { useState } from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';
import { Layout, Menu, Typography, Switch, Avatar, Space, Collapse, Button } from 'antd';
import type { MenuProps } from 'antd';
import Pasajes from './pasajes';
import { AppstoreOutlined, SettingOutlined, MenuFoldOutlined, MenuUnfoldOutlined, FieldTimeOutlined, ScheduleOutlined, LineChartOutlined, ReconciliationOutlined } from '@ant-design/icons';
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
	const [collapsed, setCollapsed] = useState(false)


	return (


		<Layout style={{ padding: 28 }}>
			<Sider trigger={null} collapsible collapsed={collapsed} width={200} style={{ background: 'white', borderRadius: 7, height: '100%' }}>

				{
					!collapsed ? <div className="flex drop-shadow-md items-center  gap-1 justify-center	">
						<Image src={logo} width={40} height={40} alt='logo' />
						<div className="w-16">
							<p className='leading-none font-semibold font-Kanit text-left '>
								Expreso Ayacucho
							</p>
						</div>
					</div> : <Image className='ml-5 drop-shadow-md' src={logo} width={40} height={40} alt='logo' />
				}


				<Space wrap size={1} className='my-14 flex flex-col'>
					<Avatar className='drop-shadow-md' size={60} src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" />

					{
						!collapsed && <Title level={5} className='tracking-tight' >
							Juan Perez
						</Title>
					}

				</Space><Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					style={{ height: '100%', borderRight: 0 }}
					items={items}
				/>
				<Button
					type="text"
					icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => setCollapsed(!collapsed)}
					style={{
						fontSize: '16px',
						width: 64,
						height: 64,
					}}
				/>
			</Sider>
			<Layout style={{ paddingLeft: 14 }}>
				<Content
					style={{
						padding: 28,
						margin: 0,
						borderRadius: 7,
						minHeight: 280,
						background: 'white',
					}}
				>
					<Contable />
				</Content>
			</Layout>
		</Layout>




	);
}

