import React from "react";
import api from "@/Data/api";
import styles from "../styles/items.module.css";

export default function Anime({ animes }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {animes.map(({ id, nome, img }) => (
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
  const res = await api.get("/animes");
  const animes = await res.data;

  return {
    props: { animes },
  };
}
