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
        // Remove the non-selected theme class and add the selected theme class to the body
        document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
        document.body.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, setTheme, toggleTheme };
}
