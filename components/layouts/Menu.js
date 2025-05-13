import styles from "@styles/Menu.module.css";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsProgress, faTimes, faAddressCard, faGears, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useVisibility } from "../../context/VisibilityContext";


function Menu() {
    const [collapsed, setCollapsed] = useState(true); // Menu caché au départ
    const [open, setOpen] = useState(false);
    console.log('OPEN MENU =====>', open)
    const { displayComponant } = useVisibility();
    const toggleCollapsed = () => {
            setCollapsed(!collapsed);
    };
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <button className={styles.openBtn} onClick={handleOpen}><FontAwesomeIcon className={`${styles.icon} ${styles.faBars}`} icon={faBars} /></button>
            <nav className={!open ? styles.menu  : `${styles.menu} ${styles.open}`}>
                <FontAwesomeIcon className={styles.close} onClick={handleClose} icon={faTimes} />
                <ul>
                <Link href="/#projets"><li><FontAwesomeIcon icon={faBarsProgress} /> Projets</li></Link>
                <Link href="/#competences"><li><FontAwesomeIcon icon={faGears} /> Compétences</li></Link>
                    {displayComponant && <Link href='/#experiences'><li><FontAwesomeIcon icon={faSuitcase} /> Expériences</li></Link>}
                    <Link href='/#formations'><li><FontAwesomeIcon icon={faUserGraduate} /> Formations</li></Link>
                    <Link href='/#contact'><li><FontAwesomeIcon icon={faAddressCard} /> Contact</li></Link>
                </ul>
            </nav>        
        </>
    );
};

export default Menu;