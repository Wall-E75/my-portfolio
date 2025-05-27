import styles from '@styles/technoProject.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { merriweather, raleway } from '../ui/fonts';

function TemplateProjects(props) {
    const gitFrontOnly = (
        <span  className={styles.rightText}>
            <Link href={props.github} target='_blank' rel='noopener noreferrer'>
                {props.github}
            </Link>
        </span>
    );
    const gitFullStack = (
        <div>
            <p className={styles.gitLink}>
                <span>Frontend: </span>
                <Link href={props.front} target='_blank' rel='noopener noreferrer'>
                    {props.front}
                </Link>
            </p>
            <p className={styles.gitLink}>
                <span>Backend: </span>
                <Link href={props.back} target='_blank' rel='noopener noreferrer'>
                    {props.back}
                </Link>
            </p>
        </div>
    );
    const githubLink = typeof props.github === 'string' ? gitFrontOnly : gitFullStack;
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
                                <p className={styles.paragraph}><span className={styles.textTitle}>Description: </span><span className={styles.rightText}>{props.description}</span></p>
                                <p className={styles.paragraph}><span className={styles.textTitle}>Technologies: </span><span className={styles.rightText}>{props.techno}</span></p>
                                <span className={styles.paragraph}><span className={styles.textTitle}>GitHub: </span><span className={styles.rightText}>{githubLink}</span></span>
                                {props.link && <p className={styles.paragraph}><span className={styles.textTitle}>Lien vers le site: </span><span className={styles.rightText}><Link  href={props.link}>{props.link}</Link></span></p>}
                            </div>
                        </li>
                    </ul>                  
            
            </div>
                
           

        
        </>
    );
};

export default TemplateProjects;