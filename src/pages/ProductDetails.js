import React from 'react';
import { findProduct } from '../utils/data';
import { Row, Col, Form, Input, Button, Carousel, Descriptions } from 'antd';
import LayoutContent from '../components/Layout';

const formItemLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 8 },
};

const formTailLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 8, offset: 4 },
};

const ProductDetails = props => {
	const product = findProduct(props.match.params.id);

	return (
		<LayoutContent>
			<Row gutter={16}>
				<Col span={8}>
					<Carousel autoplay>
						<div>
							<img
								alt="example"
								src="https://via.placeholder.com/600x240?text=Imagem+Indispon%C3%ADvel"
							/>
						</div>
						<div>
							<img
								alt="example"
								src="https://via.placeholder.com/600x240?text=Imagem+Indispon%C3%ADvel"
							/>
						</div>
						<div>
							<img
								alt="example"
								src="https://via.placeholder.com/600x240?text=Imagem+Indispon%C3%ADvel"
							/>
						</div>
						<div>
							<img
								alt="example"
								src="https://via.placeholder.com/600x240?text=Imagem+Indispon%C3%ADvel"
							/>
						</div>
					</Carousel>
				</Col>

				<Col span={14}>
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
			<Row style={{ margin: 24 }}>
				<h1> Gostou do imóvel? Entre em contato conosco!</h1>
				<Form>
					<Row>
						<Col span={24} offset={5}>
							<Form.Item {...formItemLayout} label="Nome">
								<Input required />
							</Form.Item>
						</Col>
					</Row>
					<Row>
						<Col span={24} offset={5}>
							<Form.Item {...formItemLayout} label="Email">
								<Input required />
							</Form.Item>
						</Col>
					</Row>
					<Row>
						<Col span={24} offset={5}>
							<Form.Item {...formItemLayout} label="Telefone">
								<Input required />
							</Form.Item>
						</Col>
					</Row>
					<Row>
						<Col span={24} offset={5}>
							<Form.Item {...formTailLayout}>
								<Button
									type="primary"
									htmlType="submit"
									style={{ width: '70%' }}
								>
									Enviar
								</Button>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Row>
		</LayoutContent>
	);
};

export default ProductDetails;
