import { useState, useCallback } from 'react';
import ThemeConext from './ThemeContext';
import MainContent from './MainContent';

function DarkOrLight(props) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        if (theme === 'light') {
            setTheme('dark');
        } else if (theme === 'drak') {
            setTheme('light');
        }
    }, [theme]);

    return (
        <ThemeConext.Provider value={{ theme, toggleTheme}}>
            <MainContent/>
        </ThemeConext.Provider>

    );
}

export default DarkOrLight;