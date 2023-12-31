import Head from "next/head";
import Categories from "../components/categoria"; // Certifique-se de ajustar o caminho correto para o componente Categories
import api from "@/Data/api"; // Certifique-se de ajustar o caminho correto para o módulo api

export default function Home({ item }) {
  return (
    <>
      <Head>
        <title>Página Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Categories item={item} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await api.get("/categories");
  const item = await res.data;

  return {
    props: { item },
  };
}
