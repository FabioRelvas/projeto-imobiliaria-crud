import React from 'react';
import { findProduct } from '../utils/data';
import { Row, Col, Form, Input, Button, Carousel, Descriptions } from 'antd';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';
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
						{product.imagens.map(imagem => (
							<div>
								<img alt="example" src={imagem} />
							</div>
						))}
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
								<MaskedInput mask={emailMask} className="ant-input" />
							</Form.Item>
						</Col>
					</Row>
					<Row>
						<Col span={24} offset={5}>
							<Form.Item {...formItemLayout} label="Telefone">
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
