// Seu arquivo React (ex: Anime.js)
import React from "react";
import api from "../../Data/api";
import styles from "../../styles/items.module.css";
import ItemList from "@/components/ItemList";

export default function Anime({ anime }) {
  return (
    <div className={styles.container}>
      <ItemList type={anime} rota="animes" />
    </div>
  );
}

export async function getServerSideProps() {
  const categoria = "anime"; // Defina a categoria aqui
  const res = await api.get(`/items?categoria=${categoria}`);
  const anime = await res.data;

  return {
    props: { anime },
  };
}
