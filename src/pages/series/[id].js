import styles from "../../styles/item.module.css";
import api from "../../Data/api";
import ChildOne from "@/components/ChildOne";
import ChildThree from "@/components/ChildThree";
import ChildTwo from "@/components/ChildTwo";

export default function Serietem({ serie }) {
  return (
    <div className={styles.container}>
      <h1>{serie.nome}</h1>
      <div className={styles.content}>
        <ChildOne lastInfo="Episódios" nmrEp={serie.nmrEp} img={serie.img} duracao={serie.duracao} anoLancamento={serie.anoLancamento} />
        <ChildTwo descricao={serie.descricao} />
        <ChildThree img={serie.img2} trailer={serie.trailer} />
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
