import Projets from '@components/sections/Projets';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function ProjetsPage() {
    return <Projets />;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {})),
        },
    };
}

export default ProjetsPage;