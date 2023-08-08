import items from "./itemsObject"; // Importa o array de itens do arquivo itemsData.js

export default function handler(req, res) {
  const categoriaParam = req.query.categoria;
  const idParam = req.query.id;

  if (!categoriaParam && !idParam) {
    return res.status(400).json({
      message: "A categoria ou o ID deve ser fornecido como parâmetro.",
    });
  }

  if (categoriaParam) {
    const itemsFiltradosPorCategoria = items.filter(
      (item) => item.categoria === categoriaParam
    );
    res.status(200).json(itemsFiltradosPorCategoria);
  } else if (idParam) {
    const itemEncontradoPorId = items.find(
      (item) => item.id === parseInt(idParam)
    );
    if (!itemEncontradoPorId) {
      return res
        .status(404)
        .json({ message: "Item não encontrado com o ID fornecido." });
    }
    res.status(200).json(itemEncontradoPorId);
  }
}
