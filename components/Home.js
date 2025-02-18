import styles from '../styles/Home.module.css';
import Button from './Button';
import { useRouter } from 'next/router';



function Home() {
  console.log('client side');
  const router = useRouter();//Permet le changement de page
  const handleClick = () => {
    console.log('Clic');
    router.push('/presentation');
    
  }

  return (
    <>
    {/* <div className={styles.wallpaper}><h2>Filtre</h2></div> */}
      <main className={styles.main}>
        <p className={styles.name}>Wali Sylla</p>
        <h1 className={styles.title}>
          Developpeur Web Full Stack
        </h1>      
      <Button
        onClick={handleClick}//Au clic sur le bouton, on est redirigé vers la page /presentation
        text="En savoir plus" 
      />

      </main>
    
    </>
  );
}

export default Home;
