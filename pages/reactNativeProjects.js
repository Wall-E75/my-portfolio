import ReactNativeProjects from "@components/projects/ReactNativeProjects";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function ReactNativeProjectsPage() {
    return <ReactNativeProjects />;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {})),
        },
    };
}

export default ReactNativeProjectsPage;