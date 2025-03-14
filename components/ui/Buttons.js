import styles from '@styles/Button.module.css';
import { Button } from 'antd';

function Buttons(props) {
  return (
    <button
      onClick={props.onClick}
      className={styles.button}
    >
      {props.text}
    </button>
  );
}
export default Buttons;