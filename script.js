'use strict';

/**
 * Navbar toggle
 */
const header = document.querySelector(".header");
const navToggleBtn = document.querySelector(".navbar-toggler");
const navbarLinks = document.querySelectorAll(".nav-link");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * Toggle the navbar when clicking any navbar link
 */
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.remove("nav-active");
    navToggleBtn.classList.remove("active");
  });
}

/**
 * Profession typewriter effect
 */
const professions = ["Software Engineer", "AI Engineer", "Developer", "Youtuber"];
let index = 0;

const professionSpan = document.getElementById("profession");

function toggleProfession() {
  professionSpan.textContent = professions[index];
  index = (index + 1) % professions.length;
}

setInterval(toggleProfession, 3000); // Change profession every 3 seconds

const projects = [
  {
    title: "Full Stack Bookstore Website",
    description:
      "A fully functional bookstore platform featuring a customer-facing store and a staff-side inventory system. Built with HTML, CSS, JavaScript, Bootstrap, Node.js, Express, and MySQL. Supports session-based and JWT authentication with bcrypt for password hashing, integrated with Google Pay. The system includes RESTful APIs, is containerized with Docker, and deployed via AWS EC2 using a CI/CD pipeline through GitHub Actions. Project lifecycle managed with GitHub Issues, Kanban, and Figma.",
    image: "./assets/images/bookNerd.jpeg", // Ensure this image path is correct
    tech: [
      "HTML", "CSS", "JavaScript", "Bootstrap",
      "Node.js", "Express", "MySQL",
      "Docker", "AWS EC2", "JWT", "Session Auth",
      "Google Pay", "GitHub Actions", "Figma"
    ]
  },
  {
    title: "Java Game Suite – StarBattle",
    description:
      "A dynamic 2D Java space shooter blending *Asteroids* and *Space Invaders* gameplay with *Star Wars*-inspired aesthetics. Players can rotate 360°, shoot enemies, dodge enemy fire and asteroids, and battle a boss. Enemies fire back, making combat reactive and challenging. The game includes a custom game loop, collision physics, OOP design, power-up logic, and a modular event-driven system.",
    image: "./assets/images/image5.png",
    tech: ["Java", "OOP", "Game Loop", "Enemy AI", "Projectile System", "Collision Physics", "Power-Ups", "Boss Fight", "2D Graphics"]
  },  
  {
    title: "Edge Crop Bro",
    description:
      "A productivity-focused Java utility that enables high-accuracy edge detection and cropping of images—individually or in batches. Built with JavaFX and OpenCV integration, the tool supports drag-and-drop, preview, and export features, showcasing desktop GUI and image processing skills.",
    image: "./assets/images/image2.png", // Make sure this path matches Edge Crop Bro screenshot
    tech: ["Java", "JavaFX", "OpenCV", "Image Processing", "Batch Processing", "GUI Tool"]
  },   
  {
    title: "Food Court Queue System (SaaS Prototype)",
    description:
      "Vue.js UI with RESTful Node.js API and MySQL. Real-time WebSocket notifications and QR code pickup simulation.",
    image: "./assets/images/imageFoodcourt.png",
    tech: ["Vue.js", "Node.js", "MySQL", "REST API", "WebSocket", "QR Code"]
  },
  {
    title: "Ya-Ho! – Japanese Learning App (Myanmar)",
    description:
      "A Vue.js + Firebase-powered language learning app tailored for Myanmar learners. Covers JLPT N5 lessons with vocab, grammar, listening quizzes, and progress tracking. Inspired by Duolingo, built for mobile-first access with Firebase Authentication and Firestore integration. PS: still in development with basic funtionality done.",
    image: "./assets/images/ya-ho.png", // Replace with your app screenshot
    tech: ["Vue.js", "Firebase", "JavaScript", "Bootstrap", "Firestore", "Google Auth"]
  },  
  {
    title: "Amazon Web Clone (Frontend)",
    description:
      "HTML/CSS/Bootstrap frontend replicating Amazon's workflows. Uses EJS and JavaScript for dynamic rendering.",
    image: "./assets/images/image4.png",
    tech: ["HTML", "CSS", "Bootstrap", "EJS", "JavaScript"]
  },
  {
    title: "Money Mobile Wallet (Thunkable)",
    description:
      "Mobile wallet prototype including transaction flows, balance management, and push notification simulation.",
    image: "./assets/images/thunkable.png",
    tech: ["Thunkable", "UI Design", "Push Notification", "Prototyping"]
  },
  {
    title: "AI Powered Football Analytics POC",
    description:
      "Python pipeline using OpenCV and TensorFlow for event detection and tracking. Includes Streamlit dashboards with heatmaps, pass networks, and player metrics.",
    image: "./assets/images/image3.png",
    tech: ["Python", "OpenCV", "TensorFlow", "Streamlit"]
  }
];


function loadProjects() {
  const container = document.getElementById("project-container");
  const indicators = document.getElementById("carousel-indicators");

  projects.forEach((project, index) => {
    const isActive = index === 0 ? "active" : "";
    const techHTML = project.tech.map(tech => `<span>${tech}</span>`).join("");

    container.innerHTML += `
      <div class="carousel-item ${isActive}">
        <div class="project-item">
          <div class="project-photo">
            <img src="${project.image}" class="d-block w-100" alt="${project.title}">
          </div>
          <div class="project-description">
            <h5>${project.title}</h5>
            <p>${project.description}</p>
            <div class="tech-stack">${techHTML}</div>
          </div>
        </div>
      </div>
    `;

    indicators.innerHTML += `
      <li data-target="#projectCarousel" data-slide-to="${index}" class="${isActive}"></li>
    `;
  });
}

document.addEventListener("DOMContentLoaded", loadProjects);


/**
 * Back to top & header visibility on scroll
 */
const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
