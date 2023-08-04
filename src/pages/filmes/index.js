// Seu arquivo React (ex: Anime.js)
import React from "react";
import api from "../../Data/api";
import styles from "../../styles/items.module.css";

export default function Filme({ filme }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filme.map(({ id, nome, img }) => (
          <li className={styles.item} key={id}>
            <div className={styles.content}>
              <h3 className={styles.title}>{nome}</h3>
              <img className={styles.img} src={img} alt={nome} />
              <a className={styles.btn} href={`/filmes/${id}`}>
                ver mais..
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const categoria = "filme"; // Defina a categoria aqui
  const res = await api.get(`/items?categoria=${categoria}`);
  const filme = await res.data;

  return {
    props: { filme },
  };
}
