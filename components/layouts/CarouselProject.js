import styles from '@styles/CarouselProject.module.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import TemplateProjects from '@components/projects/TemplateProjects';
import { useTranslation } from 'next-i18next';
import NextImageModule from 'next/image';
const Image = NextImageModule.default || NextImageModule; // Solution pour ES Module avec Next.js

function CarouselProject({ 
    projects = [],
    autoplayInterval = 7000,
    showAutoplay = true,
    showCategory = true
 }) {
    const { t } = useTranslation('common');
    const [currentIndex, setCurrentIndex] = useState(0); //Indique l'index du projet actuelle
    const [isPlaying, setIsPlaying] = useState(true); //Indique si le carousel est en lecture automatique
    const autoplayRef = useRef(null); //Référence pour l'intervalle d'autoplay
   // Fonction de navigation
    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1  ? 0 : prevIndex + 1 //si prevIndex egale au dernier élément de projects alors on reprend à l'element 0 sinon on fait +1
        );
    }, [projects.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    }, [projects.length]);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    const toggleAutoplay = useCallback(() => {
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    }, []);

    //Gestion autoplay
    useEffect(() => {
        if (isPlaying && projects.length > 1) {
            autoplayRef.current = setInterval(() => {
                nextSlide();
            }, autoplayInterval)
        }
        // Netoyage lors du démontage du composant
        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, [isPlaying, nextSlide, projects.length, autoplayInterval]);

    // Gestion des touches clavier
    useEffect(() => {
        const handleKeyPress = (event) => {
            switch(event.key) {
                case 'ArrowLeft': 
                    prevSlide();
                break;
                case 'ArrowRight': 
                    nextSlide();
                break;
                case ' ': 
                    event.preventDefault(); // Empêche le scroll de la page
                    toggleAutoplay();
                break;
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);

    }, [prevSlide, nextSlide, toggleAutoplay]);

    // Réinitialiser l'index si le nombre de projets change
    useEffect(() => {
        if (currentIndex >= projects.length && projects.length > 0) {
            setCurrentIndex(0);
        }
    }, [projects.length, currentIndex]);

    // Porut éviter un tableau vide
    if (!projects || projects.length === 0) {
        return (
            <div className={styles.noProjects}>
                {t('projects.carouselProjects.noProjects.message')}
            </div>
        );
    }

    const currentProject = projects[currentIndex];

    return (
        

        <div className={styles.carousel}>

            <div className={styles.carouselHeader}>
                <div className={styles.projectInfo}>
                    <span className={styles.projectCount}>
                        {currentIndex + 1} / {projects.length}
                    </span>
                    {showCategory && currentProject?.category && (
                        <span className={styles.projectCategory}>
                            {currentProject.category}
                        </span>
                    )}
                    {!showCategory && (
                        <span className={styles.projectCategory}>
                            JavaScript & React
                        </span>
                    )}
                </div>

                {showAutoplay && projects.length > 1 && (
                    <button 
                        className={styles.autoPlayBtn}
                        onClick={toggleAutoplay}
                        title={isPlaying ? 'Mettre en pause' : 'Reprendre'}
                        aria-label={isPlaying ? 'Mettre en pause' : 'Reprendre'}
                    >
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </button>
                )}
            </div>
        
            <div className={styles.carouselContainer}>
                <div 
                    className={styles.carouselSlides}
                    style={{ 
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    
                    {projects.map((project, index) => (
                        <div 
                            key={`${project.category || 'project'}-${project.id}`} 
                            className={styles.slides}
                            style={{
                                minWidth: '100%'
                            }}
                        >
                            <TemplateProjects
                                {...project}
                                github={project.github}
                                front={project.github?.front || project.front}
                                back={project.github?.back || project.back}
                            />
                        </div>
                    ))}
                </div>

                {projects.length > 1 && (
                    <>
                        <button
                            className={`${styles.navBtn} ${styles.prevBtn}`}
                            onClick={prevSlide}
                            title='Projet précédent'
                            aria-label='Projet précédent'
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <button
                            className={`${styles.navBtn} ${styles.nextBtn}`}
                            onClick={nextSlide}
                            title='projet suivant'
                            aria-label='Projet suivant'
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </>

                )}
                
            </div>

            {projects.length > 1 && (
                <div className={styles.carouselIndicators}>
                    {projects.map((project, index) => (
                        <button 
                            key={index}
                            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                            onClick={() => goToSlide(index)}
                            title={project?.name}
                            aria-label={`Aller au projet ${index + 1}: ${project?.name}`}
                        />
                    ))}
                </div>
            )}
            
            {projects.length > 1 && (
                <div className={styles.instructions}>
                    Utilisez ← → pour naviguer et Espace pour pause/play
                </div>
            )}
            
        </div> 
    );
};

export default CarouselProject;