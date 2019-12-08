/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Table, Divider, message, Popconfirm } from 'antd';
import LayoutContent from '../../components/Layout';
const { Column } = Table;

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_ALL_PROPS_ENDPOINT}?limit=64`)
			.then(res => res.json())
			.then(resJson => {
				setProducts(resJson);
			})
			.catch(e => console.warn(e));
	}, []);

	const deleteProp = id => {
		fetch(process.env.REACT_APP_API_DELETE_PROP_ENDPOINT, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id,
			}),
		})
			.then(res => {
				if (res.status === 200) {
					const newProdutsArray = products.filter(product => product.id !== id);
					setProducts(newProdutsArray);
					message.success('Propriedade deletada com sucesso!');
				}
			})
			.catch(e => console.error(e));
	};

	return (
		<LayoutContent showSidebar={true} sidebarCurrentKey="home">
			<Row>
				<Row>
					<Col>
						<Table dataSource={products} rowKey="id">
							<Column title="Tipo" dataIndex="tipo" key="tipo" />
							<Column title="Valor" dataIndex="aluguel" key="aluguel" />
							<Column title="Endereço" dataIndex="endereco" key="endereco" />
							<Column
								title="Ação"
								key="action"
								render={(_, record) => (
									<span>
										<Link to={`/novo/${record.id}`}>Editar</Link>
										<Divider type="vertical" />
										<Popconfirm
											title="Tem certeza que deseja deletar esta propriedade?"
											onConfirm={() => deleteProp(record.id)}
											okText="Sim"
											cancelText="Não"
										>
											<a href="#">Deletar</a>
										</Popconfirm>
									</span>
								)}
							/>
						</Table>
					</Col>
				</Row>
			</Row>
		</LayoutContent>
	);
};

export default ProductList;
