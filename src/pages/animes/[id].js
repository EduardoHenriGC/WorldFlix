import React from "react";

import styles from "../../styles/item.module.css";
import api from "../../Data/api";

export default function AnimeItem({ anime }) {
  return (
    <div className={styles.container}>
      <h1>{anime.nome}</h1>
      <div className={styles.content}>
        <div className={styles.childOne}>
          <img className={styles.img} src={anime.img}></img>
          <div className={styles.info}>
            <h4>informações do arquivo</h4>
            <p>Gênero: {anime.genero}</p>

            <p>duração: {anime.duracao}</p>
            <p>ano Lançamento: {anime.anoLancamento}</p>
            <p>Episódios: {anime.nmrEp}</p>
          </div>
        </div>
        <div className={styles.childTwo}>
          <h4>Sinopse</h4>
          <p>{anime.descricao}</p>
        </div>
        <div className={styles.childThree}>
          <iframe
            width="100%"
            height="100%"
            src={anime.trailer}
            allowFullScreen
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
          <img width="100%" height="100%" src={anime.img2}></img>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  const res = await api.get(`/items?id=${id}`);
  const anime = await res.data;

  return {
    props: { anime },
  };
}
