import styles from "../styles/btn.module.css";

function ButtonSend({ Text, Type }) {
  return (
    <button
      className={`${styles.btn}  ${styles.button} ${styles[Type]}`}
      type="submit"
    >
      {Text}
    </button>
  );
}

export default ButtonSend;
