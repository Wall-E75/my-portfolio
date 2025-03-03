import styles from '../styles/Competences.module.css';
import Image from 'next/image';

function Competences() {
    return (
        <>
            <main className={styles.main}>
            <h1 className={`${styles.title} ${styles.titleColor}`}>Mes compétences</h1>
                <div className={styles.skillsIntro}>
                    <p className={styles.skillsText}>
                        Mes expériences antérieur, mon permis de développé des compétences transversales et une grande adaptabilité. 
                        Autonome et rigoureux, je sais faire face aux défis avec efficacité. 
                        De plus mes différentes formations continues m'ont permis d'acquérir et d'affiner des compétences techniques, 
                        dont voici un aperçu :
                    </p>
                </div>
                {/* <h2 className={styles.titleColor}>Compétences techniques</h2> */}

                <div className={styles.skillsContainer}>
                    {/* <div className={styles.fullStack}> */}
                        <div className={`${styles.frontEnd} ${styles.stack}`}>
                            <h3 className={styles.titleColor}>Front-end</h3>
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>React-native</li>
                                <li>Tailwind</li>
                            </ul>
                        </div>
                        <div className={`${styles.backEnd} ${styles.stack}`}>
                            <h3 className={styles.titleColor}>Back-end</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>RESTful API</li>
                            </ul>
                        </div>

                    {/* </div> */}
                    {/* <div> */}
                        <div className={`${styles.database} ${styles.stack}`}>
                            <h3 className={styles.titleColor}>Base de données</h3>
                            <ul>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                            </ul>
                        </div>

                        <div className={`${styles.tools} ${styles.stack}`}>
                            <h3 className={styles.titleColor}>Outils</h3>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>VSCode</li>
                                <li>Postman</li>
                                <li>ThunderClient</li>
                                <li>Expo</li>
                            </ul>
                        </div>

                    {/* </div> */}
                    <div className={`${styles.otherSkills} ${styles.stack}`}>
                        <h3 className={styles.titleColor}>Autres compétences</h3>
                        <ul>
                            <li>Responsive design</li>
                            <li>SEO</li>
                            <li>Accessibilité</li>
                            <li>Web sémantique</li>
                            <li>Performance web</li>
                            <li>Gestion de projet</li>
                        </ul>
                    </div>

                </div>
            </main>
        </>
    );
};

export default Competences;