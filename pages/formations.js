import Formations from "@components/sections/Formations";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function FormationsPage() {
    return <Formations />;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {})),
        },
    };
}

export default FormationsPage;