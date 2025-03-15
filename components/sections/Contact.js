import styles from '@styles/Contact.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faCar, faEnvelope, faHome, faLocation, faLocationArrow, faLocationDot, faMotorcycle, faPhone } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../ui/Buttons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    // State pour les informations contact
    const [infosContact, setInfosContact] = useState({
        lastname: '',
        firstname: '',
        email: '',
        message: '',
    });
    const [error, setError] = useState([]); 
    const [success, setSuccess] = useState(false); // Message de confirmation
    const [emailError, setEmailError] = useState(false); // Message d'erreur pour l'email
    // Regex pour l'email
    const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('msg errors', error);
    const resetForm = () => {
        setInfosContact({
            lastname: '',
            firstname: '',
            email: '',
            message: '',
        });

        setError([]);
        setEmailError(false);
        setSuccess(false);
    }

    const handleChange = (e) => {
        setInfosContact({
            ...infosContact,
            [e.target.name]: e.target.value
        });        
    };

    const validateForm = () => {
        const fields = ['lastname', 'firstname', 'email', 'message'];
        let errors = [];

        // On vérifie si chaque champ est vide
        fields.forEach((field) => {
            if (!infosContact[field]) {
                errors.push(`Le champ "${field}" est obligatoire`);
            }
        });
       
        if (!EMAIL_REGEX.test(infosContact.email)) {
            errors.push('L\'email n\'est pas valide');
            setEmailError(true); 
        } else {
            setEmailError(false); // On remet à false si l'email est correct
        }

        setError(errors); // On met à jour le state error avec le tableau d'erreurs
        return errors.length === 0; // On retourne true si le tableau d'erreurs est vide
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // On empêche le comportement par défaut du formulaire
        if (validateForm()) {
            // On envoie les données
            console.log('envoie des données');
            setSuccess(true); // On affiche le message de success
            console.log('msg success =>', success);

            // resetForm();
        } else {
            setSuccess(false); // On n'affiche pas le message de success
        };
    };
    let formulaire;
    formulaire = (
        <form onSubmit={handleSubmit} className={styles.form} noValidate> 
                    <label htmlFor="lastname">
                        <input
                        className={styles.input} 
                        type="text" 
                        name="lastname" 
                        placeholder="Votre nom" 
                        required 
                        onChange={handleChange} 
                        value={infosContact.lastname} 
                        />
                    </label>
                    <label htmlFor="firstname">
                        <input 
                        className={styles.input} 
                        type="text" 
                        name="firstname" 
                        placeholder="Votre prenom" 
                        required 
                        onChange={handleChange} 
                        value={infosContact.firstname}
                        />
                    </label> 
                    <label htmlFor="email" >
                        <input        
                            className={styles.input} 
                            type="email" 
                            name="email" 
                            placeholder="Votre email" 
                            required 
                            onChange={handleChange} 
                            value={infosContact.email}
                        />
                        {emailError && error.includes("L'email n\'est pas validé") && (
                            <p className={styles.emailError}>L'email n'est pas validé</p>)}
                    </label>
                    <label htmlFor="message" className={styles.message}>
                        <textarea
                        className={styles.input} 
                        name="message"
                        placeholder="Votre message"
                        required
                        onChange={handleChange}
                        value={infosContact.message}
                        ></textarea>
                        {infosContact.message.length} / 200
                    </label>
                    <Buttons text="Envoyer" htmlType="submit" />
                </form>
    )
    return(
        <>
            <main className={styles.mainContact}>
            
                <h1 className={styles.title}>Contact</h1>
                <section className={styles.adressContact}>
                    <div className={styles.map}>

                    </div>
                    <div className={styles.adressContactInfo}>
                        <div className={styles.wallPaper}>HELLO</div>
                        <div className={styles.adress}>
                            <h3>Mon adresse</h3>
                            <p><FontAwesomeIcon className={styles.icon} icon={faLocationDot} />Metro Porte des Lilas</p>
                            <p><FontAwesomeIcon className={styles.icon} icon={faLocationArrow} />75019 Paris, France</p>
                            <p><FontAwesomeIcon className={styles.icon} icon={faPhone} /> 06 60 27 89 40</p>
                            <p><FontAwesomeIcon className={styles.icon} icon={faCar} /> Permis B</p>
                            <p><FontAwesomeIcon className={styles.icon} icon={faMotorcycle} />Permis A</p>

                        </div>
                    </div>

                </section>
                <section className={styles.formContact}>
                    {success ? 
                        <div className={styles.successMsg}>
                            <h2 className={styles.success}>Message envoyé !</h2> 
                            {/* <button onClick={resetForm} className={styles.btn}>Envoyer un nouveau message</button> */}
                            <Buttons text="Envoyer un nouveau message" onClick={resetForm} />
                        </div> :  formulaire 
                    }
                    {error.length > 0 && (
                        <ul className={styles.error}>
                            {error.map((err, index) => (
                                <li key={index}>{err}</li>
                            ))}
                        </ul>
                    )}
                </section>
                <section className={styles.socialContact}>
                    <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
                </section>
                
            </main>
        </>
    );
};

export default Contact;