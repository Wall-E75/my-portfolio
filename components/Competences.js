import styles from '../styles/Competences.module.css';

function Competences() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.skillsIntro}>
                    <h1 className={styles.title}>Mes compétences</h1>
                    <p>
                        Grâce à mes expériences variées, j'ai développé des compétences transversales et une grande adaptabilité. 
                        Autonome et rigoureux, je relève chaque défi avec efficacité. 
                        Mes formations continues m'ont permis d'acquérir et d'affiner des compétences techniques, 
                        dont voici un aperçu :
                    </p>
                </div>
                <div className={styles.skillsContainer}>
                    <h3>Compétences techniques</h3>
                    <div className={styles.fullStack}>
                        <div className={styles.frontEnd}>
                            <h4>Front-end</h4>
                            <ul>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>React-native</li>
                                <li>JavaScript</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Tailwind</li>
                            </ul>
                        </div>
                        <div className={styles.backEnd}>
                            <h4>Back-end</h4>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>RESTful API</li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <div className={styles.dataBase}>
                            <h4>Base de données</h4>
                            <ul>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                            </ul>
                        </div>

                        <div className={styles.tools}>
                            <h4>Outils</h4>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>VSCode</li>
                                <li>Postman</li>
                                <li>ThunderClient</li>
                                <li>Expo</li>
                            </ul>
                        </div>

                    </div>
                    <div className={styles.otherSkills}>
                        <h4>Autres compétences</h4>
                        <ul>
                            <li>Responsive design</li>
                            <li>SEO</li>
                            <li>Accessibilité</li>
                            <li>Web sémantique</li>
                            <li>Performance web</li>
                        </ul>
                    </div>

                </div>
            </main>
        </>
    );
};

export default Competences;