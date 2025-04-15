import '../styles/globals.css';
import Head from 'next/head';
import Header from '@components/layouts/Header';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { VisibilityProvider } from '../context/VisibilityContext';
import { ThemeProvider, useTheme } from '@context/ThemeContext';
import ThemeSwitcher from '@components/ui/ThemeSwitcher';
// import 'antd/dist/reset.css'; // Import global pour Ant Design v5

function LayoutWrapper({children}) {
  const { theme } = useTheme();
  useEffect(() => {
    document.body.classList.remove("theme-light", "theme-dark", "theme-colorful"); // On retire les classes de theme
    document.body.classList.add(`theme-${theme}`); // On ajoute la classe theme-${theme} pour changer le thème de l'application
  })
  return <>{children}</>;
  
      
  
};

function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/'; //On vérifie si on est sur la page d'accueil
  return (
    <ThemeProvider>
      <VisibilityProvider>
        <Head>
          <title>SyllaDev | Portfolio</title>
        </Head>
        <LayoutWrapper>
          <ThemeSwitcher />
          {!isHomePage && <Header /> /*Si on est sur la page d'accueil, on n'affiche pas le header*/} 
          <Component {...pageProps} />
        </LayoutWrapper>

      </VisibilityProvider>
    </ThemeProvider>
  );
}

export default App;
