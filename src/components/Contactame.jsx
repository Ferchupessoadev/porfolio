import { useEmail } from '../hooks/useEmail.js'
import { SendMail } from './buttons/SendMail.jsx'
import './contactame.css'

export function Contactame() {

    const [payload, setPayload, handlerSubmit] = useEmail({
        to: '',
        subject: '',
        message: '',
    });


    return (
        <>
            <section className="text-2xl p-3 md:p-0 w-full md:w-3/4 mx-10 flex flex-col gap-5">
                <h2 className="contactame-h2 font-firaCode text-extrabold text-lg sm:text-2xl md:text-3xl lg:text-4xl">Contactame</h2>
                <form
                    id="contactme"
                    className="flex flex-col gap-5"
                >
                    <input
                        className="outline-none text-lg dark:text-white text-black p-3 bg-transparent rounded-lg border-2 border-blue-600"
                        type="email"
                        name="to"
                        value={payload.to}
                        onChange={(e) => setPayload({ ...payload, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Correo"
                    />
                    <input
                        className="outline-none text-lg dark:text-white text-black p-3 bg-transparent rounded-lg border-2 border-blue-600"
                        type="text"
                        name="subject"
                        value={payload.subject}
                        onChange={(e) => setPayload({ ...payload, [e.target.name]: e.target.value })}
                        autoComplete="off"
                        placeholder="Asunto"
                    />
                    <textarea
                        className="outline-none text-lg dark:text-white text-black p-3 bg-transparent rounded-lg border-2 border-blue-600 h-48 min-h-24 max-h-64"
                        placeholder="Mensaje"
                        autoComplete="off"
                        value={payload.message}
                        onChange={(e) => setPayload({ ...payload, [e.target.name]: e.target.value })}
                        name="message"
                    ></textarea>
                    <SendMail handlerSubmit={handlerSubmit} />
                </form>
            </section>
        </>
    )
}
