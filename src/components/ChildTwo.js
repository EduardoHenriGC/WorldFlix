import styles from "@/styles/item.module.css"


export default function ChildTwo({ descricao }) {

    return (

        <div class={styles.childTwo}>
            <h4>Sinopse</h4>
            <p>{descricao}</p>
        </div>
    )
}