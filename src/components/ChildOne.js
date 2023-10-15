import styles from "@/styles/item.module.css"

export default function ChildOne({ img, anoLancamento, genero, duracao, nmrEp, lastInfo }) {

    return (
        <div class={styles.childOne}>
            <img className={styles.img} src={img}></img>
            <div className={styles.info}>
                <h4>informações do arquivo</h4>
                <p>Gênero: {genero}</p>

                <p>duração: {duracao}</p>
                <p>ano Lançamento: {anoLancamento}</p>
                <p>{lastInfo}: {nmrEp}</p>
            </div>
        </div>
    )
}