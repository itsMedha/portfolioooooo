(function () {
  "use strict";

  /* ============================================================
     CONTENT - edit anything in here to update the site.
     Nothing below this block needs to change when you edit text.
  ============================================================ */
  var DATA = {
    project1: {
      kind: "project",
      eyebrow: "WORKFLOW CONSOLIDATION",
      title: "FileSpace — Unified Workspace, Raw Data & Export UI",
      timeframe: "2026",
      overview:
        "A unified FileSpace workspace for an enterprise analytics platform, merging previously separate Workspace Main and Raw Data screens into one search → preview → export journey with backend-driven configurable exports.",
      problem:
        "Search, filtering, raw-data browsing, file/mail preview and export lived on disconnected screens, forcing users to navigate away and lose search context. Export columns were hardcoded, so users couldn't control what a raw-data export contained.",
      solution:
        "Restructured the information architecture in Figma first, then built the consolidated experience in React/TypeScript: a unified search-preview toolbar, contextual filters, file/mail detail cards, and a virtualized Material React Table with server-side search, sort, filter and pagination. Export fields are now fetched from the API, searchable, and selectable per export.",
      contribution:
        "Designed the consolidated workflow in Figma and implemented it end to end — the configurable export-fields feature (dynamic field discovery, searchable checkbox selection, localized labels, file vs mail and JSON/Parquet handling), the FileDetailsOnlyCard / MailDetailsOnlyCard preview flows with sanitized HTML rendering, and the state architecture split across Redux, Formik, React Hook Form, React Query and local state. Kept every existing consumer, permission and feature flag working while integrating with legacy JavaScript/AJAX infrastructure.",
      tech: [
        "React",
        "TypeScript",
        "JavaScript",
        "Redux",
        "TanStack Query",
        "Formik",
        "Yup",
        "React Hook Form",
        "Material UI",
        "Material React Table",
        "REST APIs",
        "AJAX",
        "CSS Modules",
        "Figma",
      ],
      outcome:
        "Reduced clicks in the core search-to-export path by ~60% by consolidating search, filtering, preview and export into a single screen, and cut refresh time by removing the full-page reloads the old multi-screen flow required. Exports became user-configurable instead of fixed-column, with the consolidated experience validated through integration and regression testing across search, filtering, preview, selection, export and export-history flows.",
      links: [],
    },

    project2: {
      kind: "project",
      eyebrow: "FULL-STACK MONOREPO",
      title: "BookRush - Book Discovery, Delivery & Reader Community Platform",
      timeframe: "2026 · Personal project",
      overview:
        "A book discovery, quick-commerce delivery, and reader-community platform built as a production-shaped monorepo: a NestJS + Prisma API, a Vite/React web app, and a React Native/Expo mobile app, all sharing one real-time order-tracking architecture and one set of domain types.\n\nThe core loop is Discover → Read → Connect: find a book through search or personalized recommendations, get it delivered instantly from a nearby fulfillment center (or via standard shipping), then discuss it with other readers through posts, reviews, and book clubs.",
      problem:
        "The goal was to build something that feels like an actual consumer app for book lovers - editorial, warm, commerce-capable - rather than a generated CRUD demo, while keeping three separate clients (web, mobile, and future integrations) consistent against one backend.\n\nThat meant getting commerce logic (pricing, delivery eligibility, stock) fully server-authoritative, keeping order status genuinely real-time across clients, and sharing domain types and validation rules across the whole monorepo instead of duplicating them per app.",
      solution: {
        intro:
          "Structured the codebase as an npm workspaces monorepo with shared packages for domain types and zod validation, then built the backend and both clients on top of that shared contract.",
        bullets: [
          "Built the NestJS + Prisma API with feature modules (auth, books, cart, orders, realtime, community, clubs) so pricing, delivery eligibility, and stock decrements all live in unit-tested backend services - never trusted from the client.",
          "Implemented a quick-commerce delivery simulator: real inventory-per-fulfillment-center data plus haversine distance decides INSTANT vs. STANDARD vs. UNAVAILABLE per book, per location.",
          "Added live order tracking over a Socket.IO /orders namespace, with an in-process simulator pushing an order through CONFIRMED → PREPARING → PACKED → PICKED UP → OUT FOR DELIVERY → DELIVERED to subscribed clients.",
          "Implemented JWT auth with access/refresh rotation and argon2 password hashing, shared identically across the web and mobile clients.",
          "Built the community layer (posts, likes, comments, follows, For You/Following/Trending feeds) and book clubs (join/leave, current book, discussions) on the same API.",
          "Used TanStack Query + Zustand on both web and mobile for server/client state, with FlashList and MMKV on the mobile side for large lists and fast persisted storage.",
        ],
      },
      contribution:
        "Designed and built the project end-to-end across all three apps: the NestJS/Prisma backend, the Vite/React web client, and the React Native/Expo mobile client, plus the shared-types and validation packages that keep them in sync.\n\nWrote the backend unit tests (pricing, geo distance, delivery availability, full auth lifecycle) and set up per-app, path-filtered CI on GitHub Actions.",
      contributionWide: true,
      tech: [
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "Socket.IO",
        "React",
        "Vite",
        "React Native",
        "Expo",
        "TypeScript",
        "TanStack Query",
        "Zustand",
        "Zod",
        "Jest",
        "Vitest",
        "GitHub Actions",
      ],
      outcome:
        "Backend covered by 18 Jest unit tests (pricing, geo distance, delivery availability, auth lifecycle incl. refresh-token rotation) plus a clean tsc/eslint build; web covered by 10 Vitest tests plus a clean production build; mobile typechecks and lints with zero errors and zero any usage.\n\nThe full end-to-end demo flow - register → search → cart → checkout → live order tracking - was verified by hand in a real browser session.",
      links: [
        {
          label: "Demo",
          url: "https://drive.google.com/file/d/1wOb5l8qR8Py-DGNu930T02ylKOuXyFWq/view?usp=sharing",
        },
      ],
    },

    project3: {
      kind: "uxgallery",
      eyebrow: "UI/UX PROJECTS",
      title: "UI/UX Projects",
      caseStudies: [
        {
          title: "I'm Beside You - Website UX Optimization",
          blurb:
            "Redesigned a corporate website to make its vision and product easier to understand, based on usability research with real testers. Owned research, wireframing, interface design, and development.",
          link: "https://medhascollege.wixsite.com/website/i-m-beside-you?rc=test-site",
        },
        {
          title: "Messin - Reducing Food Wastage at IIT Patna",
          blurb:
            "A conceptual mobile app tackling mess food wastage on campus - from empathy research with mess staff and students through to wireframes, visual design, and a working prototype.",
          link: "https://medhascollege.wixsite.com/website/messin?rc=test-site",
        },
      ],
    },

    skills: {
      kind: "skills",
      groups: [
        {
          title: "Languages",
          items: ["Java", "Python", "C++", "JavaScript", "TypeScript"],
        },
        {
          title: "Frontend",
          items: [
            "React",
            "HTML5",
            "CSS3",
            "Flexbox",
            "CSS Grid",
            "Ext JS",
            "Bootstrap",
            "Tailwind",
            "Accessibility (WCAG 2.1, ARIA)",
          ],
        },
        {
          title: "State & UI",
          items: ["Redux", "Context API", "jsTree", "DataTables"],
        },
        {
          title: "Backend & Data",
          items: [
            "Node.js",
            "SQL (PostgreSQL/MySQL)",
            "Database Management Systems",
          ],
        },
        {
          title: "Tools & Workflow",
          items: [
            "VS Code",
            "IntelliJ IDEA",
            "Maven",
            "NPM",
            "Yarn",
            "Jira",
            "Postman",
          ],
        },
        {
          title: "Core CS",
          items: [
            "Data Structures & Algorithms",
            "OOP",
            "System Design",
            "Pattern Recognition",
          ],
        },
        {
          title: "Design / Creative",
          items: [
            "Figma",
            "Adobe Photoshop",
            "User Research",
            "Wireframing",
            "Prototyping",
          ],
        },
      ],
    },

    experience: {
      kind: "experience",
      roles: [
        {
          role: "Software Engineer",
          org: "ZL Technologies",
          dates: "September 2024 – Present",
          bullets: [
            "Own end-to-end delivery of scoped UI features for an enterprise data management platform using JavaScript (ES6), HTML5, CSS3, Ext JS, and React-based patterns, meeting sprint deadlines independently.",
            "Modernized legacy UI for accessibility by refactoring ES6 and Ext JS components to WCAG 2.1 standards; added ARIA roles/labels and resolved 400+ WAVE issues, improving accessibility compliance by 80%.",
            "Built and maintained schema-driven UI frameworks enabling dynamic form generation, validation, and configuration for large enterprise customers (e.g., JPMorgan Chase).",
            "Developed data-intensive UI components (tables, filters, modals, dashboards) using DataTables, Bootstrap, and modular JS, optimizing rendering and interaction for large datasets.",
            "Managed a 4-member team and collaborated closely with UX, backend, and QA teams on API integration, i18n (English–Japanese), debugging, and code reviews, contributing to releases and a 22% reduction in regression defects.",
          ],
        },
      ],
      education: [
        {
          degree: "B.Tech, Electrical and Electronics Engineering",
          org: "Indian Institute of Technology (IIT) Patna",
          dates: "July 2020 – May 2024",
        },
      ],
      achievements: [
        "1st Position, E-Summit UI/UX Hackathon, IIT Patna (100+ participants)",
        "Java Certification - Udemy, 2024",
      ],
    },

    sidequests: {
      kind: "sidequests",
      artReveriez: {
        desc: "Co-founded Art Reveriez, specializing in hand-painted customized polaroids, bookmarks, and clothing. Led creative direction of the brand identity and graphics, and ran stall operations - 55+ orders, 500+ customers engaged, ₹13K+ revenue in 3 days.",
        instagram: "https://www.instagram.com/art.reveriez?igshid=MTRncGd3dHFvN25tOA==",
      },
      yearbook: {
        desc: "Lead Designer for the IIT Patna yearbook - directed a Netflix-inspired design with a 5-member team, covering flex banners, the photo booth, and table pieces, from concept through to print production. Worked directly with printing agencies to keep everything on schedule.",
        drive: "https://drive.google.com/drive/folders/1BWawbjtp0XvqIHyzzJ3xlI9t2hsLLUaq?usp=sharing",
      },
      ducks: {
        desc: "A daily ritual since January 6, 2026: I visit and photograph the same 4 ducks at a nearby pond. One of them had 5 ducklings - I've documented their whole journey. Only 2 made it to their gawky teenage phase alongside the original 4. The local caretaker (who I can't fully understand - he speaks Telugu) says the rest were lost to overheating, a snake, and - reportedly - a rabbit, which still doesn't seem physically possible.",
        drive: null /* TODO: add Google Drive link to duck photos/clips */,
      },
    },
  };

  var FOLDERS = {
    project1: DATA.project1,
    project2: DATA.project2,
    project3: DATA.project3,
    skills: DATA.skills,
    experience: DATA.experience,
    sidequests: DATA.sidequests,
  };

  var desktop = document.getElementById("desktop");
  var pageRoot = document.getElementById("page-root");
  var charImgs = {
    center: document.querySelector(".character__img--center"),
    left: document.querySelector(".character__img--left"),
    right: document.querySelector(".character__img--right"),
  };

  /* ----------------------------------------------------------
     CHARACTER GAZE
     The gaze follows the cursor relative to one padded rectangle
     around the character, not the folder buttons.
  ---------------------------------------------------------- */

  function setGaze(direction) {
    charImgs.center.classList.toggle("is-active", direction === "center");
    charImgs.left.classList.toggle("is-active", direction === "left");
    charImgs.right.classList.toggle("is-active", direction === "right");
  }

  function refreshGaze(clientX, clientY) {
    var bounds = document.querySelector(".character").getBoundingClientRect();
    var paddingX = Math.max(28, bounds.width * 0.14);
    var paddingY = Math.max(18, bounds.height * 0.08);
    var zoneLeft = bounds.left - paddingX;
    var zoneRight = bounds.right + paddingX;
    var zoneTop = bounds.top - paddingY;
    var zoneBottom = bounds.bottom + paddingY;

    if (
      clientX >= zoneLeft &&
      clientX <= zoneRight &&
      clientY >= zoneTop &&
      clientY <= zoneBottom
    ) {
      setGaze("center");
    } else if (clientX < zoneLeft) {
      setGaze("left");
    } else if (clientX > zoneRight) {
      setGaze("right");
    }
  }

  document.addEventListener("pointermove", function (event) {
    if (desktop.classList.contains("is-active"))
      refreshGaze(event.clientX, event.clientY);
  });

  window.addEventListener("resize", function () {
    if (desktop.classList.contains("is-active")) setGaze("center");
  });

  document.querySelectorAll(".folder").forEach(function (btn) {
    var side = btn.getAttribute("data-side");
    var target = btn.getAttribute("data-target");

    btn.addEventListener("focus", function () {
      setGaze(side);
    });
    btn.addEventListener("blur", function () {
      setGaze("center");
    });
    btn.addEventListener("click", function () {
      navigateTo(target);
    });
  });

  /* ----------------------------------------------------------
     SMALL HTML HELPERS
  ---------------------------------------------------------- */
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }
  function tagList(items) {
    return (
      '<ul class="tag-list">' +
      items
        .map(function (i) {
          return '<li class="tag">' + esc(i) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }
  function paragraphs(text) {
    return text
      .split(/\n\s*\n/)
      .map(function (p) {
        return '<p class="placeholder">' + esc(p) + "</p>";
      })
      .join("");
  }
  function bulletList(items) {
    return (
      '<ul class="role-bullets">' +
      items
        .map(function (i) {
          return "<li>" + esc(i) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }
  function solutionHtml(solution) {
    if (typeof solution === "string") return paragraphs(solution);
    return paragraphs(solution.intro) + bulletList(solution.bullets);
  }
  function backBtn() {
    return '<button class="back-btn" data-back><span class="back-btn__icon">←</span> back to desktop</button>';
  }
  function pageHead(eyebrow, title) {
    return (
      '<div class="page__head">' +
      '<span class="page__folder-icon"><img src="assets/folder2.png" alt="" /></span>' +
      '<div><p class="page__eyebrow">' +
      esc(eyebrow) +
      '</p><h2 class="page__title">' +
      esc(title) +
      "</h2></div>" +
      "</div>"
    );
  }

  /* ----------------------------------------------------------
     PAGE RENDERERS
  ---------------------------------------------------------- */
  function renderProject(d) {
    var linksHtml =
      d.links && d.links.length
        ? d.links
            .map(function (l) {
              return (
                '<a class="ext-link-btn" href="' +
                esc(l.url) +
                '" target="_blank" rel="noopener">' +
                esc(l.label) +
                " ↗</a>"
              );
            })
            .join("")
        : '<p class="placeholder">' +
          esc(
            d.noLinksNote ||
              "Internal enterprise project — source code and live demo are confidential."
          ) +
          "</p>";

    var solutionWide = typeof d.solution === "object" ? " card--wide" : "";
    var contributionWide = d.contributionWide ? " card--wide" : "";

    return (
      '<article class="page page--project">' +
      backBtn() +
      pageHead(d.eyebrow, d.title) +
      '<p class="page__timeframe">' +
      esc(d.timeframe) +
      "</p>" +
      (d.note ? '<p class="project-note">' + esc(d.note) + "</p>" : "") +
      '<div class="page__grid">' +
      '<section class="card"><h3>Overview</h3>' +
      paragraphs(d.overview) +
      "</section>" +
      '<section class="card"><h3>Problem</h3>' +
      paragraphs(d.problem) +
      "</section>" +
      '<section class="card' +
      solutionWide +
      '"><h3>Solution</h3>' +
      solutionHtml(d.solution) +
      "</section>" +
      '<section class="card' +
      contributionWide +
      '"><h3>My Contribution</h3>' +
      paragraphs(d.contribution) +
      "</section>" +
      '<section class="card card--wide"><h3>Technologies / Tools</h3>' +
      tagList(d.tech) +
      "</section>" +
      '<section class="card"><h3>Outcome / Results</h3>' +
      paragraphs(d.outcome) +
      "</section>" +
      '<section class="card"><h3>Links</h3>' +
      linksHtml +
      "</section>" +
      "</div></article>"
    );
  }

  function renderSkills(d) {
    var cards = d.groups
      .map(function (g) {
        return (
          '<section class="card"><h3>' +
          esc(g.title) +
          "</h3>" +
          tagList(g.items) +
          "</section>"
        );
      })
      .join("");
    return (
      '<article class="page page--skills">' +
      backBtn() +
      pageHead("FOLDER", "Skills") +
      '<div class="page__grid page__grid--skills">' +
      cards +
      "</div></article>"
    );
  }

  function renderExperience(d) {
    var roles = d.roles
      .map(function (r) {
        return (
          '<div class="timeline-item">' +
          '<p class="timeline-item__role">' +
          esc(r.role) +
          " — " +
          esc(r.org) +
          "</p>" +
          '<p class="timeline-item__meta">' +
          esc(r.dates) +
          "</p>" +
          '<ul class="role-bullets">' +
          r.bullets
            .map(function (b) {
              return "<li>" + esc(b) + "</li>";
            })
            .join("") +
          "</ul>" +
          "</div>"
        );
      })
      .join("");

    var edu = d.education
      .map(function (e) {
        return (
          '<div class="timeline-item">' +
          '<p class="timeline-item__role">' +
          esc(e.degree) +
          "</p>" +
          '<p class="timeline-item__meta">' +
          esc(e.org) +
          " · " +
          esc(e.dates) +
          "</p>" +
          "</div>"
        );
      })
      .join("");

    return (
      '<article class="page page--experience">' +
      backBtn() +
      pageHead("FOLDER", "Experience / Education") +
      '<div class="page__grid page__grid--timeline">' +
      '<section class="card"><h3>Professional Experience</h3>' +
      roles +
      "</section>" +
      '<section class="card"><h3>Education</h3>' +
      edu +
      "</section>" +
      '<section class="card"><h3>Achievements &amp; Certifications</h3>' +
      tagList(d.achievements) +
      "</section>" +
      "</div></article>"
    );
  }

  function renderSideQuests(d) {
    var igLink = d.artReveriez.instagram
      ? '<a class="ext-link-btn" href="' +
        esc(d.artReveriez.instagram) +
        '" target="_blank" rel="noopener">Instagram ↗</a>'
      : '<p class="pending-note">Instagram link coming soon</p>';

    var yearbookLink = d.yearbook.drive
      ? '<a class="ext-link-btn" href="' +
        esc(d.yearbook.drive) +
        '" target="_blank" rel="noopener">View Glimpses ↗</a>'
      : '<p class="pending-note">Drive link coming soon</p>';

    var duckLink = d.ducks.drive
      ? '<a class="ext-link-btn" href="' +
        esc(d.ducks.drive) +
        '" target="_blank" rel="noopener">See All Photos ↗</a>'
      : '<p class="pending-note">Drive link coming soon</p>';

    return (
      '<article class="page page--sidequests">' +
      backBtn() +
      pageHead("FOLDER", "Side Quests") +
      '<div class="page__grid" style="margin-top:18px;">' +
      '<section class="card"><h3>Art Reveriez</h3><p class="placeholder">' +
      esc(d.artReveriez.desc) +
      "</p>" +
      igLink +
      "</section>" +
      '<section class="card"><h3>IITP Yearbook - Lead Designer</h3><p class="placeholder">' +
      esc(d.yearbook.desc) +
      "</p>" +
      yearbookLink +
      "</section>" +
      '<section class="card"><h3>The Ducks</h3><p class="placeholder">' +
      esc(d.ducks.desc) +
      "</p>" +
      duckLink +
      "</section>" +
      "</div>" +
      "</article>"
    );
  }

  function renderUxGallery(d) {
    var cards = d.caseStudies
      .map(function (c) {
        return (
          '<section class="card case-study-card">' +
          "<h3>" +
          esc(c.title) +
          "</h3>" +
          '<p class="placeholder">' +
          esc(c.blurb) +
          "</p>" +
          '<a class="ext-link-btn" href="' +
          esc(c.link) +
          '" target="_blank" rel="noopener">View Case Study ↗</a>' +
          "</section>"
        );
      })
      .join("");

    return (
      '<article class="page page--sidequests">' +
      backBtn() +
      pageHead(d.eyebrow, d.title) +
      '<div class="page__grid page__grid--quests-wide">' +
      cards +
      "</div></article>"
    );
  }

  var RENDERERS = {
    project: renderProject,
    skills: renderSkills,
    experience: renderExperience,
    sidequests: renderSideQuests,
    uxgallery: renderUxGallery,
  };

  /* ----------------------------------------------------------
     ROUTING
  ---------------------------------------------------------- */
  function navigateTo(id) {
    var def = FOLDERS[id];
    var renderer = def && RENDERERS[def.kind];
    if (!renderer) return;

    pageRoot.innerHTML =
      '<div class="modal-backdrop" data-modal-backdrop>' +
      '<div class="modal-dialog" role="dialog" aria-modal="true" aria-label="' +
      esc(def.title || id) +
      '">' +
      renderer(def) +
      "</div></div>";

    pageRoot.classList.add("is-active");
    document.body.classList.add("is-page-open");
    pageRoot.scrollTop = 0;

    var back = pageRoot.querySelector("[data-back]");
    if (back) back.addEventListener("click", goHome);
    var backdrop = pageRoot.querySelector("[data-modal-backdrop]");
    if (backdrop)
      backdrop.addEventListener("click", function (event) {
        if (event.target === backdrop) goHome();
      });

    history.pushState({ view: id }, "", "#" + id);
  }

  function goHome() {
    pageRoot.innerHTML = "";
    pageRoot.classList.remove("is-active");
    document.body.classList.remove("is-page-open");
    setGaze("center");
    if (location.hash)
      history.pushState({ view: "home" }, "", location.pathname);
  }

  window.addEventListener("popstate", function (e) {
    var view = e.state && e.state.view;
    if (!view || view === "home") goHome();
    else navigateTo(view);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && pageRoot.classList.contains("is-active"))
      goHome();
  });

  function initFromHash() {
    var id = location.hash ? location.hash.slice(1) : "";
    if (id && FOLDERS[id]) navigateTo(id);
  }

  initFromHash();
})();
