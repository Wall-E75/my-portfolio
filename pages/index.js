import Home from '../components/Home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import path from 'path';

function Index() {
  return <Home />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], {
        i18n: {
          defaultLocale: 'fr',
          locales: ['fr', 'en'],
        },
      })), // Charge les traductions pour le namespace 'common'
    },
  };
}

export default Index;