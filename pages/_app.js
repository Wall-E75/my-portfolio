import '../styles/globals.css';
import Head from 'next/head';
import Header from '@/components/layouts/Header';
import { useRouter } from 'next/router';
import { VisibilityProvider } from '../context/VisibilityContext';
// import 'antd/dist/reset.css'; // Import global pour Ant Design v5


function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/'; //On vérifie si on est sur la page d'accueil
  return (
    <VisibilityProvider>
      <Head>
        <title>Next.js App</title>
      </Head>
      {!isHomePage && <Header /> /*Si on est sur la page d'accueil, on n'affiche pas le header*/} 
      <Component {...pageProps} />
    </VisibilityProvider>
  );
}

export default App;
