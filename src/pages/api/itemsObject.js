const Items = [
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
    nome: "O Hobbit",
    img: "https://m.media-amazon.com/images/I/71ZHJ5rj6sL._AC_UF1000,1000_QL80_.jpg",
    img2: "https://cdn.wallpapersafari.com/45/39/5Hk8Dg.jpg",
    descricao:
      "Como a maioria dos hobbits, Bilbo Bolseiro leva uma vida tranquila até o dia em que recebe uma missão do mago Gandalf. Acompanhado por um grupo de anões, ele parte numa jornada até a Montanha Solitária para libertar o Reino de Erebor do dragão Smaug.",
    nota: 87,
    genero: "Drama, Fantasia, Ficção",
    duracao: "2h 39min",
    anoLancamento: 2012,
    diretor: "Peter Jackson",
    categoria: "filme",
    trailer: "https://www.youtube.com/embed/xxd5a8hRWls",
  },
  {
    id: 5,
    nome: "Ilha do medo",
    img: "https://i.pinimg.com/originals/df/f9/3a/dff93ae890f92394add1b74d5c48b47e.jpg",
    img2: "https://3.bp.blogspot.com/-z4-T1zT0x9s/WblBqFt7AWI/AAAAAAAAFjk/4bUl3XhuqiU-lO3rjyrGMDcJE2W05tg4ACK4BGAYYCw/s1600/MV5BMTg3MjM5NDY3OV5BMl5BanBnXkFtZTcwNzQxNTUxMw%2540%2540._V1_SY1000_CR0%252C0%252C1502%252C1000_AL_.jpg",
    descricao:
      "Na década de 50, a fuga de uma assassina leva o detetive Teddy Daniels e seu parceiro a investigarem o seu desaparecimento de um quarto trancado em um hospital psiquiátrico. Lá, uma rebelião se inicia e o agente terá que enfrentar seus próprios medos. #Shutter Island",
    nota: 87,
    genero: "Mistério, Suspense",
    duracao: "2h 18min",
    anoLancamento: 2010,
    diretor: "Martin Scorsese",
    categoria: "filme",
    trailer: "https://www.youtube.com/embed/gL4rP2prdfg?si=K2Es7h8Xhgtue4z6",
  },
  {
    id: 6,
    nome: "The Batman",
    img: "https://w0.peakpx.com/wallpaper/743/913/HD-wallpaper-the-batman-official-2022-movie.jpg",
    img2: "https://imagensfree.com.br/wp-content/uploads/2021/10/the-batman-2022-reddit.jpg",
    descricao:
      "Bruce Wayne é um jovem bilionário da cidade de Gotham City, Nova Jersey, que também age secretamente como o vigilante noturno Batman após o assassinato dos seus pais.",
    genero: "Ação, Crime, Drama",
    nota: 85,
    duracao: "2h 56m",
    anoLancamento: 2022,
    trailer: "https://www.youtube.com/embed/rsQEor4y2hg",
    categoria: "filme",
    diretor: "Matt Reeves",
  },
  {
    id: 7,
    nome: "Ruptura",
    img: "https://seuladogeek.com.br/wp-content/uploads/2022/04/Ruptura-apple-768x1131.jpg",
    img2: "https://w0.peakpx.com/wallpaper/453/147/HD-wallpaper-tv-show-severance-adam-scott.jpg",
    descricao:
      "Mark lidera uma equipe de funcionários de escritório cujas memórias foram divididas cirurgicamente entre a vida no trabalho e a vida pessoal. Quando um colega de trabalho misterioso aparece fora do escritório, ele começa uma jornada para descobrir a verdade sobre seu trabalho. #Severance",
    nota: 88,
    genero: "Drama, Ficção, Mistério",
    anoLancamento: 2022,
    duracao: "50min",
    nmrEp: 9,
    trailer: "https://www.youtube.com/embed/EFjc_qHrnsQ",
    categoria: "serie",
  },
  {
    id: 8,
    nome: "Better call Saul",
    img: "https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg",
    img2: "https://media2.westword.com/den/imager/u/magnum/10840964/tv_better_call_saul_rhea_seehorn_bob_odenkirk_credit_nicole_.jpg?cb=1642613912",
    descricao:
      "Antes de se transformar no infame Saul Goodman, o advogado de Breaking Bad era mais inocente, mas não era santo.",
    nota: 88,
    Gênero: "Crime, Drama",
    nmrEp: 63,
    duracao: "45Min",
    anoLancamento: 2015,
    trailer: "https://www.youtube.com/embed/FLFWjjr7Q34",
    categoria: "serie",
  },
  {
    id: 9,
    nome: "True Detctive",
    img: "https://m.media-amazon.com/images/M/MV5BMmRlYmE0Y2UtNDk2Yi00NzczLWEwZTEtZmE2OTcyYzcxYmU5XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_FMjpg_UX1000_.jpg",
    img2: "https://rd1.com.br/wp-content/uploads/2014/04/true.jpg",
    descricao:
      "Detetives de Louisiana vivem um ciclo de violência e obsessão na busca de 17 anos de um assassino.",
    nota: 88,
    genero: "Drama,Mistério, Policial",
    duracao: "60Min",
    anoLancamento: 2014,
    nmrEp: 24,
    trailer: "https://www.youtube.com/embed/8Wm9bLXRIw0",
    categoria: "serie",
  },
];

export default Items;