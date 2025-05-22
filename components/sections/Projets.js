import styles from '@styles/Projets.module.css';
import Cards from '@components/ui/Cards';
import { merriweather, raleway } from '../ui/fonts';

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
            id: 3,
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
                <div className={styles.container}>
                    {projectCards}
                </div>
            </main>
        </>
    );
};

export default Projets;