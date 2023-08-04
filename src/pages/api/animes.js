export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      nome: "Tengoku Daimakyou",
      img: "https://static.anroll.net/images/animes/capas/tengoku-daimakyou.jpg",
      descricao: "bom",
      nota: 88,
      nmrEp: 13,
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
