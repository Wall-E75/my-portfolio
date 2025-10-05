import Home from '../components/Home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Index() {
  return <Home />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], {
      })), // Charge les traductions pour le namespace 'common'
    },
  };
}

export default Index;