import React from "react";
import api from "@/Data/api";
import styles from "../styles/teste.module.css";
import Link from "next/link"; // Import the Link component

export default function Teste({ item }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {item.map(({ categoria, img }) => (
          <li className={styles.item} key={categoria}>
            <div className={styles.content}>
              <Link className={styles.btntext} href={`/${categoria}`}>
                {categoria}
              </Link>
              <img className={styles.img} src={img} alt={categoria} />
            </div>
          </li>
        ))}
      </ul>
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
