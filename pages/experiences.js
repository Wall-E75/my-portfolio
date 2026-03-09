import Experiences from "@components/sections/Experiences";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function ExperiencesPage() {
    return <Experiences />;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {})),
        },
    };
}

export default ExperiencesPage;