import ReactProjects from "@components/projects/ReactProjects";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function ReactProjectsPage() {
    return <ReactProjects />;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {})),
        },
    };
}

export default ReactProjectsPage;