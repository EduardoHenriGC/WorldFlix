import React from "react";
import api from "@/Data/api";
import styles from "../../styles/item.module.css";

export default function Filme({ filmes }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filmes.map(({ id, nome, duracao, img, nota }) => (
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
  const res = await api.get("/filmes");
  const filmes = await res.data;

  // You can add an ID parameter to your URL to filter by ID
  const { query } = context;
  if (query && query.id) {
    const filteredFilme = filmes.filter(
      (filme) => filme.id === parseInt(query.id)
    );
    return {
      props: { filmes: filteredFilme },
    };
  }

  return {
    props: { filmes },
  };
}
