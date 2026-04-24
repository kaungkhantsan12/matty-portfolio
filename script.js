'use strict';

const header = document.querySelector(".header");
const navToggleBtn = document.querySelector(".navbar-toggler");
const navbarLinks = document.querySelectorAll(".nav-link");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.remove("nav-active");
    navToggleBtn.classList.remove("active");
  });
}

const professionsEn = ["Software Engineer", "AI Engineer", "Full-Stack Developer", "Data Analyst", "YouTuber"];
const professionsJa = ["ソフトウェアエンジニア", "AIエンジニア", "フルスタック開発者", "データアナリスト", "YouTuber"];
let currentLang = "en";
let professions = professionsEn;
let index = 0;
const professionSpan = document.getElementById("profession");

function toggleProfession() {
  professionSpan.style.opacity = "0";
  setTimeout(() => {
    professionSpan.textContent = professions[index];
    professionSpan.style.opacity = "1";
    index = (index + 1) % professions.length;
  }, 300);
}
professionSpan.style.transition = "opacity 0.3s ease";
professionSpan.textContent = professions[0];
index = 1;
setInterval(toggleProfession, 3000);

/* ─────────────────────────────────────────
   LANGUAGE TOGGLE
───────────────────────────────────────── */
const i18n = {
  en: {
    "nav-home": "Home",
    "nav-journey": "Journey",
    "nav-about": "About Me",
    "nav-education": "Education",
    "nav-experience": "Experience",
    "nav-capabilities": "Capabilities",
    "nav-skills": "Skills",
    "nav-languages": "Languages & Advocacy",
    "nav-projects": "Projects",
    "nav-hobby": "Hobby",
    "nav-contact": "Connect",
    "nav-cv": "CV",
    "hero-greeting": "Hello, I'm",
    "hero-iam": "I am a",
    "hero-talk": "Let's Talk",
    "hero-portfolio": "Portfolio",
    "flip-hint": "↩ tap to flip",
    "section-about": "About Me",
    "about-text": "I'm a globally-minded software engineer blending rigorous academic foundations with hands-on, full-cycle project experience. Now pursuing my B.Sc. in Software Engineering at Chiang Mai University (#2 in Thailand), I bring a unique edge from three formative years in Mechanical Engineering at Yangon Technological University—cut short by civil unrest, but rich in analytical training. With over a decade in Japan and continued immersion in Thailand's tech ecosystem, I thrive in cross-cultural, fast-paced environments. From building scalable full-stack platforms and AI prototypes to producing multimedia content and managing digital communities, I solve problems with creativity, structure, and heart. My journey spans startups, freelance writing, financial consulting, and YouTube content creation—demonstrating both initiative and impact across industries.",
    "download-cv": "Download CV",
    "section-education": "Education",
    "section-experience": "Experience",
    "section-skills": "Technical Skills",
    "section-projects": "Projects",
    "section-projects-sub": "From AI pipelines to full-stack platforms — here's what I build.",
    "section-contact": "Have an Idea? Let's Talk Code & Coffee ☕",
    "cv-modal-title": "Download CV",
    "cv-modal-prompt": "Choose your preferred language:",
    "cv-en": "English Version",
    "cv-ja": "日本語版（Japanese）",
  },
  ja: {
    "nav-home": "ホーム",
    "nav-journey": "旅路",
    "nav-about": "自己紹介",
    "nav-education": "学歴",
    "nav-experience": "職務経歴",
    "nav-capabilities": "スキル",
    "nav-skills": "技術スキル",
    "nav-languages": "言語・社会活動",
    "nav-projects": "プロジェクト",
    "nav-hobby": "趣味",
    "nav-contact": "お問い合わせ",
    "nav-cv": "履歴書",
    "hero-greeting": "こんにちは、私は",
    "hero-iam": "私は",
    "hero-talk": "話しましょう",
    "hero-portfolio": "ポートフォリオ",
    "flip-hint": "↩ タップして裏返す",
    "section-about": "自己紹介",
    "about-text": "私はグローバルな視点を持つソフトウェアエンジニアで、厳格な学術的基盤と実践的なフルサイクルのプロジェクト経験を融合させています。現在、タイ第2位のチェンマイ大学でソフトウェアエンジニアリングの学士号を取得中（3年次修了、4年次待機中）です。ミャンマー第1位のヤンゴン工科大学での機械工学の経験（軍事クーデターにより中断）を持ち、日本留学中にJLPT N2を取得しました。フルスタックWebプラットフォームやAIシステムの構築から、ゲーム開発・データ分析・マルチメディアコンテンツ制作まで、多岐にわたる分野で創造性・構造・情熱をもって問題解決に取り組んでいます。",
    "download-cv": "履歴書ダウンロード",
    "section-education": "学歴",
    "section-experience": "職務経歴",
    "section-skills": "技術スキル",
    "section-projects": "プロジェクト",
    "section-projects-sub": "AIパイプラインからフルスタックプラットフォームまで — 私が作るもの。",
    "section-contact": "アイデアがありますか？コードとコーヒーについて話しましょう ☕",
    "cv-modal-title": "履歴書ダウンロード",
    "cv-modal-prompt": "言語を選択してください：",
    "cv-en": "英語版",
    "cv-ja": "日本語版",
  }
};

