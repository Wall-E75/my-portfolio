import styles from '@styles/Button.module.css';


function Buttons(props) {
  return (
    <button
      htmlType={props.type}
      onClick={props.onClick}
      className={styles.button}
    >
      {props.text}
    </button>
  );
}
export default Buttons;