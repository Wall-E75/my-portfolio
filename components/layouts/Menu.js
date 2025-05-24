import styles from "@styles/Menu.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsProgress, faTimes, faAddressCard, faGears, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useVisibility } from "../../context/VisibilityContext";
import { raleway } from "../ui/fonts";


function Menu() {
    const [open, setOpen] = useState(false);
    const { displayComponant } = useVisibility();
   
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleLinkCLick = () => {
        setOpen(false); //fermer le menu lors du clic sur un lien
    }

    return (
        <>
            <button 
                className={styles.openBtn} 
                onClick={handleOpen}
                aria-label="Ouvrir le menu"
                aria-expanded={open}
            >
                    <FontAwesomeIcon  icon={faBars} />
            </button>
            <nav 
                className={`${styles.menu} ${open ? styles.open : ''} ${raleway.className || ''}`}
                role="navigation"
                aria-label="Menu principal"
            >
                <button
                    className={styles.close}
                    onClick={handleClose}
                    aria-label="Fermer le menu"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <ul role="menubar">
                    <li role="none">
                        <Link 
                            href="/#projets"
                            onClick={handleLinkCLick}
                            role="menuitem"
                        >
                            <FontAwesomeIcon icon={faBarsProgress} /> 
                            Projets
                        </Link>
                    </li>
                <li>
                    <Link 
                        href="/#competences"
                        onClick={handleLinkCLick}
                        role="menuitem"
                    >
                        <FontAwesomeIcon icon={faGears} /> 
                        Compétences
                    </Link>
                </li>
                    {displayComponant && (
                        <li role="none">
                            <Link 
                                href='/#experiences'
                                onClick={handleLinkCLick}
                                role="menuitem"
                            >
                                <FontAwesomeIcon icon={faSuitcase} /> 
                                Expériences
                            </Link>
                        </li>)}
                    <li role="none">
                        <Link 
                            href='/#formations'
                            onClick={handleLinkCLick}
                            role="menuitem"
                        >
                            <FontAwesomeIcon icon={faUserGraduate} /> 
                            Formations
                        </Link>
                    </li>
                    <li role="none">
                        <Link 
                            href='/#contact'
                            onClick={handleLinkCLick}
                            role="menuitem"
                        >
                            <FontAwesomeIcon icon={faAddressCard} /> 
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>        
        </>
    );
};

export default Menu;