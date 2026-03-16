import '../styles/globals.css';
import Head from 'next/head';
import Header from '@components/layouts/Header';
import Footer from '@components/layouts/Footer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { VisibilityProvider } from '../context/VisibilityContext';
import { ThemeProvider, useTheme } from '@context/ThemeContext';
import { merriweather } from '@/components/ui/fonts';
import { appWithTranslation } from 'next-i18next';


function LayoutWrapper({children}) {
  const { theme } = useTheme();
  useEffect(() => {
    const body = document.body;
    body.classList.remove("theme-light", "theme-dark");
    body.classList.add(`theme-${theme}`);
    return () => {
      body.classList.remove(`theme-${theme}`);
    };
  }, [theme])
  return <>{children}</>;
};

function App({ Component, pageProps }) {
  const router = useRouter();
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
            <Footer />
          </LayoutWrapper>
        </ThemeProvider>
      </VisibilityProvider>
  );
}

export default appWithTranslation(App, {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  ns: ['common'],
  defaultNS: 'common',
  react: { useSuspense: false },
});
