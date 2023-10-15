import styles from "../../styles/item.module.css";
import api from "../../Data/api";
import ChildOne from "@/components/ChildOne";
import ChildTwo from "@/components/ChildTwo";
import ChildThree from "@/components/ChildThree";

export default function AnimeItem({ anime }) {
  return (
    <div className={styles.container}>
      <h1>{anime.nome}</h1>
      <div className={styles.content}>
        <ChildOne lastInfo="Episódios" duracao={anime.duracao} img={anime.img} anoLancamento={anime.anoLancamento} genero={anime.genero} nmrEp={anime.nmrEp} />
        <ChildTwo descricao={anime.descricao} />
        <ChildThree img={anime.img2} trailer={anime.trailer} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.id;

  const res = await api.get(`/items?id=${id}`);
  const anime = await res.data;

  return {
    props: { anime },
  };
}
