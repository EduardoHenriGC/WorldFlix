export default function handler(req, res) {
  const items = [
    {
      id: 1,
      nome: "Naruto Shippuden",
      img: "https://e0.pxfuel.com/wallpapers/386/218/desktop-wallpaper-obito-uchiha-top-35-best-obito-uchiha-background-awesome-obito.jpg",
      descricao: "bom",
      nota: 86,
      nmrEp: 500,
      categoria: "animes",
    },
    {
      id: 2,
      nome: "Record of Ragnarok",
      img: "https://m.media-amazon.com/images/I/81oN91bwvlL._AC_UF1000,1000_QL80_.jpg",
      descricao: "bom mas depende",
      nota: 79,
      nmrEp: 44,
      categoria: "animes",
    },
    {
      id: 3,
      nome: "vinland saga",
      img: "https://w0.peakpx.com/wallpaper/44/489/HD-wallpaper-vinland-saga-thorfinn.jpg",
      descricao: "bom mas depende",
      nota: 91,
      nmrEp: 48,
      categoria: "animes",
    },
    {
      id: 4,
      nome: "Oppenheimer",
      img: "https://www.vitoriaparkshopping.com/wp-content/uploads/2023/07/oppenheimer.png",
      descricao: "bom",
      nota: 92,
      duracao: "3 hrs",
      categoria: "filme",
    },
    {
      id: 5,
      nome: "Ilha do medo",
      img: "https://i.pinimg.com/originals/df/f9/3a/dff93ae890f92394add1b74d5c48b47e.jpg",
      descricao: "bom",
      nota: 87,
      duracao: "2h 18min",
      categoria: "filme",
    },
    {
      id: 6,
      nome: "Batman",
      img: "https://w0.peakpx.com/wallpaper/743/913/HD-wallpaper-the-batman-official-2022-movie.jpg",
      descricao: "bom",
      nota: 84,
      duracao: "2h 56m",
      categoria: "filme",
    },
    {
      id: 7,
      nome: "Ruptura",
      img: "https://seuladogeek.com.br/wp-content/uploads/2022/04/Ruptura-apple-768x1131.jpg",
      descricao: "bom",
      nota: 88,
      nmrEp: 9,
      categoria: "serie",
    },
    {
      id: 8,
      nome: "Better call Saul",
      img: "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
      descricao: "bom",
      nota: 88,
      nmrEp: 63,
      categoria: "serie",
    },
    {
      id: 9,
      nome: "True Detctive",
      img: "https://m.media-amazon.com/images/M/MV5BMmRlYmE0Y2UtNDk2Yi00NzczLWEwZTEtZmE2OTcyYzcxYmU5XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_FMjpg_UX1000_.jpg",
      descricao: "bom",
      nota: 88,
      nmrEp: 9,
      categoria: "serie",
    },
  ];

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
