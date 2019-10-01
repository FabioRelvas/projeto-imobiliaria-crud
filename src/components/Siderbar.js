import React from 'react';

import { Layout, Icon, Menu } from 'antd';

const { Sider } = Layout;

const Sidebar = ({ currentKey }) => {
	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={sideBarCollapsed}
			style={{ textAlign: 'left' }}
		>
			<Menu theme="dark" mode="inline" defaultSelectedKeys={[currentKey]}>
				<Menu.Item key="home">
					<Icon type="home" />
					<span>Imóveis</span>
				</Menu.Item>
				<Menu.Item key="create">
					<Icon type="plus-square" />
					<span>Adicionar</span>
				</Menu.Item>
				<Menu.Item key="logout">
					<a href="/login">
						<Icon type="user-delete" />
						<span>Sair</span>
					</a>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default Sidebar;
