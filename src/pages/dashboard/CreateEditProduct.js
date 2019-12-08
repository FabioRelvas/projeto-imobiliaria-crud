import React, { useState, useEffect } from 'react';

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

// todo: genreciar upload de imagens corretamente
const CreateEditProduct = props => {
	// id = editando
	const id = props.match.params.id;
	const [propType, setPropType] = useState('Casa');
	const [propPrice, setPropPrice] = useState('');
	const [propBedrooms, setPropBedrooms] = useState('');
	const [propSize, setPropSize] = useState('');
	const [propGarage, setPropGarage] = useState('');
	const [propAddress, setPropAddress] = useState('');
	const [propDesc, setPropDesc] = useState('');
	const [propImages, setPropImages] = useState([]);

	useEffect(() => {
		if (!id) {
			setPropType('Casa');
			setPropPrice('');
			setPropBedrooms('');
			setPropSize('');
			setPropGarage('');
			setPropAddress('');
			setPropDesc('');
			setPropImages([]);
			return;
		}

		fetch(`${process.env.REACT_APP_API_SINGLE_PROP_ENDPOINT}/${id}`, {
			method: 'GET',
		})
			.then(res => res.json())
			.then(resJson => {
				if (resJson === {} || resJson === null) {
					throw new Error('O servidor retornou uma propriedade vazia');
				}

				setPropType(resJson.tipo);
				setPropPrice(resJson.aluguel);
				setPropBedrooms(resJson.quartos);
				setPropSize(resJson.tamanho);
				setPropGarage(resJson.garagem);
				setPropAddress(resJson.endereco);
				setPropDesc(resJson.descricao);

				if (resJson.imagens) {
					const imgs = resJson.imagens.map((image, index) => {
						return {
							uid: index,
							name: image.filename,
							status: 'done',
						};
					});

					setPropImages(imgs);
				}
			})
			.catch(e => console.warn(e));
	}, [id]);

	const handleSubmit = e => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('tipo', propType);
		formData.append('aluguel', propPrice);
		formData.append('quartos', propBedrooms);
		formData.append('tamanho', propSize);
		formData.append('garagem', propGarage);
		formData.append('endereco', propAddress);
		formData.append('descricao', propDesc);

		if (id) {
			fetch(`${process.env.REACT_APP_API_UPDATE_PROP_ENDPOINT}/${id}`, {
				method: 'PUT',
				body: formData,
			})
				.then(res => {
					if (res.status === 200) {
						message.success('Propriedade editada com sucesso!');
					}
				})
				.catch(e => console.warn(e));
			return;
		}

		for (let i = 0; i < propImages.length; i++) {
			formData.append('imagens', propImages[i].originFileObj);
		}

		fetch(process.env.REACT_APP_API_CREATE_PROP_ENDPOINT, {
			method: 'POST',
			body: formData,
		})
			.then(res => res.json())
			.then(resJson => {
				console.log(resJson);
				if (resJson.id) {
					message.success('Propriedade criada com sucesso!');
					props.history.push(`/novo/${resJson.id}`);
				}
			})
			.catch(e => console.error(e));
	};

	const fakeUploadRequest = ({ file, onSuccess }) => {
		setTimeout(() => {
			onSuccess('ok');
		}, 0);
	};

	return (
		<LayoutContent showSidebar={true} sidebarCurrentKey="create">
			<Row type="flex" justify="center" align="top" gutter={16}>
				<Form style={{ textAlign: 'left', width: 360 }} onSubmit={handleSubmit}>
					<Form.Item label="Tipo de Imóvel">
						<Select
							value={propType}
							name="tipo"
							onChange={value => setPropType(value)}
						>
							<Option value="Casa">Casa</Option>
							<Option value="Apartamento">Apartamento</Option>
						</Select>
					</Form.Item>

					<Row gutter={16}>
						<Col xs={24} md={12}>
							<Form.Item label="Valor (R$)">
								<InputNumber
									name="aluguel"
									style={{ textAlign: 'left', width: '100%' }}
									formatter={value =>
										value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
									}
									parser={value => value.replace(/[R]\$\s?|(\.*)/g, '')}
									required
									onChange={value => setPropPrice(value)}
									value={propPrice}
								/>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Número de Quartos">
								<InputNumber
									name="quartos"
									style={{ textAlign: 'left', width: '100%' }}
									required
									onChange={value => setPropBedrooms(value)}
									value={propBedrooms}
								></InputNumber>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col xs={24} md={12}>
							<Form.Item label="Tamanho (m²)">
								<InputNumber
									name="tamanho"
									style={{ textAlign: 'left', width: '100%' }}
									required
									onChange={value => setPropSize(value)}
									value={propSize}
								></InputNumber>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item label="Garagem">
								<InputNumber
									name="garagem"
									style={{ textAlign: 'left', width: '100%' }}
									required
									onChange={value => setPropGarage(value)}
									value={propGarage}
								></InputNumber>
							</Form.Item>
						</Col>
					</Row>
					<Row>
						<Form.Item label="Endereço">
							<Input
								name="endereco"
								onChange={e => setPropAddress(e.target.value)}
								value={propAddress}
							></Input>
						</Form.Item>
					</Row>
					<Row>
						<Form.Item label="Descrição">
							<Input.TextArea
								rows={4}
								required
								name="descricao"
								onChange={e => setPropDesc(e.target.value)}
								value={propDesc}
							></Input.TextArea>
						</Form.Item>
					</Row>
					<Row style={{ paddingBottom: 24 }}>
						<Col>
							<Dragger
								customRequest={fakeUploadRequest}
								onChange={info => setPropImages(info.fileList)}
								multiple
								accept=".png,.jpeg,.jpg"
								fileList={propImages}
								disabled={id !== undefined}
							>
								<p className="ant-upload-drag-icon">
									<Icon type="inbox" />
								</p>
								<p className="ant-upload-text">
									Clique ou arraste as imagens aqui para fazer o upload.
								</p>
								<p className="ant-upload-hint">
									Apenas imagens com a extensão png, jpg ou jpeg.
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
