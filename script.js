(function () {
  "use strict";

  /* ============================================================
     CONTENT — edit anything in here to update the site.
     Nothing below this block needs to change when you edit text.
  ============================================================ */
  var DATA = {

    project1: {
      kind: "project",
      eyebrow: "BACKEND PROJECT",
      title: "User Sync — Distributed Directory Synchronization",
      timeframe: "Nov 2024 – May 2025",
      overview: "A distributed backend service that synchronizes enterprise user data from external directory providers into ZL Technologies' enterprise data management platform, handling around 10,000 user updates per run.",
      problem: "Directory sync jobs ran sequentially and could take a long time to complete. Long-running background jobs had no resilience to transient failures, and partial failures were hard to diagnose or safely re-run.",
      solution: "Redesigned the sync pipeline to run in parallel using thread pools and concurrent processing. Added idempotency checks, automatic retries, and structured logging so failures could be traced and safely re-run without duplicating work.",
      contribution: "Designed and implemented the parallelized sync architecture end-to-end, including the retry and idempotency layer for long-running jobs.",
      tech: ["Java", "Multithreading", "Distributed Systems", "SQL", "Thread Pools", "Structured Logging"],
      outcome: "Reduced end-to-end sync time by 45% and significantly improved the robustness of long-running background jobs.",
      links: []
    },

    project2: {
      kind: "project",
      eyebrow: "DATA-INTENSIVE UI",
      title: "Record Category Management — Hierarchical Data UI",
      timeframe: "Sept 2024 – Dec 2024",
      overview: "An interactive hierarchical category tree for an enterprise records-management admin panel, letting admins organize deeply nested record categories in real time.",
      problem: "Admins needed to create, edit, reorder, and delete deeply nested categories without losing context or triggering full page reloads, while keeping the UI in sync with the backend at all times.",
      solution: "Built the tree interface with jsTree on top of Ext JS, wired to REST APIs via AJAX for create, edit, select, and delete actions, with dynamic forms bound to whichever node was selected and validated before submission.",
      contribution: "Engineered the tree UI and its state handling, built the create/edit forms with validation, and optimized re-render cycles for large trees.",
      tech: ["JavaScript", "Ext JS", "jsTree", "HTML", "CSS", "REST APIs", "AJAX"],
      outcome: "Improved admin task efficiency by 35% and cut UI refresh cycles by 40%, with changes persisting immediately between frontend state and the backend store.",
      links: []
    },

    project3: {
      kind: "project",
      eyebrow: "MOBILE UI CONCEPT",
      title: "Zipp — Quick-Commerce Delivery App",
      timeframe: "Personal project",
      overview: "A concept quick-commerce app in the spirit of Blinkit and Zomato — built to explore the interaction patterns that define fast, high-frequency mobile shopping: live order tracking, instant cart feedback, and near-zero checkout friction.",
      problem: "How might a quick-commerce app reduce decision fatigue and checkout friction for users who are ordering in a hurry, often on the go?",
      solution: "Designed a modular component system in Figma — skeleton loaders, a persistent floating cart, gesture-based quantity controls, and a live order-tracking map — then built it as a working React Native prototype with smooth, physics-based micro-interactions.",
      contribution: "End-to-end concept, UI/UX design in Figma, and the React Native implementation.",
      tech: ["React Native", "TypeScript", "Figma", "React Native Reanimated", "REST + WebSocket (live tracking)"],
      outcome: "A fully clickable prototype demonstrating current mobile interaction patterns used at companies like Blinkit, Zomato, and Uber — skeleton loading states, live tracking, and gesture-driven cart management.",
      note: "Concept project — built to demonstrate current mobile UI patterns in demand at quick-commerce companies.",
      links: []
    },

    skills: {
      kind: "skills",
      groups: [
        { title: "Languages", items: ["Java (Certified — Udemy, 2024)", "Python", "C++", "JavaScript", "TypeScript"] },
        { title: "Frontend", items: ["React", "HTML5", "CSS3", "Flexbox", "CSS Grid", "Ext JS", "Bootstrap", "Tailwind", "Accessibility (WCAG 2.1, ARIA)"] },
        { title: "State & UI", items: ["Redux", "Context API", "jsTree", "DataTables"] },
        { title: "Backend & Data", items: ["Node.js", "SQL (PostgreSQL/MySQL)", "Database Management Systems"] },
        { title: "Tools & Workflow", items: ["VS Code", "IntelliJ IDEA", "Maven", "NPM", "Yarn", "Jira", "Postman"] },
        { title: "Core CS", items: ["Data Structures & Algorithms", "OOP", "System Design", "Pattern Recognition"] },
        { title: "Design / Creative", items: ["Figma", "Adobe Photoshop", "User Research", "Wireframing", "Prototyping"] }
      ]
    },

    experience: {
      kind: "experience",
      roles: [
        {
          role: "Software Engineer — UI/UX Team",
          org: "ZL Technologies",
          dates: "September 2024 – Present",
          bullets: [
            "Own end-to-end delivery of scoped UI features for an enterprise data management platform using JavaScript (ES6), HTML5, CSS3, Ext JS, and React-based patterns, meeting sprint deadlines independently.",
            "Modernized legacy UI for accessibility by refactoring ES6 and Ext JS components to WCAG 2.1 standards; added ARIA roles/labels and resolved 400+ WAVE issues, improving accessibility compliance by 80%.",
            "Built and maintained schema-driven UI frameworks enabling dynamic form generation, validation, and configuration for large enterprise customers (e.g., JPMorgan Chase).",
            "Developed data-intensive UI components (tables, filters, modals, dashboards) using DataTables, Bootstrap, and modular JS, optimizing rendering and interaction for large datasets.",
            "Managed a 4-member team and collaborated closely with UX, backend, and QA teams on API integration, i18n (English–Japanese), debugging, and code reviews, contributing to releases and a 22% reduction in regression defects."
          ]
        }
      ],
      education: [
        {
          degree: "B.Tech, Electrical and Electronics Engineering",
          org: "Indian Institute of Technology (IIT) Patna",
          dates: "July 2020 – May 2024"
        }
      ],
      achievements: [
        "1st Position, E-Summit UI/UX Hackathon, IIT Patna (100+ participants)",
        "Java Certification — Udemy, 2024"
      ]
    },

    sidequests: {
      kind: "sidequests",
      uxCaseStudies: [
        {
          title: "I'm Beside You — Website UX Optimization",
          blurb: "Redesigned a corporate website to make its vision and product easier to understand, based on usability research with real testers. Owned research, wireframing, interface design, and development.",
          link: "https://medhascollege.wixsite.com/website/i-m-beside-you?rc=test-site"
        },
        {
          title: "Messin — Reducing Food Wastage at IIT Patna",
          blurb: "A conceptual mobile app tackling mess food wastage on campus — from empathy research with mess staff and students through to wireframes, visual design, and a working prototype.",
          link: "https://medhascollege.wixsite.com/website/messin?rc=test-site"
        }
      ],
      artReveriez: {
        desc: "Co-founded Art Reveriez, specializing in hand-painted customized polaroids, bookmarks, and clothing. Led creative direction of the brand identity and graphics, and ran stall operations — 55+ orders, 500+ customers engaged, ₹13K+ revenue in 3 days.",
        instagram: null /* TODO: add Instagram URL, e.g. "https://instagram.com/artreveriez" */
      },
      yearbook: {
        desc: "Lead Designer for the IIT Patna yearbook — directed a Netflix-inspired design with a 5-member team, covering flex banners, the photo booth, and table pieces, from concept through to print production. Worked directly with printing agencies to keep everything on schedule.",
        drive: null /* TODO: add Google Drive link to yearbook glimpses */
      },
      ducks: {
        desc: "A daily ritual since January 6, 2026: I visit and photograph the same 4 ducks at a nearby pond. One of them had 5 ducklings — I've documented their whole journey. Only 2 made it to their gawky teenage phase alongside the original 4. The local caretaker (who I can't fully understand — he speaks Telugu) says the rest were lost to overheating, a snake, and — reportedly — a rabbit, which still doesn't seem physically possible.",
        drive: null /* TODO: add Google Drive link to duck photos/clips */
      }
    }
  };

  var FOLDERS = {
    project1: DATA.project1,
    project2: DATA.project2,
    project3: DATA.project3,
    skills: DATA.skills,
    experience: DATA.experience,
    sidequests: DATA.sidequests
  };

  var desktop = document.getElementById("desktop");
  var pageRoot = document.getElementById("page-root");
  var charImgs = {
    center: document.querySelector(".character__img--center"),
    left: document.querySelector(".character__img--left"),
    right: document.querySelector(".character__img--right")
  };

  /* ----------------------------------------------------------
     CHARACTER GAZE
  ---------------------------------------------------------- */
  var hoverCount = { left: 0, right: 0 };

  function setGaze(direction) {
    charImgs.center.classList.toggle("is-active", direction === "center");
    charImgs.left.classList.toggle("is-active", direction === "left");
    charImgs.right.classList.toggle("is-active", direction === "right");
  }

  function refreshGaze() {
    if (hoverCount.left > 0) {
      setGaze("left");
    } else if (hoverCount.right > 0) {
      setGaze("right");
    } else {
      setGaze("center");
    }
  }

  document.querySelectorAll(".folder").forEach(function (btn) {
    var side = btn.getAttribute("data-side");
    var target = btn.getAttribute("data-target");

    btn.addEventListener("mouseenter", function () { hoverCount[side]++; refreshGaze(); });
    btn.addEventListener("mouseleave", function () { hoverCount[side] = Math.max(0, hoverCount[side] - 1); refreshGaze(); });
    btn.addEventListener("focus", function () { hoverCount[side]++; refreshGaze(); });
    btn.addEventListener("blur", function () { hoverCount[side] = Math.max(0, hoverCount[side] - 1); refreshGaze(); });
    btn.addEventListener("click", function () { navigateTo(target); });
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
    return '<ul class="tag-list">' + items.map(function (i) { return '<li class="tag">' + esc(i) + '</li>'; }).join("") + '</ul>';
  }
  function backBtn() {
    return '<button class="back-btn" data-back><span class="back-btn__icon">←</span> back to desktop</button>';
  }
  function pageHead(eyebrow, title) {
    return '<div class="page__head">' +
      '<span class="page__folder-icon"><img src="assets/folder2.png" alt="" /></span>' +
      '<div><p class="page__eyebrow">' + esc(eyebrow) + '</p><h2 class="page__title">' + esc(title) + '</h2></div>' +
      '</div>';
  }

  /* ----------------------------------------------------------
     PAGE RENDERERS
  ---------------------------------------------------------- */
  function renderProject(d) {
    var linksHtml = (d.links && d.links.length)
      ? d.links.map(function (l) { return '<a class="ext-link-btn" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + ' ↗</a>'; }).join("")
      : '<p class="placeholder">Internal enterprise project — code and live demo are confidential.</p>';

    var noteHtml = d.note ? '<p class="project-note">' + esc(d.note) + '</p>' : "";

    return '<article class="page page--project">' + backBtn() +
      pageHead(d.eyebrow, d.title) +
      '<p class="page__timeframe">' + esc(d.timeframe) + '</p>' +
      noteHtml +
      '<div class="page__grid">' +
        '<section class="card"><h3>Overview</h3><p class="placeholder">' + esc(d.overview) + '</p></section>' +
        '<section class="card"><h3>Problem</h3><p class="placeholder">' + esc(d.problem) + '</p></section>' +
        '<section class="card"><h3>Solution</h3><p class="placeholder">' + esc(d.solution) + '</p></section>' +
        '<section class="card"><h3>My Contribution</h3><p class="placeholder">' + esc(d.contribution) + '</p></section>' +
        '<section class="card card--wide"><h3>Technologies / Tools</h3>' + tagList(d.tech) + '</section>' +
        '<section class="card card--wide"><h3>Screenshots / Mockups</h3><div class="shot-row">' +
          '<div class="shot-placeholder">add screenshot</div><div class="shot-placeholder">add screenshot</div><div class="shot-placeholder">add screenshot</div>' +
        '</div></section>' +
        '<section class="card"><h3>Outcome / Results</h3><p class="placeholder">' + esc(d.outcome) + '</p></section>' +
        '<section class="card"><h3>Links</h3>' + linksHtml + '</section>' +
      '</div></article>';
  }

  function renderSkills(d) {
    var cards = d.groups.map(function (g) {
      return '<section class="card"><h3>' + esc(g.title) + '</h3>' + tagList(g.items) + '</section>';
    }).join("");
    return '<article class="page page--skills">' + backBtn() +
      pageHead("FOLDER", "Skills") +
      '<div class="page__grid page__grid--skills">' + cards + '</div></article>';
  }

  function renderExperience(d) {
    var roles = d.roles.map(function (r) {
      return '<div class="timeline-item">' +
        '<p class="timeline-item__role">' + esc(r.role) + ' — ' + esc(r.org) + '</p>' +
        '<p class="timeline-item__meta">' + esc(r.dates) + '</p>' +
        '<ul class="role-bullets">' + r.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join("") + '</ul>' +
        '</div>';
    }).join("");

    var edu = d.education.map(function (e) {
      return '<div class="timeline-item">' +
        '<p class="timeline-item__role">' + esc(e.degree) + '</p>' +
        '<p class="timeline-item__meta">' + esc(e.org) + ' · ' + esc(e.dates) + '</p>' +
        '</div>';
    }).join("");

    return '<article class="page page--experience">' + backBtn() +
      pageHead("FOLDER", "Experience / Education") +
      '<div class="page__grid page__grid--timeline">' +
        '<section class="card"><h3>Professional Experience</h3>' + roles + '</section>' +
        '<section class="card"><h3>Education</h3>' + edu + '</section>' +
        '<section class="card"><h3>Achievements &amp; Certifications</h3>' + tagList(d.achievements) + '</section>' +
      '</div></article>';
  }

  function renderSideQuests(d) {
    var uxCards = d.uxCaseStudies.map(function (c) {
      return '<section class="card case-study-card">' +
        '<h3>' + esc(c.title) + '</h3>' +
        '<p class="placeholder">' + esc(c.blurb) + '</p>' +
        '<a class="ext-link-btn" href="' + esc(c.link) + '" target="_blank" rel="noopener">View Case Study ↗</a>' +
        '</section>';
    }).join("");

    var igLink = d.artReveriez.instagram
      ? '<a class="ext-link-btn" href="' + esc(d.artReveriez.instagram) + '" target="_blank" rel="noopener">Instagram ↗</a>'
      : '<p class="pending-note">Instagram link coming soon</p>';

    var yearbookLink = d.yearbook.drive
      ? '<a class="ext-link-btn" href="' + esc(d.yearbook.drive) + '" target="_blank" rel="noopener">View Glimpses ↗</a>'
      : '<p class="pending-note">Drive link coming soon</p>';

    var duckLink = d.ducks.drive
      ? '<a class="ext-link-btn" href="' + esc(d.ducks.drive) + '" target="_blank" rel="noopener">See All Photos ↗</a>'
      : '<p class="pending-note">Drive link coming soon</p>';

    return '<article class="page page--sidequests">' + backBtn() +
      pageHead("FOLDER", "Side Quests") +

      '<div class="page__grid page__grid--quests-wide">' + uxCards + '</div>' +

      '<div class="page__grid" style="margin-top:18px;">' +
        '<section class="card"><h3>Art Reveriez</h3><p class="placeholder">' + esc(d.artReveriez.desc) + '</p>' + igLink + '</section>' +
        '<section class="card"><h3>IITP Yearbook — Lead Designer</h3><p class="placeholder">' + esc(d.yearbook.desc) + '</p>' + yearbookLink + '</section>' +
      '</div>' +

      '<div class="page__grid" style="margin-top:18px;">' +
        '<section class="card card--wide"><h3>Art Gallery</h3>' +
          '<div class="gallery-grid">' +
            '<div class="shot-placeholder">artwork</div><div class="shot-placeholder">artwork</div>' +
            '<div class="shot-placeholder">artwork</div><div class="shot-placeholder">artwork</div>' +
          '</div>' +
          '<p class="pending-note">Upload your artwork images to swap these in</p>' +
        '</section>' +
      '</div>' +

      '<div class="page__grid" style="margin-top:18px;">' +
        '<section class="card card--wide duck-card">' +
          '<h3>Fun Fact: The Duck Family</h3>' +
          '<div class="duck-card__body">' +
            '<div class="shot-placeholder shot-placeholder--tall">duck family photo</div>' +
            '<div><p class="placeholder">' + esc(d.ducks.desc) + '</p>' + duckLink + '</div>' +
          '</div>' +
        '</section>' +
      '</div>' +
    '</article>';
  }

  var RENDERERS = {
    project: renderProject,
    skills: renderSkills,
    experience: renderExperience,
    sidequests: renderSideQuests
  };

  /* ----------------------------------------------------------
     ROUTING
  ---------------------------------------------------------- */
  function navigateTo(id) {
    var def = FOLDERS[id];
    var renderer = def && RENDERERS[def.kind];
    if (!renderer) return;

    pageRoot.innerHTML = renderer(def);

    desktop.classList.remove("is-active");
    pageRoot.classList.add("is-active");
    document.body.classList.add("is-page-open");
    window.scrollTo(0, 0);

    var back = pageRoot.querySelector("[data-back]");
    if (back) back.addEventListener("click", goHome);

    history.pushState({ view: id }, "", "#" + id);
  }

  function goHome() {
    pageRoot.classList.remove("is-active");
    pageRoot.innerHTML = "";
    desktop.classList.add("is-active");
    document.body.classList.remove("is-page-open");
    hoverCount = { left: 0, right: 0 };
    setGaze("center");
    if (location.hash) history.pushState({ view: "home" }, "", location.pathname);
  }

  window.addEventListener("popstate", function (e) {
    var view = e.state && e.state.view;
    if (!view || view === "home") goHome(); else navigateTo(view);
  });

  function initFromHash() {
    var id = location.hash ? location.hash.slice(1) : "";
    if (id && FOLDERS[id]) navigateTo(id);
  }

  initFromHash();
})();
