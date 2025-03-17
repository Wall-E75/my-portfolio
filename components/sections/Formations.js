import styles from '@styles/Formations.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Formations() {
    return(
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>Formations</h1>
                <div className={styles.iconContainer}>
                        <FontAwesomeIcon className={styles.icon} color='#d8d8d8' icon={faGraduationCap} />
                </div>
                <div className={styles.formationContainer}>
                    <div className={styles.infos}>
                        <h2>Diplome</h2>
                        <p>2025 : Titre RNCP niveau 6 (Bac+ 3/4): Concepteur Developpeur d'application Web et Mobile</p>
                    </div>
                    <div className={styles.infos}>
                        <h2>Formations</h2>
                        <p>2024 - 2025 : CodingBootCamp - La Capsule</p>
                        <p>2022 - 2023 : Developpeur web - OpenClassRoom</p>
                    </div>   
                    <div className={styles.infos}>
                        <h2>Langues</h2>
                        <p>Français : langue maternelle</p>
                        <p>Anglais : compréhension écrite avancée, expression orale intermédiaire</p>
                        <p>Soninké : parlé</p>
                        <p>Arabe : compréhension orale basique, lu et écrit</p>
                    </div>

                </div>
            </main>
        </>
    );
}

export default Formations;