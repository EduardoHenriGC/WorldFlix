import { useRouter } from "next/router";

const SearchResults = () => {
  const router = useRouter();
  const { query } = router.query;

  // Aqui você pode implementar a lógica para buscar os resultados da pesquisa com base no valor de 'query'

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      {/* Renderize os resultados da pesquisa aqui */}
    </div>
  );
};

export default SearchResults;
