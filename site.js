// Cabeçalho, rodapé e utilitários compartilhados por todas as páginas.

const LOGO = "/img/nacena-logo.png"; // cópia local (antes vinha do Wix)
const WHATS = "https://wa.me/5511999365624?text=" + encodeURIComponent("Olá! Quero gravar no Nacena. Meu projeto é…");
// Foto: caminho local ("/img/...") é usado como está; senão é um ID de imagem do site antigo (Wix).
const PHOTO = (id, w = 1600, h = 900) => id.startsWith("/") ? id :
  `https://static.wixstatic.com/media/056e84_${id}/v1/fill/w_${w},h_${h},al_c,q_85,enc_avif,quality_auto/foto.jpg`;

// O site tem duas áreas independentes, cada uma com menu e rodapé próprios:
//   estúdio  → /            (body sem data-area)
//   cursos   → /cursos/...  (body data-area="cursos")
const AREA = document.body.dataset.area === "cursos" ? "cursos" : "studio";
const C = "/cursos"; // raiz da área de cursos
// Área de Educação desligada por enquanto (o site publica só o Estúdio).
// Para religar: true aqui e EDUCACAO_ATIVA=1 no .env.
const EDU_ENABLED = false;

const NAV = {
  studio: [
    ["Início", "/"],
    // Sem submenus: Serviços e Estúdios levam direto às páginas, que já listam tudo.
    ["Serviços", "/servicos.html"],
    ["Estúdios", "/estudios.html"],
    ["Gravado aqui", "/projetos.html"],
    // ["Equipamentos", "/#equipamentos"],  // oculto temporariamente (coleção de microfones)
    ["Contato", "/orcamento.html"],
  ],
  cursos: [
    ["Início", `${C}/`],
    ["Trilhas", `${C}/#trilhas`],
    // ["Assinatura", `${C}/#assinatura`],  // assinatura oculta por enquanto (venda só por trilhas)
    ["Como funciona", `${C}/#como-funciona`],
    ["Minha área", `${C}/aluno.html`],
  ],
};

