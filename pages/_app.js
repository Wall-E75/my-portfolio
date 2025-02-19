import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();
  const isHomePage = router.pathname === '/'; //On vérifie si on est sur la page d'accueil
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      {!isHomePage && <Header /> /*Si on est sur la page d'accueil, on n'affiche pas le header*/} 
      <Component {...pageProps} />
    </>
  );
}

export default App;
