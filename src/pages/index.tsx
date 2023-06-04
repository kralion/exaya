import React, { useState } from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';
import { Layout, Menu, Typography, Switch, Avatar, Space, Collapse, Button } from 'antd';
import type { MenuProps } from 'antd';
import Pasajes from './pasajes';
import { AppstoreOutlined, SettingOutlined, ExpandOutlined, CompressOutlined, FieldTimeOutlined, ScheduleOutlined, LineChartOutlined, ReconciliationOutlined } from '@ant-design/icons';
import Contable from './contable';
import PanelControl from './panel-de-control';
import style from '../styles/extra.module.css'

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
			<Sider trigger={null} collapsible collapsed={collapsed} width={200} style={{ background: 'white', borderRadius: 7, padding: 7, height: '100%' }}>

				{
					!collapsed ? <div className="flex drop-shadow-md items-center pt-2.5 gap-1 justify-center	">
						<Image src="https://img.icons8.com/?size=1x&id=l6Tcv6hLPzY9&format=png" width={50} height={50} alt='logo' />
						<div className="w-16">
							<p className='leading-none font-semibold font-Kanit text-left '>
								Expreso Ayacucho
							</p>
						</div>
					</div> : <Image className='ml-2 mt-2.5 drop-shadow-md' src="https://img.icons8.com/?size=1x&id=l6Tcv6hLPzY9&format=png" width={50} height={50} alt='logo' />
				}


				<Space wrap size={1} className='my-20 flex flex-col'>
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
					icon={collapsed ? <ExpandOutlined /> : < CompressOutlined />}
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


					}} className={style.gradient}
				>
					<PanelControl />
				</Content>
			</Layout>
		</Layout>




	);
}

