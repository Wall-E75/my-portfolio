import HtmlCssProjects from "@components/projects/HtmlCssProjects";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function HtmlCssProjectsPage() {
    return <HtmlCssProjects />;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {})),
        },
    };
}

export default HtmlCssProjectsPage;