import { useRef, useState } from 'preact/hooks'
import './contactame.css'

const Contactame = () => {

    const name = useRef()
    const surname = useRef()
    const email = useRef()
    const message = useRef()

    const resetInputsForm = () => {
        name.current.value = ""
        surname.current.value = ""
        email.current.value = ""
        message.current.value = ""
    }

    const handlerClickSubmit = async (ev) => {
        ev.preventDefault()
        if (name.current.value != "" && surname.current.value != "" && email.current.value != "" && message.current.value != "") {
            try {
                const ENDPOINT = `?name=${encodeURIComponent(name.current.value)}&surname=${encodeURIComponent(surname.current.value)}&email=${encodeURIComponent(email.current.value)}&message=${encodeURIComponent(message.current.value)}`
                const response = await fetch(`https://ferchuemail.000webhostapp.com/sendemail/${ENDPOINT}`)
                const result = await response.json()
                alert(result.message)
                resetInputsForm()
            } catch (error) {
                alert("lo siento, tengo errores en mi servidor.")
            }
        } else {
            alert("campos incompletos")
        }
    }
    return (
        <>
            <section class="text-2xl p-3 md:p-0 w-full md:w-3/4 mx-10 flex flex-col gap-5">
                <h2 class="contactame-h2 font-firaCode text-extrabold text-lg sm:text-2xl md:text-3xl lg:text-4xl">Contactame</h2>
                <form
                    id="contactme"
                    class="flex flex-col gap-3"
                >
                    <input
                        class="outline-none p-3 bg-transparent border-2 border-blue-600"
                        type="text"
                        name="name"
                        ref={name}
                        placeholder="Nombre"
                    />
                    <input
                        class="outline-none p-3 bg-transparent border-2 border-blue-600"
                        type="text"
                        name="surname"
                        ref={surname}
                        placeholder="Apellido"
                    />
                    <input
                        class="outline-none p-3 bg-transparent border-2 border-blue-600"
                        type="email"
                        name="email"
                        ref={email}
                        placeholder="Correo Electronico"
                    />
                    <textarea
                        class="outline-none p-3 bg-transparent border-2 border-blue-600 h-48 min-h-24 max-h-64"
                        placeholder="Mensaje"
                        ref={message}
                        name="message"
                    ></textarea>
                    <input
                        type="submit"
                        onClick={handlerClickSubmit}
                        class="bg-blue-700 dark:hover:bg-blue-500 cursor-pointer rounded-lg px-10 py-1 w-max m-auto"
                    />
                </form>
            </section >
        </>
    )
}

export default Contactame