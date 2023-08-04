import React from "react";
import api from "@/Data/api";
import styles from "../styles/items.module.css";

export default function Filme({ filmes }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filmes.map(({ id, nome, img }) => (
          <li className={styles.item} key={id}>
            <div className={styles.content}>
              <h3 className={styles.title}>{nome}</h3>
              <img className={styles.img} src={img} alt={nome} />
              <a className={styles.btn} href={`/filme/${id}`}>
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
  const res = await api.get("/filmes");
  const filmes = await res.data;

  return {
    props: { filmes },
  };
}
