import styles from '../styles/Home.module.css';
// import Buttons from '@components/ui/Buttons';
import { useRouter } from 'next/router';
import Presentation from './sections/Presentation';



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
        <section className={styles.home}>
          <p className={styles.name}>Wali Sylla</p>
        <h1 className={styles.title}>
          Developpeur Web Full Stack
        </h1>
        </section>
        
      {/* <Buttons
        onClick={handleClick}//Au clic sur le bouton, on est redirigé vers la page /presentation
        text="En savoir plus" 
      /> */}
      {/* <button onClick={handleClick}>presentation</button> */}
      <section id='presentation' className={styles.presentation}>
        <Presentation />
      </section>
      </main>
    </>
  );
}

export default Home;
