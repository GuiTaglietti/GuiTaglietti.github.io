

(() => {
  'use strict';


  const i18n = {
    en: {
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.certs': 'Certifications',
      'nav.contact': 'Contact',
      'header.lang': 'EN',

      'hero.status': 'Available for new opportunities',
      'hero.kicker': 'Senior Backend Software Engineer',
      'hero.title.l1': 'Building',
      'hero.title.l2': 'distributed systems',
      'hero.title.l3': 'at the intersection of',
      'hero.title.l4': 'AI & cloud infrastructure',
      'hero.lead':
        'Senior Backend Software Engineer with 5+ years building scalable microservice architectures, AI-driven systems, and production-grade cloud platforms across Azure and AWS. Specialized in Python, asynchronous pipelines, LLM integrations, and high-performance computing.',
      'hero.m1.l': 'Location',
      'hero.m1.v': 'Brazil — Remote / Relocation',
      'hero.m2.l': 'Focus',
      'hero.m2.v': 'Backend · Distributed · AI · Cloud',
      'hero.m3.l': 'Stack',
      'hero.m3.v': 'Python · FastAPI · Azure · AWS',
      'hero.cv': 'Download CV',
      'hero.contact': 'Get in touch',

      'cv.en': 'English',
      'cv.pt': 'Português',

      'about.tag': '// about',
      'about.h': 'About',
      'about.p':
        "Bachelor's in Computer Science (UPF). Backend engineer with 5+ years of experience building scalable distributed systems, AI/LLM integrations, and high-performance algorithms across cloud-native environments.",
      'about.c1.h': 'Backend & Distributed Systems',
      'about.c1.p':
        'Microservices, event-driven architectures (RabbitMQ, Azure Service Bus), async pipelines, queues, and workers — built for reliability and scale.',
      'about.c2.h': 'AI & LLM Engineering',
      'about.c2.p':
        'Production LLM workflows, RAG pipelines, vector search, AI agents, embeddings, and prompt engineering integrated into real product systems.',
      'about.c3.h': 'Cloud & Infrastructure',
      'about.c3.p':
        'Azure (CosmosDB, Service Bus, Container Apps) and AWS deployments, Ansible IaC, observability with OpenTelemetry, Graylog, and PostHog.',

      'edu.h': 'Education',
      'edu.pill': 'BSc · GPA 9.3',
      'edu.sub': "Bachelor's in Computer Science — Universidade de Passo Fundo (UPF) · 2022–2025",
      'edu.b1':
        'Strong foundation in algorithms, data structures, operating systems, networks, databases, software engineering, and distributed systems.',
      'edu.b2':
        'Capstone (TCC): published research and C++ implementation of new heuristic initializations for a genetic algorithm generating university timetables.',
      'edu.b3':
        'Improved final results by ~50% through heuristic initialization, parallel optimization, and performance-focused engineering.',

      'skills.tag': '// skills',
      'skills.h': 'Technical Stack',
      'skills.p':
        'Battle-tested in production. Focused on backend engineering, reliability, and scalable architecture across cloud-native environments.',
      'skills.c1.h': 'Backend',
      'skills.c2.h': 'AI & Data',
      'skills.c3.h': 'Cloud & DevOps',
      'skills.c4.h': 'Observability',
      'skills.c5.h': 'Databases',
      'skills.c6.h': 'Performance & Algorithms',
      'skills.c7.h': 'Frontend',
      'skills.c8.h': 'Practices',
      'skills.llm': 'LLM Integrations',
      'skills.pe': 'Prompt Engineering',
      'skills.tracing': 'Distributed Tracing',
      'skills.metrics': 'Engineering Metrics',
      'skills.vec': 'Vector Databases',
      'skills.mt': 'Multithreading',
      'skills.alg': 'Algorithms',
      'skills.ds': 'Data Structures',
      'skills.ga': 'Genetic Algorithms',
      'skills.dist': 'Distributed Systems',
      'skills.arch': 'Software Architecture',
      'skills.cr': 'Code Review',
      'skills.tdd': 'Testing',

      'exp.tag': '// experience',
      'exp.h': 'Experience',
      'exp.p':
        'Selected experience aligned with backend engineering, distributed systems, cloud infrastructure, and AI integrations.',
      'exp.d0.h': 'Senior Software Engineer — Command|Link',
      'exp.d0.d': 'Mar 2025 — Present',
      'exp.d0.loc': 'USA · Remote · AI Team',
      'exp.d0.b1':
        'Drive backend architecture decisions, engineering metrics, and cross-service integrations within a large-scale distributed platform.',
      'exp.d0.b2':
        'Build Python/FastAPI microservices with RabbitMQ, Azure Service Bus, and Redis for asynchronous, event-driven communication.',
      'exp.d0.b3':
        'Develop AI services for reporting, vector search, embeddings, and intelligence workflows; design GraphQL (primary) and REST APIs across services.',
      'exp.d0.b4':
        'Build inbound/outbound integrations with Jira, ServiceNow, and PostHog for incident management, ticketing, and analytics pipelines.',
      'exp.d0.b5':
        'Operate Azure ecosystem (CosmosDB, Service Bus, Container Apps); automate deployments with Ansible (IaC) and CI/CD via GitHub Actions and Jenkins.',
      'exp.d0.b6':
        'Maintain observability with OpenTelemetry, Graylog, and PostHog; track engineering metrics and software quality across the team.',

      'exp.d1.h': 'Software Engineer (Backend / Fullstack) — DocQ',
      'exp.d1.d': 'Sep 2024 — Mar 2025',
      'exp.d1.loc': 'Dover, Delaware, USA · Remote',
      'exp.d1.b1': 'Distributed microservices in Python (FastAPI/Flask) on AWS infrastructure.',
      'exp.d1.b2': 'Async pipelines with Redis + Celery (queues, workers, retries).',
      'exp.d1.b3': 'AI/LLM integrations enabling intelligent document workflows.',
      'exp.d1.b4': 'PostgreSQL performance tuning, schema design, triggers, and stored procedures.',
      'exp.d1.b5': 'Frontend support with Vue.js, React.js, and Bootstrap.',

      'exp.d2.h': 'Software Developer — UPF FabSoft',
      'exp.d2.d': 'Jul 2022 — Sep 2024',
      'exp.d2.loc': 'Universidade de Passo Fundo · Research Lab',
      'exp.d2.b1': 'High-performance C++ genetic algorithm for university timetabling (OpenMP, multithreading).',
      'exp.d2.b2': 'Heuristic initialization strategies improved results by ~50%.',
      'exp.d2.b3': 'Java web app (JSF / PrimeFaces / JasperReports) for academic management.',
      'exp.d2.b4': 'Python validation scripts, structured JSON reporting, Bash automation pipelines.',
      'exp.d2.b5': 'Managed MySQL/MariaDB databases for large academic datasets.',

      'exp.d3.h': 'Teaching Assistant & Instructor — UPF',
      'exp.d3.d': 'Jan 2022 — Jul 2022',
      'exp.d3.loc': 'Universidade de Passo Fundo',
      'exp.d3.b1': 'Mentored 30+ students in competitive programming and the ZZ-On web development course.',
      'exp.d3.b2': 'PHP/JavaScript projects; data science research with Python, Pandas, NumPy.',

      'proj.tag': '// projects',
      'proj.h': 'Founding Projects',
      'proj.p':
        'SaaS products built from the ground up — covering backend architecture, AI engineering, infrastructure, and end-to-end product delivery.',
      'proj.acordify.role': 'Founding Engineer · Jan 2025 — Present',
      'proj.acordify.desc':
        'B2B SaaS for legal contract management and judicial process automation. Contract generation and comparison, risk analysis, gap detection, process monitoring, AI-driven hearing transcription, and collaborative workspaces.',
      'proj.kyntra.role': 'Co-founder & Software Engineer',
      'proj.kyntra.desc':
        'AI-driven Red Team & security SaaS for pentesting automation, attack vector exploration, and intelligent workflows. Built end-to-end with a small team — backend, AI agents, frontend, payments, i18n, and production deployments.',

      'cert.tag': '// certifications',
      'cert.h': 'Certifications',
      'cert.p': 'Verified Udemy certificates with credential IDs.',

      'ev.tag': '// community',
      'ev.h': 'Events & Competitions',
      'ev.p': 'Community involvement and continuous learning.',
      'ev.c1.h': 'Competitive Programming',
      'ev.c1.b1': 'OBI · Brazilian Informatics Olympiad',
      'ev.c1.b2': 'SBC/ICPC South America (multiple phases)',
      'ev.c1.b3': 'Beecrowd practice and mentoring',
      'ev.c2.h': 'Conferences',
      'ev.c2.b1': 'The Developers Conference (TDC) · São Paulo',
      'ev.c2.b2': 'Gramado Summit',
      'ev.c2.b3': 'Porto Alegre Summit',
      'ev.c3.h': 'Security & Community',
      'ev.c3.b1': 'BSides BSB · Brasília',
      'ev.c3.b2': 'Tech meetups and workshops',
      'ev.c3.b3': 'Continuous learning projects',

      'ct.tag': '// contact',
      'ct.h': "Let's build something",
      'ct.p':
        'Open to senior backend roles, distributed systems challenges, and AI engineering opportunities — remote or relocation.',
      'ct.e.t': 'Email',
      'ct.l.t': 'LinkedIn',
      'ct.g.t': 'GitHub',
      'ct.note': 'Email is the fastest way to reach me. For code samples, check pinned repositories on GitHub.',

      'footer.top': 'Back to top ↑',
    },

    pt: {
      'nav.about': 'Sobre',
      'nav.skills': 'Skills',
      'nav.experience': 'Experiência',
      'nav.projects': 'Projetos',
      'nav.certs': 'Certificações',
      'nav.contact': 'Contato',
      'header.lang': 'PT',

      'hero.status': 'Disponível para novas oportunidades',
      'hero.kicker': 'Engenheiro de Software Sênior — Backend',
      'hero.title.l1': 'Construindo',
      'hero.title.l2': 'sistemas distribuídos',
      'hero.title.l3': 'na intersecção entre',
      'hero.title.l4': 'IA & infraestrutura cloud',
      'hero.lead':
        'Engenheiro de Software Sênior com mais de 5 anos construindo arquiteturas de microsserviços escaláveis, sistemas orientados por IA e plataformas cloud em produção (Azure e AWS). Especializado em Python, pipelines assíncronos, integrações com LLMs e computação de alto desempenho.',
      'hero.m1.l': 'Localização',
      'hero.m1.v': 'Brasil — Remoto / Relocação',
      'hero.m2.l': 'Foco',
      'hero.m2.v': 'Backend · Distribuído · IA · Cloud',
      'hero.m3.l': 'Stack',
      'hero.m3.v': 'Python · FastAPI · Azure · AWS',
      'hero.cv': 'Baixar CV',
      'hero.contact': 'Entrar em contato',

      'cv.en': 'English',
      'cv.pt': 'Português',

      'about.tag': '// sobre',
      'about.h': 'Sobre',
      'about.p':
        'Bacharel em Ciência da Computação (UPF). Engenheiro backend com mais de 5 anos de experiência construindo sistemas distribuídos escaláveis, integrações com IA/LLMs e algoritmos de alto desempenho em ambientes cloud-native.',
      'about.c1.h': 'Backend & Sistemas Distribuídos',
      'about.c1.p':
        'Microsserviços, arquiteturas orientadas a eventos (RabbitMQ, Azure Service Bus), pipelines assíncronos, filas e workers — construídos para confiabilidade e escala.',
      'about.c2.h': 'Engenharia de IA & LLMs',
      'about.c2.p':
        'Workflows de LLMs em produção, pipelines de RAG, busca vetorial, agentes de IA, embeddings e prompt engineering integrados a sistemas reais.',
      'about.c3.h': 'Cloud & Infraestrutura',
      'about.c3.p':
        'Deployments em Azure (CosmosDB, Service Bus, Container Apps) e AWS, Ansible IaC, observabilidade com OpenTelemetry, Graylog e PostHog.',

      'edu.h': 'Formação',
      'edu.pill': 'Bacharelado · GPA 9.3',
      'edu.sub': 'Bacharelado em Ciência da Computação — Universidade de Passo Fundo (UPF) · 2022–2025',
      'edu.b1':
        'Sólida formação em algoritmos, estruturas de dados, sistemas operacionais, redes, bancos de dados, engenharia de software e sistemas distribuídos.',
      'edu.b2':
        'TCC: pesquisa publicada e implementação em C++ de novas inicializações heurísticas para um algoritmo genético que gera horários universitários.',
      'edu.b3':
        'Melhorou os resultados finais em ~50% através de inicializações heurísticas, otimização paralela e engenharia focada em performance.',

      'skills.tag': '// skills',
      'skills.h': 'Stack Técnica',
      'skills.p':
        'Testada em produção. Focada em engenharia backend, confiabilidade e arquitetura escalável em ambientes cloud-native.',
      'skills.c1.h': 'Backend',
      'skills.c2.h': 'IA & Dados',
      'skills.c3.h': 'Cloud & DevOps',
      'skills.c4.h': 'Observabilidade',
      'skills.c5.h': 'Bancos de Dados',
      'skills.c6.h': 'Performance & Algoritmos',
      'skills.c7.h': 'Frontend',
      'skills.c8.h': 'Práticas',
      'skills.llm': 'Integrações LLM',
      'skills.pe': 'Prompt Engineering',
      'skills.tracing': 'Tracing Distribuído',
      'skills.metrics': 'Métricas de Engenharia',
      'skills.vec': 'Bancos Vetoriais',
      'skills.mt': 'Multithreading',
      'skills.alg': 'Algoritmos',
      'skills.ds': 'Estruturas de Dados',
      'skills.ga': 'Algoritmos Genéticos',
      'skills.dist': 'Sistemas Distribuídos',
      'skills.arch': 'Arquitetura de Software',
      'skills.cr': 'Code Review',
      'skills.tdd': 'Testes',

      'exp.tag': '// experiência',
      'exp.h': 'Experiência',
      'exp.p':
        'Experiência selecionada em engenharia backend, sistemas distribuídos, infraestrutura cloud e integrações com IA.',
      'exp.d0.h': 'Engenheiro de Software Sênior — Command|Link',
      'exp.d0.d': 'Mar 2025 — Atual',
      'exp.d0.loc': 'EUA · Remoto · Time de IA',
      'exp.d0.b1':
        'Conduzo decisões de arquitetura backend, métricas de engenharia e integrações entre serviços em uma plataforma distribuída de grande escala.',
      'exp.d0.b2':
        'Construo microsserviços Python/FastAPI com RabbitMQ, Azure Service Bus e Redis para comunicação assíncrona e orientada a eventos.',
      'exp.d0.b3':
        'Desenvolvo serviços de IA para reporting, busca vetorial, embeddings e fluxos de inteligência; projeto APIs GraphQL (principal) e REST entre serviços.',
      'exp.d0.b4':
        'Construo integrações inbound/outbound com Jira, ServiceNow e PostHog para gerenciamento de incidentes, ticketing e pipelines de analytics.',
      'exp.d0.b5':
        'Opero o ecossistema Azure (CosmosDB, Service Bus, Container Apps); automatizo deployments com Ansible (IaC) e CI/CD via GitHub Actions e Jenkins.',
      'exp.d0.b6':
        'Mantenho observabilidade com OpenTelemetry, Graylog e PostHog; acompanho métricas de engenharia e qualidade de software no time.',

      'exp.d1.h': 'Engenheiro de Software (Backend / Fullstack) — DocQ',
      'exp.d1.d': 'Set 2024 — Mar 2025',
      'exp.d1.loc': 'Dover, Delaware, EUA · Remoto',
      'exp.d1.b1': 'Microsserviços distribuídos em Python (FastAPI/Flask) sobre infraestrutura AWS.',
      'exp.d1.b2': 'Pipelines assíncronos com Redis + Celery (filas, workers, retries).',
      'exp.d1.b3': 'Integrações com IA/LLMs habilitando workflows inteligentes de documentos.',
      'exp.d1.b4': 'Otimização de performance no PostgreSQL, modelagem de schema, triggers e stored procedures.',
      'exp.d1.b5': 'Suporte frontend com Vue.js, React.js e Bootstrap.',

      'exp.d2.h': 'Desenvolvedor de Software — UPF FabSoft',
      'exp.d2.d': 'Jul 2022 — Set 2024',
      'exp.d2.loc': 'Universidade de Passo Fundo · Laboratório de Pesquisa',
      'exp.d2.b1': 'Algoritmo genético em C++ de alto desempenho para horários universitários (OpenMP, multithreading).',
      'exp.d2.b2': 'Estratégias de inicialização heurística melhoraram os resultados em ~50%.',
      'exp.d2.b3': 'Aplicação web Java (JSF / PrimeFaces / JasperReports) para gestão acadêmica.',
      'exp.d2.b4': 'Scripts Python para validação, reporting JSON estruturado e pipelines de automação em Bash.',
      'exp.d2.b5': 'Gerenciei bancos MySQL/MariaDB com grandes volumes de dados acadêmicos.',

      'exp.d3.h': 'Monitor & Instrutor — UPF',
      'exp.d3.d': 'Jan 2022 — Jul 2022',
      'exp.d3.loc': 'Universidade de Passo Fundo',
      'exp.d3.b1': 'Mentorei mais de 30 alunos em programação competitiva e no curso ZZ-On de desenvolvimento web.',
      'exp.d3.b2': 'Projetos PHP/JavaScript; pesquisa em ciência de dados com Python, Pandas, NumPy.',

      'proj.tag': '// projetos',
      'proj.h': 'Projetos Fundadores',
      'proj.p':
        'Produtos SaaS construídos do zero — cobrindo arquitetura backend, engenharia de IA, infraestrutura e entrega de produto ponta a ponta.',
      'proj.acordify.role': 'Engenheiro Fundador · Jan 2025 — Atual',
      'proj.acordify.desc':
        'SaaS B2B para gestão de contratos jurídicos e automação de processos judiciais. Geração e comparação de contratos, análise de risco, detecção de brechas, monitoramento de processos, transcrição de audiências com IA e workspaces colaborativos.',
      'proj.kyntra.role': 'Co-fundador & Engenheiro de Software',
      'proj.kyntra.desc':
        'SaaS de Red Team e segurança orientado por IA, para automação de pentest, exploração de vetores de ataque e workflows inteligentes. Construído ponta a ponta com um time pequeno — backend, agentes de IA, frontend, pagamentos, i18n e deploys em produção.',

      'cert.tag': '// certificações',
      'cert.h': 'Certificações',
      'cert.p': 'Certificados Udemy verificados com IDs de credencial.',

      'ev.tag': '// comunidade',
      'ev.h': 'Eventos & Competições',
      'ev.p': 'Envolvimento na comunidade e aprendizado contínuo.',
      'ev.c1.h': 'Programação Competitiva',
      'ev.c1.b1': 'OBI · Olimpíada Brasileira de Informática',
      'ev.c1.b2': 'SBC/ICPC América do Sul (múltiplas fases)',
      'ev.c1.b3': 'Treinamento e mentoria no Beecrowd',
      'ev.c2.h': 'Conferências',
      'ev.c2.b1': 'The Developers Conference (TDC) · São Paulo',
      'ev.c2.b2': 'Gramado Summit',
      'ev.c2.b3': 'Porto Alegre Summit',
      'ev.c3.h': 'Segurança & Comunidade',
      'ev.c3.b1': 'BSides BSB · Brasília',
      'ev.c3.b2': 'Meetups e workshops de tecnologia',
      'ev.c3.b3': 'Projetos de aprendizado contínuo',

      'ct.tag': '// contato',
      'ct.h': 'Vamos construir algo',
      'ct.p':
        'Aberto a vagas sêniores de backend, desafios de sistemas distribuídos e oportunidades em engenharia de IA — remoto ou relocação.',
      'ct.e.t': 'Email',
      'ct.l.t': 'LinkedIn',
      'ct.g.t': 'GitHub',
      'ct.note': 'Email é o canal mais rápido. Para amostras de código, veja os repositórios fixados no GitHub.',

      'footer.top': 'Voltar ao topo ↑',
    },
  };

  const flags = { en: '🇺🇸', pt: '🇧🇷' };


  const STORAGE_LANG = 'gt-lang';
  const STORAGE_THEME = 'gt-theme';

  const getLang = () => {
    const saved = localStorage.getItem(STORAGE_LANG);
    if (saved && i18n[saved]) return saved;
    const browser = (navigator.language || 'en').toLowerCase();
    return browser.startsWith('pt') ? 'pt' : 'en';
  };

  const getTheme = () => {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  let currentLang = getLang();
  let currentTheme = getTheme();


  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG, lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    const dict = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    const flag = document.getElementById('langFlag');
    if (flag) flag.textContent = flags[lang];
  }


  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem(STORAGE_THEME, theme);
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#fafbfc' : '#06070a');
  }


  function init() {
    applyLang(currentLang);
    applyTheme(currentTheme);


    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();


    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        applyLang(currentLang === 'en' ? 'pt' : 'en');
      });
    }


    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }


    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const open = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(open));
      });

      navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }


    const cvDropdown = document.getElementById('cvDropdown');
    const cvTrigger = document.getElementById('cvTrigger');
    if (cvDropdown && cvTrigger) {
      cvTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const open = cvDropdown.classList.toggle('open');
        cvTrigger.setAttribute('aria-expanded', String(open));
      });

      document.addEventListener('click', (e) => {
        if (!cvDropdown.contains(e.target)) {
          cvDropdown.classList.remove('open');
          cvTrigger.setAttribute('aria-expanded', 'false');
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          cvDropdown.classList.remove('open');
          cvTrigger.setAttribute('aria-expanded', 'false');
        }
      });
    }


    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
      );
      reveals.forEach((el) => observer.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('visible'));
    }


    const fab = document.getElementById('fabTop');
    if (fab) {
      const onScroll = () => {
        if (window.scrollY > 600) fab.classList.add('show');
        else fab.classList.remove('show');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      fab.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();