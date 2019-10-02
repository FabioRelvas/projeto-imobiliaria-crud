import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'antd';
const { Meta } = Card;

const Product = ({ type, price, location, image }) => {
	return (
		<Card
			hoverable
			style={{ maxWidth: 300, margin: 24, textAlign: 'center' }}
			cover={
				<img style={{ width: '100%', height: 256 }} alt="example" src={image} />
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
