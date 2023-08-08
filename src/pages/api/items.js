export default function handler(req, res) {
  const items = [
    {
      id: 1,
      nome: "Naruto Shippuden",
      img: "https://i.pinimg.com/originals/17/24/4c/17244cd49d8501f943390d2547c45115.jpg",
      img2: "https://i0.wp.com/techwek.com/wp-content/uploads/2021/10/Wallpapers-Naruto.jpg?fit=576%2C1024&ssl=1",
      descricao:
        "A história acontece pouco mais de anos após partida de Naruto para um treinamento com opara fora de Konoha. Após seu retorno, Naruto e sua equipe, agora em nova formação, entram em uma investigação da organização de criminosos e ninjas renegados Akatsuki, e de um possível resgate de Uchiha Sasuke, agora sob comando de Orochimaru. O principal empecilho de Uzumaki Naruto, e Konoha, em Naruto: Shippuden é a Akatsuki, que procura capturar todos os Jinchuurikis.",
      nota: 6.9,
      genero: "Ação, Aventura, Luta",

      duracao: "20Min",
      anoLancamento: 2007,
      nmrEp: 500,
      trailer: "https://www.youtube.com/embed/22R0j8UKRzY",
      categoria: "anime",
    },
    {
      id: 2,
      nome: "Record of Ragnarok",
      img: "https://m.media-amazon.com/images/I/81oN91bwvlL._AC_UF1000,1000_QL80_.jpg",
      img2: "https://fliperamanerd.com/wp-content/uploads/2022/07/Record-of-Ragnarok.jpg",
      descricao:
        "Antes de erradicar a humanidade do mundo, os deuses dão a eles uma última chance de provar que são dignos de sobreviver. Que as batalhas do Ragnarok comecem.",
      nota: 79,
      genero: "Ação, Animação, aventura",

      duracao: "25Min",
      anoLancamento: 2021,
      nmrEp: 27,
      trailer: "https://www.youtube.com/embed/_9HxsIYORyE",
      categoria: "anime",
    },
    {
      id: 3,
      nome: "vinland saga",
      img: "https://w0.peakpx.com/wallpaper/44/489/HD-wallpaper-vinland-saga-thorfinn.jpg",
      img2: "https://e0.pxfuel.com/wallpapers/709/622/desktop-wallpaper-vinland-saga-phone-askeladd.jpg",
      descricao:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      nota: 91,
      genero: "Ação, Aventura",
      duracao: "25min",
      anoLancamento: 2021,
      nmrEp: 48,
      trailer: "https://www.youtube.com/embed/f8JrZ7Q_p-8",
      categoria: "anime",
    },
    {
      id: 4,
      nome: "Oppenheimer",
      img: "https://www.vitoriaparkshopping.com/wp-content/uploads/2023/07/oppenheimer.png",
      imgBg: "https://wallpapercave.com/wp/wp12552482.jpg",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis tellus sit amet nunc eleifend suscipit. Sed pretium erat vitae hendrerit bibendum. Donec ut nibh in felis maximus rutrum. Duis nisl diam, efficitur eu efficitur eget, varius sit amet massa. Ut ac massa turpis. In hac habitasse platea dictumst. Donec at dolor velit. Cras non egestas nibh. Aenean vulputate lacus et massa luctus rutrum. Morbi pulvinar dolor eu commodo suscipit. Nunc nec mauris eu augue iaculis tristique. Vivamus felis leo, molestie et convallis a, sodales eu purus. Nulla finibus lorem sed risus bibendum, id congue orci porttitor. Vestibulum fermentum convallis nunc, id placerat lacus consequat ornare. Sed aliquet ligula purus, eget dignissim tellus gravida eu. Suspendisse euismod tortor id massa vehicula, sit amet mattis lectus cursus. Suspendisse eu tortor in est aliquam auctor vel et sem. Morbi tristique ipsum vitae mauris efficitur, ut vestibulum dui hendrerit.",
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
