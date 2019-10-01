import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import SearchBox from '../components/Search';
import Product from '../components/Product';
import { findProducts } from '../utils/data';
import LayoutContent from '../components/Layout';

const Home = () => {
	const products = findProducts().filter((_, index) => index < 8);
	return (
		<LayoutContent>
			<SearchBox />

			<Row>
				{products.map((product, index) => (
					<Col span={6} key={`product-${index}`}>
						<Link to={`/imovel/${product.id}`}>
							<Product
								type={product.tipoImovel}
								price={product.aluguel}
								location={product.localizacao}
							/>
						</Link>
					</Col>
				))}
			</Row>
		</LayoutContent>
	);
};

export default Home;
