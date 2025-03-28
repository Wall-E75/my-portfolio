import styles from '@styles/Button.module.css';
import { Button } from 'antd';

function Buttons(props) {
  return (
    <Button
      htmlType={props.type}
      onClick={props.onClick}
      className={styles.button}
    >
      {props.text}
    </Button>
  );
}
export default Buttons;