import styles from "../styles/label.module.css";

export default function Label({ Name }) {
  return (
    <>
      <label className={styles.label}>{Name}</label>
    </>
  );
}
