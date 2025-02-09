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
        let toastId;

        try {
            toastId = toast.loading("Enviando correo...", {
                position: "top-left",
                autoClose: false
            });

            const response = await fetch(import.meta.env.PUBLIC_API_URL_EMAIL, requestOptions)
            console.log('.env:', import.meta.env);
            const data = await response.json();
            toast.dismiss(toastId);
            toast.success(data.message, {
                position: "top-left",
                autoClose: 1000
            });
            setPayload({ to: '', subject: '', message: '' });
        } catch (error) {
            toast.dismiss(toastId);
            toast.error("Error al enviar el correo", {
                position: "top-left",
                autoClose: 1000
            });

            console.log('.env:', import.meta.env);
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
