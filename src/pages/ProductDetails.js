import React from 'react';
import { findProduct } from '../utils/data';
import { Row, Col, Form, Input, Button, Carousel, Descriptions } from 'antd';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';
import LayoutContent from '../components/Layout';

const ProductDetails = props => {
	const product = findProduct(props.match.params.id);

	return (
		<LayoutContent>
			<Row gutter={16}>
				<Col xs={24} xl={8}>
					<Carousel autoplay>
						{product.imagens.map(imagem => (
							<div>
								<img alt="example" src={imagem} style={{ width: '100%' }} />
							</div>
						))}
					</Carousel>
				</Col>

				<Col xs={24} xl={14}>
					<Descriptions title="Mais informações do Imóvel" bordered>
						<Descriptions.Item label="Tipo Imóvel">
							{product.tipoImovel}
						</Descriptions.Item>
						<Descriptions.Item label="Preço">
							{product.aluguel}
						</Descriptions.Item>
						<Descriptions.Item label="Quarto(s)">
							{product.quarto}
						</Descriptions.Item>
						<Descriptions.Item label="Área">
							{product.tamanho}
						</Descriptions.Item>
						<Descriptions.Item label="Garagem">
							{product.garagem}
						</Descriptions.Item>
						<Descriptions.Item label="Localização">
							{product.localizacao}
						</Descriptions.Item>
						<Descriptions.Item label="Descrição">
							{product.descricao}
						</Descriptions.Item>
					</Descriptions>
				</Col>
			</Row>

			<Row style={{ margin: 32 }}>
				<Col span={24}>
					<h1> Gostou do imóvel? Entre em contato conosco!</h1>
				</Col>
			</Row>

			<Row style={{ margin: 32 }} type="flex" align="middle" justify="center">
				<Col>
					<Form
						labelCol={{ xs: { span: 24 }, sm: { span: 8 } }}
						wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}
					>
						<Form.Item label="Nome">
							<Input required />
						</Form.Item>
						<Form.Item label="Email">
							<MaskedInput mask={emailMask} className="ant-input" />
						</Form.Item>
						<Form.Item label="Telefone">
							<MaskedInput
								mask={[
									'(',
									/[1-9]/,
									/\d/,
									')',
									' ',
									/\d/,
									/\d/,
									/\d/,
									/\d/,
									'-',
									/\d/,
									/\d/,
									/\d/,
									/\d/,
									/\d?/,
								]}
								guide={false}
								className="ant-input"
								required
							/>
						</Form.Item>
						<Form.Item wrapperCol={{ xs: 24, sm: 24 }}>
							<Button type="primary" htmlType="submit" size="large">
								Enviar
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</LayoutContent>
	);
};

export default ProductDetails;
