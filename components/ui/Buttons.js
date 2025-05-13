import styles from '@styles/Button.module.css';


function Buttons(props) {
  return (
    <button
      htmltype={props.type}
      onClick={props.onClick}
      className={styles.button}
      title={props.title}
    >
      {props.text}
    </button>
  );
}
export default Buttons;