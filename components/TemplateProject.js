import styles from '../styles/technoProject.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function TemplateProjects(props) {
    // const [isDeployed, setIsDeployed] = useState(false)
    
    return (
        <>
            <h2 className={styles.title}>{props.title}</h2>
            
            <div className={styles.projectContainer}>
                    <Image 
                        src={props.image}
                        alt={props.alt}
                        width={200}
                        height={200}
                    />
                    <ul>
                        <li className={styles.project}>
                            <h2>{props.name}</h2>
                            <p>Description: {props.description}</p>
                            <p>Technologies: {props.techno}</p>
                            <p>GitHub: {props.github}</p>
                            {props.isDeployed && <p>Lien vers le site: <Link href={props.link}>{props.link}</Link></p>}
                        </li>
                    </ul>                  
            
            </div>
                
           

        
        </>
    );
};

export default TemplateProjects;