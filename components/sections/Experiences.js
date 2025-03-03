import styles from '@styles/Experiences.module.css';
import { useEffect, useState } from 'react';


function Experiences(props) {
    const [display, setDisplay] = useState(true)
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
        for(let xp in experienceData) {
            if (!xp.entreprise || !xp.startYear) {
                setDisplay(false);
                props.showComponent(false);
            } else {
                props.showComponent(true);
            }
            
            console.log('check experiences')

        }
    }, []) //Se declenche uniquement au montage

    if (!display) return null; //ne rien afficher si display est false

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