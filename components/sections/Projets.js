import styles from '@styles/Projets.module.css';
import Cards from '@components/ui/Cards';
import CarouselProject from '@components/layouts/CarouselProject';
import { merriweather, raleway } from '../ui/fonts';
import { jsVanillaProjectsData } from '../projects/JsVanillaProjects';
import { reactProjectsData } from '../projects/ReactProjects';
import { useTranslation } from 'next-i18next';

function Projets() {
    const { t } = useTranslation('common');

    const projectData = [
        {
            id: 1,
            title: t('projects.categories.htmlCss.title'),
            description: t('projects.categories.description'),
            image: '/html5_icon.webp', 
            alt:'Logo html5', 
            image2: '/css_logo_icon.webp', 
            alt2: 'logo css',    
            // priority: false,
            link: '/htmlCssProjects',
        },
        {
            id: 2,
            title: t('projects.categories.jsVanilla.title'),
            description: t('projects.categories.jsVanilla.description'),
            image: '/Js_logo.webp',
            alt: 'Logo JavaScript',
            priority: false,
            link: 'jsVanillaProjects',
        },
        {
            id: 3,
            title: t('projects.categories.react.title'),
            description: t('projects.categories.react.description'),
            image: '/React_logo.webp',
            alt: 'Logo React',
            // priority: false,
            link: 'reactProjects',
        },

        {
            id: 4,
            title: t('projects.categories.reactNative.title'),
            description: t('projects.categories.reactNative.description'),
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
                <h1 className={`${styles.title} ${merriweather.className}`}>{t('projects.title')}</h1>
                <section className={styles.carouselSection}>
                    <h2 className={`${styles.sectionTitle} ${merriweather.className}`}>
                        {t('projects.subtitle')}
                    </h2>
                    <p className={styles.sectionDescription}>
                        {t('projects.sectionDescription')}
                    </p>

                    <CarouselProject 
                        projects={allProjects}
                        className={styles.carouselElem}
                        autoplayInterval={6000}
                        showCategory={true}
                        showAutoplay={true}
                        title={t('projects.carouselTitle')}
                    />
                </section>

                <section className={styles.categoriesSection}>
                    <h2 className={`${styles.sectionTitle} ${merriweather.className}`}>
                        {t('projects.categoriesTitle')}
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