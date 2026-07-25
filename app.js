const brands = [
  {
    kicker: "Gastronomía de alta gama",
    name: "Griller",
    description: [
      "En Griller, el desafío es que la comida se vea tan cuidada como la experiencia del lugar.",
      "Como Analista de Marketing, acompaño el calendario de contenidos y la coordinación visual junto a la agencia creativa, cuidando que cada publicación mantenga el tono de la marca."
    ],
    logo: "https://griller.com.ar/wp-content/uploads/2024/02/Griller-Logo-Light.png",
    logoAlt: "Logo oficial de Griller",
    logoTheme: "dark",
    links: [
      { label: "Sitio web", url: "https://griller.com.ar/" },
      { label: "Instagram", url: "https://www.instagram.com/griller.ba/" }
    ]
  },
  {
    kicker: "Contenido para grandes formatos",
    name: "Prina Argentina",
    description: [
      "En Prina, el contenido vive entre redes, eventos y pantallas de gran formato. Todo tiene que entenderse rápido y verse con presencia.",
      "Trabajé en contenido para redes y piezas audiovisuales creadas para reproducirse en pantallas LED, pensando cada formato según dónde iba a verse."
    ],
    logo: "https://prina.net/assets/img/logos/logo-inteligencia-blanco.png",
    logoAlt: "Logo oficial de Prina Argentina",
    logoTheme: "dark",
    pendingAsset: "Versión azul pendiente",
    links: [
      { label: "Sitio web", url: "https://prina.net/" },
      { label: "Instagram", url: "https://www.instagram.com/prina.argentina" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/prina" }
    ]
  },
  {
    kicker: "Producto y comunidad",
    name: "Cartas Coleccionables",
    description: [
      "En Cartas Coleccionables, cada producto tiene detalle, color y una comunidad que mira con atención.",
      "Genero contenido para mostrar cartas, lanzamientos y novedades de una manera clara, cercana y fácil de seguir."
    ],
    logo: "assets/logo-cartas-coleccionables.jpg",
    logoAlt: "Logo oficial de Cartas Coleccionables",
    logoTheme: "light",
    pendingAsset: "SVG oficial pendiente",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/cartas.coleccionables/" }
    ]
  }
];

