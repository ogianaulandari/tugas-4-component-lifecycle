import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
        console.log(`Theme changed to: ${theme}`);
      }, [theme]);      

    const toggleTheme = () =>{
        setTheme ((prevTheme) =>{
            const newTheme = (prevTheme === 'light' ? 'dark' : 'light');
            console.log(`Switching to ${newTheme} theme`);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value = {{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeContext;