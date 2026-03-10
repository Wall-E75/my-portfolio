import homeStyles from '../styles/Home.module.css';
import presentationStyles from '@styles/Presentation.module.css';
import { useTranslation } from 'next-i18next';
import { useVisibility } from '../context/VisibilityContext';
import { raleway } from './ui/fonts';
import Presentation from '@components/sections/Presentation.js';
import Projets from '@components/sections/Projets';
import Competences from '@components/sections/Competences';
import Experiences from '@components/sections/Experiences';
import Formations from '@components/sections/Formations';
import Contact from '@components/sections/Contact';

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
