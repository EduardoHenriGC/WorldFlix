import Link from "next/link"

export default function NavbarItem({ text, href, toggleList }) {

    return (
        <Link onClick={toggleList} href={href}>
            {text}
        </Link>
    )
}