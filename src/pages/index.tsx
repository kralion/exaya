import React, { useState } from 'react';
import Image from 'next/image';
import { Layout, Menu, Typography, Avatar, Space, Button } from 'antd';
import type { MenuProps } from 'antd';
import Pasajes from './pasajes';
import { AppstoreOutlined, SettingOutlined, ExpandOutlined, CompressOutlined, FieldTimeOutlined, ScheduleOutlined, LineChartOutlined, ReconciliationOutlined } from '@ant-design/icons';
import Contable from './contable';
import PanelControl from './panel-de-control';
import Encomiendas from './encomiendas';
import Administracion from './administracion';
import ProgramacionBusConductor from './programacion-bus-conductor';
import ProgramacionComprobante from './programacion-comprobante';
import ProgramacionViajes from './programacion-viajes';

type MenuItem = {
	label: React.ReactNode;
	key: React.Key;
	icon?: React.ReactNode;
	children?: MenuItem[];
};
const { Content, Sider } = Layout;
function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group',

): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,

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


	getItem('Contable', '7', <LineChartOutlined />,),
	getItem('Administracion', '8', <SettingOutlined />),




];
const { Title } = Typography;

export default function Index() {
	const [collapsed, setCollapsed] = useState(false);
	const [activeWindow, setActiveWindow] = useState('Panel de Control');

	const handleMenuItemClick = (key: React.Key) => {
		const menuItem = findMenuItemByKey(items, key);
		if (menuItem) {
			setActiveWindow(menuItem.label as string);
		}
	};

	const findMenuItemByKey = (menuItems: MenuItem[], key: React.Key): MenuItem | undefined => {
		for (let i = 0; i < menuItems.length; i++) {
			const menuItem = menuItems[i];
			if (menuItem.key === key) {
				return menuItem;
			} else if (menuItem.children) {
				const foundItem = findMenuItemByKey(menuItem.children, key);
				if (foundItem) {
					return foundItem;
				}
			}
		}
		return undefined;
	};

	const renderMenuItems = (menuItems: MenuItem[]): React.ReactNode => {
		return menuItems.map((menuItem) => {
			if (menuItem.children) {
				return (
					<Menu.SubMenu key={menuItem.key} icon={menuItem.icon} title={menuItem.label}>
						{renderMenuItems(menuItem.children)}
					</Menu.SubMenu>
				);
			} else {
				return (
					<Menu.Item key={menuItem.key} icon={menuItem.icon}>
						{menuItem.label}
					</Menu.Item>
				);
			}
		});
	};

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

				</Space>
				<Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					style={{ height: '100%', borderRight: 0 }}
					items={items}
					onClick={({ key }) => handleMenuItemClick(key)}
				>
					{renderMenuItems(items?.filter((item) => item?.type !== 'group') as MenuItem[])}
				</Menu>

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
						background: 'white',
					}}

				>
					{activeWindow === 'Panel de Control' && <PanelControl />}
					{activeWindow === 'Pasajes' && <Pasajes />}
					{activeWindow === 'Contable' && <Contable />}
					{activeWindow === 'Encomiendas' && <Encomiendas />}
					{activeWindow === 'Viajes' && <ProgramacionBusConductor />}
					{activeWindow === 'Conductores' && <ProgramacionComprobante />}
					{activeWindow === 'Comprobantes' && <ProgramacionViajes />}
					{activeWindow === 'Administracion' && <Administracion />}
				</Content>

			</Layout>
		</Layout>
	);
}

