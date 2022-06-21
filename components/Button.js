import styles from "../styles/Header.module.css";

function Button(props) {
  return (
    <>
      <button className={styles.button} style={{ backgroundColor: props.color }} onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
}

export default Button;
