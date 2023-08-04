import styles from "../styles/input.module.css";

export default function InputText({ Text, Name, OnChange, Value, Type }) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={Type}
        placeholder={Text}
        name={Name}
        onChange={OnChange}
        value={Value}
      />
    </div>
  );
}
