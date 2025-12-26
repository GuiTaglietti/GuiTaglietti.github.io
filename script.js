(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const fabTop = document.getElementById("fabTop");
  const langToggle = document.getElementById("langToggle");
  const langFlag = document.getElementById("langFlag");

  const i18n = {
    en: {
      "header.badge": "Backend • Remote",
      "header.lang": "Language",
      "header.theme": "Theme",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.certs": "Certifications",
      "nav.events": "Events",
      "nav.contact": "Contact",
      "hero.kicker": "Backend Software Engineer",
      "hero.title":
        'Distributed Systems, AI/LLM Integrations, <span class="accent">High-Performance Computing</span>',
      "hero.lead":
        "I build scalable backend architectures with Python microservices, asynchronous pipelines, and production-ready infrastructure. Strong C++ performance background (genetic algorithms, parallelism) and competitive programming experience.",
      "hero.cv": "Download CV",
      "hero.touch": "Get in touch",
      "meta.location.t": "Location",
      "meta.location.v": "Brazil (Remote)",
      "meta.focus.t": "Focus",
      "meta.focus.v": "Backend • Distributed Systems • AI",
      "meta.stack.t": "Core Stack",
      "meta.stack.v": "Python • FastAPI/Flask • Redis • Celery",
      "chip.1": "Microservices",
      "chip.2": "Async Pipelines",
      "chip.3": "LLMs",
      "chip.4": "Docker",
      "chip.5": "AWS",
      "chip.6": "C++ Performance",
      "about.h": "About",
      "about.p":
        "Bachelor’s in Computer Science (UPF). Backend engineer focused on scalable distributed systems, AI/LLM integrations, and high-performance algorithms.",
      "about.c1.h": "Backend & Distributed Systems",
      "about.c1.p":
        "Microservices, async communication, queues/workers, background processing, reliability and cost control.",
      "about.c2.h": "AI & LLM Integrations",
      "about.c2.p":
        "Production-grade LLM workflows, automation, and intelligent features integrated into backend cores.",
      "about.c3.h": "High-Performance C++",
      "about.c3.p":
        "Genetic algorithms, parallelism (OpenMP), multithreading, data structures, and algorithm optimization.",
      "edu.h": "Education",
      "edu.pill": "BSc • GPA 9.3",
      "edu.sub":
        "Bachelor’s in Computer Science — Universidade de Passo Fundo (UPF)",
      "edu.b1":
        "Strong foundation in algorithms, data structures, operating systems, networks, databases, software engineering, and distributed systems.",
      "edu.b2":
        "Capstone (TCC): published research + C++ implementation of new heuristic initializations for a genetic algorithm that generates the university timetable.",
      "edu.b3":
        "Improved the final results by ~50% through heuristic initialization strategies, parallel optimization, and performance-focused engineering.",
      "high.h": "Highlights",
      "high.p": "Quick snapshot of what I deliver in real-world systems.",
      "high.c1.h": "Production-ready microservices",
      "high.c1.b1": "FastAPI/Flask APIs with strong contracts",
      "high.c1.b2": "Redis + Celery pipelines (queues, workers, retries)",
      "high.c1.b3": "Dockerized services, Linux deployments",
      "high.c2.h": "Automation + LLM workflows",
      "high.c2.b1": "LLM integrations for intelligent automation",
      "high.c2.b2": "Cost-aware, observable background jobs",
      "high.c2.b3": "Data validation & structured reporting",
      "skills.h": "Skills",
      "skills.p":
        "Focused on backend engineering, reliability, and scalable architecture.",
      "skills.c1.h": "Backend",
      "skills.c2.h": "AI / Data",
      "skills.c3.h": "Performance",
      "skills.c4.h": "Databases",
      "skills.c5.h": "Infra & DevOps",
      "skills.c6.h": "Frontend",
      "skills.llm": "LLM Integrations",
      "skills.mt": "Multithreading",
      "skills.alg": "Algorithms",
      "skills.ds": "Data Structures",
      "skills.ga": "Genetic Algorithms",
      "exp.h": "Experience",
      "exp.p":
        "Selected experience aligned with backend, distributed systems, and performance.",
      "exp.d1.h": "Software Engineer (Backend / Fullstack) — DocQ",
      "exp.d1.d": "Sep 2024 — Present",
      "exp.d1.b1": "Distributed microservices in Python (FastAPI/Flask)",
      "exp.d1.b2": "Async pipelines with Redis + Celery (queues/workers)",
      "exp.d1.b3": "AI/LLM integrations enabling automation workflows",
      "exp.d1.b4": "Dockerized deployments; Linux + AWS infrastructure",
      "exp.d2.h": "Research & Academic Systems — UPF",
      "exp.d2.d": "2022 — 2024",
      "exp.d2.b1":
        "High-performance C++ genetic algorithm for university timetabling",
      "exp.d2.b2": "Parallelism and optimization (OpenMP, multithreading)",
      "exp.d2.b3":
        "Java web app (JSF/PrimeFaces/JasperReports) for academic management",
      "exp.d2.b4": "Python validation scripts and structured JSON reporting",
      "exp.d3.h": "Teaching Assistant & Instructor — FabSoft",
      "exp.d3.d": "2023 — 2024",
      "exp.d3.b1":
        "Mentored 50+ students (competitive programming + web dev “ZZ-On”)",
      "exp.d3.b2":
        "Algorithms, data structures, OOP; PHP/JS projects; Python data research",
      "cert.h": "Certifications",
      "cert.p": "Verified Udemy certificates (IDs included).",
      "ev.h": "Events & Competitions",
      "ev.p": "Community and continuous learning.",
      "ev.c1.h": "Competitive Programming",
      "ev.c1.b1": "OBI (Brazilian Informatics Olympiad)",
      "ev.c1.b2": "SBC/ICPC South America (multiple phases)",
      "ev.c1.b3": "Beecrowd practice and mentoring",
      "ev.c2.h": "Conferences",
      "ev.c2.b1": "The Developers Conference (TDC) — São Paulo",
      "ev.c2.b2": "Gramado Summit",
      "ev.c2.b3": "Porto Alegre Summit",
      "ev.c3.h": "Security & Community",
      "ev.c3.b1": "BSides BSB — Brasília",
      "ev.c3.b2": "Tech meetups and workshops",
      "ev.c3.b3": "Continuous learning projects",
      "ct.h": "Contact",
      "ct.p":
        "Open to remote opportunities and backend engineering challenges.",
      "ct.e.t": "Email",
      "ct.l.t": "LinkedIn",
      "ct.g.t": "GitHub",
      "ct.note":
        "Prefer email for first contact. For code samples, check pinned repositories on GitHub.",
      "footer.top": "Back to top",
      "cv.en": "English",
      "cv.pt": "Portuguese",
    },
    pt: {
      "header.badge": "Backend • Remoto",
      "header.lang": "Idioma",
      "header.theme": "Tema",
      "nav.about": "Sobre",
      "nav.skills": "Competências",
      "nav.experience": "Experiência",
      "nav.certs": "Certificações",
      "nav.events": "Eventos",
      "nav.contact": "Contato",
      "hero.kicker": "Engenheiro de Software Backend",
      "hero.title":
        'Sistemas Distribuídos, Integrações com IA/LLMs, <span class="accent">Computação de Alta Performance</span>',
      "hero.lead":
        "Construo arquiteturas backend escaláveis com microserviços em Python, pipelines assíncronos e infraestrutura pronta para produção. Base sólida em performance com C++ (algoritmos genéticos, paralelismo) e experiência em programação competitiva.",
      "hero.cv": "Baixar CV",
      "hero.touch": "Vamos conversar",
      "meta.location.t": "Local",
      "meta.location.v": "Brasil (Remoto)",
      "meta.focus.t": "Foco",
      "meta.focus.v": "Backend • Sistemas Distribuídos • IA",
      "meta.stack.t": "Stack Principal",
      "meta.stack.v": "Python • FastAPI/Flask • Redis • Celery",
      "chip.1": "Microserviços",
      "chip.2": "Pipelines Assíncronos",
      "chip.3": "LLMs",
      "chip.4": "Docker",
      "chip.5": "AWS",
      "chip.6": "Performance em C++",
      "about.h": "Sobre",
      "about.p":
        "Bacharel em Ciência da Computação (UPF). Engenheiro backend focado em sistemas distribuídos escaláveis, integrações com IA/LLMs e algoritmos de alta performance.",
      "about.c1.h": "Backend & Sistemas Distribuídos",
      "about.c1.p":
        "Microserviços, comunicação assíncrona, filas/workers, processamento em background, confiabilidade e controle de custos.",
      "about.c2.h": "Integrações com IA & LLMs",
      "about.c2.p":
        "Workflows de LLM em produção, automação e funcionalidades inteligentes integradas ao core do backend.",
      "about.c3.h": "C++ de Alta Performance",
      "about.c3.p":
        "Algoritmos genéticos, paralelismo (OpenMP), multithreading, estruturas de dados e otimização de algoritmos.",
      "edu.h": "Formação",
      "edu.pill": "Bacharel • Nota 9.3",
      "edu.sub":
        "Bacharelado em Ciência da Computação — Universidade de Passo Fundo (UPF)",
      "edu.b1":
        "Base sólida em algoritmos, estruturas de dados, sistemas operacionais, redes, bancos de dados, engenharia de software e sistemas distribuídos.",
      "edu.b2":
        "TCC: publicação de artigo + implementação em C++ de novas inicializações heurísticas para um algoritmo genético que gera toda a grade de horários da universidade.",
      "edu.b3":
        "Melhoria de ~50% nos resultados finais por meio de estratégias heurísticas de inicialização, otimização paralela e engenharia focada em performance.",
      "high.h": "Destaques",
      "high.p": "Resumo rápido do que entrego em sistemas reais.",
      "high.c1.h": "Microserviços prontos para produção",
      "high.c1.b1": "APIs FastAPI/Flask com contratos bem definidos",
      "high.c1.b2": "Pipelines com Redis + Celery (filas, workers, retries)",
      "high.c1.b3": "Serviços containerizados, deploys em Linux",
      "high.c2.h": "Automação + workflows com LLM",
      "high.c2.b1": "Integrações com LLMs para automação inteligente",
      "high.c2.b2": "Jobs observáveis e com foco em custo",
      "high.c2.b3": "Validação de dados e relatórios estruturados",
      "skills.h": "Competências",
      "skills.p":
        "Foco em engenharia backend, confiabilidade e arquitetura escalável.",
      "skills.c1.h": "Backend",
      "skills.c2.h": "IA / Dados",
      "skills.c3.h": "Performance",
      "skills.c4.h": "Bancos de Dados",
      "skills.c5.h": "Infra & DevOps",
      "skills.c6.h": "Frontend",
      "skills.llm": "Integrações com LLMs",
      "skills.mt": "Multithreading",
      "skills.alg": "Algoritmos",
      "skills.ds": "Estruturas de Dados",
      "skills.ga": "Algoritmos Genéticos",
      "exp.h": "Experiência",
      "exp.p":
        "Experiências alinhadas com backend, sistemas distribuídos e performance.",
      "exp.d1.h": "Engenheiro de Software (Backend / Fullstack) — DocQ",
      "exp.d1.d": "Set 2024 — Atual",
      "exp.d1.b1": "Microserviços distribuídos em Python (FastAPI/Flask)",
      "exp.d1.b2": "Pipelines assíncronos com Redis + Celery (filas/workers)",
      "exp.d1.b3": "Integrações com IA/LLMs para automação de workflows",
      "exp.d1.b4": "Deploys com Docker; Linux + infraestrutura AWS",
      "exp.d2.h": "Pesquisa & Sistemas Acadêmicos — UPF",
      "exp.d2.d": "2022 — 2024",
      "exp.d2.b1":
        "Algoritmo genético em C++ de alta performance para geração de horários universitários",
      "exp.d2.b2": "Paralelismo e otimização (OpenMP, multithreading)",
      "exp.d2.b3":
        "Aplicação web Java (JSF/PrimeFaces/JasperReports) para gestão acadêmica",
      "exp.d2.b4":
        "Scripts Python para validação e relatórios JSON estruturados",
      "exp.d3.h": "Monitor & Instrutor — FabSoft",
      "exp.d3.d": "2023 — 2024",
      "exp.d3.b1":
        "Mentoria para 50+ alunos (programação competitiva + curso “ZZ-On”)",
      "exp.d3.b2":
        "Algoritmos, estruturas de dados, OOP; projetos PHP/JS; pesquisa em Python",
      "cert.h": "Certificações",
      "cert.p": "Certificados Udemy verificados (com IDs).",
      "ev.h": "Eventos & Competições",
      "ev.p": "Comunidade e aprendizado contínuo.",
      "ev.c1.h": "Programação Competitiva",
      "ev.c1.b1": "OBI (Olimpíada Brasileira de Informática)",
      "ev.c1.b2": "SBC/ICPC América do Sul (múltiplas fases)",
      "ev.c1.b3": "Treinos e mentoria no Beecrowd",
      "ev.c2.h": "Conferências",
      "ev.c2.b1": "The Developers Conference (TDC) — São Paulo",
      "ev.c2.b2": "Gramado Summit",
      "ev.c2.b3": "Porto Alegre Summit",
      "ev.c3.h": "Segurança & Comunidade",
      "ev.c3.b1": "BSides BSB — Brasília",
      "ev.c3.b2": "Meetups e workshops técnicos",
      "ev.c3.b3": "Projetos e estudo contínuo",
      "ct.h": "Contato",
      "ct.p": "Aberto a oportunidades remotas e desafios de backend.",
      "ct.e.t": "Email",
      "ct.l.t": "LinkedIn",
      "ct.g.t": "GitHub",
      "ct.note":
        "Prefira email no primeiro contato. Para exemplos de código, veja os repositórios fixados no GitHub.",
      "footer.top": "Voltar ao topo",
      "cv.en": "Inglês",
      "cv.pt": "Português",
    },
  };

  function applyLang(lang) {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    if (langFlag) langFlag.textContent = lang === "pt" ? "🇧🇷" : "🇺🇸";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = i18n[lang]?.[key];
      if (typeof val === "string") {
        if (val.includes("<")) el.innerHTML = val;
        else el.textContent = val;
      }
    });
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme");

  themeToggle?.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });

  let lang = localStorage.getItem("lang") === "pt" ? "pt" : "en";
  applyLang(lang);

  langToggle?.addEventListener("click", () => {
    lang = lang === "en" ? "pt" : "en";
    localStorage.setItem("lang", lang);
    applyLang(lang);
  });

  navToggle?.addEventListener("click", () => {
    const open = navMenu?.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navMenu?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      }
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.querySelectorAll('a[href="#top"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToTop();
      history.replaceState(null, "", "#top");
    });
  });

  fabTop?.addEventListener("click", scrollToTop);

  function onScroll() {
    if (!fabTop) return;
    if (window.scrollY > 500) fabTop.classList.add("show");
    else fabTop.classList.remove("show");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const cvDropdown = document.getElementById("cvDropdown");
  const cvTrigger = document.getElementById("cvTrigger");
  const cvMenu = document.getElementById("cvMenu");

  function closeCv() {
    if (!cvDropdown) return;
    cvDropdown.classList.remove("open");
    cvTrigger?.setAttribute("aria-expanded", "false");
  }

  cvTrigger?.addEventListener("click", (e) => {
    e.preventDefault();
    if (!cvDropdown) return;
    const isOpen = cvDropdown.classList.toggle("open");
    cvTrigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  cvMenu?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      closeCv();
    });
  });

  document.addEventListener("click", (e) => {
    if (!cvDropdown) return;
    if (!cvDropdown.contains(e.target)) closeCv();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCv();
  });
})();
