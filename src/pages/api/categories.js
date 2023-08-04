export default function handler(req, res) {
  res.status(200).json([
    {
      categoria: "animes",
      img: "https://e1.pxfuel.com/desktop-wallpaper/990/256/desktop-wallpaper-ichigo-kurosaki-by-dante-55-ichigo-kurosaki-iphone.jpg",
    },
    {
      categoria: "filmes",
      img: "https://e1.pxfuel.com/desktop-wallpaper/639/726/desktop-wallpaper-batman-beyond-comic-batman-beyond.jpg",
    },
    {
      categoria: "Séries",
      img: "https://w0.peakpx.com/wallpaper/290/26/HD-wallpaper-vikings-ragnar-viking.jpg",
    },
  ]);
}
