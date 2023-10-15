import styles from "@/styles/Navbar.module.css"

export default function ButtonHamburguer({ isOpen, toggleMenu }) {

    return (

        <button
            className={`${styles.menuBtn} ${isOpen ? styles.open : ""}`}
            onClick={toggleMenu}
        >
            <span className={styles.menuIcon}></span>
            <hr className={styles.menuIcon} />
            <span className={styles.menuIcon}></span>
        </button>
    )
}