import React from "react";

import styles from "../../styles/item.module.css";
import api from "../../Data/api";
import ChildOne from "@/components/ChildOne";
import ChildTwo from "@/components/ChildTwo";
import ChildThree from "@/components/ChildThree";

export default function FilmeItem({ filme }) {
  return (
    <div className={styles.container}>
      <h1>{filme.nome}</h1>
      <div className={styles.content}>
        <ChildOne lastInfo="Diretor" genero={filme.genero} nmrEp={filme.diretor} img={filme.img} duracao={filme.duracao} anoLancamento={filme.anoLancamento} />
        <ChildTwo descricao={filme.descricao} />
        <ChildThree img={filme.img2} trailer={filme.trailer} />
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
