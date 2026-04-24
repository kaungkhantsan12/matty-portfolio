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

const localizedContent = {
  en: {
    aboutBoxes: [
      {
        title: "What I Do",
        body: "I build production-ready full-stack systems, real-time apps, and AI prototypes, merging frontend precision with backend robustness. Every project I deliver is optimized for speed, scalability, and meaningful user experience."
      },
      {
        title: "What I'm Good At",
        body: "I bring together Java, Python, JavaScript, SQL, and UI/UX best practices to engineer elegant, reliable solutions. My edge lies in connecting technical depth with design clarity and iterative development."
      },
      {
        title: "My Passion",
        body: "I'm passionate about solving complex problems and making technology human. Whether it's gamified learning, visual storytelling, or data-driven tools, I craft code that speaks to real-world needs."
      }
    ],
    education: {
      cards: [
        {
          body: "B.Sc. in Software Engineering (2023-2027)<br><em>Ranked #2 in Thailand</em><br><em>GPA 3.44 · 125 Credits · 3rd Year Complete</em><br><em>Awaiting 4th Year</em>",
          button: "View Courses"
        },
        {
          body: "Mechanical Engineering (2017-2021)<br><em>Ranked #1 in Myanmar</em><br><em>3rd Year | Interrupted by military coup</em><br><em>Matriculation: 4 Distinction</em>",
          button: "View Transcript"
        },
        { body: "Japanese Language Program (2021-2022)" },
        { body: "Harvard CS50x · Coursera AI For Everyone" }
      ],
      cmuModalTitle: "Chiang Mai University - B.Sc. Software Engineering",
      cmuMeta: "Student ID: 662115507 · Overall GPA: 3.44 · Credits: 125 · Click any course to expand description",
      cmuSemesters: [
        "Semester 1 / 2566 (2023)",
        "Semester 2 / 2566 (2024)",
        "Semester 1 / 2567 (2024)",
        "Semester 2 / 2567 (2025)",
        "Semester 1 / 2568 (2025)",
        "Semester 2 / 2568 (2026) - Completed"
      ],
      ytuModalTitle: "Yangon Technological University - Mechanical Engineering",
      ytuMeta: "Enrolled 2017 · Roll No. I.Mech-20 / II.Mech-21 · Studies interrupted by 2021 military coup",
      ytuSemesters: [
        "Myanmar Matriculation Examination - March 2017",
        "1st Year - 1st Semester (2017-2018)",
        "1st Year - 2nd Semester (2018)",
        "2nd Year - 1st Semester (2018-2019)",
        "2nd Year - 2nd Semester (2019)",
        "3rd Year - 1st Semester (2020-2021)"
      ],
      ytuNotes: [
        "Ranked in the Top 100 nationally across all Myanmar Matriculation candidates",
        "Studies interrupted by Myanmar's military coup (February 2021) - semester not completed",
        "Following the 2021 military coup, studies were discontinued. Subsequently relocated to Japan (2021-2023) before beginning Software Engineering at Chiang Mai University."
      ],
      waivedDescriptions: {
        "Fundamental English 1": "Waived based on IELTS Academic score of 7.5 - university threshold was 6.0. Course covers foundational English listening, speaking, reading, and writing for non-native students.",
        "Fundamental English 2": "Waived under the same IELTS exemption. Course covers intermediate English grammar, academic writing, and oral communication skills.",
        "Critical Reading and Effective Writing": "Waived with IELTS 7.5. Course covers analytical reading strategies, academic essay structure, argumentation, and citation practices.",
        "English for Science and Technology": "Waived with IELTS 7.5. Course covers technical English, including reading research papers, writing lab reports, presenting scientific findings, and discipline-specific vocabulary for engineering and computing."
      }
    },
    experience: [
      { meta: "AIA Myanmar (2020-2021)", body: "Advised clients on life and health insurance, fostering long-term financial security." },
      { meta: "M Tech (2018-2019)", body: "Wrote technical articles and collaborated with experts for quality educational content." },
      { meta: "Your Football in Arakanese (2019-Present)", body: "Launched a cultural sports platform and led a nonprofit youth language movement." },
      { body: "Produce tech, history, and freestyle videos. Manage scripting, editing, publishing, and audience engagement." },
      { meta: "Japan (2021-2023)", body: "Worked as Waiter (Bodaiju), Store Clerk (7-Eleven), and Uber Eats Delivery Partner. Built teamwork, time management, and customer service skills." },
      { meta: "Arakan Student Association (2025-Present)", body: "Oversee digital content, manage social media, and coordinate internal communication for the student body." }
    ],
    projectSections: {
      featuredTitle: "Featured Projects",
      featuredBody: "Work that demonstrates real-world impact and engineering depth",
      allTitle: "All Projects",
      allBody: "A wider showcase of what I've built across tools, games, and platforms",
      visit: "Play / Visit"
    },
    languages: {
      title: "Languages & Advocacy",
      levels: ["IELTS 7.5", "JLPT N2", "Native Speaker", "Currently Learning", "Currently Learning"]
    },
    hobby: {
      title: "Hobbies",
      intro: "Click on a hobby to explore more.",
      cards: [
        { title: "Football", body: "Enjoy playing and watching football." },
        { title: "Movies", body: "Exploring genres and film-making." },
        { title: "Hip Hop", body: "Listening to classic and modern rap." },
        { title: "Reading", body: "Books that shaped my worldview." }
      ],
      footballTitle: "My Football Journey",
      footballItems: [
        "<strong>Middle School Champion</strong> - Regional Level",
        "<strong>Inter-University Runner-Up</strong> - YTU Mechanical Team",
        "Discipline, teamwork & sportsmanship"
      ],
      fixturesTitle: "Manchester United Fixtures",
      poweredBy: "Data by <a href=\"https://www.thesportsdb.com/\" target=\"_blank\" class=\"text-warning\">TheSportsDB</a>",
      moviesTitle: "Favorite Director: Quentin Tarantino",
      moviesBody: "I love his sharp dialogue, nonlinear storytelling, and bold visual style. I also completed a directing course and led an animated project as coursework.",
      musicTitle: "Favorite Artists",
      musicBody: "2Pac, Nas, Eminem, J. Cole, Kendrick Lamar - artists who shaped my taste and philosophy through lyrics and storytelling.",
      readingTitle: "Favorite Books"
    }
  },
  ja: {
    aboutBoxes: [
      {
        title: "What I Do",
        body: "本番運用を意識したフルスタックシステム、リアルタイムアプリ、AIプロトタイプを構築しています。フロントエンドの精度とバックエンドの堅牢性を両立させ、スピード、拡張性、使いやすさを大切にしています。"
      },
      {
        title: "What I'm Good At",
        body: "Java、Python、JavaScript、SQLに加え、UI/UXの考え方も組み合わせて、実用的で信頼できるソリューションを設計できます。技術の深さとデザインの分かりやすさをつなぐのが強みです。"
      },
      {
        title: "My Passion",
        body: "複雑な課題を解きながら、テクノロジーをもっと人に寄り添うものにすることに情熱があります。ゲーム型学習、映像表現、データ活用ツールなど、現実の役に立つものを形にするのが好きです。"
      }
    ],
    education: {
      cards: [
        {
          body: "ソフトウェア工学学士課程 (2023-2027)<br><em>タイ国内2位の大学</em><br><em>GPA 3.44 · 125単位 · 3年次修了</em><br><em>4年次進級予定</em>",
          button: "科目を見る"
        },
        {
          body: "機械工学 (2017-2021)<br><em>ミャンマー国内1位の大学</em><br><em>3年次在籍 | 軍事クーデターで中断</em><br><em>大学入学資格試験: 4科目 Distinction</em>",
          button: "成績証明を見る"
        },
        { body: "日本語課程 (2021-2022)" },
        { body: "Harvard CS50x · Coursera AI For Everyone" }
      ],
      cmuModalTitle: "Chiang Mai University - ソフトウェア工学学士課程",
      cmuMeta: "学生番号: 662115507 · 累積GPA: 3.44 · 単位数: 125 · 科目をクリックすると説明が開きます",
      cmuSemesters: [
        "第1学期 / 2566 (2023)",
        "第2学期 / 2566 (2024)",
        "第1学期 / 2567 (2024)",
        "第2学期 / 2567 (2025)",
        "第1学期 / 2568 (2025)",
        "第2学期 / 2568 (2026) - 修了"
      ],
      ytuModalTitle: "Yangon Technological University - 機械工学",
      ytuMeta: "入学: 2017 · Roll No. I.Mech-20 / II.Mech-21 · 2021年の軍事クーデターにより学業中断",
      ytuSemesters: [
        "Myanmar Matriculation Examination - 2017年3月",
        "1年次 - 前期 (2017-2018)",
        "1年次 - 後期 (2018)",
        "2年次 - 前期 (2018-2019)",
        "2年次 - 後期 (2019)",
        "3年次 - 前期 (2020-2021)"
      ],
      ytuNotes: [
        "ミャンマー全国の Matriculation 受験者の中で全国トップ100に入りました",
        "ミャンマー軍事クーデター（2021年2月）により学業中断 - 学期未修了",
        "2021年の軍事クーデター後に学業を中断し、その後日本へ移住（2021-2023）し、のちにChiang Mai UniversityでSoftware Engineeringを学び始めました。"
      ],
      waivedDescriptions: {
        "Fundamental English 1": "IELTS Academic 7.5により履修免除。大学の免除基準は6.0でした。授業内容は英語の聞く・話す・読む・書くの基礎です。",
        "Fundamental English 2": "同じIELTS免除により履修免除。内容は中級レベルの英文法、アカデミックライティング、口頭コミュニケーションです。",
        "Critical Reading and Effective Writing": "IELTS 7.5により履修免除。批判的読解、論文構成、論証、引用の基礎を扱う授業です。",
        "English for Science and Technology": "IELTS 7.5により履修免除。研究論文の読解、実験レポート作成、技術発表、工学・情報系の専門語彙を扱う授業です。"
      }
    },
    experience: [
      { meta: "AIA Myanmar (2020-2021)", body: "生命保険と医療保険について顧客に提案し、長期的な生活設計と安心づくりを支援しました。" },
      { meta: "M Tech (2018-2019)", body: "技術系の記事を執筆し、専門家と連携しながら教育向けコンテンツの品質向上に取り組みました。" },
      { meta: "Your Football in Arakanese (2019-現在)", body: "文化的なスポーツプラットフォームを立ち上げ、非営利の若者向け言語活動も主導しました。" },
      { body: "テック、歴史、フリースタイル系の動画を制作。企画、台本、編集、公開、視聴者対応まで一通り担当しています。" },
      { meta: "Japan (2021-2023)", body: "Waiter (Bodaiju)、Store Clerk (7-Eleven)、Uber Eats Delivery Partnerとして勤務し、協調性、時間管理、接客力を磨きました。" },
      { meta: "Arakan Student Association (2025-現在)", body: "学生団体向けにデジタルコンテンツ管理、SNS運用、内部コミュニケーションの調整を担当しています。" }
    ],
    projectSections: {
      featuredTitle: "主要プロジェクト",
      featuredBody: "実社会でのインパクトとエンジニアリングの深さを示す取り組み",
      allTitle: "その他のプロジェクト",
      allBody: "ツール、ゲーム、Webサービスまで幅広く制作したものの一覧",
      visit: "開く"
    },
    languages: {
      title: "言語と活動",
      levels: ["IELTS 7.5", "JLPT N2", "母語", "学習中", "学習中"]
    },
    hobby: {
      title: "趣味",
      intro: "気になる趣味をクリックすると詳しく見られます。",
      cards: [
        { title: "Football", body: "サッカーを観ることもプレーすることも好きです。" },
        { title: "Movies", body: "さまざまなジャンルや映像表現を楽しんでいます。" },
        { title: "Hip Hop", body: "クラシックから現代まで幅広いラップを聴きます。" },
        { title: "Reading", body: "自分の価値観に影響を与えた本たちです。" }
      ],
      footballTitle: "サッカーの歩み",
      footballItems: [
        "<strong>Middle School Champion</strong> - 地域大会優勝",
        "<strong>Inter-University Runner-Up</strong> - YTU Mechanical Team",
        "規律、チームワーク、スポーツマンシップを学びました"
      ],
      fixturesTitle: "Manchester United Fixtures",
      poweredBy: "<a href=\"https://www.thesportsdb.com/\" target=\"_blank\" class=\"text-warning\">TheSportsDB</a> 提供",
      moviesTitle: "好きな監督: Quentin Tarantino",
      moviesBody: "鋭い会話、非線形の物語構成、大胆な映像スタイルが特に好きです。授業では演出科目も履修し、アニメーション作品の制作リードも経験しました。",
      musicTitle: "好きなアーティスト",
      musicBody: "2Pac、Nas、Eminem、J. Cole、Kendrick Lamar など、歌詞とストーリーテリングで自分の感性に影響を与えたアーティストが好きです。",
      readingTitle: "好きな本"
    }
  }
};

