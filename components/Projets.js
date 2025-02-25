import styles from '../styles/Projets.module.css';
import Cards from './Cards';

function Projets() {
    const projetData = [
        {
            id: 1,
            title: 'HTML/CSS',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 1',
            image: '/html_css_logo.webp',
            alt: 'Logo html et css',
            link: '/htmlCssProjects',
        },
        {
            id: 2,
            title: 'Js Vanilla',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 2',
            image: '/Js_logo.webp',
            alt: 'Logo JavaScript',
            link: 'jsVanillaProjects',
        },
        {
            id: 3,
            title: 'React',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 3',
            image: '/React_logo.webp',
            alt: 'Logo React',
            link: 'reactProjects',
        },

        {
            id: 3,
            title: 'React native',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 3',
            image: '/React_logo.webp',
            alt: 'Logo React',
            link: 'reactNativeProjects',
        },
    ];

    const projetCards = projetData.map((projet) => (
        <div className={styles.cardContainer}>
            <Cards 
                key={projet.id} 
                title={projet.title} 
                description={projet.description} 
                image={projet.image} 
                alt={projet.alt} 
                link={projet.link}
            />
            <h3>{projet.title}</h3>

        </div>
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