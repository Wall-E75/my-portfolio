import { createContext, useState, useContext } from "react";

const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => {},
}); // Etape 1 : Creation d'un contexte avec la valuer par defaut à light

function ThemeProvider({ children }) { // Etape 2: Creation d'un composant ThemeProvider qui encapsule le ThemeContexte.Provider

    const [theme, setTheme] = useState('light'); // Etape 3: Creation d'un state qui contient la valeur du theme fournie par le parent
    
    return ( // Etape 4: Creation d'un ThemeContext.Provider qui encapsule le ThemeProvider et qui permet de passer la valeur du theme à tous les enfants de ce composant
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )

};

function useTheme() {
    const context = useContext(ThemeContext); // Etape 5: Creation d'un hook qui permet de recuperer et acceder à la valeur du theme et setTheme
    if (!context) {
        throw new Error("useTheme doit être utilisé dans un ThemeProvider");
    };
    return context; // Etape 6: On retourne la valeur du theme et setTheme

};

export { ThemeProvider, useTheme }; 