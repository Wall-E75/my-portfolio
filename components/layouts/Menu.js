import styles from "@styles/Menu.module.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsProgress, faTimes, faAddressCard, faGears, faUserGraduate, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { useVisibility } from "../../context/VisibilityContext";
import { raleway } from "../ui/fonts";

function Menu() {
    const [open, setOpen] = useState(false);
    const { displayComponent } = useVisibility();
    const panelRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        const handleClickOutside = (e) => {
            if (
                panelRef.current && !panelRef.current.contains(e.target) &&
                btnRef.current  && !btnRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open]);

    return (
        <>
            <button
                ref={btnRef}
                className={styles.openBtn}
                onClick={() => setOpen(true)}
                aria-label="Ouvrir le menu"
                aria-expanded={open}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            <nav
                ref={panelRef}
                className={`${styles.menu} ${open ? styles.open : ''} ${raleway.className || ''}`}
                role="navigation"
                aria-label="Menu principal"
            >
                <button
                    className={styles.close}
                    onClick={() => setOpen(false)}
                    aria-label="Fermer le menu"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <ul role="menubar">
                    <li role="none">
                        <Link href="/#projets" onClick={() => setOpen(false)} role="menuitem">
                            <FontAwesomeIcon icon={faBarsProgress} />
                            Projets
                        </Link>
                    </li>
                    <li role="none">
                        <Link href="/#competences" onClick={() => setOpen(false)} role="menuitem">
                            <FontAwesomeIcon icon={faGears} />
                            Compétences
                        </Link>
                    </li>
                    {displayComponent && (
                        <li role="none">
                            <Link href="/#experiences" onClick={() => setOpen(false)} role="menuitem">
                                <FontAwesomeIcon icon={faSuitcase} />
                                Expériences
                            </Link>
                        </li>
                    )}
                    <li role="none">
                        <Link href="/#formations" onClick={() => setOpen(false)} role="menuitem">
                            <FontAwesomeIcon icon={faUserGraduate} />
                            Formations
                        </Link>
                    </li>
                    <li role="none">
                        <Link href="/#contact" onClick={() => setOpen(false)} role="menuitem">
                            <FontAwesomeIcon icon={faAddressCard} />
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;
