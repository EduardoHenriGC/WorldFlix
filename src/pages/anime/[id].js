import React from "react";

import styles from "../../styles/item.module.css";
import api from "../../Data/api";

export default function AnimeItem({ anime }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{anime.nome}</h3>
        <img className={styles.img} src={anime.img} alt={anime.nome} />
        <p>Descrição: {anime.descricao}</p>
        <p>Nota: {anime.nota}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  const res = await api.get(`/items?id=${id}`);
  const anime = await res.data;
  console.log(anime);

  return {
    props: { anime },
  };
}
