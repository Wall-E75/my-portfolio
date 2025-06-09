import styles from '@styles/Carousel.module.css';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

function Carousel({ skillsData }) {
    const [currentIndex, setCurrentIndex] = useState(0); //Indique l'index de l'image actuelle
    const [isPlaying, setIsPlaying] = useState(true); //Indique si le carousel est en lecture automatique
    const autoplayRef = useRef(null); //Référence pour l'intervalle d'autoplay
    const intervalTime = 6000; //Temps entre chaque image

   
   
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === skillsData.length - 1  ? 0 : prevIndex + 1 
        );
    };

    // Fonctopn pour passer à la slide précédente
    const prevSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? skillsData.length - 1 : prevIndex - 1
            // prevIndex > 0 ? prevIndex - 1 : props.length - 1
        );
    };

    // Fonction pour selectionner une slide spécifique
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Gestion de l'autoplay
    useEffect(() => {
        if (isPlaying) {
            autoplayRef.current = setInterval(() => {
                nextSlide();
            }, intervalTime)
        }
        // Netoyage lors du démontage du composant
        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, [isPlaying]);
    return (
        <>
            <div className={styles.carousel}>
            
                <div className={styles.carouselContainer}>
                    <div 
                        className={styles.carouselSlides}
                        style={{ transform: `translateX(-${currentIndex * 100}%)`}}
                    >
                        
                        {skillsData.map((themeData, themeIndex) => (
                            <div 
                                key={themeIndex} className={styles.slides}>
                                <div className={styles.skillsTheme}>
                                    <h3 className={styles.themeTitle}>
                                        {themeData.title}
                                    </h3>
                                    <div className={styles.skillsGrid}>
                                        {themeData.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex} className={styles.skillItem}>
                                                <div className={styles.skillIcon}>
                                                    {typeof skill.icon === 'string' ? (
                                                        <Image
                                                            src={skill.icon}
                                                            alt={skill.name}
                                                            width={32}
                                                            height={32}
                                                        />
                                                    ) : (
                                                        <FontAwesomeIcon
                                                            icon={skill.icon}
                                                            className={styles.icon}
                                                        />
                                                    )}
                                                </div>
                                                <span className={styles.skillName}>
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
                        
               

                <div className={styles.carouselControls}>
                    <button 
                        className={styles.btn}
                        onClick={prevSlide}
                        aria-label='Slide précédente'
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button 
                        className={styles.btn}
                        onClick={nextSlide}
                        aria-label='Slide suivante'
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>

                <div className={styles.carouselIndicators}>
                        {skillsData.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.indicator} ${
                                    index === currentIndex ? styles.active : ''
                                }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Aller à la slide ${index + 1}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                </div>
            </div>

            
        </>
    );
};

export default Carousel;