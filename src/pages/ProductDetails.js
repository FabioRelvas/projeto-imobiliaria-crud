import React, { useEffect, useState } from 'react';
import { Row, Col, Carousel, Descriptions } from 'antd';
import LayoutContent from '../components/Layout';
import ContactForm from '../components/ContactForm';

const ProductDetails = props => {
	const id = props.match.params.id;
	const [product, setProduct] = useState({});

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_SINGLE_PROP_ENDPOINT}/${id}`)
			.then(res =>
				res.json().then(resJson => {
					setProduct(resJson);
				})
			)
			.catch(e => console.warn(e));
	}, [id]);

	return (
		<LayoutContent>
			<Row gutter={16}>
				<Col xs={24} xl={8}>
					<Carousel autoplay>
						{product.imagens &&
							product.imagens.map(imagem => (
								<div key={imagem.filename}>
									<img
										alt="example"
										src={`${process.env.REACT_APP_API_IMAGES_ENDPOINT}/${imagem.filename}`}
										style={{ width: '100%' }}
									/>
								</div>
							))}
					</Carousel>
				</Col>

				<Col xs={24} xl={14}>
					<Descriptions title="Mais informações do Imóvel" bordered>
						<Descriptions.Item label="Tipo Imóvel">
							{product.tipo}
						</Descriptions.Item>
						<Descriptions.Item label="Preço">
							{product.aluguel}
						</Descriptions.Item>
						<Descriptions.Item label="Quarto(s)">
							{product.quartos}
						</Descriptions.Item>
						<Descriptions.Item label="Área">
							{product.tamanho}
						</Descriptions.Item>
						<Descriptions.Item label="Garagem">
							{product.garagem}
						</Descriptions.Item>
						<Descriptions.Item label="Localização">
							{product.endereco}
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
					<ContactForm
						propId={product.id}
						propType={product.tipo}
						propLink={window.location.href}
					/>
				</Col>
			</Row>
		</LayoutContent>
	);
};

export default ProductDetails;
