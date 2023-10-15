// Seu arquivo React (ex: Anime.js)
import React from "react";
import api from "../../Data/api";
import styles from "../../styles/items.module.css";
import ItemList from "@/components/ItemList";

export default function Filme({ filme }) {
  return (
    <div className={styles.container}>
      <ItemList type={filme} rota="filmes" />
    </div>
  );
}

export async function getServerSideProps() {
  const categoria = "filme"; // Defina a categoria aqui
  const res = await api.get(`/items?categoria=${categoria}`);
  const filme = await res.data;

  return {
    props: { filme },
  };
}
