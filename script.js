(function () {
  "use strict";

  /* ============================================================
     CONTENT - edit anything in here to update the site.
     Nothing below this block needs to change when you edit text.
  ============================================================ */
  var DATA = {
    project1: {
      kind: "project",
      fullPage: true,
      flowImage: {
        src: "assets/filespace-flow.webp",
        alt: "Diagram of the workflow consolidation: the separate Workspace Main and Raw Data screens, with their problems, merge into one unified workspace covering search, filter and sort, results, double-click to view content, and preserve or export. About 60% fewer clicks in the core search to export journey.",
      },
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
      fullPage: true,
      flowShots: {
        title: "Find it.",
        titleRest: "Get it fast. Follow the order.",
        intro:
          "From a search to a doorstep: every screen shows how fast a book can arrive, and the community feeds straight back into buying.",
        rows: [
          {
            label: "Discover & choose",
            shots: [
              {
                src: "assets/bookrush/home.webp",
                label: "Home",
                note: "Instant-delivery banner, categories and books in stock near you.",
              },
              {
                src: "assets/bookrush/discover.webp",
                label: "Discover",
                note: "Search, quick filters, recent and trending searches.",
              },
              {
                src: "assets/bookrush/book-detail.webp",
                label: "Book details",
                note: "Buy or rent, with the delivery ETA shown up front.",
              },
              {
                src: "assets/bookrush/cart.webp",
                label: "Cart",
                note: "Grouped by delivery speed, with buy/rent switching.",
              },
            ],
          },
          {
            label: "Order, track & connect",
            shots: [
              {
                src: "assets/bookrush/checkout.webp",
                label: "Checkout",
                note: "Address, delivery option and payment in one screen.",
              },
              {
                src: "assets/bookrush/tracking.webp",
                label: "Order tracking",
                note: "Live six-stage timeline with a running ETA.",
              },
              {
                src: "assets/bookrush/community.webp",
                label: "Community",
                note: "For You, Following and Trending feeds, plus book clubs.",
              },
              {
                src: "assets/bookrush/profile.webp",
                label: "Profile",
                note: "Followers, saved books, reviews, posts and clubs.",
              },
            ],
          },
        ],
        band: {
          statValue: "66",
          statTitle: "Tests, green CI",
          statText: "lint · typecheck · tests · iOS bundle",
          points: [
            {
              title: "Delivery-aware",
              text: "Instant, standard or unavailable on every book.",
            },
            {
              title: "Buy or rent",
              text: "30-day rentals, set per title.",
            },
            {
              title: "Smart cart",
              text: "Split by delivery speed; instant only if every item qualifies.",
            },
            {
              title: "Live tracking",
              text: "A six-stage order timeline that keeps moving.",
            },
          ],
        },
      },
      eyebrow: "MOBILE APP",
      title: "BookRush - Quick-Commerce Book Discovery & Delivery App",
      timeframe: "2026 · Personal project",
      overview:
        "BookRush is a quick-commerce app for books, built with React Native, Expo and TypeScript. Find a book, see whether a store near you has it, buy it or rent it for 30 days, and get it delivered - instantly if it is stocked nearby, or on standard shipping if it is not.\n\nA reader community of posts, likes, comments and book clubs sits alongside the shopping flow. Posts reference books that link straight into the same detail screen search would reach, so the community feeds the core buying loop.",
      problem:
        "Delivery speed is what makes quick commerce work, yet it is often only clear at checkout. I wanted BookRush to answer one question from the first search result: can I have this book now, and how fast?\n\nThat meant making delivery availability part of every book on every screen, letting one basket mix instant and standard items without confusing the buyer, and supporting buy-or-rent - all without a backend, while keeping loading, empty and error states real and reachable.",
      solution: {
        intro:
          "Built the app as layered, testable frontend code, with an API-shaped mock service layer standing in for a backend.",
        bullets: [
          "Modelled delivery as a tagged union (INSTANT with an ETA, STANDARD, UNAVAILABLE) on every book, so one DeliveryAvailability component renders the same badge on cards, search results, book details and the cart - and the unavailable case cannot be forgotten.",
          "Built buy-or-rent into the cart line and grouped the cart by delivery speed: checkout offers instant delivery only when every item qualifies, quoted from the slowest item plus a picking buffer.",
          "Split state by who owns it: Zustand for the cart, session and likes (persisted with AsyncStorage), TanStack Query for anything server-shaped (books, feed, orders), and local state for UI-only concerns.",
          "Simulated order tracking as a six-stage state machine (CONFIRMED to DELIVERED) inside the order service, so progress continues while you are on another screen; the tracking screen polls every 2.5 seconds, the way it would against a real endpoint.",
          "Made the mock service layer behave like a network - latency, typed errors, and a Settings switch that forces failures - and routed every data-driven section through one AsyncBoundary, so loading, empty and error states are all reachable.",
          "Created a design-token UI kit (Text, Button, BottomSheet, Chip, Skeleton and more), a custom animated tab bar, and Reanimated micro-interactions that run on the UI thread.",
        ],
      },
      contribution:
        "Designed and built the app end to end: the product flows, the design tokens and UI kit, every screen (home, discover, book details, cart, checkout, order tracking, community, clubs and profile), the state architecture and the mock service layer.\n\nWrote the frontend system-design document covering layering, state ownership, data flow and trade-offs, along with 66 tests focused on logic that is easy to get wrong and expensive to notice - pricing, delivery eligibility, stock limits and the order state machine - plus the flows a user would actually hit.",
      contributionWide: true,
      tech: [
        "React Native",
        "Expo",
        "Expo Router",
        "TypeScript",
        "Zustand",
        "TanStack Query",
        "React Native Reanimated",
        "React Hook Form",
        "Zod",
        "AsyncStorage",
        "Jest",
        "React Native Testing Library",
        "GitHub Actions",
      ],
      outcome:
        "A complete, runnable app covering the whole loop: browse and search, delivery-aware book details, buy or rent, a mixed-speed cart, checkout, live order tracking, order history with one-tap reorder, and a reader community with book clubs - running on iOS, Android and the web through Expo.\n\nBacked by 66 tests across pricing, delivery eligibility, the cart store, services and the order clock, plus key components and flows, and a CI pipeline that runs lint, typecheck, tests and an iOS bundle on every push and pull request.",
      links: [
        {
          label: "Demo Video",
          url: "https://drive.google.com/file/d/1su515UAKEqHjjVXR-JU-542hb5B55prm/view?usp=sharing",
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

  /* Numbered phone-screen flow used as a project's lead graphic */
  function renderShots(f) {
    var n = 0;
    var rows = f.rows
      .map(function (row) {
        var shots = row.shots
          .map(function (sh) {
            n += 1;
            return (
              '<figure class="shot">' +
              '<span class="shot__step">' +
              n +
              "</span>" +
              '<div class="shot__frame"><img src="' +
              esc(sh.src) +
              '" alt="' +
              esc("BookRush " + sh.label + " screen") +
              '" loading="lazy" /></div>' +
              '<figcaption><span class="shot__title">' +
              esc(sh.label) +
              '</span><span class="shot__note">' +
              esc(sh.note) +
              "</span></figcaption></figure>"
            );
          })
          .join("");
        return (
          '<p class="shots__row-label">' +
          esc(row.label) +
          "</p>" +
          '<div class="shots__row">' +
          shots +
          "</div>"
        );
      })
      .join("");

    var b = f.band;
    var points = b.points
      .map(function (p) {
        return (
          '<li class="shots__point"><strong>' +
          esc(p.title) +
          "</strong><span>" +
          esc(p.text) +
          "</span></li>"
        );
      })
      .join("");

    return (
      '<figure class="shots" aria-label="' +
      esc(f.title + " " + f.titleRest) +
      '"><div class="shots__canvas">' +
      '<h3 class="shots__title"><strong>' +
      esc(f.title) +
      "</strong> " +
      esc(f.titleRest) +
      "</h3>" +
      '<p class="shots__intro">' +
      esc(f.intro) +
      "</p>" +
      rows +
      '<div class="shots__band">' +
      '<div class="shots__stat"><span class="shots__stat-value">' +
      esc(b.statValue) +
      '</span><span class="shots__stat-text"><strong>' +
      esc(b.statTitle) +
      "</strong>" +
      esc(b.statText) +
      "</span></div>" +
      '<ul class="shots__points">' +
      points +
      "</ul></div></div></figure>"
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

    var flowHtml = d.flowShots
      ? renderShots(d.flowShots)
      : d.flowImage
      ? '<figure class="flow-figure">' +
        '<a class="flow-figure__link" href="' +
        esc(d.flowImage.src) +
        '" target="_blank" rel="noopener">' +
        '<img src="' +
        esc(d.flowImage.src) +
        '" alt="' +
        esc(d.flowImage.alt) +
        '" /></a></figure>'
      : "";

    var cards = {
      overview:
        '<section class="card"><h3>Overview</h3>' +
        paragraphs(d.overview) +
        "</section>",
      problem:
        '<section class="card"><h3>Problem</h3>' +
        paragraphs(d.problem) +
        "</section>",
      solution:
        '<section class="card' +
        solutionWide +
        '"><h3>Solution</h3>' +
        solutionHtml(d.solution) +
        "</section>",
      contribution:
        '<section class="card' +
        contributionWide +
        '"><h3>My Contribution</h3>' +
        paragraphs(d.contribution) +
        "</section>",
      tech:
        '<section class="card card--wide"><h3>Technologies / Tools</h3>' +
        tagList(d.tech) +
        "</section>",
      outcome:
        '<section class="card"><h3>Outcome / Results</h3>' +
        paragraphs(d.outcome) +
        "</section>",
      links:
        '<section class="card"><h3>Links</h3>' +
        linksHtml +
        "</section>",
    };

    /* Projects with a flow graphic lead with it, then Technologies, then the
       usual cards; every other project keeps the original order. */
    var order = d.flowImage || d.flowShots
      ? ["tech", "overview", "problem", "solution", "contribution", "outcome", "links"]
      : ["overview", "problem", "solution", "contribution", "tech", "outcome", "links"];

    return (
      '<article class="page page--project">' +
      (d.fullPage ? "" : backBtn()) +
      pageHead(d.eyebrow, d.title) +
      '<p class="page__timeframe">' +
      esc(d.timeframe) +
      "</p>" +
      (d.note ? '<p class="project-note">' + esc(d.note) + "</p>" : "") +
      flowHtml +
      '<div class="page__grid">' +
      order
        .map(function (key) {
          return cards[key];
        })
        .join("") +
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

    var label = esc(def.title || id);
    pageRoot.innerHTML = def.fullPage
      ? '<div class="fullpage" role="region" aria-label="' +
        label +
        '">' +
        '<div class="fullpage__bar"><div class="fullpage__inner">' +
        backBtn() +
        "</div></div>" +
        '<div class="fullpage__body"><div class="fullpage__inner">' +
        renderer(def) +
        "</div></div></div>"
      : '<div class="modal-backdrop" data-modal-backdrop>' +
        '<div class="modal-dialog" role="dialog" aria-modal="true" aria-label="' +
        label +
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
