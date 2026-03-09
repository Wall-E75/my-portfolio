import JsVanillaProjects from "@components/projects/JsVanillaProjects";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function JsVanillaProjectsPage() {
    return <JsVanillaProjects />;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {})),
        },
    };
}

export default JsVanillaProjectsPage;