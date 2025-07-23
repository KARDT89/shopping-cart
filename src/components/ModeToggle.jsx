import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode]);

    useEffect(() => {
        const storedPref = localStorage.getItem("darkMode") === "true";
        setDarkMode(storedPref);
    }, []);

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="cursor-pointer hover:text-primary"
        >
            {darkMode ? <Moon /> : <Sun />}
        </button>
    );
}

export default ModeToggle;
