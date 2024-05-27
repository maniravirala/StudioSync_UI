import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

