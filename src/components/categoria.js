import React from "react";
import api from "@/Data/api";
import styles from "../styles/index.module.css";
import Link from "next/link"; // Import the Link component
import CategoriaList from "./CategoriaList";

export default function Categories({ item }) {
  return (
    <div className={styles.container}>
      <CategoriaList item={item} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await api.get("/categories");
  const item = await res.data;

  return {
    props: { item },
  };
}
