import styles from '@styles/Contact.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


function Contact() {
    const [infosContact, setInfosContact] = useState({
        lastname: '',
        firstname: '',
        email: '',
    });
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setInfosContact({
            ...infosContact,
            [e.target.name]: e.target.value
        });
    };



    return(
        <>
            <main className={styles.mainContact}>
                <h1 className={styles.title}>Contact</h1>
                <form className={styles.form}> 
                    <label htmlFor="lastname">
                        <input 
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
                        type="text" 
                        name="firstname" 
                        placeholder="Votre prenom" 
                        required 
                        onChange={handleChange} 
                        value={infosContact.firstname}
                        />
                    </label>
                    
                    
                    <label htmlFor="email" className={styles.email}>
                        <input 
                        
                        type="email" 
                        name="email" 
                        placeholder="Votre email" 
                        required 
                        onChange={handleChange} 
                        value={infosContact.email}
                    />
                    </label>
                    

                    <label htmlFor="message" className={styles.message}>
                        <textarea
                        name="message"
                        placeholder="Votre message"
                        required
                        onChange={handleChange}
                        value={infosContact.message}
                        ></textarea>
                        
                    </label>
                    
                    <button type="submit" className={styles.btn}>Envoyer</button>
                </form>
            </main>

        </>
    );
};

export default Contact;