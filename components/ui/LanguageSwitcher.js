import styles from '@styles/LanguageSwitcher.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import NextImageModule from 'next/image';
const Image = NextImageModule.default || NextImageModule; // Assure que l'import de l'image est correct

function LanguageSwitcher() {
    const router = useRouter();
    const { i18n } = useTranslation();
    const [isChanging, setIsChanging] = useState(false);

    const handleLanguageChange = async (lang) => {
        console.log('Changement de langue vers:', lang);
        if (lang === router.locale || isChanging) return; // Ne rien faire si la langue est déjà sélectionnée ou si un changement est en cours

        setIsChanging(true); 

        try {
            const { pathname, asPath, query } = router;

            // Change la langue pour react-i18next
            if (i18n.changeLanguage) {
                i18n.changeLanguage(lang);
            }

            // Redirige vers la même page avec la nouvelle langue pour Next.js
            await router.push({ pathname, query }, asPath, { locale: lang });

        } catch (error) {
            console.error('Erreur lors du chargement de langue:', error);
        } finally {
            setIsChanging(false);
        }
    };

    return (
        <div className={styles.languageSwitcher}>
            <button
                onClick={() => handleLanguageChange('fr')}
                className={`${styles.langBtn} ${router.locale === 'fr' ? styles.active : ''}`}
                disabled={isChanging}
                aria-label='Changer vers le français'
            >
                <Image
                    src='/france.png'
                    alt='Drapeau de la France'
                    width={24}
                    height={24}
                    className={styles.flag}
                />
            </button>

              <button
                onClick={() => handleLanguageChange('en')}
                className={`${styles.langBtn} ${router.locale === 'en' ? styles.active : ''}`}
                disabled={isChanging}
                aria-label='Switch to English'
            >
                <Image
                    src='/royaume-uni.png'
                    alt='Drapeau du Royaume-Uni'
                    width={24}
                    height={24}
                    className={styles.flag}
                />
            </button>

        </div>
    );
}

export default LanguageSwitcher;