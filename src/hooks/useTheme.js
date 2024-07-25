import { useState, useRef, useEffect } from "preact/hooks";

export function useTheme(themeDefault) {
    const [theme, setTheme] = useState(themeDefault);
    const btnThemeRef = useRef();

    useEffect(() => {
        const $html = document.querySelector("html");
        if (theme == "dark") {
            $html.classList.add("dark");
        } else {
            $html.classList.remove("dark");
        }
    }, [theme]);

    const handlerClickModalTheme = () => {
        btnThemeRef.current.classList.toggle("animate-side-theme");
        btnThemeRef.current.classList.toggle("hidden");
    };

    const changeTheme = (changeTotheme) => {
        setTheme((theme) => (theme = changeTotheme));
        handlerClickModalTheme();
    };

    return [theme, setTheme, handlerClickModalTheme, changeTheme, btnThemeRef];
}
