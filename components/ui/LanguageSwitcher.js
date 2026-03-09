import styles from '@styles/LanguageSwitcher.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import NextImageModule from 'next/image';
const Image = NextImageModule.default || NextImageModule; // Solution pour ES Module avec Next.js

function LanguageSwitcher() {
    const router = useRouter();
    const [isChanging, setIsChanging] = useState(false);

    const datalang = {
        'fr': { country: 'france.png', alt: 'Drapeau de la France', title: 'Français' },
        'en': { country: 'royaume-uni.png', alt: 'Drapeau du Royaume-Uni', title: 'English' }
    };

    const handleLanguageChange = async (lang) => {
        if (lang === router.locale || isChanging) return;

        setIsChanging(true); 

        try {
            const { pathname, asPath, query } = router;
            // Redirige vers la même page avec la nouvelle langue pour Next.js
            await router.push({ pathname, query }, asPath, { locale: lang });

        } catch (error) {
            console.error('Erreur lors du chargement de langue:', error);
        } finally {
            setIsChanging(false);
        };
    };

    const toggleLanguage = () => {
            const newLang = router.locale === 'fr' ? 'en' : 'fr';
            handleLanguageChange(newLang);
    };
     // Langue actuelle affichée dans le bouton
    const currentLang = router.locale || 'fr';
    const langData = datalang[currentLang];


    return (
        <div className={styles.languageSwitcher}>
            <button
                onClick={toggleLanguage}
                className={`${styles.langBtn} ${isChanging ? styles.loading : ''}`}
                disabled={isChanging}
                aria-label={`Changer vers ${currentLang === "fr" ? "anglais" : "français"}`}
                title={langData.title}
            >
                <Image
                    src={`/${langData.country}`}
                    alt={langData.alt}
                    width={24}
                    height={24}
                    className={styles.flag}
                />
            </button>

        </div>
    );
}

export default LanguageSwitcher;