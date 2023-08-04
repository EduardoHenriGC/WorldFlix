import React from "react";

import styles from "../../styles/item.module.css";
import api from "../../Data/api";

export default function FilmeItem({ serie }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{serie.nome}</h3>
        <img className={styles.img} src={serie.img} alt={serie.nome} />
        <p>Descrição: {serie.descricao}</p>
        <p>Nota: {serie.nota}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  const res = await api.get(`/items?id=${id}`);
  const serie = await res.data;

  return {
    props: { serie },
  };
}