const projects = [
  {
    id: "16P7c2f3R0y42b1XWbGZexi5sK4Uo5hnz",
    number: "01",
    brand: "Prina Argentina",
    title: "Impacto visual para grandes formatos",
    description: "Una pieza pensada para aprovechar el tamaño de las pantallas LED, captar atención a distancia y comunicar el mensaje con claridad en espacios de alto tránsito.",
    tags: ["Edición", "Pantalla LED", "Evento"],
    thumbnail: "https://drive.google.com/thumbnail?id=16P7c2f3R0y42b1XWbGZexi5sK4Uo5hnz&sz=w1000",
    alt: "Miniatura del video de Prina Argentina para pantallas LED"
  },
  {
    id: "1BOCM3K6_iTQ_IP4_rgllCiMRY-sLvexa",
    number: "02",
    brand: "Prina Argentina",
    title: "Tecnología presentada de forma simple y atractiva",
    description: "Contenido comercial que convierte información técnica en una pieza dinámica, fácil de entender y preparada para generar interés en redes.",
    tags: ["Edición", "Reel", "Comunicación comercial"],
    thumbnail: "https://drive.google.com/thumbnail?id=1BOCM3K6_iTQ_IP4_rgllCiMRY-sLvexa&sz=w1000",
    alt: "Miniatura del video comercial de Prina Argentina"
  },
  {
    id: "1NyX1Vbqhh46YR-2R5Tecsx5fzlZhSWEg",
    number: "03",
    brand: "Prina Argentina",
    title: "Experiencia que también se puede mostrar",
    description: "Una edición que presenta instalaciones y proyectos reales para reforzar la capacidad de trabajo, la presencia y la confianza en la marca.",
    tags: ["Edición", "Instalaciones", "Eventos"],
    thumbnail: "https://drive.google.com/thumbnail?id=1NyX1Vbqhh46YR-2R5Tecsx5fzlZhSWEg&sz=w1000",
    alt: "Miniatura del video de instalaciones de Prina Argentina"
  },
  {
    id: "1wHyNSEew_XqizBeT7vLgzgjlZKG-xZj8",
    number: "04",
    brand: "Cartas Coleccionables",
    title: "Un producto preparado para llamar la atención",
    description: "Contenido creado para destacar los detalles de las cartas y presentar el producto de una manera visualmente atractiva desde el primer segundo.",
    tags: ["Edición", "Producto", "Redes"],
    thumbnail: "https://drive.google.com/thumbnail?id=1wHyNSEew_XqizBeT7vLgzgjlZKG-xZj8&sz=w1000",
    alt: "Miniatura de video de producto de Cartas Coleccionables"
  },
  {
    id: "1OA6lV72Iv5XYs_2YDGTmhO-bKuA8siAP",
    number: "05",
    brand: "Cartas Coleccionables",
    title: "Contenido que sostiene el interés de la comunidad",
    description: "Una pieza pensada para mostrar novedades, ampliar la variedad de publicaciones y mantener activa la conversación alrededor de los productos.",
    tags: ["Edición", "Novedades", "Comunidad"],
    thumbnail: "https://drive.google.com/thumbnail?id=1OA6lV72Iv5XYs_2YDGTmhO-bKuA8siAP&sz=w1000",
    alt: "Miniatura de video de novedades de Cartas Coleccionables"
  },
  {
    id: "1muidHvcRmlESCvcIduc1fPeMyBfAUNcQ",
    number: "06",
    brand: "Cartas Coleccionables",
    title: "Producto visible desde el primer segundo",
    description: "Edición optimizada para redes, con una presentación rápida y clara que ayuda a que el producto se destaque dentro del feed.",
    tags: ["Edición", "Reel", "Producto"],
    thumbnail: "https://drive.google.com/thumbnail?id=1muidHvcRmlESCvcIduc1fPeMyBfAUNcQ&sz=w1000",
    alt: "Miniatura de reel de producto de Cartas Coleccionables"
  },
  {
    id: "18Rh-l9geRrM6hbUJxRYCTfJx0FGTdGyT",
    number: "07",
    brand: "Cartas Coleccionables",
    title: "Una presentación dinámica para redes",
    description: "Contenido con ritmo y movimiento para captar atención, mostrar el producto y acompañar la forma rápida en la que las personas consumen contenido digital.",
    tags: ["Edición", "Producto", "Redes"],
    thumbnail: "https://drive.google.com/thumbnail?id=18Rh-l9geRrM6hbUJxRYCTfJx0FGTdGyT&sz=w1000",
    alt: "Miniatura de presentación dinámica de Cartas Coleccionables"
  }
].map((project) => ({
  ...project,
  media: {
    type: "driveEmbed",
    source: `https://drive.google.com/file/d/${project.id}/preview?autoplay=1`
  },
  nativeVideoSource: `https://drive.usercontent.google.com/download?id=${project.id}&export=download&confirm=t`,
  fallbackUrl: `https://drive.google.com/file/d/${project.id}/view?usp=sharing`
}));

const services = [
  {
    number: "01",
    title: "Videos para redes",
    description: "Edición de reels, TikToks y contenido vertical con ritmo, jerarquía y una apertura pensada para captar atención."
  },
  {
    number: "02",
    title: "Contenido para marcas",
    description: "Content creation alineado con la identidad, el objetivo comercial y el calendario de comunicación de cada marca."
  },
  {
    number: "03",
    title: "Contenido audiovisual para pantallas LED y eventos",
    description: "Piezas creadas para reproducirse en pantallas LED, instalaciones, presentaciones y grandes formatos."
  },
  {
    number: "04",
    title: "Adaptaciones para distintos canales",
    description: "Un mismo material convertido en versiones específicas para feed, stories, reels, eventos o presentaciones."
  }
];

const externalLinkAttributes = 'target="_blank" rel="noreferrer"';

