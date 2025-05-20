import styles from '@styles/Carousel.module.css';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

function Carousel(props) {
    const [currentIndex, setCurrentIndex] = useState(0); //Indique l'index de l'image actuelle
    const [isPlaying, setIsPlaying] = useState(true); //Indique si le carousel est en lecture automatique
    const autoplayRef = useRef(null); //Référence pour l'intervalle d'autoplay
    const intervalTime = 3000; //Temps entre chaque image

   
   
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < props.skills.length - 1  ? prevIndex + 1 : 0
            // prevIndex < props.length - 1  ? prevIndex + 1 : 0

        );
    };

    // Fonctopn pour passer à la slide précédente
    const prevSlide = () => {
        setCurrentIndex(prevIndex =>
            prevIndex > 0 ? prevIndex - 1 : props.skills.length - 1
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
                    <h3>{props.title}</h3>
                    <div className={styles.carouselSlides}
                        style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                        
                        {props.skills.map((skill, index) => (
                            <div 
                                key={index}
                                className={`${styles.slides} ${index === currentIndex ? styles.active : ''}`}
                            >
                                <div className={styles.slideContent}>
                                    
                                    {skill.name}
                                </div>

                            </div>
                        ))}

                    </div>
                    
                </div>
                        
               

                <div className={styles.carouselControls}>
                    <button 
                        className={`${styles.prev} ${styles.btn}`}
                        onClick={prevSlide}
                    >
                        <FontAwesomeIcon icon={faBackward} />
                    </button>
                    <button 
                        className={`${styles.next} ${styles.btn}`}
                        onClick={nextSlide}
                    >
                        <FontAwesomeIcon icon={faForward} />
                    </button>
                </div>

                <div className={styles.carouselIndicators}>
                        {props.skills.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                                onClick={() => goToSlide(index)}
                            >
                                {index + 1}
                            </div>
                        ))}
                </div>
            </div>

            
        </>
    );
};

export default Carousel;