function renderHeader() {
  const path = location.pathname;
  const isActive = (href) =>
    href === path ||
    (href === "/" && path === "/index.html") ||
    (href === "/estudios.html" && path.startsWith("/estudios/")) || // página de cada estúdio
    (href === `${C}/` && (path === `${C}/index.html` || path === `${C}/curso.html`));
  // O texto do link fica dentro de .nl para o efeito de "rolar" no hover (styles.css).
  const links = NAV[AREA].map(([t, h, kids]) => {
    const a = `<a href="${h}" class="${isActive(h) || kids?.some(([, k]) => k === path) ? "active" : ""}"><span class="nl"><b>${t}</b></span></a>`;
    if (!kids) return a;
    return `<div class="nav-drop">${a.replace("</a>", ' <span class="caret">▾</span></a>')}<div class="drop">${
      kids.map(([kt, kh]) => `<a href="${kh}" class="${kh === path ? "active" : ""}">${kt}</a>`).join("")}</div></div>`;
  }).join("");
  const home = AREA === "cursos" ? `${C}/` : "/";
  const brand = AREA === "cursos"
    ? `<a class="logo" href="${home}"><img src="${LOGO}" alt="Nacena"><span class="logo-tag">Educação</span></a>`
    : `<a class="logo" href="${home}"><img src="${LOGO}" alt="Nacena"></a>`;
  // As duas abas principais do site: Estúdio e Educação.
  const sw = `<nav class="area-switch" aria-label="Área do site">
      <a href="/" class="${AREA === "studio" ? "on" : ""}">Estúdio</a>
      <a href="${C}/" class="${AREA === "cursos" ? "on" : ""}">Educação</a></nav>`;
  const actions = AREA === "cursos"
    ? `${sw}<a class="btn outline hide-sm" href="${C}/aluno.html">Minha área</a>`
    : EDU_ENABLED ? sw : "";
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<header class="site-header"><div class="wrap">
      <button class="menu-btn" aria-label="Abrir menu"><span></span><span></span><span></span></button>
      ${brand}
      <nav class="nav">${links}</nav>
      <div class="header-actions">${actions}</div>
    </div></header>`
  );
  const header = document.querySelector(".site-header");
  const nav = header.querySelector(".nav");
  const btn = header.querySelector(".menu-btn");
  const setMenu = (open) => {
    nav.classList.toggle("open", open);
    document.documentElement.classList.toggle("menu-open", open); // trava a rolagem da página por trás
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };
  btn.onclick = () => setMenu(!nav.classList.contains("open"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));
  matchMedia("(min-width: 901px)").addEventListener("change", (e) => e.matches && setMenu(false));
  // Páginas sem foto no topo usam o cabeçalho sólido desde o início.
  if (document.body.dataset.header === "solid") header.classList.add("solid");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function renderFooter() {
  // Rodapé do estúdio: só a linha de direitos (logo, links, contato e mapa saíram a pedido do estúdio).
  const studio = `
      <div class="copy"><span>© ${new Date().getFullYear()} Nacena. Todos os direitos reservados.</span>${EDU_ENABLED ? `<a href="${C}/">Nacena Educação: cursos online ↗</a>` : ""}</div>`;

  const cursos = `
      <div class="foot-grid">
        <div>
          <a href="${C}/" class="logo"><img src="${LOGO}" alt="Nacena" style="height:26px"><span class="logo-tag">Educação</span></a>
          <p style="margin-top:16px">Aulas gravadas dentro do Nacena Studios, com a técnica de mais de 1800 projetos.</p>
        </div>
        <div>
          <h4>Educação</h4>
          <p><a href="${C}/#trilhas">Trilhas</a></p>
          <p><a href="${C}/#como-funciona">Como funciona</a></p>
          <p><a href="${C}/aluno.html">Minha área</a></p>
        </div>
        <div>
          <h4>Suporte ao aluno</h4>
          <p><a href="mailto:atendimento@nacena.com.br?subject=Cursos">atendimento@nacena.com.br</a></p>
          <p>Problemas com acesso ou pagamento? Responda o e-mail da compra.</p>
        </div>
        <div>
          <h4>Pagamento</h4>
          <p>Pix, cartão em até 12x ou boleto.</p>
          <p>Processado com segurança pelo Mercado Pago.</p>
        </div>
      </div>
      <div class="copy"><span>© ${new Date().getFullYear()} Nacena Educação. Todos os direitos reservados.</span><a href="/">Nacena Studios ↗</a></div>`;

  document.body.insertAdjacentHTML(
    "beforeend",
    `<footer class="site-footer"><div class="wrap">${AREA === "cursos" ? cursos : studio}</div></footer>`
  );
}

// Carrossel de destaque em tela cheia. slides: [{img, eyebrow, title, kicker, text, actions}]
function buildHero(hero, slides) {
  hero.insertAdjacentHTML("afterbegin", slides.map((s, i) => `
    <div class="slide ${i === 0 ? "active" : ""}" aria-hidden="${i !== 0}">
      <img src="${esc(s.img)}" alt="" ${i ? 'loading="lazy"' : ""}>
      <div class="wrap">
        <p class="eyebrow">${esc(s.eyebrow)}</p>
        <h1 class="display">${esc(s.title)}</h1>
        <p class="kicker">${esc(s.kicker)}</p>
        <p>${esc(s.text)}</p>
        <div class="actions">${s.actions}</div>
      </div>
    </div>`).join(""));

  const els = [...hero.querySelectorAll(".slide")];
  const dots = hero.querySelector(".dots");
  dots.innerHTML = els.map((_, i) => `<i class="${i === 0 ? "on" : ""}" data-i="${i}"></i>`).join("");
  let cur = 0, timer;
  const go = (n) => {
    els[cur].classList.remove("active"); els[cur].setAttribute("aria-hidden", "true"); dots.children[cur].classList.remove("on");
    cur = (n + els.length) % els.length;
    els[cur].classList.add("active"); els[cur].setAttribute("aria-hidden", "false"); dots.children[cur].classList.add("on");
    clearInterval(timer); timer = setInterval(() => go(cur + 1), 7000);
  };
  hero.querySelector(".prev").onclick = () => go(cur - 1);
  hero.querySelector(".next").onclick = () => go(cur + 1);
  dots.onclick = (e) => e.target.dataset.i && go(+e.target.dataset.i);
  if (els.length > 1 && !reducedMotion) timer = setInterval(() => go(cur + 1), 7000);
}

const brl = (cents) => (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const duration = (c) => {
  const min = c.lessons.reduce((s, l) => s + l.minutes, 0);
  return `${Math.floor(min / 60)}h${String(min % 60).padStart(2, "0")}`;
};

const longest = (t) => Math.max(...String(t).split(/\s+/).map((w) => w.length));

async function api(path, opts = {}) {
  const r = await fetch(path, { headers: { "Content-Type": "application/json" }, ...opts });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(typeof data.detail === "string" ? data.detail : "Verifique os dados e tente novamente");
  return data;
}

// Card vertical com o nome gigante sobre a foto.
function courseCard(c) {
  return `<a class="poster" href="${C}/curso.html?id=${encodeURIComponent(c.id)}">
    <img src="${esc(c.poster)}" alt="" loading="lazy">
    <div class="badges">
      ${c.badge ? `<span class="badge accent">${esc(c.badge)}</span>` : "<span></span>"}
      <span class="badge">${esc(c.category)}</span>
    </div>
    <div class="info">
      <p class="display ${longest(c.display) > 7 ? "long" : ""}">${esc(c.display)}</p>
      <div class="meta"><span>${esc(c.title)}</span><span>${duration(c)}</span></div>
      <div class="price">${brl(c.price_cents)}</div>
    </div>
  </a>`;
}

// Card de estúdio (home e página de cada sala).
function studioTile(s) {
  return `<a class="tile" href="/estudios/${s.slug}">
    <img src="${PHOTO(s.photos[0], 1040, 650)}" alt="${esc(s.name)}" loading="lazy">
    <div class="info"><h3>${esc(s.name)}</h3><p>${esc(s.tagline)}</p></div>
  </a>`;
}

// Card vertical de trilha.
function trailCard(t) {
  const h = Math.round(t.minutes / 60);
  return `<a class="poster" href="${C}/trilha.html?id=${encodeURIComponent(t.id)}">
    <img src="${esc(PHOTO(t.cover, 1200, 750))}" alt="" loading="lazy">
    <div class="badges">
      ${t.badge ? `<span class="badge accent">${esc(t.badge)}</span>` : "<span></span>"}
      <span class="badge">Trilha · ${t.modules.length} módulos</span>
    </div>
    <div class="info">
      <p class="display ${longest(t.display) > 7 ? "long" : ""}">${esc(t.display)}</p>
      <div class="meta"><span>${esc(t.title)}</span><span>${h}h · ${t.lessons_count} aulas</span></div>
      <div class="price">${brl(t.price_cents)}</div>
    </div>
  </a>`;
}

// Card de projeto gravado no Nacena (dados em /projetos.js).
function projectCard(p) {
  const tag = p.link ? "a" : "div";
  const attrs = p.link ? ` href="${esc(p.link)}" target="_blank" rel="noopener"` : "";
  return `<${tag} class="project"${attrs}>
    <div class="cover"><img src="${esc(PHOTO(p.cover, 900, 900))}" alt="Capa de ${esc(p.title)}" loading="lazy">
      ${p.example ? `<span class="badge">Exemplo</span>` : ""}${p.link ? `<span class="play">Ouvir ↗</span>` : ""}</div>
    <div class="info">
      <h3>${esc(p.artist)}</h3>
      <p>${[esc(p.title), p.album ? `álbum ${esc(p.album)}` : esc(p.type), p.year ? esc(p.year) : ""].filter(Boolean).join(" · ")}</p>
      <small>${[p.room ? `Estúdio ${esc(p.room)}` : "", esc((p.services || []).join(", "))].filter(Boolean).join(" · ")}</small>
      ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
    </div>
  </${tag}>`;
}

// Setas ‹ › que rolam um carrossel horizontal.
function wireRail(rail, prev, next) {
  const step = () => rail.clientWidth * 0.8;
  prev?.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: "smooth" }));
  next?.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: "smooth" }));
}

// Cursos comprados neste navegador (o token de acesso fica salvo aqui).
const Library = {
  key: "nacena_library",
  all() {
    try { return JSON.parse(localStorage.getItem(this.key)) || []; } catch { return []; }
  },
  add(entry) {
    const list = this.all().filter((e) => e.token !== entry.token);
    list.unshift(entry);
    try { localStorage.setItem(this.key, JSON.stringify(list)); } catch {}
  },
};

// ---------- efeitos ----------
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Elementos com data-reveal surgem (fade + sobe) quando entram na tela.
const revealer = "IntersectionObserver" in window && !reducedMotion
  ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        revealer.unobserve(e.target);
        e.target.querySelectorAll?.("[data-count]").forEach(countUp);
      });
    }, { rootMargin: "0px 0px -8% 0px" })
  : null;

function reveal(el, delay = 0) {
  // Página aberta em segundo plano / por robôs de pré-visualização: mostra tudo sem animar.
  if (!revealer || document.visibilityState === "hidden") {
    el.classList.add("in");
    el.querySelectorAll?.("[data-count]").forEach((n) => (n.textContent = (n.dataset.prefix || "") + (+n.dataset.count).toLocaleString("pt-BR")));
    return;
  }
  el.style.setProperty("--d", `${delay}ms`);
  revealer.observe(el);
}

// Número que conta de 0 até o valor final.
function countUp(el) {
  const end = +el.dataset.count, prefix = el.dataset.prefix || "", t0 = performance.now(), dur = 1400;
  const tick = (t) => {
    const p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + Math.round(end * eased).toLocaleString("pt-BR");
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Brilho que segue o mouse + aparição escalonada dos cards de uma lista.
function enhance(root) {
  root.querySelectorAll(".poster, .tile, .project").forEach((card, i) => {
    reveal(card, Math.min(i, 6) * 70);
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

// Transição animada entre páginas: a foto do card "vira" a capa da página do curso.
document.addEventListener("click", (e) => {
  const card = e.target.closest("a.poster");
  if (!card) return;
  document.querySelectorAll("[style*='view-transition-name']").forEach((el) => (el.style.viewTransitionName = ""));
  const img = card.querySelector("img");
  if (img) img.style.viewTransitionName = "cover";
});

// ---------- chatbot (só na área do estúdio) ----------
// Desligado por enquanto. Para voltar a mostrar o chat no site, troque para true.
const CHAT_ENABLED = false;
// Fala com /api/chat, que repassa para o bot do WhatsApp. Sem bot ligado, indica orçamento/WhatsApp.
function renderChat() {
  const store = (k, v) => { try { v === undefined ? (v = localStorage.getItem(k)) : localStorage.setItem(k, v); } catch {} return v; };
  let session = store("nacena_chat_session") || null;
  const SUGGEST = ["Quais são os estúdios?", "Como peço um orçamento?", "Vocês fazem mixagem?", "Onde fica o estúdio?"];

  document.body.insertAdjacentHTML("beforeend", `
    <button class="chat-fab" aria-label="Abrir chat"><span class="i-open">💬</span><span class="i-close">✕</span></button>
    <section class="chat" aria-label="Chat com o Nacena" hidden>
      <header><div><b>Nacena Studios</b><small>Tire suas dúvidas sobre o estúdio</small></div></header>
      <div class="chat-log" aria-live="polite"></div>
      <div class="chat-suggest"></div>
      <form class="chat-form"><input placeholder="Escreva sua pergunta…" maxlength="1000" aria-label="Mensagem"><button aria-label="Enviar">➤</button></form>
    </section>`);
  const fab = document.querySelector(".chat-fab"), box = document.querySelector(".chat");
  const log = box.querySelector(".chat-log"), form = box.querySelector(".chat-form"), input = form.querySelector("input");
  const sug = box.querySelector(".chat-suggest");

  // Escapa o texto e transforma /orcamento.html, URLs e o WhatsApp em links.
  const fmt = (t) => esc(t)
    .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>')
    .replace(/(^|\s)(\/orcamento\.html)/g, '$1<a href="$2">pedido de orçamento</a>')
    .replace(/\n/g, "<br>");
  const add = (who, text, extra = "") => {
    log.insertAdjacentHTML("beforeend", `<div class="msg ${who}">${who === "bot" ? fmt(text) : esc(text)}${extra}</div>`);
    log.scrollTop = log.scrollHeight;
  };
  const drawSuggest = () => {
    sug.innerHTML = SUGGEST.map((q) => `<button type="button">${q}</button>`).join("") + `<a href="/orcamento.html">Pedir orçamento</a>`;
  };

  add("bot", "Olá! 👋 Sou o assistente do Nacena. Posso ajudar com dúvidas sobre os estúdios, serviços e como agendar.");
  drawSuggest();

  async function send(text) {
    text = text.trim();
    if (!text) return;
    add("user", text);
    sug.innerHTML = "";
    input.value = "";
    log.insertAdjacentHTML("beforeend", `<div class="msg bot typing"><i></i><i></i><i></i></div>`);
    log.scrollTop = log.scrollHeight;
    try {
      const r = await api("/api/chat", { method: "POST", body: JSON.stringify({ message: text, session }) });
      session = r.session; store("nacena_chat_session", session);
      log.querySelector(".typing")?.remove();
      add("bot", r.reply, r.online ? "" : `<div class="msg-actions"><a href="/orcamento.html">Pedir orçamento</a><a href="${WHATS}" target="_blank" rel="noopener">WhatsApp</a></div>`);
    } catch {
      log.querySelector(".typing")?.remove();
      add("bot", "Não consegui enviar agora. Tente de novo ou fale com a equipe no WhatsApp.");
    }
  }

  fab.onclick = () => {
    const open = box.hidden;
    box.hidden = !open;
    fab.classList.toggle("open", open);
    if (open) input.focus();
  };
  sug.addEventListener("click", (e) => e.target.matches("button") && send(e.target.textContent));
  form.addEventListener("submit", (e) => { e.preventDefault(); send(input.value); });
}

if (revealer) document.documentElement.classList.add("js-reveal");
renderHeader();
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.dataset.footer !== "none") renderFooter(); // a home não tem rodapé
  startBgVideo();
  if (CHAT_ENABLED && AREA === "studio") renderChat();
  document.querySelectorAll("[data-reveal]").forEach((el) => reveal(el));
  if (!revealer) document.querySelectorAll("[data-count]").forEach((el) => el.textContent = (el.dataset.prefix || "") + (+el.dataset.count).toLocaleString("pt-BR"));
});

// ---------- vídeo de fundo (home e Serviços) ----------
// Qualquer página com <video id="hero-video"> + botão #video-toggle usa o vídeo do estúdio.
// Celular recebe a versão 720p; quem pediu "reduzir movimento" ou "economia de dados" fica só com a capa.
// Continuidade entre páginas: ao sair, guarda o quadro atual do vídeo (imagem pequena) e o tempo;
// na página seguinte esse quadro aparece na hora (sem tela preta) e o vídeo continua do mesmo ponto.
const BG_KEY = "nacena-bg";
function saveBgFrame(v) {
  if (!v || !v.videoWidth || v.readyState < 2) return;
  try {
    const c = document.createElement("canvas"), w = 640;
    c.width = w; c.height = Math.round(w * v.videoHeight / v.videoWidth);
    c.getContext("2d").drawImage(v, 0, 0, c.width, c.height);
    sessionStorage.setItem(BG_KEY, JSON.stringify({ t: v.currentTime, img: c.toDataURL("image/jpeg", 0.7) }));
  } catch (e) {}
}
function startBgVideo() {
  const v = document.getElementById("hero-video"), btn = document.getElementById("video-toggle");
  if (!v) return;
  let saved = null;
  try { saved = JSON.parse(sessionStorage.getItem(BG_KEY) || "null"); } catch (e) {}
  if (saved?.img) { v.poster = saved.img; v.style.backgroundImage = `url(${saved.img})`; }
  const saveData = navigator.connection && navigator.connection.saveData;
  if (reducedMotion || saveData) return;
  v.src = matchMedia("(max-width: 900px)").matches ? "/video/nacena-720.mp4" : "/video/nacena-1080.mp4";
  v.preload = "auto";
  v.autoplay = true;
  if (saved?.t) v.addEventListener("loadedmetadata", () => { v.currentTime = saved.t % (v.duration || Infinity); }, { once: true });
  addEventListener("pagehide", () => saveBgFrame(v));
  // ao clicar num link interno, guarda antes de a página sair (mais garantido que o pagehide)
  document.addEventListener("click", (e) => { const a = e.target.closest("a[href^='/']"); if (a) saveBgFrame(v); }, true);
  let userPaused = false;
  const start = () => !userPaused && v.play().catch(() => {});
  v.addEventListener("playing", () => btn && (btn.hidden = false));
  start();
  // aberta em segundo plano: começa a tocar quando a pessoa voltar para a aba
  document.addEventListener("visibilitychange", () => document.visibilityState === "visible" && v.paused && start());
  if (btn) btn.onclick = () => {
    userPaused = !v.paused;
    if (userPaused) { v.pause(); btn.textContent = "▶"; btn.setAttribute("aria-label", "Tocar vídeo"); }
    else { v.play(); btn.textContent = "❚❚"; btn.setAttribute("aria-label", "Pausar vídeo"); }
  };
}
