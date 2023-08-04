export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      nome: "Oppenheimer",
      img: "https://www.vitoriaparkshopping.com/wp-content/uploads/2023/07/oppenheimer.png",
      descricao: "bom",
      nota: 92,
      duracao: 3,
    },
    {
      id: 2,
      nome: "Record of Ragnarok",
      img: "https://m.media-amazon.com/images/I/81oN91bwvlL._AC_UF1000,1000_QL80_.jpg",
      descricao: "bom mas depende",
      nota: 79,
      nmrEp: 44,
    },
    {
      id: 3,
      nome: "vinland saga ",
      img: "https://w0.peakpx.com/wallpaper/44/489/HD-wallpaper-vinland-saga-thorfinn.jpg",
      descricao: "bom mas depende",
      nota: 91,
      nmrEp: 48,
    },
  ]);
}
