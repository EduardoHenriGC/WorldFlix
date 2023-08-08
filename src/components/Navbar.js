import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleList = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 940) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.navbar}>
      <button
        className={`${styles.menuBtn} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span className={styles.menuIcon}></span>
        <hr className={styles.menuIcon} />
        <span className={styles.menuIcon}></span>
      </button>

      <ul className={isOpen ? styles.menuListOpen : styles.menuListClosed}>
        <li>
          <Link onClick={toggleList} href="/">
            Home
          </Link>
          <Link onClick={toggleList} href="/animes">
            anime
          </Link>
          <Link onClick={toggleList} href="/filmes">
            filmes
          </Link>
          <Link onClick={toggleList} href="/series">
            series
          </Link>
        </li>
      </ul>
    </div>
  );
}
