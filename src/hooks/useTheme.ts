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
        // Apply the theme to the document body
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, setTheme, toggleTheme };
}
