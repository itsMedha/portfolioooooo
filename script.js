(function () {
  "use strict";

  /* ============================================================
     CONTENT - edit anything in here to update the site.
     Nothing below this block needs to change when you edit text.
  ============================================================ */
  var DATA = {
    project1: {
      kind: "project",
      eyebrow: "BACKEND PROJECT",
      title: "User Sync - Distributed Directory Synchronization",
      timeframe: "Nov 2024 – May 2025",
      overview:
        "A Java backend service responsible for synchronizing enterprise users from external directory providers such as Microsoft 365 and Google Directory into the platform using Microsoft Graph APIs, handling large-scale enterprise user synchronization.",
      problem:
        "The synchronization process was sequential, with mail server agents being processed one by one, making large enterprise syncs slow.\n\nDuring optimization, I also identified additional performance bottlenecks around memory usage, API pagination, and excessive logging.",
      solution: {
        intro:
          "Traced the synchronization flow and redesigned the processing to improve throughput and scalability.",
        bullets: [
          "Replaced sequential agent processing with bounded parallel execution using a 3-thread pool through the existing Parallel Runner.",
          "While testing the parallel implementation, identified a Java Heap OutOfMemoryError for large user datasets.",
          "Investigated the memory issue and found that the system was materializing the entire List<User> in memory before processing.",
          "Refactored the processing model to use lazy, paginated iteration, allowing users to be processed in batches instead of accumulating the complete dataset in memory.",
          "Optimized Microsoft Graph API pagination by increasing the fetch size from the default 100 to 999 users per request, reducing network round trips.",
          "Reduced unnecessary logging by moving high-volume request and user-object logs to DEBUG, lowering logging I/O overhead.",
        ],
      },
      contribution:
        "Worked hands-on with the existing Java backend to trace execution flow, debug performance issues, identify bottlenecks and implement targeted optimizations.\n\nI analyzed the flow from the synchronization trigger through mail server agents → external directory APIs → temporary Lucene index → change processing → database, gaining a deeper understanding of the existing codebase and its design patterns.",
      tech: [
        "Java",
        "Multithreading",
        "Thread Pools",
        "Concurrency",
        "Microsoft Graph APIs",
        "REST APIs",
        "SQL",
        "Structured Logging",
      ],
      outcome:
        "Reduced synchronization bottlenecks by approximately 40–50% by combining bounded parallel processing, memory-efficient user processing, API pagination optimization and reduced logging overhead.\n\nThe optimization also eliminated the large in-memory accumulation that was causing Heap OOM issues for large enterprise datasets.",
      links: [],
    },

    project2: {
      kind: "project",
      eyebrow: "DATA-INTENSIVE UI",
      title: "Record Category Management - Hierarchical Data UI",
      timeframe: "Sept 2024 – Dec 2024",
      overview:
        "An interactive hierarchical category tree for an enterprise records-management admin panel, letting admins organize deeply nested record categories in real time.",
      problem:
        "Admins needed to create, edit, reorder, and delete deeply nested categories without losing context or triggering full page reloads, while keeping the UI in sync with the backend at all times.",
      solution:
        "Built the tree interface with jsTree on top of Ext JS, wired to REST APIs via AJAX for create, edit, select, and delete actions, with dynamic forms bound to whichever node was selected and validated before submission.",
      contribution:
        "Engineered the tree UI and its state handling, built the create/edit forms with validation, and optimized re-render cycles for large trees.",
      tech: [
        "JavaScript",
        "Ext JS",
        "jsTree",
        "HTML",
        "CSS",
        "REST APIs",
        "AJAX",
      ],
      outcome:
        "Improved admin task efficiency by 35% and cut UI refresh cycles by 40%, with changes persisting immediately between frontend state and the backend store.",
      links: [],
    },

    project3: {
      kind: "project",
      eyebrow: "MOBILE UI CONCEPT",
      title: "Zipp - Quick-Commerce Delivery App",
      timeframe: "Personal project",
      overview:
        "A concept quick-commerce app in the spirit of Blinkit and Zomato - built to explore the interaction patterns that define fast, high-frequency mobile shopping: live order tracking, instant cart feedback, and near-zero checkout friction.",
      problem:
        "How might a quick-commerce app reduce decision fatigue and checkout friction for users who are ordering in a hurry, often on the go?",
      solution:
        "Designed a modular component system in Figma - skeleton loaders, a persistent floating cart, gesture-based quantity controls, and a live order-tracking map - then built it as a working React Native prototype with smooth, physics-based micro-interactions.",
      contribution:
        "End-to-end concept, UI/UX design in Figma, and the React Native implementation.",
      tech: [
        "React Native",
        "TypeScript",
        "Figma",
        "React Native Reanimated",
        "REST + WebSocket (live tracking)",
      ],
      outcome:
        "A fully clickable prototype demonstrating current mobile interaction patterns used at companies like Blinkit, Zomato, and Uber - skeleton loading states, live tracking, and gesture-driven cart management.",
      note: "Concept project - built to demonstrate current mobile UI patterns in demand at quick-commerce companies.",
      links: [],
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
      uxCaseStudies: [
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
      artReveriez: {
        desc: "Co-founded Art Reveriez, specializing in hand-painted customized polaroids, bookmarks, and clothing. Led creative direction of the brand identity and graphics, and ran stall operations - 55+ orders, 500+ customers engaged, ₹13K+ revenue in 3 days.",
        instagram:
          null /* TODO: add Instagram URL, e.g. "https://instagram.com/artreveriez" */,
      },
      yearbook: {
        desc: "Lead Designer for the IIT Patna yearbook - directed a Netflix-inspired design with a 5-member team, covering flex banners, the photo booth, and table pieces, from concept through to print production. Worked directly with printing agencies to keep everything on schedule.",
        drive: null /* TODO: add Google Drive link to yearbook glimpses */,
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
        : '<p class="placeholder">Internal enterprise project — source code and live demo are confidential.</p>';

    var solutionWide = typeof d.solution === "object" ? " card--wide" : "";

    return (
      '<article class="page page--project">' +
      backBtn() +
      pageHead(d.eyebrow, d.title) +
      '<p class="page__timeframe">' +
      esc(d.timeframe) +
      "</p>" +
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
      '<section class="card"><h3>My Contribution</h3>' +
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
    var uxCards = d.uxCaseStudies
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
      '<div class="page__grid page__grid--quests-wide">' +
      uxCards +
      "</div>" +
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

  var RENDERERS = {
    project: renderProject,
    skills: renderSkills,
    experience: renderExperience,
    sidequests: renderSideQuests,
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
