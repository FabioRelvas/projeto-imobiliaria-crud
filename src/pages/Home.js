import React, { useEffect, useState } from 'react'; // react hooks
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import SearchBox from '../components/Search';
import Product from '../components/Product';
import LayoutContent from '../components/Layout';

const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(process.env.REACT_APP_API_ALL_PROPS_ENDPOINT)
			.then(res => res.json())
			.then(resJson => {
				setProducts(resJson);
				console.log(resJson);
			})
			.catch(e => console.warn(e));
	}, []);

	return (
		<LayoutContent>
			<SearchBox propHandler={setProducts} />

			<Row gutter={16} type="flex" justify="center">
				{products.map((product, index) => (
					<Col key={`product-${index}`}>
						<Link to={`/imovel/${product.id}`}>
							<Product
								type={product.tipo}
								price={product.aluguel}
								location={product.endereco}
								image={
									product.imagens && product.imagens.length > 0
										? `${process.env.REACT_APP_API_IMAGES_ENDPOINT}/${product.imagens[0].filename}`
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
