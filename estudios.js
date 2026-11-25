// Informações de cada estúdio. Para editar textos ou fotos, mexa só aqui.
// Fotos: IDs das imagens do site atual (Wix) — veja PHOTO() em site.js.
// Ordem da página de cada estúdio: técnica (kind: "tecnica") → salas de gravação (kind: "gravacao")
// → lista de equipamentos (specs) → planta baixa (plan). Sem galeria de técnica, usa photos.
// Valores NÃO aparecem no site: são enviados pela equipe depois do pedido de orçamento.

const STUDIOS = [
  {
    slug: "sala-a",
    letter: "A",
    name: "Estúdio A",
    tagline: "O maior e mais equipado do NaCena",
    summary: "Nosso maior estúdio: um salão de gravação de 120 m² com piano Yamaha C7, dois booths e estrutura para vídeo. Feito para bandas completas, orquestras e sessões ao vivo.",
    description: [
      "Nossa estrutura principal: a técnica tem visão direta para o salão, a maior sala de gravação do NaCena, pensada para bandas completas, orquestras e sessões ao vivo.",
      "Os booths ligados ao estúdio ampliam a sessão e permitem isolar vozes e instrumentos enquanto a banda grava junta no salão.",
    ],
    // Galerias com fotos próprias (arquivos em static/img/...). withSpecs: mostra as especificações logo abaixo.
    galleries: [
      {
        title: "A Técnica",
        kind: "tecnica",
        text: "Sala de controle com console AMS Neve, monitoração Genelec, racks de outboard e Pro Tools Ultimate, com visão direta para o salão.",
        photos: [
          ["/img/sala-a/tecnica-console-sessao.jpg", "Sessão na técnica do Estúdio A, com a console e os racks de outboard"],
          ["/img/sala-a/tecnica-console.jpg", "Console AMS Neve e monitores Genelec com o salão ao fundo"],
          ["/img/sala-a/tecnica-racks.jpg", "Racks de outboard e sofá da técnica"],
          ["/img/sala-a/tecnica-sofa.jpg", "Racks de equipamentos e difusores de madeira"],
          ["/img/sala-a/tecnica-ambiente.jpg", "Vista geral da técnica do Estúdio A"],
          ["/img/sala-a/tecnica-visor-salao.jpg", "O salão visto da técnica do Estúdio A, durante uma gravação"],
        ],
      },
      {
        title: "O Salão",
        kind: "gravacao",
        text: "A maior sala de gravação do Nacena: piso de madeira, painéis acústicos móveis, cabines de isolamento, piano ¾ de cauda Yamaha C7 e grid de iluminação para gravações com vídeo.",
        plan: ["/img/sala-a/planta-salao-grid-neutro-fundo.svg", "Desenho simplificado do salão do Estúdio A, com a técnica, os visores acústicos e os dois grids de iluminação (posição ilustrativa)"],
        photos: [
          ["/img/sala-a/salao-amplo.jpg", "Vista ampla do salão com piano de cauda e cabines de isolamento"],
          ["/img/sala-a/piano.jpg", "Piano ¾ de cauda Yamaha C7 no salão"],
          ["/img/sala-a/salao-tecnica.jpg", "Salão visto do piano, com o vidro da técnica ao fundo"],
          ["/img/sala-a/salao-piso.jpg", "Piso de madeira e painéis acústicos do salão"],
          ["/img/sala-a/salao-sessao-violoes.jpg", "Músicos com violões durante uma sessão no salão"],
        ],
      },
    ],
    // Especificações da técnica (sala de controle), agrupadas por categoria.
    // Lista de equipamentos (como o "Gear List" do Power Station): categoria → itens.
    specs: {
      groups: [
        ["Console", ["Neve VX — 60 canais"]],
        ["Gravação", ["Pro Tools Ultimate + HDX", "2× Avid MTRX 16x16", "2× Avid 16x16", "Mac Pro 2019 — 48 GB RAM"]],
        ["Monitoração", ["Genelec 1034A", "Genelec 1031A"]],
        ["Piano", ["Yamaha C7 — ¾ de cauda"]],
        ["Salas", ["Salão de gravação — 120 m² (≈ 9,4 × 13 m)", "Pé-direito de 6 m no salão", "Dois booths de gravação", "Visor amplo entre técnica e salão", "Projeto acústico WSDG"]],
        ["Estrutura", ["2 grids de iluminação — capacidade total de 2.000 kg", "Ar-condicionado: 2 máquinas, 240.000 BTUs no total", "Gerador próprio de 150 kVA + nobreak", "Rampa de acesso para equipamentos"]],
      ],
    },
    notes: ["Lockout: reserve o estúdio com exclusividade pelo dia inteiro.", "Não é possível gravar no Estúdio A e no Estúdio C ao mesmo tempo."],
    photos: ["/img/sala-a/tecnica-console.jpg"], // capa (topo da página e card da home)
  },
  {
    slug: "sala-b",
    unavailable: true, // aparece cinza, com "Indisponível no momento" — apague esta linha quando voltar a funcionar
    letter: "B",
    name: "Estúdio B",
    tagline: "Mixagem e Dolby Atmos",
    summary: "Nosso estúdio de mixagem: mesa analógica e sistema Dolby Atmos para mixar em estéreo e em áudio imersivo, com a mesma qualidade dos grandes lançamentos.",
    description: [
      "O Estúdio B é dedicado à mixagem: o calor e a profundidade do som de console, e a monitoração imersiva para entregar no formato das plataformas de streaming, como Apple Music, Amazon Music e Tidal.",
      "Para mixar discos e singles gravados no NaCena ou fora dele, acompanhando a sessão de perto com o engenheiro.",
    ],
    specs: {
      groups: [
        ["Console", ["Amek Media 51 — 60 canais"]],
        ["Monitoração", ["Dolby Atmos com Dynaudio AIR 20", "Genelec 1038B"]],
        ["Gravação", ["Avid MTRX Studio 16x16", "Mac Pro 2019 — 96 GB RAM"]],
        ["Formatos de mixagem", ["Estéreo", "5.1", "7.1", "Dolby Atmos"]],
      ],
    },
    notes: [],
    photos: ["/img/sala-b/tecnica-console-frente.jpg"],
    galleries: [
      {
        title: "A Técnica",
        kind: "tecnica",
        photos: [
          ["/img/sala-b/tecnica-console-frente.jpg", "Console e monitoração Dolby Atmos do Estúdio B"],
          ["/img/sala-b/tecnica-console-lateral.jpg", "Técnica do Estúdio B vista de lado, com os racks ao fundo"],
          ["/img/sala-b/tecnica-sofa.jpg", "Técnica do Estúdio B com o sofá"],
        ],
      },
    ],
  },
  {
    slug: "sala-c",
    letter: "C",
    name: "Estúdio C",
    tagline: "Para suas produções e gravações",
    summary: "Um estúdio para suas produções e gravações: console SSL AWS de 32 canais, Pro Tools, Ableton e Logic, e uma sala de gravação com luz natural.",
    description: [
      "Um estúdio completo para gravar, mixar e produzir, com as três principais plataformas de produção e uma sala de gravação com luz natural, que deixa a sessão mais leve.",
    ],
    notes: ["Agendamentos de até 8h por dia; acima disso a sessão precisa de 2 técnicos."],
    photos: ["/img/wix/4f7a243f84de41a79904af12d1015024.jpg"], // capa: console SSL
    specs: {
      groups: [
        ["Console", ["SSL AWS — 32 canais"]],
        ["Pré-amplificadores", ["Manley Voxbox", "Avalon 737", "UAD 610"]],
        ["Gravação", ["Pro Tools Ultimate", "Antelope Galaxy 32 Synergy Core", "Mac Studio M2 Ultra — 64 GB RAM, 1 TB"]],
        ["Software", ["Ableton Live Suite 12", "Logic Pro"]],
        ["Monitoração", ["Genelec 1032A", "Genelec 1031A"]],
        ["Sala de gravação", ["≈ 12 m², com luz natural (janela para o jardim)", "Booth extra: Estúdio D (≈ 9 m²), com visor para a sala", "Projeto acústico WSDG com piso flutuante", "Estrutura para vídeo"]],
      ],
    },
    galleries: [
      {
        title: "A Técnica",
        kind: "tecnica",
        photos: [
          ["/img/wix/4f7a243f84de41a79904af12d1015024.jpg", "Console SSL do Estúdio C"],
          ["/img/wix/6a2aa8c4a0c54ea5ade7d75bde2aa9a7.jpg", "Técnica C com console SSL"],
        ],
      },
      {
        title: "A sala de gravação",
        kind: "gravacao",
        text: "Piso de madeira, painéis em tecido, visor para a técnica e uma janela ampla para o jardim.",
        plan: ["/img/sala-c/planta-sala-c-neutro-fundo.svg", "Desenho simplificado do Estúdio C: técnica, sala de gravação, Estúdio D como booth extra, sound lock, visores entre as salas e janelas para o jardim"],
        // Fotos do site antigo — trocar pelas fotos novas da sala de gravação C.
        photos: [
          ["/img/wix/a8c59c7b84c04ae6805d7ab30e2740c8.jpg", "Sala de gravação C com janela para o jardim"],
          ["/img/wix/fba70769855c420291a6a0e91f8f22b2.jpg", "Sala de gravação C"],
          ["/img/wix/a5086254823f418a991b002b16671f2f.jpg", "Janela da sala de gravação C"],
        ],
      },
    ],
  },
  {
    slug: "sala-d",
    hidden: true, // Estúdio D fora do site por enquanto — apague esta linha para voltar
    letter: "D",
    name: "Estúdio D",
    tagline: "Teclados e sintetizadores icônicos",
    summary: "Um estúdio para você produzir e gravar com teclados icônicos: Minimoog, Prophet-5, Jupiter-6, TR-808 e TB-303, os timbres que marcaram a história da música. Também se interliga ao Estúdio C.",
    description: [
      "O lugar para produzir e gravar com sintetizadores e drum machines que definiram o som de gerações.",
      "O estúdio também se interliga ao Estúdio C, para gravar mais músicos ao mesmo tempo ou isolar instrumentos.",
    ],
    notes: ["Disponível apenas em conjunto com o Estúdio C."],
    specs: {
      groups: [
        ["Sintetizadores", ["Moog Minimoog", "Sequential Prophet-5", "Roland Jupiter-6"]],
        ["Drum machines e baixo", ["Roland TR-808", "Roland TB-303"]],
        ["Gravação", ["Interface Neumann MT 48", "Mac Mini M4 Pro — 24 GB RAM, 512 GB SSD"]],
        ["Monitoração", ["Dynaudio BM6"]],
      ],
    },
    photos: ["/img/foto-em-breve.svg"], // sem foto ainda — trocar quando houver fotos do Estúdio D
  },
].filter((s) => !s.hidden);
