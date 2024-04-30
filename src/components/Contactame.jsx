import './contactame.css'

const Contactame = () => {
    // 
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
                        placeholder="Nombre"

                    />
                    <input
                        class="outline-none p-3 bg-transparent border-2 border-blue-600"
                        type="text"
                        placeholder="Apellido"

                    />
                    <input
                        class="outline-none p-3 bg-transparent border-2 border-blue-600"
                        type="email"
                        placeholder="Correo Electronico"
                    />

                    <textarea
                        class="outline-none p-3 bg-transparent border-2 border-blue-600 h-48 min-h-24 max-h-64"
                        placeholder="Mensaje"
                    ></textarea>
                    <input
                        type="submit"
                        class="bg-blue-700 dark:hover:bg-blue-500 cursor-pointer rounded-lg px-10 py-1 w-max m-auto"
                    />
                </form>
            </section >
        </>
    )
}

export default Contactame