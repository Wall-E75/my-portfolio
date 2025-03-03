import styles from '../styles/Experiences.module.css';
import { useEffect, useState } from 'react';


function Experiences(props) {
    const [display, setDisplay] = useState(true)
    const experienceData = [1,2];
   
    useEffect (() => {
    /**
     * Verifie s'il y a des donnés a afficher si non, elle renvoie
     * false au composant parent afin qu'il n'affiche pas la page
     * experience
     */
        if (experienceData.length === 0) {
            setDisplay(false);
            props.showComponent(false);
        } else {
            props.showComponent(true);
        }
        
        console.log('check experiences')
    }, []) //Se declenche uniquement au montage

    if (!display) return null; //ne rien afficher si display est false
   

    
    return(
        <>
        <main className={styles.main}>
            <h1>Experiences</h1>
            
        </main>
        </>
    );
}

export default Experiences;