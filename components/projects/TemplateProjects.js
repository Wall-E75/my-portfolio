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
            <div 
                className={styles.projectContainer}
                data-deployed={props.link ? "true" : "false"}
            >
                <div className={styles.imageContainer}>
                    <Image 
                        src={props.image}
                        alt={props.alt}
                        width={400}
                        height={300}
                        priority={false}
                    />
                </div>

                <ul>
                    <li className={styles.project}>
                        <h2 className={`${styles.projectTitle} ${merriweather?.className || ''}`}>
                            {props.name}
                        </h2>
                        <div className={styles.projectDesc}>
                            <div className={styles.paragraph}>
                                <span className={styles.textTitle}>Description: </span>
                                <span className={styles.rightText}>{props.description}</span>
                            </div>
                            <div className={styles.paragraph}>
                                <span className={styles.textTitle}>Technologies: </span>
                                <span className={styles.rightText}>{props.techno}</span>
                            </div>
                            <div className={styles.paragraph}>
                                <span className={styles.textTitle}>GitHub: </span>
                                <span className={styles.rightText}>{githubLink}</span>
                            </div>
                            {props.link && (
                                <div className={styles.paragraph}>
                                    <span className={styles.textTitle}>Lien vers le site: </span>
                                    <span className={styles.rightText}>
                                        <Link  
                                            href={props.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            {props.link}
                                        </Link>
                                    </span>
                                </div>
                            )}
                        </div>
                    </li>
                </ul>                  
            
            </div>
        
        </>
    );
};

export default TemplateProjects;