

export function SendMail({ handlerSubmit }) {
    return (
        <>
            <input
                type="submit"
                className="bg-blue-700 dark:hover:bg-blue-500 cursor-pointer rounded-md px-10 py-1 w-max m-auto text-lg"
                onClick={handlerSubmit}
                value="Enviar Correo"
            />
        </>
    )
}
