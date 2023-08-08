import React from "react";

import styles from "../../styles/item.module.css";
import api from "../../Data/api";

export default function FilmeItem({ filme }) {
  return (
    <div className={styles.container}>
      <h1>{filme.nome}</h1>
      <div className={styles.content}>
        <div class={styles.childOne}>
          <img className={styles.img} src={filme.img}></img>
          <div className={styles.info}>
            <h4>informações do arquivo</h4>
            <p>Gênero: {filme.genero}</p>
            <p>Diretor: {filme.diretor}</p>
            <p>duração: {filme.duracao}</p>
            <p>ano Lançamento: {filme.anoLancamento}</p>
          </div>
        </div>
        <div class={styles.childTwo}>
          <h4>Sinopse</h4>
          <p>{filme.descricao}</p>
        </div>
        <div class={styles.childThree}>
          <iframe
            width="100%"
            height="100%"
            src={filme.trailer}
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
          <img c width="100%" height="100%" src={filme.img2}></img>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  const res = await api.get(`/items?id=${id}`);
  const filme = await res.data;

  return {
    props: { filme },
  };
}
