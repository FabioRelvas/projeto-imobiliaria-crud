import React from 'react';

import {
	Form,
	Input,
	Select,
	Button,
	InputNumber,
	Row,
	Col,
	Upload,
	Icon,
	message,
} from 'antd';
import LayoutContent from '../../components/Layout';

const { Dragger } = Upload;
const { Option } = Select;

const CreateEditProduct = () => {
	return (
		<LayoutContent showSidebar={true} sidebarCurrentKey="create">
			<Row type="flex" justify="center" align="top" gutter={16}>
				<Form style={{ textAlign: 'left', width: 360 }}>
					<Form.Item label="Tipo de Imóvel">
						<Select defaultValue="casa">
							<Option value="casa">Casa</Option>
							<Option value="apartamento">Apartamento</Option>
						</Select>
					</Form.Item>

					<Row gutter={16}>
						<Col xs={24} md={12}>
							<Form.Item label="Valor (R$)">
								<InputNumber
									style={{ textAlign: 'left', width: '100%' }}
									formatter={value =>
										value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
									}
									parser={value => value.replace(/[R]\$\s?|(\.*)/g, '')}
									required
								/>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Número de Quartos">
								<InputNumber
									style={{ textAlign: 'left', width: '100%' }}
									required
								></InputNumber>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col xs={24} md={12}>
							<Form.Item label="Tamanho (m²)">
								<InputNumber
									style={{ textAlign: 'left', width: '100%' }}
									required
								></InputNumber>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Garagem">
								<InputNumber
									style={{ textAlign: 'left', width: '100%' }}
									required
								></InputNumber>
							</Form.Item>
						</Col>
					</Row>
					<Row>
						<Form.Item label="Endereço">
							<Input></Input>
						</Form.Item>
					</Row>
					<Row>
						<Form.Item label="Descrição">
							<Input.TextArea rows={4} required></Input.TextArea>
						</Form.Item>
					</Row>
					<Row style={{ paddingBottom: 24 }}>
						<Col>
							<Dragger>
								<p className="ant-upload-drag-icon">
									<Icon type="inbox" />
								</p>
								<p className="ant-upload-text">
									Clique ou arraste as imagens aqui para fazer o upload.
								</p>
								<p className="ant-upload-hint">
									Apenas demonstração, não funciona.
								</p>
							</Dragger>
						</Col>
					</Row>
					<Row>
						<Col offset={5}>
							<Button type="primary" htmlType="submit" style={{ width: '80%' }}>
								Salvar
							</Button>
						</Col>
					</Row>
				</Form>
			</Row>
		</LayoutContent>
	);
};

export default CreateEditProduct;
