import styles from '@styles/technoProject.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function TemplateProjects(props) {
    // const [isDeployed, setIsDeployed] = useState(false)
    
    return (
        <>
            <h2 className={styles.title}>{props.title}</h2>
            
            <div className={styles.projectContainer}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={props.image}
                        alt={props.alt}
                        width={200}
                        height={200}
                    />


                </div>
                    <ul>
                        <li className={styles.project}>
                            <h2 className={styles.projectTitle}>{props.name}</h2>
                            <div className={styles.projectDesc}>
                                <p><span className={styles.textTitle}>Description: </span><span className={styles.rightText}>{props.description}</span></p>
                                <p><span className={styles.textTitle}>Technologies: </span><span className={styles.rightText}>{props.techno}</span></p>
                                <p><span className={styles.textTitle}>GitHub: </span><span  className={styles.rightText}><Link href={props.github}>{props.github}</Link></span></p>
                                {props.isDeployed && <p><span className={styles.textTitle}>Lien vers le site: </span><span  className={styles.rightText}><Link  href={props.link}>{props.link}</Link></span></p>}
                            </div>
                        </li>
                    </ul>                  
            
            </div>
                
           

        
        </>
    );
};

export default TemplateProjects;