export default function handler(req, res) {
  res
    .status(200)
    .json({
      name: "John Doe",
      img: "https://e1.pxfuel.com/desktop-wallpaper/990/256/desktop-wallpaper-ichigo-kurosaki-by-dante-55-ichigo-kurosaki-iphone.jpg",
    });
}
