import styles from '@styles/technoProject.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { merriweather, raleway } from '../ui/fonts';
import { useTranslation } from 'next-i18next';
import NextImageModule from 'next/image';
const Image = NextImageModule.default || NextImageModule; // Assure que l'import de l'image est correct

function TemplateProjects(props) {
    const { t } = useTranslation('common');
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
                <span>{t('projects.labels.frontend')}: </span>
                <Link href={props.front} target='_blank' rel='noopener noreferrer'>
                    {props.front}
                </Link>
            </p>
            <p className={styles.gitLink}>
                <span>{t('projects.labels.backend')}: </span>
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
                        priority={props.priority || false}
                    />
                </div>

                <ul>
                    <li className={styles.project}>
                        <h2 className={`${styles.projectTitle} ${merriweather?.className || ''}`}>
                            {props.name}
                        </h2>
                        <div className={styles.projectDesc}>
                            <div className={styles.paragraph}>
                                <span className={styles.textTitle}>{t('projects.labels.description')}: </span>
                                <span className={styles.rightText}>{props.description}</span>
                            </div>
                            <div className={styles.paragraph}>
                                <span className={styles.textTitle}>{t('projects.labels.technologies')}: </span>
                                <span className={styles.rightText}>{props.techno}</span>
                            </div>
                            <div className={styles.paragraph}>
                                <span className={styles.textTitle}>{t('projects.labels.github')}: </span>
                                <span className={styles.rightText}>{githubLink}</span>
                            </div>
                            {props.link && (
                                <div className={styles.paragraph}>
                                    <span className={styles.textTitle}>{t('projects.labels.website')}: </span>
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