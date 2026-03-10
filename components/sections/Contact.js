import styles from '@styles/Contact.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCar,
    faLocationArrow,
    faLocationDot,
    faMotorcycle,
    faPaperPlane,
    faPhone } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../ui/Buttons';
import { merriweather, raleway } from '../ui/fonts';
import { useTranslation } from 'next-i18next';

function Contact() {
    const { t } = useTranslation('common');

    const [infosContact, setInfosContact] = useState({
        lastname: '',
        firstname: '',
        email: '',
        messages: '',
    });
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const maxChars = 200;
    const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const resetForm = () => {
        setInfosContact({
            lastname: '',
            firstname: '',
            email: '',
            messages: '',
        });
        setError([]);
        setEmailError(false);
        setSuccess(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'messages' && value.length > maxChars) return;
        setInfosContact({
            ...infosContact,
            [name]: value
        });
    };

    const validateForm = () => {
        const fields = ['lastname', 'firstname', 'email', 'messages'];
        let errors = [];

        fields.forEach((field) => {
            if (!infosContact[field]) {
                errors.push(`*${t(`contact.form.fields.${field}.required`)}`);
            }
        });

        if (!EMAIL_REGEX.test(infosContact.email)) {
            errors.push(`*${t('contact.form.fields.email.invalid')}`);
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        setError(errors);
        return errors.length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError([]);
        setSuccess(false);

        if (validateForm()) {
            try {
                const response = await fetch("https://my-portfolio-backend-sage.vercel.app/message", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(infosContact),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setError([errorData.message || t('contact.form.messages.submitError')]);
                    setSuccess(false);
                    return;
                }

                const data = await response.json();
                if (data.result) {
                    setSuccess(true);
                    setError([]);
                } else {
                    setSuccess(false);
                    setError([data.message || t('contact.form.messages.sendError')]);
                }

            } catch(err) {
                console.error("Erreur réseau : ", err);
                setSuccess(false);
                setError([t('contact.form.messages.networkError')]);
            }
        } else {
            setSuccess(false);
        }
    };

    let formulaire = (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <label htmlFor="lastname">
               {t('contact.form.fields.lastname.label')} *
                <input
                    className={styles.input}
                    type="text"
                    name="lastname"
                    placeholder={t('contact.form.fields.lastname.placeholder')}
                    required
                    onChange={handleChange}
                    value={infosContact.lastname}
                />
            </label>
            <label htmlFor="firstname">
                 {t('contact.form.fields.firstname.label')} *
                <input
                    className={styles.input}
                    type="text"
                    name="firstname"
                    placeholder={t('contact.form.fields.firstname.placeholder')}
                    required
                    onChange={handleChange}
                    value={infosContact.firstname}
                />
            </label>
            <label htmlFor="email">
                {t('contact.form.fields.email.label')} *
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder={t('contact.form.fields.email.placeholder')}
                    required
                    onChange={handleChange}
                    value={infosContact.email}
                />
                {emailError && error.includes(`*${t('contact.form.fields.email.invalid')}`) && (
                    <p className={styles.emailError}>{t('contact.form.fields.email.invalid')}</p>)}
            </label>
            <label htmlFor="messages" className={styles.message}>
                {t('contact.form.fields.message.label')} *
                <textarea
                    className={styles.input}
                    name="messages"
                    placeholder={t('contact.form.fields.message.placeholder')}
                    required
                    maxLength={maxChars}
                    onChange={handleChange}
                    value={infosContact.messages}
                ></textarea>
                <p>{infosContact.messages.length} / {maxChars} {t('contact.form.fields.message.counter')}</p>
            </label>
            <Buttons
                text={t('contact.form.buttons.send')}
                title={t('contact.form.buttons.sendTitle')}
                type="submit"
                variant="primary"
                icon={faPaperPlane}
            />
        </form>
    );

    return (
        <div className={`${styles.mainContact} ${raleway.className}`}>
            <h1 className={`${styles.title} ${merriweather.className}`}>
                {t('contact.title')}
            </h1>
            <div className={styles.contactContent}>
                <section className={styles.adressContact}>
                    <div className={styles.adressContactInfo}>
                        <div className={styles.wallPaper}></div>
                        <div className={styles.adress}>
                            <h2 className={merriweather.className}>
                                {t('contact.address.title')}
                            </h2>
                            <p>
                                <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
                                {t('contact.address.metro')}
                            </p>
                            <p>
                                <FontAwesomeIcon className={styles.icon} icon={faLocationArrow} />
                                {t('contact.address.city')}
                            </p>
                            <p>
                                <FontAwesomeIcon className={styles.icon} icon={faPhone} />
                                {t('contact.address.phone')}
                            </p>
                            <p>
                                <FontAwesomeIcon className={styles.icon} icon={faCar} />
                                {t('contact.address.drivingLicense')}
                            </p>
                            <p>
                                <FontAwesomeIcon className={styles.icon} icon={faMotorcycle} />
                                {t('contact.address.motorcycleLicense')}
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.formContact}>
                    <h2>{t('contact.form.title')}</h2>
                    {success ?
                        <div className={styles.successMsg}>
                            <p className={styles.success}>
                                {t('contact.form.messages.success')}
                            </p>
                            <Buttons
                                text={t('contact.form.buttons.newMessage')}
                                title={t('contact.form.buttons.newMessageTitle')}
                                onClick={resetForm}
                                variant="secondary"
                            />
                        </div> : formulaire
                    }
                    {error.length > 0 && (
                        <ul className={styles.error}>
                            {error.map((err, index) => (
                                <li key={index}>{err}</li>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Contact;
