import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'antd';
const { Meta } = Card;

const Product = ({ type, price, location }) => {
	return (
		<Card
			hoverable
			style={{ width: 300, margin: 24 }}
			cover={
				<img
					alt="example"
					src="https://via.placeholder.com/300x300?text=Imagem+Indispon%C3%ADvel"
				/>
			}
		>
			<Meta title={type} />
			<Row style={{ padding: 12 }}>
				<span>Preço: {price}</span>
			</Row>
			<Row>
				<span>Localização: {location}</span>
			</Row>
		</Card>
	);
};

Product.propTypes = {
	type: PropTypes.string,
	price: PropTypes.number,
	location: PropTypes.string,
};

export default Product;
