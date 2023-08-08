import React from "react";

import styles from "../../styles/item.module.css";
import api from "../../Data/api";

export default function FilmeItem({ filme }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{filme.nome}</h2>
        <div className={styles.imgContent}>
          <img className={styles.img} src={filme.imgBg} alt={filme.nome} />
          <p className={styles.nota}>
            Nota: <span className={styles.notanmr}>{filme.nota}</span>
          </p>
        </div>
        <p className={styles.descricao}>{filme.descricao}</p>
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
