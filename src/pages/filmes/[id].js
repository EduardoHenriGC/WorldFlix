import React from "react";

import styles from "../../styles/item.module.css";
import api from "../../Data/api";

export default function FilmeItem({ filme }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{filme.nome}</h3>
        <img className={styles.img} src={filme.img} alt={filme.nome} />
        <p>Descrição: {filme.descricao}</p>
        <p>Nota: {filme.nota}</p>
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
