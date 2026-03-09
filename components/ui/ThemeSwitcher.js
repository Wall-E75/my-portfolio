import styles from '@styles/ThemeSwitcher.module.css'; // On importe le css du composant ThemeSwitcher
import { useTheme} from "@context/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


function ThemeSwitcher() {
    const { theme, setTheme } = useTheme(); // On utilise le hook useTheme pour recuperer la valeur du theme et setTheme

    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div>
            <button className={styles.themeSwitcher} onClick={handleChangeTheme} title='Changer de thème' aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}>
                <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} className={styles.icon} />
            </button>
        </div>
    )
};

export default ThemeSwitcher;