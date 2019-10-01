import React from 'react';
import { findProducts } from '../../utils/data';

import { Row, Col, Table, Divider } from 'antd';
import LayoutContent from '../../components/Layout';
const { Column } = Table;

const ProductList = () => {
	const products = findProducts();

	return (
		<LayoutContent showSidebar={true} sidebarCurrentKey="home">
			<Row>
				<Row>
					<Col>
						<Table dataSource={products} rowKey="id">
							<Column title="Tipo" dataIndex="tipoImovel" key="tipoImovel" />
							<Column title="Valor" dataIndex="aluguel" key="aluguel" />
							<Column
								title="Endereço"
								dataIndex="localizacao"
								key="localizacao"
							/>
							<Column
								title="Ação"
								key="action"
								render={() => (
									<span>
										<a>Editar</a>
										<Divider type="vertical" />
										<a>Deletar</a>
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
