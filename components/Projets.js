import styles from '../styles/Projets.module.css';
import Cards from './Cards';

function Projets() {
    const projetData = [
        {
            id: 1,
            title: 'Kanap',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 1',
            image: '/explain_pix1.webp',
            alt: 'test',
        },
        {
            id: 2,
            title: 'La Sauce',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 2',
            image: '/explain_pix2.webp',
            alt: 'test',
        },
        {
            id: 3,
            title: 'FoodApp',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 3',
            image: '/explain_pix3.webp',
            alt: 'test',
        },
    ];

    const projetCards = projetData.map((projet) => (
        <Cards key={projet.id} title={projet.title} description={projet.description} image={projet.image} alt={projet.alt}/>
    ));

    return(
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>Projets</h1>
                <div className={styles.container}>
                    {projetCards}
                </div>
            </main>
        </>
    );
};

export default Projets;