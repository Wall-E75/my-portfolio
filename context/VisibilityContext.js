import { createContext, useState, useContext } from "react";

const VisibilityContext = createContext(null); // Creation d'un contexte

function VisibilityProvider({ children }) { // Creation d'un composant qui contient le context
    const [isVisible, setIsVisible] = useState(false); 
    const [displayComponent, setDisplayComponent] = useState(true);
    
    return (
        <VisibilityContext.Provider value={{ isVisible, setIsVisible, displayComponent, setDisplayComponent }}>
            { children }
        </VisibilityContext.Provider>// on passe la valeur de isVisible et setIsVisble à tous les enfants de ce composant
    )
};

//Hook
function useVisibility() { // Creation d'un hook qui permet de recuperer et acceder à la valeur de isVisible et setIsVisible
    const context = useContext(VisibilityContext); // Recuperation de la valeur de isVisible et setIsVisible
    if (!context) {
        throw new Error("useVisibility doit être utilisé dans un VisibilityProvider");
    };
    return context;
};

export { VisibilityProvider, useVisibility}; // Exportation du composant et du hook