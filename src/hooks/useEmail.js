import { useState } from 'react';
import { toast } from 'react-toastify'


export function useEmail({ to, subject, message }) {
	const [payload, setPayload] = useState({
		to,
		subject,
		message
	})


	const sendEmail = async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		};

		try {
			const toastId = toast.loading("Enviando correo...", {
				position: "top-left",
				autoClose: false
			});
			const response = await fetch('https://emailapi.ferchudev.com', requestOptions)
			const data = await response.json();
			toast.dismiss(toastId);
			toast.success(data.message, {
				position: "top-left",
				autoClose: 3000
			});
			setPayload({ to: '', subject: '', message: '' });
		} catch (error) {
			toast.error(error.message);
		}

	}


	const handlerSubmit = (e) => {
		e.preventDefault();
		sendEmail();
	}

	return [
		payload,
		setPayload,
		handlerSubmit
	];
}
