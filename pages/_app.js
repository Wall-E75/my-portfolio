import '../styles/globals.css';
import Head from 'next/head';
import Header from '@components/layouts/Header';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { VisibilityProvider } from '../context/VisibilityContext';
import { ThemeProvider, useTheme } from '@context/ThemeContext';
import { merriweather } from '@/components/ui/fonts';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';


function LayoutWrapper({children}) {
  const { theme } = useTheme();
  useEffect(() => {
    const body = document.body;
    body.classList.remove("theme-light", "theme-dark", "theme-colorful"); // On retire les classes de theme
    body.classList.add(`theme-${theme}`); // On ajoute la classe theme-${theme} pour changer le thème de l'application
    return () => {
      body.classList.remove(`theme-${theme}`); // On retire la classe theme-${theme} lors du démontage du composant
    };
  }, [theme])
  return <>{children}</>;
  
      
  
};

function App({ Component, pageProps }) {
  const router = useRouter();
  // const isHomePage = router.pathname === '/'; //On vérifie si on est sur la page d'accueil
  return (
    
      <VisibilityProvider>
        <Head>
          <title>SyllaDev | Portfolio</title>
          <meta name="description" content="Portfolio de Wali Sylla, développeur fullstack React/NextJS, Redux, NodeJS, ExpressJs, MongoDB" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="content-language" content={router.locale} />
        </Head>
        <ThemeProvider>
        <LayoutWrapper>
          <Header />
          <main className={`${merriweather.className}`}>
            <Component {...pageProps} />
          </main>
        </LayoutWrapper>
        </ThemeProvider>

      </VisibilityProvider>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
