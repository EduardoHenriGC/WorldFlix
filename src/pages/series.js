// Seu arquivo React (ex: Anime.js)
import React from "react";
import api from "@/Data/api";
import styles from "../styles/items.module.css";

export default function Filmes({ series }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {series.map(({ id, nome, img }) => (
          <li className={styles.item} key={id}>
            <div className={styles.content}>
              <h3 className={styles.title}>{nome}</h3>
              <img className={styles.img} src={img} alt={nome} />
              <a className={styles.btn} href={`/anime/${id}`}>
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
  const categoria = "serie"; // Defina a categoria aqui
  const res = await api.get(`/items?categoria=${categoria}`);
  const series = await res.data;

  return {
    props: { series },
  };
}
