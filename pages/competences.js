import Competences from "@components/sections/Competences";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function CompetencesPage() {
    return <Competences />;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {})),
        },
    };
}

export default CompetencesPage;