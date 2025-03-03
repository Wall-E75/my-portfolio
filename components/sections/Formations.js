import styles from '../styles/Formations.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Formations() {
    return(
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>Formations</h1>
                <div>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <div>
                        <h2>Diplome</h2>
                        <p>2025: Titre RNCP niveau 6 (Bac+ 3/4): Concepteur Developpeur d'application Web et Mobile</p>
                    </div>
                    <div>
                        <h2>Formations</h2>
                        <p>2024 - 2025: CodingBootCamp - La Capsule</p>
                        <p>2022 - 2023: Developpeur web - OpenClassRoom</p>
                    </div>

                

                </div>
            </main>
        </>
    );
}

export default Formations;