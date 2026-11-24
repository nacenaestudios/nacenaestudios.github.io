// Projetos gravados no Nacena — mais recentes primeiro. Para editar, mexa só aqui.
//
// Campos de cada projeto:
//   artist   nome do artista ou banda
//   title    nome da música, álbum, single, trilha, clipe…
//   album    (opcional) álbum de onde a faixa faz parte
//   type     "Álbum", "Single", "EP", "Trilha", "Videoclipe", "Ao vivo"…
//   year     (opcional) ano de lançamento
//   room     (opcional) sala onde foi feito: "A", "B", "C" ou "D" (pode ser "A e C")
//   services o que o Nacena fez: ["Gravação", "Mixagem", "Vídeo"…]
//   cover    capa: caminho de uma imagem em static/img/projetos/ (ex.: "/img/projetos/capa.jpg")
//   note     (opcional) frase curta sobre o trabalho feito no Nacena
//   guests   (opcional) lista de convidados — aparecem ao passar o mouse e entram na busca
//   link     link para ouvir/assistir (Spotify, YouTube, Apple Music…) — opcional
//   popularity número para ordenar "Mais populares" (estimado; os discos do Discogs usam coleção+desejos lá)
//   example  true = projeto de EXEMPLO (aparece marcado e não vai para a home). Apague nos reais.

