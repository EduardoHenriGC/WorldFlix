export default function handler(req, res) {
  res.status(200).json([
    {
      categories: "animes",
      img: "https://e1.pxfuel.com/desktop-wallpaper/990/256/desktop-wallpaper-ichigo-kurosaki-by-dante-55-ichigo-kurosaki-iphone.jpg",
    },
    {
      categories: "filmes",
      img: "https://e1.pxfuel.com/desktop-wallpaper/639/726/desktop-wallpaper-batman-beyond-comic-batman-beyond.jpg",
    },
    {
      categories: "series",
      img: "https://w0.peakpx.com/wallpaper/290/26/HD-wallpaper-vikings-ragnar-viking.jpg",
    },
  ]);
}
