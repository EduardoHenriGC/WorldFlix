import styles from "@/styles/Navbar.module.css"
import Link from "next/link"
import NavbarItem from "./NavbarItem"


export default function NavbarMenu({ isOpen, toggleList }) {

    return (

        <ul className={isOpen ? styles.menuListOpen : styles.menuListClosed}>
            <li>
                <NavbarItem toggleList={toggleList} text="home" href="/" />
                <NavbarItem toggleList={toggleList} text="animes" href="/animes" />
                <NavbarItem toggleList={toggleList} text="filmes" href="/filmes" />
                <NavbarItem toggleList={toggleList} text="series" href="/series" />
            </li>
        </ul>
    )
}