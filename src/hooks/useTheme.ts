import { useEffect, useState } from 'react';

const THEME_KEY = 'theme';

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        // Get the initial theme from localStorage or default to 'light'
        return localStorage.getItem(THEME_KEY) || 'light';
    });

    useEffect(() => {
        // Update the theme in localStorage whenever it changes
        localStorage.setItem(THEME_KEY, theme);
        const elem = document.querySelector('html');
        elem?.classList.remove(theme === 'light' ? 'dark' : 'light');
        elem?.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, setTheme, toggleTheme };
}
