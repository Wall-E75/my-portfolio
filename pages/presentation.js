import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Presentation from '@components/sections/Presentation';

function PresentationPage() {
  return <Presentation />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], {})),
    },
  };
}

export default PresentationPage;
