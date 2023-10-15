import styles from "@/styles/index.module.css"
import Link from "next/link"

export default function CategoriaList({ item }) {

    return (

        <ul className={styles.list}>
            {item.map(({ categories, img }) => (
                <li className={styles.item} key={categories}>
                    <div className={styles.content}>
                        <Link className={styles.btntext} href={`/${categories}`}>
                            {categories}
                        </Link>
                        <img className={styles.img} src={img} alt={categories} />
                    </div>
                </li>
            ))}
        </ul>


    )
}