const projectTranslations = {
  featured: {
    "EZstats 窶・AI Football Analysis Platform": {
      taglineJa: "卒業研究 ﾂｷ CMU Software Engineering ﾂｷ 開発進行中",
      descriptionJa: "Chiang Mai Universityでの卒業研究として開発しているAIサッカー分析プラットフォームです。単一カメラ映像から選手検出・追跡、チーム分類、実名との対応付け、イベント検出、ヒートマップ生成まで行い、React/Next.jsのダッシュボードで確認できます。",
      badgeJa: "卒業研究"
    },
    "LegitNews 窶・Social Anti-Fake News Platform": {
      taglineJa: "誤情報対策のためのフルスタック型コミュニティプラットフォーム",
      descriptionJa: "ニュース記事に対してユーザーがReal/Fakeを投票できるコミュニティ型プラットフォームです。権限制御、JWT認証、画像付きコメント、会員申請フロー、監査向けソフトデリート、管理ダッシュボードまで備えています。",
      badgeJa: "公開中"
    },
    "Arakan Quest 窶・Educational Platformer Game": {
      taglineJa: "歴史学習向けのクイズ型プラットフォーマー",
      descriptionJa: "Phaser 3とTypeScriptで作成した教育ゲームです。Mrauk-Uの歴史、Rakhine language、Arakanese文化をクイズ形式のバトルで学べます。5ワールド構成で、英語とミャンマー語UI、ボス戦、進行保存にも対応しています。",
      badgeJa: "公開中"
    },
    "Full Stack Bookstore Website": {
      taglineJa: "AWS EC2上でCI/CDを回す本格的な書店プラットフォーム",
      descriptionJa: "顧客向けストアとスタッフ用在庫管理を備えたフルスタック書店サイトです。Docker、AWS EC2、GitHub ActionsによるCI/CD、JWTとセッション認証、Google Pay連携、REST APIまで実装しています。"
    },
    "StarBattle 窶・Java Space Shooter": {
      taglineJa: "AsteroidsとSpace Invaders風の2D Javaシューティング",
      descriptionJa: "Star Wars風の雰囲気を取り入れた2D Javaシューティングです。360度回転、敵弾回避、ボス戦、パワーアップ要素を備え、カスタムゲームループとOOP設計で構築しました。"
    },
    "NCAA March Madness Predictor": {
      taglineJa: "2017 NCAAトーナメントを予測する機械学習モデル",
      descriptionJa: "2003年から2016年のNCAAデータを使って2017年大会を予測したデータサイエンスプロジェクトです。チーム効率指標を設計し、XGBoostとニューラルネットワークを比較しながらトーナメント全体をシミュレーションしました。"
    }
  },
  all: {
    "Ya-Ho! 窶・Japanese Learning App": {
      descriptionJa: "ミャンマー語話者向けに作成した日本語学習アプリです。JLPT N5の語彙、文法、リスニング問題、進捗管理を備え、Duolingo風のモバイルファーストUIで設計しました。"
    },
    "Edge Crop Bro": {
      descriptionJa: "高精度なエッジ検出と画像の一括トリミングを行うJavaデスクトップツールです。ドラッグ＆ドロップ、リアルタイムプレビュー、書き出し機能を備え、JavaFXとOpenCVで実装しました。"
    },
    "Food Court Queue System": {
      descriptionJa: "Vue.jsのUI、Node.jsのREST API、MySQL、WebSocket通知、QR受け取りシミュレーションを組み合わせたフードコート向け待ち行列SaaS試作です。"
    },
    "Amazon Web Clone": {
      descriptionJa: "HTML、CSS、Bootstrap、EJSを使ってAmazon風のUIと購買フローを再現したフロントエンド中心のクローンプロジェクトです。"
    },
    "Money Mobile Wallet": {
      descriptionJa: "Thunkableで作成したモバイルウォレットの試作です。送金フロー、残高管理、プッシュ通知のシミュレーションまで含めて設計しました。"
    }
  }
};