function openCV() {
  document.getElementById("cvPickerOverlay").style.display = "flex";
}

function closeCVPicker() {
  document.getElementById("cvPickerOverlay").style.display = "none";
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ja" : "en";
  const btn = document.getElementById("langToggle");
  btn.textContent = currentLang === "en" ? "日本語" : "English";
  btn.classList.toggle("ja-active", currentLang === "ja");
  document.body.classList.toggle("lang-ja", currentLang === "ja");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[currentLang][key] !== undefined) el.textContent = i18n[currentLang][key];
  });

  professions = currentLang === "ja" ? professionsJa : professionsEn;
  index = 1;
  professionSpan.textContent = professions[0];
}

/* ─────────────────────────────────────────
   FEATURED PROJECTS
───────────────────────────────────────── */
const featuredProjects = [
  {
    title: "EZstats – AI Football Analysis Platform",
    tagline: "Final Year Project · CMU Software Engineering · Currently in Progress",
    description: "Full-stack AI football analytics platform built as a final year project at Chiang Mai University (advised by Asst. Prof. Dr. Parinya Suwansrikham). Coaches upload single-camera match videos; the system automatically detects and tracks players (YOLOv8 + ByteTrack), classifies teams (SigLIP + UMAP + KMeans), maps tracked IDs to real player names, detects events (passes, shots, touches), and generates heatmaps. Results are served through a React/Next.js dashboard with video replay, event timeline, and team/player statistics. Backend uses Node.js + PostgreSQL with Redis/BullMQ for asynchronous video processing jobs.",
    image: "./assets/images/image3.png",
    gradient: null,
    icon: null,
    link: null,
    badge: "Final Year Project",
    badgeColor: "#20c997",
    tech: ["Python", "YOLOv8", "ByteTrack", "SigLIP", "UMAP", "KMeans", "OpenCV", "PyTorch", "FFmpeg", "React (Next.js)", "Node.js", "PostgreSQL", "Redis", "BullMQ", "Docker", "HLS.js"]
  },
  {
    title: "LegitNews – Social Anti-Fake News Platform",
    tagline: "Full-stack community platform to combat misinformation",
    description: "Community-driven platform where users vote Real/Fake on news articles. Implements role-based access (guest / member / admin), JWT authentication with custom HMAC-SHA256 + PBKDF2 (120k iterations), comment system with Firebase image uploads, membership request workflow, soft-delete audit trail, and a full admin dashboard for content moderation. Frontend deployed on Vercel; backend Dockerized with MySQL.",
    image: "./assets/images/legitnews.png",
    gradient: null,
    icon: null,
    link: null,
    badge: "Deployed",
    badgeColor: "#28a745",
    tech: ["Vue 3", "TypeScript", "Vite", "Pinia", "Vue Router", "Axios", "Spring Boot", "Java 17", "MySQL", "Docker", "JWT", "Firebase", "Vercel", "Tailwind CSS"]
  },
  {
    title: "Arakan Quest – Educational Platformer Game",
    tagline: "Mario-style history quiz game for the Arakanese diaspora",
    description: "Phaser 3 + TypeScript educational quiz platformer teaching Mrauk-U history, Rakhine language, and Arakanese culture through combat-style gameplay. Players fight enemies by answering trivia — correct answers send enemies flying, wrong answers knock the player back. Features 5 worlds × 5 stages, bilingual UI (English / Myanmar), boss battles needing multiple correct answers, and progress saved in localStorage. Targets Facebook Instant Games and mobile via Capacitor.",
    image: "./assets/images/sawkhinezan.png",
    gradient: null,
    icon: null,
    link: "https://english-saw-khine-zan-s-amazing-arakan-adventure.pages.dev/",
    badge: "Deployed",
    badgeColor: "#17a2b8",
    tech: ["Phaser 3", "TypeScript", "Vite", "JavaScript", "Capacitor", "Facebook Instant Games", "localStorage"]
  },
  {
    title: "Full Stack Bookstore Website",
    tagline: "Production-grade bookstore with CI/CD pipeline on AWS EC2",
    description: "Fully functional bookstore platform with a customer-facing store and staff inventory management system. Containerized with Docker, deployed via AWS EC2, automated CI/CD through GitHub Actions. Includes JWT + session-based auth, bcrypt password hashing, Google Pay integration, and a complete RESTful API. Project lifecycle managed with GitHub Issues, Kanban boards, and Figma wireframes.",
    image: "./assets/images/bookNerd.jpeg",
    gradient: null,
    icon: null,
    link: null,
    badge: "AWS EC2",
    badgeColor: "#ff9900",
    tech: ["Node.js", "Express", "MySQL", "JavaScript", "Bootstrap", "Docker", "AWS EC2", "JWT", "Google Pay", "GitHub Actions", "Figma"]
  },
  {
    title: "StarBattle – Java Space Shooter",
    tagline: "2D space shooter blending Asteroids × Space Invaders aesthetics",
    description: "Dynamic 2D Java space shooter with Star Wars-inspired visuals. Players rotate 360°, shoot enemies, dodge incoming fire and asteroids, and face a multi-hit boss. Reactive enemy AI fires back, making combat challenging. Built with a custom game loop, OOP architecture, modular event-driven systems, collision physics, power-up logic, and projectile tracking.",
    image: "./assets/images/image5.png",
    gradient: null,
    icon: null,
    link: null,
    badge: "Java Game",
    badgeColor: "#6f42c1",
    tech: ["Java", "OOP", "Custom Game Loop", "Enemy AI", "Collision Physics", "Power-Ups", "Boss Fight", "2D Graphics"]
  },
  {
    title: "NCAA March Madness Predictor",
    tagline: "ML model predicting the 2017 NCAA tournament bracket",
    description: "Data science pipeline trained on 2003–2016 NCAA data to forecast 2017 March Madness outcomes. Engineered per-team season efficiency metrics (eFG%, TOV Rate, FT Rate, Point Margin, Win Ratio), built matchup feature vectors (A–B difference), and compared XGBoost (68.3% accuracy, AUC 0.7464) vs a neural network (66.9% accuracy, AUC 0.7273). Ran a full bracket simulation from Round of 64 to Champion.",
    image: "./assets/images/basketball.png",
    gradient: null,
    icon: null,
    link: null,
    badge: "ML · Data Science",
    badgeColor: "#e83e8c",
    tech: ["Python", "XGBoost", "TensorFlow/Keras", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Feature Engineering"]
  }
];

/* ─────────────────────────────────────────
   ALL PROJECTS
───────────────────────────────────────── */
const allProjects = [
  {
    title: "Ya-Ho! – Japanese Learning App",
    description: "Vue.js + Firebase language learning app for Myanmar learners. JLPT N5 vocab, grammar, listening quizzes, and progress tracking. Duolingo-inspired mobile-first design.",
    image: "./assets/images/ya-ho.png",
    tech: ["Vue.js", "Firebase", "Firestore", "JavaScript", "Bootstrap"]
  },
  {
    title: "Edge Crop Bro",
    description: "Java desktop utility for high-accuracy edge detection and batch image cropping. Drag-and-drop, real-time preview, and export — built with JavaFX and OpenCV.",
    image: "./assets/images/image2.png",
    tech: ["Java", "JavaFX", "OpenCV", "Image Processing", "Batch GUI"]
  },
  {
    title: "Food Court Queue System",
    description: "SaaS prototype with Vue.js UI, RESTful Node.js API, MySQL backend, real-time WebSocket notifications, and QR code pickup simulation.",
    image: "./assets/images/imageFoodcourt.png",
    tech: ["Vue.js", "Node.js", "MySQL", "WebSocket", "QR Code"]
  },
  {
    title: "Amazon Web Clone",
    description: "Frontend replication of Amazon's UI and shopping workflows using HTML, CSS, Bootstrap, and EJS for dynamic server-side rendering.",
    image: "./assets/images/image4.png",
    tech: ["HTML", "CSS", "Bootstrap", "EJS", "JavaScript"]
  },
  {
    title: "Money Mobile Wallet",
    description: "Mobile wallet prototype built in Thunkable with full transaction flows, balance management, and push notification simulation.",
    image: "./assets/images/thunkable.png",
    tech: ["Thunkable", "UI Design", "Push Notifications", "Prototyping"]
  }
];

/* ─────────────────────────────────────────
   RENDER FUNCTIONS
───────────────────────────────────────── */
function loadFeaturedProjects() {
  const container = document.getElementById("featured-projects-container");
  if (!container) return;

  featuredProjects.forEach((project, i) => {
    const techHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join("");

    const imageSection = project.image
      ? `<img src="${project.image}" alt="${project.title}" class="featured-card-img">`
      : `<div class="featured-card-gradient" style="background: ${project.gradient}">
           <i class="${project.icon} featured-card-icon"></i>
         </div>`;

    const linkBtn = project.link
      ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="featured-card-link-btn">
           <i class="fas fa-external-link-alt me-1"></i> Play / Visit
         </a>`
      : "";

    const delay = (i % 3) * 100;

    container.innerHTML += `
      <div class="col-lg-4 col-md-6 d-flex mb-4">
        <div class="featured-card flex-fill" data-aos="fade-up" data-aos-delay="${delay}">
          <div class="featured-card-image">
            ${imageSection}
            <span class="project-badge" style="background:${project.badgeColor}">${project.badge}</span>
          </div>
          <div class="featured-card-body">
            <h4 class="featured-card-title">${project.title}</h4>
            <p class="featured-card-tagline">${project.tagline}</p>
            <p class="featured-card-desc">${project.description}</p>
            <div class="featured-card-tech">${techHTML}</div>
            ${linkBtn}
          </div>
        </div>
      </div>
    `;
  });
}

function loadAllProjects() {
  const container = document.getElementById("all-projects-container");
  if (!container) return;

  allProjects.forEach((project, i) => {
    const techHTML = project.tech.slice(0, 4).map(t => `<span class="tech-tag-sm">${t}</span>`).join("");
    const delay = (i % 4) * 80;

    container.innerHTML += `
      <div class="col-lg-3 col-md-4 col-sm-6 d-flex mb-4">
        <div class="mini-card flex-fill" data-aos="fade-up" data-aos-delay="${delay}">
          <img src="${project.image}" alt="${project.title}" class="mini-card-img">
          <div class="mini-card-body">
            <h5 class="mini-card-title">${project.title}</h5>
            <p class="mini-card-desc">${project.description}</p>
            <div class="mini-card-tech">${techHTML}</div>
          </div>
        </div>
      </div>
    `;
  });
}

/* ─────────────────────────────────────────
   RENDER PROJECTS (DOM is ready — script is
   at bottom of <body>, no DOMContentLoaded
   needed)
───────────────────────────────────────── */
loadFeaturedProjects();
loadAllProjects();

/* ─────────────────────────────────────────
   BACK TO TOP + HEADER SCROLL
───────────────────────────────────────── */
const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    if (backTopBtn) backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    if (backTopBtn) backTopBtn.classList.remove("active");
  }
});

/* ─────────────────────────────────────────
   HOBBY SECTION
───────────────────────────────────────── */
const hobbyBoxes = document.querySelectorAll(".hobby-box");
const detailPanels = document.querySelectorAll(".hobby-details");

hobbyBoxes.forEach(box => {
  box.addEventListener("click", () => {
    const hobbyId = box.dataset.hobby + "-details";

    detailPanels.forEach(panel => {
      panel.style.display = (panel.id === hobbyId && panel.style.display !== "block") ? "block" : "none";
    });

    hobbyBoxes.forEach(b => b.classList.remove("selected"));
    box.classList.add("selected");
  });
});