const brandCard = (brand) => {
  const primaryLink = brand.links.find((link) => link.label === "Sitio web") || brand.links[0];
  return `
    <article class="brand-card">
      <div class="brand-card-top">
        <p class="card-kicker">${brand.kicker}</p>
      </div>
      <h3><a class="brand-title-link" href="${primaryLink.url}" ${externalLinkAttributes}>${brand.name}<span aria-hidden="true">↗</span></a></h3>
      <div class="brand-copy">${brand.description.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
      <div class="brand-logo-frame ${brand.logoTheme}"${brand.pendingAsset ? ` data-pending-asset="${brand.pendingAsset}"` : ""}>
        <img src="${brand.logo}" alt="${brand.logoAlt}" loading="lazy" decoding="async" />
      </div>
      <div class="link-row">${brand.links.map((link) => `<a href="${link.url}" ${externalLinkAttributes}><span>${link.label}</span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 14 14 6"></path><path d="M8 6h6v6"></path></svg></a>`).join("")}</div>
    </article>
  `;
};

const projectCard = (project) => `
  <article class="work-card">
    <button class="work-thumb" type="button" data-video-id="${project.id}" aria-label="Reproducir ${project.title}">
      <img src="${project.thumbnail}" alt="${project.alt}" loading="lazy" decoding="async" />
      <span class="work-number">${project.number}</span>
      <span class="play-indicator" aria-hidden="true"><i>▶</i><b>Reproducir</b></span>
    </button>
    <p class="work-brand">${project.brand}</p>
    <h3>${project.title}</h3>
    <p class="work-description">${project.description}</p>
    <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    <button class="work-link" type="button" data-video-id="${project.id}">Reproducir video <span aria-hidden="true">▶</span></button>
  </article>
`;

const serviceCard = (service) => `
  <article class="service-card">
    <span>${service.number}</span>
    <div><h3>${service.title}</h3><p>${service.description}</p></div>
  </article>
`;

document.querySelector("#brand-grid").innerHTML = brands.map(brandCard).join("");
document.querySelector("#work-grid").innerHTML = projects.map(projectCard).join("");
document.querySelector("#service-grid").innerHTML = services.map(serviceCard).join("");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = [...document.querySelectorAll(".reveal")];

if (!("IntersectionObserver" in window) || reducedMotion) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });

  revealElements.forEach((element) => observer.observe(element));
}

const navLinks = [...document.querySelectorAll(".nav a")];
const navTargets = [
  document.querySelector("#inicio"),
  ...navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean)
];

const setActiveNav = () => {
  const marker = Math.min(180, window.innerHeight * 0.28);
  let current = navTargets[0];

  navTargets.forEach((section) => {
    if (section.getBoundingClientRect().top <= marker) current = section;
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
};

window.addEventListener("scroll", setActiveNav, { passive: true });
window.addEventListener("resize", setActiveNav);
setActiveNav();

const hashTarget = window.location.hash && document.querySelector(window.location.hash);
if (hashTarget) hashTarget.classList.add("is-visible");

const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("ian-theme");
if (savedTheme === "light") document.body.classList.remove("dark-mode");
if (savedTheme === "dark") document.body.classList.add("dark-mode");

const updateThemeToggle = () => {
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
};

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("ian-theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  updateThemeToggle();
});
updateThemeToggle();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const closeMenu = () => {
  nav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
};

menuToggle.addEventListener("click", () => {
  const willOpen = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Cerrar menú" : "Abrir menú");
});
const animateNavigation = (target, href) => {
  const headerHeight = document.querySelector(".site-header").offsetHeight;
  const start = window.scrollY;
  const destination = Math.max(0, target.getBoundingClientRect().top + start - headerHeight);

  if (reducedMotion) {
    window.scrollTo(0, destination);
    history.pushState(null, "", href);
    return;
  }

  const duration = 850;
  const startTime = performance.now();
  const easeInOutCubic = (value) => value < 0.5 ? 4 * value ** 3 : 1 - ((-2 * value + 2) ** 3) / 2;
  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start + (destination - start) * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
    else history.pushState(null, "", href);
  };
  requestAnimationFrame(step);
};

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    closeMenu();
    target.classList.add("is-visible");
    animateNavigation(target, href);
  });
});

const roleProfiles = {
  marketing: {
    kicker: "Analista de Marketing",
    lead: "Estrategia antes de publicar.",
    primary: "Conecto los objetivos de la marca con un calendario y una dirección de contenidos. Primero entiendo qué necesita comunicar y después defino el canal y el enfoque.",
    secondary: "La mirada comercial y la producción trabajan juntas para que cada publicación sostenga el tono de la marca y tenga una función concreta."
  },
  content: {
    kicker: "Content Creator",
    lead: "Ideas pensadas para el canal donde van a vivir.",
    primary: "Transformo productos, novedades e ideas en piezas claras para redes, marcas y comunidades, cuidando que el contenido sea fácil de seguir.",
    secondary: "Cada publicación se trabaja según su contexto, su ritmo y la manera en que las personas la van a encontrar y consumir."
  },
  editing: {
    kicker: "Edición de video",
    lead: "Cada corte tiene una intención.",
    primary: "Reviso el material, selecciono lo que aporta y construyo ritmo, jerarquía y recorrido para que el mensaje se entienda desde el primer momento.",
    secondary: "La edición se adapta al destino de la pieza: reels, contenido de producto, eventos o pantallas LED de gran formato."
  }
};

const roleButtons = [...document.querySelectorAll("[data-role-key]")];
const rolePanel = document.querySelector("#role-detail-panel");
const activateRole = (button, moveFocus = false) => {
  const profile = roleProfiles[button.dataset.roleKey];
  roleButtons.forEach((item) => {
    const isSelected = item === button;
    item.setAttribute("aria-selected", String(isSelected));
    item.tabIndex = isSelected ? 0 : -1;
  });
  rolePanel.setAttribute("aria-labelledby", button.id);
  document.querySelector("#role-panel-kicker").textContent = profile.kicker;
  document.querySelector("#role-panel-lead").textContent = profile.lead;
  document.querySelector("#role-panel-primary").textContent = profile.primary;
  document.querySelector("#role-panel-secondary").textContent = profile.secondary;
  if (!reducedMotion) rolePanel.animate([{ opacity: 0.35, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 320, easing: "ease-out" });
  if (moveFocus) button.focus();
};

roleButtons.forEach((button, index) => {
  button.addEventListener("click", () => activateRole(button));
  button.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowDown") nextIndex = (index + 1) % roleButtons.length;
    if (event.key === "ArrowUp") nextIndex = (index - 1 + roleButtons.length) % roleButtons.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = roleButtons.length - 1;
    activateRole(roleButtons[nextIndex], true);
  });
});

const tilt = document.querySelector(".tilt-card");
if (tilt && !reducedMotion) {
  tilt.addEventListener("pointermove", (event) => {
    const rect = tilt.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 3;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -3;
    tilt.style.setProperty("--tilt-x", `${y}deg`);
    tilt.style.setProperty("--tilt-y", `${x}deg`);
  });
  tilt.addEventListener("pointerleave", () => {
    tilt.style.setProperty("--tilt-x", "0deg");
    tilt.style.setProperty("--tilt-y", "0deg");
  });
}

const contactTopicButtons = [...document.querySelectorAll("[data-contact-topic]")];
const contactTopicPreview = document.querySelector("#contact-topic-preview");
const contactWhatsapp = document.querySelector("#contact-whatsapp");
const contactEmail = document.querySelector("#contact-email");

const updateContactTopic = (topic) => {
  const message = `Hola Ian, quiero conversar sobre: ${topic}.`;
  contactTopicPreview.textContent = topic;
  contactWhatsapp.href = `https://wa.me/5491158859986?text=${encodeURIComponent(message)}`;
  contactEmail.href = `mailto:iandanielgrinbank@gmail.com?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(`${message}\n\nTe cuento un poco más:\n`)}`;
  contactTopicButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.contactTopic === topic));
  });
};