function setTextIfFound(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setHtmlIfFound(selector, html) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = html;
}

const projectTranslationsByIndex = {
  featured: [
    {
      taglineJa: "卒業研究 ﾂｷ CMU Software Engineering ﾂｷ 開発進行中",
      descriptionJa: "Chiang Mai Universityでの卒業研究として開発しているAIサッカー分析プラットフォームです。単一カメラ映像から選手検出・追跡、チーム分類、実名との対応付け、イベント検出、ヒートマップ生成まで行い、React/Next.jsのダッシュボードで確認できます。",
      badgeJa: "卒業研究"
    },
    {
      taglineJa: "誤情報対策のためのフルスタック型コミュニティプラットフォーム",
      descriptionJa: "ニュース記事に対してユーザーがReal/Fakeを投票できるコミュニティ型プラットフォームです。権限制御、JWT認証、画像付きコメント、会員申請フロー、監査向けソフトデリート、管理ダッシュボードまで備えています。",
      badgeJa: "公開中"
    },
    {
      taglineJa: "歴史学習向けのクイズ型プラットフォーマー",
      descriptionJa: "Phaser 3とTypeScriptで作成した教育ゲームです。Mrauk-Uの歴史、Rakhine language、Arakanese文化をクイズ形式のバトルで学べます。5ワールド構成で、英語とミャンマー語UI、ボス戦、進行保存にも対応しています。",
      badgeJa: "公開中"
    },
    {
      taglineJa: "AWS EC2上でCI/CDを回す本格的な書店プラットフォーム",
      descriptionJa: "顧客向けストアとスタッフ用在庫管理を備えたフルスタック書店サイトです。Docker、AWS EC2、GitHub ActionsによるCI/CD、JWTとセッション認証、Google Pay連携、REST APIまで実装しています。"
    },
    {
      taglineJa: "AsteroidsとSpace Invaders風の2D Javaシューティング",
      descriptionJa: "Star Wars風の雰囲気を取り入れた2D Javaシューティングです。360度回転、敵弾回避、ボス戦、パワーアップ要素を備え、カスタムゲームループとOOP設計で構築しました。"
    },
    {
      taglineJa: "2017 NCAAトーナメントを予測する機械学習モデル",
      descriptionJa: "2003年から2016年のNCAAデータを使って2017年大会を予測したデータサイエンスプロジェクトです。チーム効率指標を設計し、XGBoostとニューラルネットワークを比較しながらトーナメント全体をシミュレーションしました。"
    }
  ],
  all: [
    {
      descriptionJa: "ミャンマー語話者向けに作成した日本語学習アプリです。JLPT N5の語彙、文法、リスニング問題、進捗管理を備え、Duolingo風のモバイルファーストUIで設計しました。"
    },
    {
      descriptionJa: "高精度なエッジ検出と画像の一括トリミングを行うJavaデスクトップツールです。ドラッグ＆ドロップ、リアルタイムプレビュー、書き出し機能を備え、JavaFXとOpenCVで実装しました。"
    },
    {
      descriptionJa: "Vue.jsのUI、Node.jsのREST API、MySQL、WebSocket通知、QR受け取りシミュレーションを組み合わせたフードコート向け待ち行列SaaS試作です。"
    },
    {
      descriptionJa: "HTML、CSS、Bootstrap、EJSを使ってAmazon風のUIと購買フローを再現したフロントエンド中心のクローンプロジェクトです。"
    },
    {
      descriptionJa: "Thunkableで作成したモバイルウォレットの試作です。送金フロー、残高管理、プッシュ通知のシミュレーションまで含めて設計しました。"
    }
  ]
};

