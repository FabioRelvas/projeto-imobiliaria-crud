import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import LayoutContent from '../../components/Layout';

const Login = ({ history }) => {
	useEffect(() => {
		fetch(process.env.REACT_APP_API_AUTH_CHECK_ENDPOINT)
			.then(res => {
				if (res.status === 200) {
					history.push('/dashboard');
				}
			})
			.catch(err => {
				console.error(err);
			});
	}, [history]);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		const formData = { email, password };

		fetch(process.env.REACT_APP_API_LOGIN_ENDPOINT, {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify(formData),
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		})
			.then(res => {
				if (res.status === 200) {
					history.push('/dashboard');
				}
			})
			.catch(e => console.warn(e));
	};
	return (
		<LayoutContent>
			<Row type="flex" justify="center" align="middle">
				<Form onSubmit={handleSubmit}>
					<Row>
						<Form.Item>
							<Input
								prefix={
									<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
								}
								placeholder="E-Mail"
								required
								onChange={e => setEmail(e.target.value)}
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
								onChange={e => setPassword(e.target.value)}
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
