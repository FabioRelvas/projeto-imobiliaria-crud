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

			<Row gutter={16} type="flex" justify="center">
				{products.map((product, index) => (
					<Col key={`product-${index}`}>
						<Link to={`/imovel/${product.id}`}>
							<Product
								type={product.tipoImovel}
								price={product.aluguel}
								location={product.localizacao}
								image={
									product.imagens && product.imagens.length > 0
										? product.imagens[0]
										: 'https://via.placeholder.com/600x300?text=Imagem+Indispon%C3%ADvel'
								}
							/>
						</Link>
					</Col>
				))}
			</Row>
		</LayoutContent>
	);
};

export default Home;
