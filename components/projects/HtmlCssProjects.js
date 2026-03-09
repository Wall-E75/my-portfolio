import styles from '@styles/technoProject.module.css';
import CarouselProject from '@components/layouts/CarouselProject';
import { merriweather, raleway } from '../ui/fonts';
import { useTranslation } from 'next-i18next';

function HtmlCssProjects() {
    const { t } = useTranslation('common');
    const projectData = [
        {
            id: 1,
            name: t('projects.htmlCssProjects.booki.name'),
            description: t('projects.htmlCssProjects.booki.description'),
            image: '/booki_logement.webp',
            alt: 'logo booki',
            techno: 'html, Css',
            github: 'https://github.com/Wall-E75/booki.git',
            link: '',
            category: 'HTML/CSS',
        },
        {
            id: 2,
            name: t('projects.htmlCssProjects.ohmyfood.name'),
            description: t('projects.htmlCssProjects.ohmyfood.description'),
            image: '/ohmyfood_restaurant.webp',
            alt: 'logo oh my food',
            techno: 'html, Css, Saas, keyframe',
            github: 'https://github.com/Wall-E75/ohmyfood.github.io',
            link: 'https://wall-e75.github.io/ohmyfood.github.io/',
            category: 'HTML/CSS',
        },
    ];

    return (
        <>
        <main className={`${styles.mainContainer} ${raleway?.className || ''}`}>
            <h1 className={`${styles.themeTitle} ${merriweather?.className || ''}`}>
                {t('projects.pagesTitles.htmlCss')}
            </h1>
            <CarouselProject projects={projectData} />
        </main>
        </>
    );
}

export default HtmlCssProjects;