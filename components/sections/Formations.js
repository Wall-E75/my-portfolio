import styles from '@styles/Formations.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { merriweather, raleway } from '../ui/fonts';

function Formations() {
    return(
        <>
            <main className={`${styles.main} ${raleway.className}`}>
                <h1 className={`${styles.title} ${raleway.className}`}>
                    Formations & Certifications
                </h1>
                <div className={styles.iconContainer}>
                        <FontAwesomeIcon 
                            className={styles.icon} 
                            icon={faGraduationCap} 
                        />
                </div>
                <div className={styles.formationContainer}>
                    <div className={styles.infos}>
                        <h2 className={merriweather.className}>Diplôme</h2>
                        <p><strong>2025</strong> : Titre RNCP niveau 6 (Bac+ 3/4)</p>
                        <p>Concepteur Développeur d'Application Web et Mobile</p>
                    </div>
                    <div className={styles.infos}>
                        <h2 className={merriweather.className}>Formations</h2>
                        <p><strong>2024 - 2025</strong> : CodingBootCamp - La Capsule</p>
                        <p><strong>2022 - 2023</strong> : Developpeur web - OpenClassRoom</p>
                    </div>   
                    <div className={styles.infos}>
                        <h2 className={merriweather.className}>Langues</h2>
                        <p><strong>Français</strong> : langue maternelle</p>
                        <p><strong>Anglais</strong> : compréhension écrite avancée, expression orale intermédiaire</p>
                        <p><strong>Soninké</strong> : compréhension oral avancé, expression orale intermédiaire</p>
                        <p><strong>Arabe</strong> : compréhension orale basique, lu et écrit</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Formations;