contactTopicButtons.forEach((button) => {
  button.addEventListener("click", () => updateContactTopic(button.dataset.contactTopic));
});
updateContactTopic(contactTopicButtons[0].dataset.contactTopic);

const modal = document.querySelector("#video-modal");
const video = document.querySelector("#portfolio-video");
const videoEmbed = document.querySelector("#portfolio-video-embed");
const modalTitle = document.querySelector("#video-modal-title");
const modalBrand = document.querySelector("#video-modal-brand");
const modalLoading = document.querySelector(".video-loading");
const fallback = document.querySelector("#video-fallback");
const fallbackLink = document.querySelector("#video-fallback-link");
const modalClose = document.querySelector(".modal-close");
const modalPrevious = document.querySelector(".modal-nav-prev");
const modalNext = document.querySelector(".modal-nav-next");
let modalTrigger = null;
let activeProjectIndex = 0;

const focusableElements = () => [...modal.querySelectorAll('button:not([disabled]), a[href], video[controls], iframe')].filter((element) => !element.closest("[hidden]"));

const closeVideoModal = () => {
  video.pause();
  video.removeAttribute("src");
  video.load();
  video.hidden = true;
  videoEmbed.removeAttribute("src");
  videoEmbed.hidden = true;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  fallback.hidden = true;
  modalLoading.hidden = false;
  modalTrigger?.focus();
};

