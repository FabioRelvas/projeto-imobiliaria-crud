import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import Footer from './footer'
import { Layout, Icon, Row, Col, Menu } from 'antd';

const { Footer, Content, Sider, Header } = Layout;

const LayoutContent = ({
	children,
	showSidebar = false,
	sidebarCurrentKey = 'home',
}) => {
	const [sideBarCollapsed, setSideBarCollapsed] = useState(false);

	return (
		<Layout className="App" style={{ minHeight: '100vh' }}>
			{showSidebar && (
				<Sider
					trigger={null}
					collapsible
					collapsed={sideBarCollapsed}
					style={{ textAlign: 'left' }}
				>
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={[sidebarCurrentKey]}
					>
						<Menu.Item key="home">
							<Link to="/dashboard">
								<Icon type="home" />
								<span>Imóveis</span>
							</Link>
						</Menu.Item>
						<Menu.Item key="create">
							<Link to="/novo">
								<Icon type="plus-square" />
								<span>Adicionar</span>
							</Link>
						</Menu.Item>
						<Menu.Item key="logout">
							<Link to="/login">
								<Icon type="user-delete" />
								<span>Sair</span>
							</Link>
						</Menu.Item>
					</Menu>
				</Sider>
			)}
			<Layout>
				<Header style={{ background: '#fff', padding: 0, textAlign: 'left' }}>
					<Row>
						{showSidebar && (
							<Col span={4}>
								<Icon
									className="trigger"
									type={sideBarCollapsed ? 'menu-unfold' : 'menu-fold'}
									style={{ fontSize: 24, padding: 12 }}
									onClick={() => setSideBarCollapsed(!sideBarCollapsed)}
								/>
							</Col>
						)}
						<Col span={showSidebar ? 14 : 24} style={{ textAlign: 'center' }}>
							<h1 className="title">Imobiliária</h1>
						</Col>
					</Row>
				</Header>
				<Content className="content">{children}</Content>
				<Footer
					style={{
						position: 'relative',
						bottom: 0,
						left: 0,
						width: '100%',
					}}
				>
					Copyright&copy;2019 - Aplicações na Internet
				</Footer>
			</Layout>
		</Layout>
	);
};

LayoutContent.propTypes = {
	children: PropTypes.node.isRequired,
	sidebar: PropTypes.element,
};

export default LayoutContent;
