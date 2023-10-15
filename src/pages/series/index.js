// Seu arquivo React (ex: Anime.js)
import React from "react";
import api from "../../Data/api";
import styles from "../../styles/items.module.css";
import ItemList from "@/components/ItemList";

export default function Serie({ serie }) {
  return (
    <div className={styles.container}>
      <ItemList type={serie} rota="series" />
    </div>
  );
}

export async function getServerSideProps() {
  const categoria = "serie"; // Defina a categoria aqui
  const res = await api.get(`/items?categoria=${categoria}`);
  const serie = await res.data;

  return {
    props: { serie },
  };
}
