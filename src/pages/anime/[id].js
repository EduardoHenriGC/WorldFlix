import React from "react";
import api from "@/Data/api";
import styles from "../../styles/item.module.css";

export default function Anime({ animes }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {animes.map(({ id, nome, nmrEp, img, nota }) => (
          <li className={styles.item} key={id}>
            <div className={styles.content}>
              <h3 className={styles.title}>{nome}</h3>
              <img className={styles.img} src={img} alt={nome} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await api.get("/animes");
  const animes = await res.data;

  // You can add an ID parameter to your URL to filter by ID
  const { query } = context;
  if (query && query.id) {
    const filteredAnime = animes.filter(
      (anime) => anime.id === parseInt(query.id)
    );
    return {
      props: { animes: filteredAnime },
    };
  }

  return {
    props: { animes },
  };
}
