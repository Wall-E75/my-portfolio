import styles from '@styles/Contact.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking, faCar, faEnvelope, faHome, faLocation, faLocationArrow, faLocationDot, faMotorcycle, faPhone } from '@fortawesome/free-solid-svg-icons';
import Buttons from '../ui/Buttons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

function Contact() {
    // State pour les informations contact
    const [infosContact, setInfosContact] = useState({
        lastname: '',
        firstname: '',
        email: '',
        messages: '',
    });
    const [error, setError] = useState([]); 
    const [success, setSuccess] = useState(false); // Message de confirmation
    const [emailError, setEmailError] = useState(false); // Message d'erreur pour l'email
    const maxChars = 200;
    // Regex pour l'email
    const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('msg errors', error);
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
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'messages' && value.length > maxChars) return; // On ne peut écrire plus que maxChars
        
        setInfosContact({
            ...infosContact,
            [name]: value
        });        
    };

    const validateForm = () => {
        const fields = ['lastname', 'firstname', 'email', 'messages'];
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

    const handleSubmit = async (e) => {
        e.preventDefault(); // On empêche le comportement par défaut du formulaire
        if (validateForm()) {
            console.log(infosContact)
            try {
                const response = await fetch("http://localhost:3000/message", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(infosContact),
                });
                if (!response.ok) {
                    const errorData = await response.json()
                    console.log('Throw response =>', response.json())
                    throw new Error( errorData.message || "Une erreur est survenue lors de la soumission !");
                };
    
                const data = await response.json();
                if (!data.result) {
                    setSuccess(false);
                    console.log('AUcune data reçu')
                }
                console.log(data)
                console.log('envoie des données');
                setSuccess(true); // On affiche le message de success
                console.log('msg success =>', success);
            } catch(error) {
                console.error("Erreur", error)
            }
            // On envoie les données
           

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
                    <label htmlFor="messages" className={styles.message}>
                        <textarea
                            className={styles.input} 
                            name="messages"
                            placeholder="Votre message"
                            required
                            maxLength={maxChars} //limite en HTML mais pas en js
                            onChange={handleChange}
                            value={infosContact.messages}
                        ></textarea>
                        <p>{infosContact.messages.length} / {maxChars} caractères</p>
                    </label>
                    <Buttons text="Envoyer" type="submit" />
                </form>
    );
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
                            <h2>Mon adresse</h2>
                            <p><FontAwesomeIcon className={styles.icon} icon={faLocationDot} />Metro Porte des Lilas</p>
                            <p><FontAwesomeIcon className={styles.icon} icon={faLocationArrow} />75019 Paris, France</p>
                            <p><FontAwesomeIcon className={styles.icon} icon={faPhone} /> 06 60 27 89 40</p>
                            <p><FontAwesomeIcon className={styles.icon} icon={faCar} /> Permis B</p>
                            <p><FontAwesomeIcon className={styles.icon} icon={faMotorcycle} />Permis A</p>
                        </div>
                    </div>

                </section>

                <section className={styles.formContact}>
                <h2>Envoyez moi un message</h2> 
                    {success ? 
                        <div className={styles.successMsg}>
                            <p className={styles.success}>Message envoyé !</p> 
                            <Buttons text="Envoyer un nouveau message" onClick={resetForm} />
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
                <section className={styles.socialContact}>
                    <Link href='https://www.linkedin.com/in/wali-sylla-52a464186/'><FontAwesomeIcon className={styles.icon} color='blue' icon={faLinkedin} /></Link>
                    <Link href='https://github.com/Wall-E75'><FontAwesomeIcon className={styles.icon} icon={faGithub} /></Link>
                </section>
                
            </main>
        </>
    );
};

export default Contact;