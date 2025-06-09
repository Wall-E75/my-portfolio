import styles from '@styles/Projets.module.css';
import Cards from '@components/ui/Cards';
import CarouselProject from '@components/layouts/CarouselProject';
import { merriweather, raleway } from '../ui/fonts';
import { jsVanillaProjectsData } from '../projects/JsVanillaProjects';
import { reactProjectsData } from '../projects/ReactProjects';

function Projets() {
    const projectData = [
        {
            id: 1,
            title: 'HTML/CSS',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 1',
            image: '/html5_icon.webp', 
            alt:'Logo html5', 
            image2: '/css_logo_icon.webp', 
            alt2: 'logo css',    
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
            id: 4,
            title: 'React native',
            description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur fringilla cras nascetur conubia nisl, ut tincidunt? Vel duis fringilla class auctor mattis at penatibus. du projet 3',
            image: '/React_logo.webp',
            alt: 'Logo React',
            // priority: false,
            link: 'reactNativeProjects',
        },

        // {
        //     id: 4,
        //     title: 'Full Stack',
        //     description: '',
        //     image: '/icon-react-native.webp',
        //     alt: '',
        //     link: '',
        // }
    ];
    const allProjects = [...jsVanillaProjectsData, ...reactProjectsData];
    console.log('Tous les projets ====>', allProjects);
    console.log('Projets JS Vanilla ===>', jsVanillaProjectsData);
    console.log('Projets React ===>', reactProjectsData);
    

    const projectCards = projectData.map((project, index) => (
        <div key={index}  className={styles.cardContainer}>
            <Cards 
               { ...project }
            />
            <h3 className={merriweather.className}>{project.title}</h3>

        </div>
    ));

    return(
        <>
            <main className={`${styles.main} ${raleway.className}`}>
                <h1 className={`${styles.title} ${merriweather.className}`}>Projets</h1>
                <section className={styles.carouselSection}>
                    <h2 className={`${styles.sectionTitle} ${merriweather.className}`}>
                        Quelques projets
                    </h2>
                    <p className={styles.sectionDescription}>
                        Découvrez mes projets React et JavaScript qui témoignent de mon évolution en développement web full-stack.
                    </p>

                    <CarouselProject 
                        projects={allProjects}
                        className={styles.carouselElem}
                        autoplayInterval={6000}
                        showCategory={true}
                        showAutoplay={true}
                        title="Projets JS Vanilla et React"
                    />
                </section>

                <section className={styles.categoriesSection}>
                    <h2 className={`${styles.sectionTitle} ${merriweather.className}`}>
                        Parcourez mes projets organisés par technologies
                    </h2>

                    <div className={styles.container}>
                        {projectCards}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Projets;