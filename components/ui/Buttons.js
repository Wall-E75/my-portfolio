import styles from '@styles/Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { raleway } from './fonts';


function Buttons(props) {
  //Détermine le type de bouton (primary, secondary)
  const buttonType = props.variant || 'primary';
  const buttonClass = `${styles.button} ${styles[buttonType]} ${raleway?.className || ''}}`
  return (
    <button
      htmltype={props.type || 'button'}
      onClick={props.onClick}
      className={buttonClass}
      title={props.title}
      disabled={props.disabled || false}
      aria-label={props.ariaLabel || props.title}
    >
      {props.icon && (
        <FontAwesomeIcon 
          icon={props.icon}
          className={styles.icon}
        />
      )}
      <span className={styles.text}>{props.text}</span>
    </button>
  );
}
export default Buttons;