import styles from '../styles/Projets.module.css';

function Projets() {
    return(
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>Projets</h1>
                <div className={styles.container}>
                    <article className={styles.card}>
                        <h2>Projet 1</h2>
                        <p>description du projet 1</p>
                    </article>
                    <div className={styles.card}>
                        <h2>Projet 2</h2>
                        <p>description du projet 2</p>
                    </div>
                    <div className={styles.card}>
                        <h2>Projet 3</h2>
                        <p>description du projet 3</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Projets;