const loadModalProject = (projectIndex) => {
  activeProjectIndex = (projectIndex + projects.length) % projects.length;
  const project = projects[activeProjectIndex];
  video.pause();
  video.removeAttribute("src");
  video.load();
  video.hidden = true;
  videoEmbed.removeAttribute("src");
  videoEmbed.hidden = true;
  modalTitle.textContent = project.title;
  modalBrand.textContent = project.brand;
  fallbackLink.href = project.fallbackUrl;
  modalPrevious.setAttribute("aria-label", `Reproducir video anterior: ${projects[(activeProjectIndex - 1 + projects.length) % projects.length].title}`);
  modalNext.setAttribute("aria-label", `Reproducir video siguiente: ${projects[(activeProjectIndex + 1) % projects.length].title}`);
  fallback.hidden = true;
  modalLoading.hidden = false;

  if (project.media.type === "video") {
    video.hidden = false;
    video.volume = 0.15;
    video.poster = project.thumbnail;
    video.src = project.media.source;
    video.load();
  } else {
    videoEmbed.hidden = false;
    videoEmbed.title = `${project.title} de ${project.brand}`;
    videoEmbed.src = project.media.source;
  }
};

const openVideoModal = (project, trigger) => {
  modalTrigger = trigger;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  loadModalProject(projects.indexOf(project));
  modalClose.focus();
};

document.querySelectorAll("[data-video-id]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const project = projects.find((item) => item.id === trigger.dataset.videoId);
    if (project) openVideoModal(project, trigger);
  });
});

modalPrevious.addEventListener("click", () => loadModalProject(activeProjectIndex - 1));
modalNext.addEventListener("click", () => loadModalProject(activeProjectIndex + 1));

video.addEventListener("loadeddata", () => {
  modalLoading.hidden = true;
  video.volume = 0.15;
  video.play().catch(() => {});
});
video.addEventListener("error", () => {
  modalLoading.hidden = true;
  fallback.hidden = false;
});
videoEmbed.addEventListener("load", () => {
  modalLoading.hidden = true;
});

modal.querySelectorAll("[data-close-modal]").forEach((element) => element.addEventListener("click", closeVideoModal));

document.addEventListener("keydown", (event) => {
  if (modal.hidden) return;
  if (event.key === "Escape") closeVideoModal();
  if (event.key === "ArrowLeft") loadModalProject(activeProjectIndex - 1);
  if (event.key === "ArrowRight") loadModalProject(activeProjectIndex + 1);
  if (event.key === "Tab") {
    const focusable = focusableElements();
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