const PROJECTS = [
  {
    artist: "IZA",
    title: "Rádio ZAZA (O Filme)",
    popularity: 700,     // estimado (≈ 320 mil views em poucos dias)
    type: "Audiovisual",
    year: 2026,
    room: "A",           // [CONFIRMAR] estúdio
    services: ["Gravação", "Vídeo"],
    cover: "/img/projetos/iza-radio-zaza.jpg",
    link: "https://www.youtube.com/watch?v=xoCBHLTwNLg",
  },
  {
    artist: "João Bosco",
    title: "O Bêbado e a Equilibrista",
    popularity: 600,
    album: "Amigos Novos e Antigos",
    type: "Faixa",
    year: 2026,
    room: "A",
    services: ["Gravação"],
    note: "Com Pedro Mariano e Rafa Mariano.",
    cover: "/img/projetos/joao-bosco-amigos.jpg",
    link: "https://open.spotify.com/track/46qvSWHO4irSvhBcG8Uk8Z",
  },
  {
    artist: "Carlos Jr",
    title: "Slidecancel",
    popularity: 200,     // estimado
    type: "Single",
    year: 2025,
    room: "C",
    services: ["Gravação"],
    cover: "/img/projetos/carlos-jr-slidecancel.jpg",
    link: "https://www.youtube.com/watch?v=a9tNLDYKM_U",
  },
  {
    artist: "João Sabiá",
    title: "João & Violão",
    popularity: 250,     // estimado
    type: "Álbum",
    year: 2024,
    room: "A",
    services: ["Gravação", "Gravação ao vivo", "Vídeo"],
    note: "Álbum (Trama, 2024) e sessão ao vivo nos estúdios Trama NaCena. 14 faixas, entre elas Carne de Sol, Biriba, Nossa Copacabana, Mãe Alice, Saudades do Meu Litoral e Mesmo que Seja Longe.",
    cover: "/img/projetos/joao-sabia-joao-e-violao-album.jpg",
    link: "https://www.youtube.com/watch?v=1bQiqBERoHw",
  },
  {
    artist: "Paloma Possi",
    title: "Teu Reino Vem",
    popularity: 300,     // estimado
    type: "Single",
    year: 2026,
    room: "A",
    services: ["Gravação", "Vídeo"],
    cover: "/img/projetos/paloma-possi-teu-reino-vem.jpg",
    link: "https://www.youtube.com/watch?v=HPbhkU1rfR8",
  },
  {
    artist: "Paloma Possi",
    title: "Salmo 35",
    popularity: 300,     // estimado
    type: "Single",
    year: 2026,
    room: "A",
    services: ["Gravação", "Vídeo"],
    cover: "/img/projetos/paloma-possi-salmo-35.jpg",
    link: "https://www.youtube.com/watch?v=rXkfIdPPlNY",
  },
  {
    artist: "Elis Regina",
    title: "Corsário",
    popularity: 1000,
    type: "Single",
    year: 2026,
    room: "",            // [CONFIRMAR] sala da gravação
    services: ["Gravação da nova base instrumental"],
    note: "Voz original de 1976 com nova base gravada no Nacena, com participação de Paulinho da Costa.",
    cover: "/img/projetos/elis-corsario.jpg",
    link: "https://open.spotify.com/search/Elis%20Regina%20Cors%C3%A1rio",
  },
  {
    artist: "Froid",
    title: "Acústico",
    popularity: 900,     // estimado
    type: "Ao vivo",
    year: 2023,
    room: "A",
    services: ["Gravação", "Vídeo"],
    note: "Projeto gravado inteiro no NaCena: Baila, Sol (com Cynthia Luz), Bússola Quebrada, Flores de Galeano, Vem Tranquilo, Bagunça, Avec Mói e Peita de dar Rolê. Mais de 6,5 milhões de visualizações.",
    guests: ["Cynthia Luz"],
    cover: "/img/projetos/froid-acustico.jpg",
    link: "https://www.youtube.com/watch?v=vdRDa6qavSE",
  },
  {
    artist: "Carol Biazin",
    title: "AMAReSÓ (Ao Vivo Com Orquestra)",
    popularity: 400,
    type: "Ao vivo",
    year: 2025,
    room: "A",
    services: ["Gravação ao vivo com orquestra", "Vídeo"],
    cover: "/img/projetos/carol-biazin-amareso.jpg",
    link: "https://www.youtube.com/watch?v=2X42Up1cMCg",
  },
  {
    artist: "O Novo Sempre Vem",
    title: "Apresentado por João Marcello Bôscoli",
    popularity: 150,
    type: "Programa",
    year: 2025,
    room: "A",
    services: ["Gravação ao vivo", "Vídeo"],
    note: "Programa da Trama com mais de 60 artistas da nova música brasileira. Exibido na TV Cultura e no YouTube.",
    cover: "/img/projetos/o-novo-sempre-vem.jpg",
    link: "https://www.youtube.com/@trama/videos",
  },
  {
    artist: "Anavitória",
    title: "Live Session",
    popularity: 800,
    album: "Esquinas",
    type: "Ao vivo",
    year: 2024,
    room: "A",
    services: ["Gravação ao vivo", "Vídeo"],
    cover: "/img/projetos/anavitoria-esquinas-live.jpg",
    link: "https://www.youtube.com/watch?v=QI89ZtcRynM",
  },
  {
    artist: "Terno Rei",
    title: "Gêmeos (Live Session)",
    popularity: 500,     // estimado
    type: "Ao vivo",
    year: 2022,
    room: "A",
    services: ["Gravação ao vivo", "Vídeo"],
    cover: "/img/projetos/terno-rei-gemeos-full.jpg",
    link: "https://www.youtube.com/watch?v=2Ca2161tW8Y",
  },
  {
    artist: "MC Hariel",
    title: "Funk Superação (Ao Vivo)",
    popularity: 850,
    type: "Álbum",
    year: 2024,
    room: "",            // [CONFIRMAR] sala da gravação
    services: ["Gravação de cordas, metais e loops"],
    note: "Cordas, metais e loops de violão, guitarra e Rhodes gravados no Nacena.",
    cover: "/img/projetos/mc-hariel-funk-superacao.jpg",
    link: "https://open.spotify.com/album/2KvTPBd1l052Tnk3RxU6tt",
  },
  {
    artist: "Liniker",
    title: "Veludo Marrom",
    popularity: 1700,
    album: "Caju",
    type: "Faixa",
    year: 2024,
    room: "",            // [CONFIRMAR] sala onde a orquestra foi gravada (ex.: "A")
    services: ["Gravação de orquestra"],
    cover: "/img/projetos/liniker-caju.jpg", // capa do álbum Caju
    link: "https://open.spotify.com/search/Liniker%20Veludo%20Marrom",
  },
  {
    artist: "Elis Regina",
    title: "Para Lennon & McCartney",
    popularity: 900,
    type: "Single",
    year: 2024,
    room: "",            // [CONFIRMAR] sala da gravação
    services: ["Gravação da nova base instrumental"],
    note: "Voz original de 1976, restaurada, com nova base gravada no Nacena.",
    cover: "/img/projetos/elis-lennon-mccartney.jpg",
    link: "https://open.spotify.com/search/Elis%20Regina%20Para%20Lennon%20McCartney",
  },
  {
    artist: "Ana Cañas",
    title: "Ana Cañas Canta Belchior (Ao Vivo)",
    popularity: 600,
    type: "Ao vivo",
    year: 2023,
    room: "A",
    services: ["Gravação ao vivo", "Vídeo"],
    note: "DVD com 17 faixas, incluindo a inédita “Um Rolê no Céu”, com participações de Ney Matogrosso e Rael.",
    guests: ["Belchior", "Ney Matogrosso", "Rael"],
    cover: "/img/projetos/ana-canas-belchior.jpg",
    link: "https://www.youtube.com/watch?v=CbrmMsnLyPM",
  },
  {
    artist: "Leo Gandelman",
    title: "Vamos Tocar · Temporadas 5 e 6",
    popularity: 750,
    type: "Programa",
    year: 2022,
    room: "A",
    services: ["Gravação ao vivo", "Vídeo"],
    note: "Programa do canal Bis gravado no Nacena, com Claudia Leitte, Zizi Possi, Ivan Lins, Arnaldo Antunes, Seu Jorge, Titãs e mais 14 convidados.",
    // Convidados das temporadas 5 (2021) e 6 (2022), segundo o TheTVDB — entram na busca da aba Projetos.
    guests: [
      "Claudia Leitte", "Lobão", "Ana Cañas", "Simoninha", "Roberta Campos", "Zizi Possi", "André Mehmari",
      "Paula Lima", "Banda Black Rio", "Ivan Lins",
      "Chico César", "Vitor Kley", "Arnaldo Antunes", "Mariana Aydar", "Seu Jorge", "Flávio Venturini", "Otto",
      "Paulinho Moska", "Xênia França", "Titãs",
    ],
    cover: "/img/projetos/vamos-tocar-rosto.jpg",
    link: "https://leogandelman.com.br/projects/",
  },
  {
    artist: "Leo Gandelman",
    title: "Hip Hop Machine",
    popularity: 150,
    type: "Ao vivo",
    year: 2022,
    room: "A",
    services: ["Gravação ao vivo", "Vídeo"],
    note: "Série com vários artistas do rap nacional, como Budah, Yunk Vino e Chris Mc.",
    cover: "/img/projetos/hip-hop-machine.jpg",
    link: "https://www.youtube.com/watch?v=9ZhnJAN_BN0",
  },
  {
    artist: "Tiago Iorc",
    title: "The Scientist (Nacena Studios Pocket Show)",
    popularity: 600,     // estimado
    type: "Ao vivo",
    year: 2014,
    room: "A",
    services: ["Gravação ao vivo", "Vídeo"],
    cover: "/img/projetos/tiago-iorc-the-scientist.jpg",
    link: "https://www.youtube.com/watch?v=TCUSD6FRZzI",
  },
  {
    artist: "Skank & Nando Reis",
    title: "Estúdio VH1",
    popularity: 700,     // estimado
    type: "Programa",
    year: 2013,          // [CONFIRMAR] ano da gravação (2013 é a data do vídeo no YouTube)
    room: "A",
    services: ["Gravação ao vivo", "Vídeo"],
    cover: "/img/projetos/skank-nando-reis-estudio-vh1.jpg",
    link: "https://www.youtube.com/watch?v=b5BJ672fl0g",
  },
  {
    artist: "Walmir Borges",
    title: "Ella (DVD)",
    popularity: 250,     // estimado
    type: "Ao vivo",
    year: 2024,
    room: "A",
    services: ["Gravação ao vivo", "Vídeo"],
    cover: "/img/projetos/walmir-borges-ella.jpg",
    link: "https://www.youtube.com/watch?v=ry-4EdL30RA",
  },
  {
    artist: "Djavan e Dominguinhos",
    title: "A Rota do Indivíduo",
    popularity: 900,     // estimado
    type: "Faixa",
    year: 2014,          // [CONFIRMAR] ano (2014 é a data do vídeo no YouTube)
    room: "A",
    services: ["Gravação", "Vídeo"],
    note: "Do projeto Dominguinhos +, gravado inteiro no NaCena.",
    cover: "/img/projetos/djavan-dominguinhos-rota.jpg",
    link: "https://www.youtube.com/watch?v=2UheWo5bOHM",
  },
  {
    artist: "Dominguinhos, Hamilton de Holanda, Mayra Andrade e Yamandu Costa",
    title: "Lamento Sertanejo",
    popularity: 600,     // estimado
    type: "Faixa",
    year: 2014,          // [CONFIRMAR] ano (2014 é a data do vídeo no YouTube)
    room: "A",
    services: ["Gravação", "Vídeo"],
    note: "Do projeto Dominguinhos +, gravado inteiro no NaCena.",
    cover: "/img/projetos/dominguinhos-lamento-sertanejo.jpg",
    link: "https://www.youtube.com/watch?v=LV09kQlGxHU",
  },
  {
    artist: "Oficina G3",
    title: "Histórias e Bicicletas",
    popularity: 700,     // estimado
    type: "Álbum",
    year: 2013,
    room: "A",
    services: ["Gravação de overdubs"],
    note: "Disco de ouro, gravado entre o RAK Studios (Londres) e São Paulo.",
    cover: "/img/projetos/oficina-g3-historias-e-bicicletas.jpg",
    link: "https://open.spotify.com/search/Oficina%20G3%20Hist%C3%B3rias%20e%20Bicicletas",
  },
  {
    artist: "Oficina G3",
    title: "Depois da Guerra",
    popularity: 800,     // estimado
    type: "Álbum",
    year: 2008,
    room: "A",
    services: ["Gravação"],
    note: "Vencedor do Grammy Latino 2009 de Melhor Álbum Cristão em Língua Portuguesa e disco de ouro.",
    cover: "/img/projetos/oficina-g3-depois-da-guerra.jpg",
    link: "https://open.spotify.com/search/Oficina%20G3%20Depois%20da%20Guerra",
  },
  {
    artist: "Céu",
    title: "Tinindo Trincando",
    album: "Replay Acabou Chorare",
    popularity: 500,     // estimado
    type: "Faixa",
    year: 2020,
    room: "A",
    services: ["Gravação"],
    cover: "/img/projetos/ceu-tinindo-trincando.jpg",
    link: "https://www.youtube.com/watch?v=au_XDQd8aAs",
  },
  {
    artist: "Maria Gadú",
    title: "Acabou Chorare",
    album: "Replay Acabou Chorare",
    popularity: 500,     // estimado
    type: "Faixa",
    year: 2020,
    room: "A",
    services: ["Gravação"],
    cover: "/img/projetos/maria-gadu-acabou-chorare.jpg",
    link: "https://www.youtube.com/watch?v=w9ZmoQbsa9s",
  },
  {
    artist: "Herbie Hancock & Céu",
    title: "Tempo de Amor",
    album: "The Imagine Project",
    popularity: 900,     // estimado
    type: "Faixa",
    year: 2010,
    room: "A",
    services: ["Gravação"],
    cover: "/img/projetos/herbie-hancock-imagine-project.jpg",
    link: "https://www.youtube.com/watch?v=vuavOxbfFws",
  },
  {
    artist: "Titãs",
    title: "Titãs Trio Acústico",
    popularity: 700,
    type: "Álbum",
    year: 2021,
    room: "A",
    services: ["Gravação"],
    cover: "/img/projetos/titas-trio-acustico.jpg",
    link: "https://open.spotify.com/album/58SJ5GEjT0MCqPJWft7osf",
  },
];
