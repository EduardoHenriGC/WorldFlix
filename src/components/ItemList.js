import styles from "@/styles/items.module.css"

export default function ItemList({ type, rota }) {

    return (

        <ul className={styles.list}>
            {type.map(({ id, nome, img }) => (
                <li className={styles.item} key={id}>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{nome}</h3>
                        <img className={styles.img} src={img} alt={nome} />
                        <a className={styles.btn} href={`/${rota}/${id}`}>
                            ver mais..
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    )
}