function applyLocalizedContent() {
  const content = localizedContent[currentLang] || localizedContent.en;

  document.querySelectorAll("#about .info-box").forEach((box, index) => {
    const item = content.aboutBoxes[index];
    if (!item) return;
    const title = box.querySelector("h4");
    const body = box.querySelector("p");
    if (title) title.textContent = item.title;
    if (body) body.textContent = item.body;
  });

  const educationBoxes = document.querySelectorAll("#education .education-box");
  educationBoxes.forEach((box, index) => {
    const item = content.education.cards[index];
    if (!item) return;
    const paragraphs = box.querySelectorAll("p");
    if (paragraphs[1]) paragraphs[1].innerHTML = item.body;
    const button = box.querySelector("button");
    if (button && item.button) button.innerHTML = index === 0
      ? `<i class="fas fa-list-ul me-1"></i> ${item.button}`
      : `<i class="fas fa-file-alt me-1"></i> ${item.button}`;
  });

  const experienceBoxes = document.querySelectorAll("#experience .experience-box");
  experienceBoxes.forEach((box, index) => {
    const item = content.experience[index];
    if (!item) return;
    const paragraphs = box.querySelectorAll("p");
    if (item.meta && paragraphs[1]) paragraphs[1].innerHTML = item.meta;
    if (paragraphs[2]) paragraphs[2].innerHTML = item.body;
  });

  const projectLabels = document.querySelectorAll("#projects .section-label");
  setTextIfFound("#skills h2", "Technical Skills");
  setTextIfFound("#skills .container > p", "Core expertise and full technology stack");
  setTextIfFound("#projects .projects-header h2", currentLang === "ja" ? "プロジェクト" : "Projects");
  setTextIfFound(
    "#projects .projects-header p",
    currentLang === "ja"
      ? "AIパイプラインからフルスタック開発まで、私が制作してきたプロジェクトです。"
      : "From AI pipelines to full-stack platforms — here's what I build."
  );
  if (projectLabels[0]) {
    projectLabels[0].querySelector("h3").textContent = content.projectSections.featuredTitle;
    projectLabels[0].querySelector("p").textContent = content.projectSections.featuredBody;
  }
  if (projectLabels[1]) {
    projectLabels[1].querySelector("h3").textContent = content.projectSections.allTitle;
    projectLabels[1].querySelector("p").textContent = content.projectSections.allBody;
  }

  setTextIfFound("#languages h2", content.languages.title);
  document.querySelectorAll("#languages .row > div p").forEach((item, index) => {
    if (content.languages.levels[index]) item.textContent = content.languages.levels[index];
  });

  setTextIfFound("#hobby h2", content.hobby.title);
  setTextIfFound("#hobby > .container > p", content.hobby.intro);
  document.querySelectorAll("#hobby .hobby-box").forEach((box, index) => {
    const item = content.hobby.cards[index];
    if (!item) return;
    const title = box.querySelector("h4");
    const body = box.querySelector("p");
    if (title) title.textContent = item.title;
    if (body) body.textContent = item.body;
  });

  setTextIfFound("#football-details h4", content.hobby.footballTitle);
  document.querySelectorAll("#football-details li").forEach((item, index) => {
    if (content.hobby.footballItems[index]) item.innerHTML = `<i class="${item.querySelector("i").className}"></i> ${content.hobby.footballItems[index]}`;
  });
  setTextIfFound("#football-details .text-danger", content.hobby.fixturesTitle);
  setHtmlIfFound("#football-details .text-center.mt-2", content.hobby.poweredBy);

  setTextIfFound("#movies-details h4", content.hobby.moviesTitle);
  setTextIfFound("#movies-details p", content.hobby.moviesBody);
  setTextIfFound("#music-details h4", content.hobby.musicTitle);
  setTextIfFound("#music-details p", content.hobby.musicBody);
  setTextIfFound("#reading-details h4", content.hobby.readingTitle);

  setHtmlIfFound("#cmuModalLabel", `<i class="fas fa-university me-2"></i>${content.education.cmuModalTitle}`);
  setTextIfFound("#cmuModal .edu-modal-meta", content.education.cmuMeta);
  document.querySelectorAll("#cmuModal .edu-semester-title").forEach((title, index) => {
    if (content.education.cmuSemesters[index]) title.textContent = content.education.cmuSemesters[index];
  });

  document.querySelectorAll("#cmuModal .course-item").forEach((item) => {
    const summary = item.querySelector("summary");
    const desc = item.querySelector(".course-desc");
    if (!summary || !desc) return;
    const key = summary.textContent.trim();
    const translated = content.education.waivedDescriptions[key];
    if (translated) desc.textContent = translated;
  });

  setHtmlIfFound("#ytuModalLabel", `<i class="fas fa-graduation-cap me-2"></i>${content.education.ytuModalTitle}`);
  setTextIfFound("#ytuModal .edu-modal-meta", content.education.ytuMeta);
  document.querySelectorAll("#ytuModal .edu-semester-title").forEach((title, index) => {
    if (content.education.ytuSemesters[index]) title.textContent = content.education.ytuSemesters[index];
  });

  const ytuNotes = [
    "#ytuModal .edu-semester-block p[style*='font-size:0.82rem']",
    "#ytuModal .edu-semester-block:last-of-type p[style*='font-size:0.82rem']",
    "#ytuModal .mt-3"
  ];
  ytuNotes.forEach((selector, index) => {
    if (content.education.ytuNotes[index]) setTextIfFound(selector, content.education.ytuNotes[index]);
  });
}

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
  applyLocalizedContent();
  loadFeaturedProjects();
  loadAllProjects();
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
  container.innerHTML = "";

  featuredProjects.forEach((project, i) => {
    const localizedProject = projectTranslationsByIndex.featured[i] || projectTranslations.featured[project.title] || {};
    const tagline = currentLang === "ja" ? (localizedProject.taglineJa || project.tagline) : project.tagline;
    const description = currentLang === "ja" ? (localizedProject.descriptionJa || project.description) : project.description;
    const badge = currentLang === "ja" ? (localizedProject.badgeJa || project.badge) : project.badge;
    const ctaLabel = (localizedContent[currentLang] || localizedContent.en).projectSections.visit;
    const techHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join("");

    const imageSection = project.image
      ? `<img src="${project.image}" alt="${project.title}" class="featured-card-img">`
      : `<div class="featured-card-gradient" style="background: ${project.gradient}">
           <i class="${project.icon} featured-card-icon"></i>
         </div>`;

    const linkBtn = project.link
      ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="featured-card-link-btn">
           <i class="fas fa-external-link-alt me-1"></i> ${ctaLabel}
         </a>`
      : "";

    container.innerHTML += `
      <div class="col-lg-4 col-md-6 d-flex mb-4">
        <div class="featured-card flex-fill">
          <div class="featured-card-image">
            ${imageSection}
            <span class="project-badge" style="background:${project.badgeColor}">${badge}</span>
          </div>
          <div class="featured-card-body">
            <h4 class="featured-card-title">${project.title}</h4>
            <p class="featured-card-tagline">${tagline}</p>
            <p class="featured-card-desc">${description}</p>
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
  container.innerHTML = "";

  allProjects.forEach((project, i) => {
    const localizedProject = projectTranslationsByIndex.all[i] || projectTranslations.all[project.title] || {};
    const description = currentLang === "ja" ? (localizedProject.descriptionJa || project.description) : project.description;
    const techHTML = project.tech.slice(0, 4).map(t => `<span class="tech-tag-sm">${t}</span>`).join("");
    container.innerHTML += `
      <div class="col-lg-3 col-md-4 col-sm-6 d-flex mb-4">
        <div class="mini-card flex-fill">
          <img src="${project.image}" alt="${project.title}" class="mini-card-img">
          <div class="mini-card-body">
            <h5 class="mini-card-title">${project.title}</h5>
            <p class="mini-card-desc">${description}</p>
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
applyLocalizedContent();

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
