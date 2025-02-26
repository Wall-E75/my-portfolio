import styles from '../styles/Projets.module.css';
import Cards from './Cards';

function Projets() {
    const projectData = [
        {
            id: 1,
            title: 'HTML/CSS',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 1',
            image: '/html_css_logo.webp',
            alt: 'Logo html et css',
            // priority: false,
            link: '/htmlCssProjects',
        },
        {
            id: 2,
            title: 'Js Vanilla',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 2',
            image: '/Js_logo.webp',
            alt: 'Logo JavaScript',
            priority: false,
            link: 'jsVanillaProjects',
        },
        {
            id: 3,
            title: 'React',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 3',
            image: '/React_logo.webp',
            alt: 'Logo React',
            // priority: false,
            link: 'reactProjects',
        },

        {
            id: 3,
            title: 'React native',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 3',
            image: '/React_logo.webp',
            alt: 'Logo React',
            // priority: false,
            link: 'reactNativeProjects',
        },
    ];

    const projectCards = projectData.map((project, index) => (
        <div key={index}  className={styles.cardContainer}>
            <Cards 
                title={project.title} 
                description={project.description} 
                image={project.image} 
                alt={project.alt} 
                link={project.link}
            />
            <h3>{project.title}</h3>

        </div>
    ));

    return(
        <>
            <main className={styles.main}>
                <h1 className={styles.title}>Projets</h1>
                <div className={styles.container}>
                    {projectCards}
                </div>
            </main>
        </>
    );
};

export default Projets;