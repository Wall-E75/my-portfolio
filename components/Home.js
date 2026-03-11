import homeStyles from '../styles/Home.module.css';
import presentationStyles from '@styles/Presentation.module.css';
import { useTranslation } from 'next-i18next';
import { useVisibility } from '../context/VisibilityContext';
import { raleway } from './ui/fonts';
import dynamic from 'next/dynamic';
import Presentation from '@components/sections/Presentation.js';
import Projets from '@components/sections/Projets';
const Competences = dynamic(() => import('@components/sections/Competences'));
const Experiences = dynamic(() => import('@components/sections/Experiences'));
const Formations = dynamic(() => import('@components/sections/Formations'));
const Contact = dynamic(() => import('@components/sections/Contact'));

function Home() {
  const { t } = useTranslation('common');
  const { displayComponent } = useVisibility();

  return (
    <div className={`${homeStyles.main} ${presentationStyles.mainPresentation} ${raleway.className}`}>
      <section className={`${homeStyles.home} ${homeStyles.container}`}>
        <div className={homeStyles.cell1}></div>
        <div className={homeStyles.cell2}></div>
        <div className={homeStyles.titleContainer}>
          <p className={homeStyles.name}>{t('home.name')}</p>
          <h1 className={homeStyles.title}>{t('home.job')}</h1>
        </div>
      </section>

      <section id="presentation" className={presentationStyles.presentation}>
        <Presentation />
      </section>

      <section id="projets" className={presentationStyles.projets}>
        <Projets />
      </section>

      <section id="competences" className={presentationStyles.competences}>
        <Competences />
      </section>

      {displayComponent && (
        <section id="experiences" className={presentationStyles.experiences}>
          <Experiences />
        </section>
      )}

      <section id="formations" className={presentationStyles.formations}>
        <Formations />
      </section>

      <section id="contact" className={presentationStyles.contact}>
        <Contact />
      </section>
    </div>
  );
}

export default Home;
