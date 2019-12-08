import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import MaskedInput from 'react-text-mask';
import emailMask from 'text-mask-addons/dist/emailMask';

const { TextArea } = Input;

const ContactForm = ({ propId, propType, propLink }) => {
	const [buttonText, setButtonText] = useState('Enviar');
	const [sending, setSending] = useState(false);
	const [sendingDone, setSendingDone] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		setButtonText('Enviando...');
		setSending(true);

		const data = {
			propId,
			propType,
			propLink,
			name,
			email,
			phone,
			message,
		};

		fetch(process.env.REACT_APP_API_CONTACT_ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then(res => {
				if (res.status === 200) {
					console.log('ok');
					setButtonText('Mensagem enviada com sucesso!');
				}
			})
			.catch(e => {
				console.log(e);
				setButtonText(
					'Falha ao enviar a mensagem, entre em contato mais tarde'
				);
			})
			.finally(() => {
				setSending(false);
				setSendingDone(true);
			});
	};

	return (
		<Form
			labelCol={{ xs: { span: 24 }, sm: { span: 8 } }}
			wrapperCol={{ xs: { span: 24 }, sm: { span: 16 } }}
			onSubmit={handleSubmit}
		>
			<Form.Item label="Nome">
				<Input required onChange={e => setName(e.target.value)} />
			</Form.Item>
			<Form.Item label="Email">
				<MaskedInput
					mask={emailMask}
					className="ant-input"
					onChange={e => setEmail(e.target.value)}
				/>
			</Form.Item>
			<Form.Item label="Telefone">
				<MaskedInput
					mask={[
						'(',
						/[1-9]/,
						/\d/,
						')',
						' ',
						/\d/,
						/\d/,
						/\d/,
						/\d/,
						'-',
						/\d/,
						/\d/,
						/\d/,
						/\d/,
						/\d?/,
					]}
					guide={false}
					className="ant-input"
					required
					onChange={e => setPhone(e.target.value)}
				/>
			</Form.Item>
			<Form.Item label="Mensagem">
				<TextArea rows={4} onChange={e => setMessage(e.target.value)} />
			</Form.Item>
			<Form.Item wrapperCol={{ xs: 24, sm: 24 }}>
				<Button
					type="primary"
					htmlType="submit"
					size="large"
					loading={sending && !sendingDone}
					disabled={!sending && sendingDone}
				>
					{buttonText}
				</Button>
			</Form.Item>
		</Form>
	);
};

export default ContactForm;
