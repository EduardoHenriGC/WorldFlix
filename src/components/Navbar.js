import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import ButtonHamburguer from "./ButtonHamburguer";
import NavbarMenu from "./NavbarMenu";

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
      <ButtonHamburguer toggleMenu={toggleMenu} isOpen={isOpen} />
      <NavbarMenu isOpen={isOpen} toggleList={toggleList} />
    </div>
  );
}
