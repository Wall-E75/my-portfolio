import styles from '@styles/ThemeSwitcher.module.css'; // On importe le css du composant ThemeSwitcher
import { useTheme} from "@context/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


function ThemeSwitcher() {
    const { theme, setTheme } = useTheme(); // On utilise le hook useTheme pour recuperer la valeur du theme et setTheme

    const handleChangeTheme = () => {
        // Toggle entre light et dark, au clic on change de theme
        const newTheme = theme === "light" ? "dark" : theme === "dark" ? "light" : "light";
        setTheme(newTheme);
        console.log("Theme changé en : ", newTheme);
    };

    return (
        <div>
            <button className={styles.themeSwitcher} onClick={handleChangeTheme} title='Changer de thème'>
                <FontAwesomeIcon icon={
                    theme === "light" ? faMoon : 
                    theme === "dark" ? faSun : 
                    faMoon
                    } className={styles.icon} 
                />
            </button>
        </div>
    )
};

export default ThemeSwitcher;