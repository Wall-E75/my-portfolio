import Contact from "@components/sections/Contact";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function ContactPage() {
    return <Contact />;
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'], {})),
        },
    };
}

export default ContactPage;