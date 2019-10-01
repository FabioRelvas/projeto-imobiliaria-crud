import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import LayoutContent from '../../components/Layout';

const Login = () => {
	return (
		<LayoutContent>
			<Row type="flex" justify="center" align="middle">
				<Form>
					<Row>
						<Form.Item>
							<Input
								prefix={
									<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
								}
								placeholder="Usuário"
								required
							/>
						</Form.Item>
					</Row>
					<Row>
						<Form.Item>
							<Input
								prefix={
									<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
								}
								type="password"
								placeholder="Senha"
								required
							/>
						</Form.Item>
					</Row>
					<Row>
						<Form.Item>
							<Col span={14}>
								<Checkbox>Lembrar-me</Checkbox>
							</Col>
							<Col span={8}>
								<Button type="primary" htmlType="submit">
									Entrar
								</Button>
							</Col>
						</Form.Item>
					</Row>
				</Form>
			</Row>
		</LayoutContent>
	);
};

export default Login;
