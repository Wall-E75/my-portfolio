import styles from '@styles/Experiences.module.css';
import { useEffect, useState, useContext } from 'react';
import { useVisibility } from '@/context/visibilityContext';


function Experiences(props) {
    const { displayComponant, setDisplayComponant } = useVisibility();

    const experienceData = [
        {
            entreprise: 'uh',
            startYear: '65',
            endYear: '',
            task: '',

        },

        {
            entreprise: 'uh',
            startYear: '65',
            endYear: '',
            task: '',

        }
    ];
   
    useEffect (() => {
    /**
     * Verifie s'il y a des donnés a afficher si non, elle renvoie
     * false au composant parent afin qu'il n'affiche pas la page
     * experience
     */
    const hasValidExperience = experienceData.some(xp => xp.entreprise && xp.startYear);

        if (!hasValidExperience) {
            setDisplayComponant(false);
        };
    }, []) //Se declenche uniquement au montage

    if (!displayComponant) return null; //ne rien afficher si display est false

    const experiences = experienceData.map((xp, index) => {
        return <div key={index}>
            <p>Nom de l'entreprise: {xp.entreprise}</p>
            <p>Année: {xp.startYear}</p>
            <p>Taches réalisées: {xp.task}</p>
        </div>
    })
   

    
    return(
        <>
        <main className={styles.main}>
            <h1>Experiences</h1>
            {experiences}
        </main>
        </>
    );
}

export default Experiences;