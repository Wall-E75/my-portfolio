import styles from '@styles/Button.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Buttons(props) {
  return (
    <button
      htmltype={props.type}
      onClick={props.onClick}
      className={styles.button}
      title={props.title}
    >
      {props.icon&& (<FontAwesomeIcon icon={props.icon} />)}
      {props.text}
     
    </button>
  );
}
export default Buttons;