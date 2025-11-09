// Data Arrays
const skills = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "React.js" },
  { name: "React Router" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap" },
  { name: "Sass/SCSS" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "VS Code" },
  { name: "Python" },
  { name: "C++" },
  { name: "Linux" },
  { name: "Jest" },
  { name: "Responsive Design" },
  { name: "Debugging" },
  { name: "Problem Solving" },
  { name: "Agentic AI Enthusiast" },
];

const experience = [
  {
    title: "Computer Science Student",
    company: "University of Swabi",
    period: "Oct 2023 - Sep 2024",
    description:
      "Began academic journey in Computer Science, focusing on foundational programming in C++ and Python. Developed logical thinking, problem-solving skills, and a deep understanding of core computing principles-laying the groundwork for a strong development career.",
    isInitiallyVisible: true,
  },
  {
    title: "Frontend Developer & UI/UX Learner",
    company: "Freelance / Personal Projects",
    period: "Sep 2024 - Present",
    description:
      "Started hands-on web development with a focus on responsive design, accessibility, and user experience. Built several real-world projects using HTML, CSS, JavaScript, and Tailwind CSS. Gained over a year of experience in frontend engineering and UI/UX design. Currently learning the MERN stack to grow into full-stack development.",
    isInitiallyVisible: true,
  },
  //   {
  //     title: "UI/UX Intern",
  //     company: "Web Solutions Ltd.",
  //     period: "2021 - 2022",
  //     description:
  //       "Assisted senior designers in creating mockups and prototypes, focusing on user flow and wireframing for new product features.",
  //     isInitiallyVisible: false,
  //   },
  //   {
  //     title: "Graphic Designer",
  //     company: "Creative Studio",
  //     period: "2020 - 2021",
  //     description:
  //       "Designed marketing materials, brand identities, and graphic assets for various client campaigns.",
  //     isInitiallyVisible: false,
  //   },
  //   {
  //     title: "Digital Marketing Assistant",
  //     company: "Ecom Growth Agency",
  //     period: "2019 - 2020",
  //     description:
  //       "Managed social media channels and contributed to SEO strategies for e-commerce clients.",
  //     isInitiallyVisible: false,
  //   },
  //   {
  //     title: "Junior Web Developer",
  //     company: "Startup Innovators",
  //     period: "2018 - 2019",
  //     description:
  //       "Developed and maintained corporate websites using HTML, CSS, and basic JavaScript. Learned version control and agile methodologies.",
  //     isInitiallyVisible: false,
  //   },
  //   {
  //     title: "Technical Assistant",
  //     company: "University Lab",
  //     period: "2017 - 2018",
  //     description:
  //       "Provided technical support for lab equipment and assisted students with programming assignments.",
  //     isInitiallyVisible: false,
  //   },
  //   {
  //     title: "Customer Support Rep",
  //     company: "Global Services Inc.",
  //     period: "2016 - 2017",
  //     description:
  //       "Handled customer inquiries and provided technical troubleshooting for software products.",
  //     isInitiallyVisible: false,
  //   },
];

const projects = [
  {
    id: 1,
    title: "DevOps Engineer Portfolio - Muhammad Dawood",
    summary:
      "Responsive DevOps Portfolio showcasing CI/CD, cloud tools, automation expertise, and smooth UI/UX, all built with HTML, CSS, and JavaScript.",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Scroll-based Animation",
      "Landing Page Design",
    ],
    type: ["client-based", "featured", "maintenance"],
    image: "./assets/muhammad-dawood-screenshot.png",
    details:
      "A sleek, responsive portfolio built for Muhammad Dawood, a DevOps Engineer, using HTML, CSS, and JavaScript. It highlights his expertise in CI/CD, cloud infrastructure, and automation tools through well-structured sections, interactive UI, and smooth animations crafted to reflect both technical depth and professional identity.",
    demo: "https://idavidkhan.github.io/DevOps/",
    github: "https://github.com/idavidkhan/DevOps",
  },
  {
    id: 2,
    title: "StudyStation - WhatsApp Channel Site",
    summary:
      "Responsive multi-page website with smooth animations, soft UI/UX, and user-friendly navigation, built using HTML, Tailwind CSS, and JavaScript.",
    tech: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
      "UI/UX Design",
      "Multi-Page Architecture",
    ],
    type: ["personal", "educational", "featured", "maintenance"],
    image: "./assets/study-station-screenshot.png",
    details:
      "StudyStation is a multi-page web interface designed for a WhatsApp learning channel. Built with HTML, Tailwind CSS, and JavaScript, it features responsive layouts, fluid animations, and a clean, soft aesthetic. The site focuses on delivering a seamless and engaging browsing experience, structured to showcase resources, updates, and channel insights effectively.",
    demo: "https://bugcurator.github.io/StudyStation/",
    github: "https://github.com/bugcurator/StudyStation",
  },
  {
    id: 3,
    title: "Hadaf Immigration - Study Abroad Consultancy UI",
    summary:
      "Single-page responsive design with smooth UI/UX, crafted for educational consultancies. Fully animated and optimized for all screen sizes.",
    tech: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
      "UI/UX Design",
      "Scroll-based Animation",
      "Landing Page Design",
    ],
    type: ["experience-based", "archive", "sale"],
    image: "./assets/hadaf-immigration-screenshot.png",
    details:
      "A modern, single-page website designed for Hadaf Immigration Consultancy, which assists students in pursuing education abroad. This ready-to-use UI emphasizes clarity, smooth animations, and professional layout to attract and engage potential clients. Ideal for any consultancy looking to establish a trustworthy digital presence. Fully responsive and easy to customize or deploy.",
    demo: "https://bugcurator.github.io/Hadaf-Immigration/",
    github: "https://github.com/bugcurator/Hadaf-Immigration",
  },
  //   {
  //     id: 4,
  //     title: "Hadaf Immigration - Study Abroad Consultancy UI",
  //     summary:
  //       "Single-page responsive design with smooth UI/UX, crafted for educational consultancies. Fully animated and optimized for all screen sizes.",
  //     tech: [
  //       "HTML5",
  //       "CSS3",
  //       "Tailwind CSS",
  //       "JavaScript",
  //       "Responsive Design",
  //       "UI/UX Design",
  //       "Scroll-based Animation",
  //       "Landing Page Design",
  //     ],
  //     type: ["sale"],
  //     image: "./assets/hadaf-immigration-screenshot.png",
  //     details:
  //       "A modern, single-page website designed for Hadaf Immigration Consultancy, which assists students in pursuing education abroad. This ready-to-use UI emphasizes clarity, smooth animations, and professional layout to attract and engage potential clients. Ideal for any consultancy looking to establish a trustworthy digital presence. Fully responsive and easy to customize or deploy.",
  //     demo: "https://bugcurator.github.io/Hadaf-Immigration/",
  //     github: "#",
  //   },
];

const clients = [
  {
    name: "TechCorp",
    logo: "https://via.placeholder.com/200x80/d4af37/ffffff?text=TechCorp",
  },
  {
    name: "DesignHub",
    logo: "https://via.placeholder.com/200x80/d4af37/ffffff?text=DesignHub",
  },
  {
    name: "TechCorp",
    logo: "https://via.placeholder.com/200x80/d4af37/ffffff?text=TechCorp",
  },
  {
    name: "DesignHub",
    logo: "https://via.placeholder.com/200x80/d4af37/ffffff?text=DesignHub",
  },
];

const testimonials = [
  {
    name: "Muhammad Dawood",
    role: "Former DevOps Intern @TechCreator",
    avatar: "./assets/muhammad-dawood-img.jpg",
    text: "I asked for a simple portfolio, but what I received was thoughtful, clean, and far beyond expectations. The attention to detail, responsiveness, and creative touch truly impressed me. It's rare to find someone who listens, learns, and delivers so well — especially so early in their journey. I'm genuinely happy with the result and would gladly collaborate again. Highly recommended for any frontend work!",
    stars: 5,
  },
  {
    name: "Wajeeha Sultan",
    role: "Frontend Developer - Freelancer",
    avatar: "./assets/wajeeha-sultan.jpg",
    text: "Collaborating with this developer across three distinct projects was incredibly smooth and inspiring. From layout planning to final execution, every stage reflected a deep understanding of both UI/UX design and frontend development. The interfaces were clean, responsive, and user-focused. Creativity and problem-solving were evident throughout the process. Truly impressed by the professionalism, communication, and dedication shown. Highly recommended for anyone seeking quality web design and development work.",
    stars: 5,
  },
  {
    name: "Zaheer Abbas",
    role: " Web Developer - Freelancer",
    avatar: "./assets/zaheer-abbas.jpg",
    text: "Working with Ubaid Ahmad has been a pleasure. His strong attention to detail and willingness to learn stand out. He tackles challenges with positivity and communicates clearly. Ubaid adapts quickly to new tools and applies them effectively. With passion, dedication, and a great attitude, he&apos;s a valuable contributor to any project or development team.",
    stars: 4,
  },
  {
    name: "Umair Amjad",
    role: "Software Engineer at TechCreator",
    avatar: "./assets/umair-amjad.jpg",
    text: "Getting the chance to work with Ubaid Ahmad has been genuinely uplifting. He brings clarity, focus, and a deep sense of responsibility to everything he does. Even when things get hectic, he stays calm and thoughtful, always looking for smart solutions. What really stands out is his hunger to learn and grow-it makes him adaptable and sharp in fast-moving environments. Ubaid is reliable, easy to work with, and someone you're glad to have on your team.",
    stars: 5,
  },
];

// --- Utility Functions ---

// Dynamic Counter Function
function animateCounter(element, target, duration = 1500) {
  const start = 0;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const current = Math.min(start + (target * progress) / duration, target);
    element.textContent = Math.floor(current);

    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = target; // Ensure it hits the exact target
    }
  }

  window.requestAnimationFrame(step);
}

// Function to handle multiple project types
function getProjectTypeClass(type) {
  switch (type) {
    case "client-based":
      return "type-client";
    case "personal":
      return "type-personal";
    case "experience-based":
      return "type-experience";
    case "sale":
      return "type-sale";
    case "maintenance":
      return "type-maintenance";
    case "archive":
      return "type-archive";
    case "featured":
      return "type-featured";
    case "ui-ux":
      return "type-ui-ux";
    case "design-prototype":
      return "type-design-prototype";
    case "frontend":
      return "type-frontend";
    case "backend":
      return "type-backend";
    case "fullstack":
      return "type-fullstack";
    case "devops":
      return "type-devops";
    case "demo":
      return "type-demo";
    case "team-project":
      return "type-team";
    case "solo-project":
      return "type-solo";
    case "clone":
      return "type-clone";
    case "educational":
      return "type-educational";
    case "template":
      return "type-template";
    case "micro-project":
      return "type-micro";
    default:
      return "";
  }
}

// Mobile Menu
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMobileMenu = document.getElementById("closeMobileMenu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeMobileMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove("active");
    }
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

// --- Rendering Functions ---

// Render Skills
function renderSkills() {
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = skills
    .map(
      (skill) => `
        <div class="skill-card glass-card animate-on-scroll slide-up">
            <span>${skill.name}</span>
        </div>
    `
    )
    .join("");
}

// Render Experience
function renderExperience() {
  const timeline = document.getElementById("experienceTimeline");
  const loadMoreBtn = document.getElementById("loadMoreExperience");

  const visibleExperiences = experience.filter((exp) => exp.isInitiallyVisible);
  const allExperiences = experience;

  timeline.innerHTML = allExperiences
    .map(
      (exp) => `
        <div class="experience-item glass-card animate-on-scroll slide-up ${
          exp.isInitiallyVisible ? "" : "hidden"
        }">
            <h3 class="experience-title">${exp.title}</h3>
            <p class="experience-company">${exp.company}</p>
            <p class="experience-period">${exp.period}</p>
            <p class="experience-description">${exp.description}</p>
        </div>
    `
    )
    .join("");

  // Hide button if all experiences are visible
  if (visibleExperiences.length === allExperiences.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

// Experience Load More function
function loadMoreExperience() {
  const hiddenItems = document.querySelectorAll(
    "#experienceTimeline .experience-item.hidden"
  );

  const itemsToShow = 2;

  for (let i = 0; i < Math.min(itemsToShow, hiddenItems.length); i++) {
    hiddenItems[i].classList.remove("hidden");
    hiddenItems[i].classList.add("animate-on-scroll", "slide-up");
    initScrollAnimations([hiddenItems[i]]);
  }

  const remainingHiddenItems = document.querySelectorAll(
    "#experienceTimeline .experience-item.hidden"
  );
  const loadMoreBtn = document.getElementById("loadMoreExperience");

  if (remainingHiddenItems.length === 0) {
    loadMoreBtn.style.display = "none";
  }
}

// Render Projects to handle multiple types
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card glass-card animate-on-scroll zoom-in" data-project-id="${
          project.id
        }" aria-label="View project ${project.title}">
            <img src="${project.image}" alt="Screenshot of the ${
        project.title
      } project" class="project-image">
            <div class="project-content">
                ${project.type
                  .map(
                    (type) =>
                      `<span class="project-type-tag ${getProjectTypeClass(
                        type
                      )}">${type.replace("-", " ")}</span>`
                  )
                  .join("")}
                <h3 class="project-title">${project.title}</h3>
                <p class="project-summary">${project.summary}</p>
                <div class="project-tech">
                    ${project.tech
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
            </div>
        </div>
    `
    )
    .join("");

  // Add click listeners
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = parseInt(card.dataset.projectId);
      openProjectModal(projectId);
    });
  });
}

// Project Modal
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("projectModalContent");

  modalContent.innerHTML = `
        <img src="${project.image}" alt="Full view of the ${
    project.title
  } project" class="modal-project-image">
        <h2 class="modal-project-title">${project.title}</h2>
        <div class="project-type-tags" style="margin-bottom: 1rem;">
            ${project.type
              .map(
                (type) =>
                  `<span class="project-type-tag ${getProjectTypeClass(
                    type
                  )}">${type.replace("-", " ")}</span>`
              )
              .join("")}
        </div>
        <div class="project-tech" style="margin-top: 1rem;">
            ${project.tech
              .map((tech) => `<span class="tech-tag">${tech}</span>`)
              .join("")}
        </div>
        <p class="modal-project-details">${project.details}</p>
        <div class="modal-project-links">
            <a href="${
              project.demo
            }" class="modal-link glow-hover" target="_blank" aria-label="Live Demo of ${
    project.title
  }">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="${
              project.github
            }" class="modal-link glow-hover" target="_blank" aria-label="View Code for ${
    project.title
  } on GitHub">
                <i class="fab fa-github"></i> View Code
            </a>
        </div>
    `;

  // Use a slight delay to ensure CSS classes for animation are applied correctly
  setTimeout(() => {
    modal.classList.add("active");
    document.body.classList.add("modal-open");
  }, 10);
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("active");
  // Delay body class removal to allow animation to finish
  setTimeout(() => {
    document.body.classList.remove("modal-open");
  }, 500); // Must match modal transition duration
}

// Render Clients
function renderClients() {
  const clientsTrack = document.getElementById("clientsTrack");
  // Duplicate array content for smooth, seamless loop
  const clientsForLoop = [...clients, ...clients];

  clientsTrack.innerHTML = clientsForLoop
    .map(
      (client) => `
        <div class="client-logo glass-card" role="img" aria-label="Logo for client ${client.name}">
            <img src="${client.logo}" alt="${client.name} logo">
        </div>
    `
    )
    .join("");
}

// Render Testimonials
function renderTestimonials() {
  const testimonialsGrid = document.getElementById("testimonialsGrid");
  testimonialsGrid.innerHTML = testimonials
    .map(
      (testimonial, index) => `
        <div class="testimonial-card glass-card animate-on-scroll fade-in" data-testimonial-index="${index}" aria-label="Testimonial from ${
        testimonial.name
      }">
            <div class="testimonial-header">
                <img src="${testimonial.avatar}" alt="Avatar of ${
        testimonial.name
      }" class="testimonial-avatar">
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
            <p class="testimonial-text">${testimonial.text}</p>
            <div class="testimonial-stars" aria-label="${
              testimonial.stars
            } out of 5 stars">
                ${'<i class="fas fa-star"></i>'.repeat(testimonial.stars)}
            </div>
        </div>
    `
    )
    .join("");

  document.querySelectorAll(".testimonial-card").forEach((card) => {
    card.addEventListener("click", () => {
      const index = parseInt(card.dataset.testimonialIndex);
      openTestimonialModal(index);
    });
  });
}

// Testimonial Modal
function openTestimonialModal(index) {
  const testimonial = testimonials[index];
  if (!testimonial) return;

  const modal = document.getElementById("testimonialModal");
  const modalContent = document.getElementById("testimonialModalContent");

  modalContent.innerHTML = `
        <div class="testimonial-header">
            <img src="${testimonial.avatar}" alt="Avatar of ${
    testimonial.name
  }" class="testimonial-avatar">
            <div class="testimonial-info">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.role}</p>
            </div>
        </div>
        <div class="testimonial-stars" aria-label="${
          testimonial.stars
        } out of 5 stars">
            ${'<i class="fas fa-star"></i>'.repeat(testimonial.stars)}
        </div>
        <p class="testimonial-modal-text">${testimonial.text}</p>
    `;

  // Use a slight delay to ensure CSS classes for animation are applied correctly
  setTimeout(() => {
    modal.classList.add("active");
    document.body.classList.add("modal-open");
  }, 10);
}

function closeTestimonialModal() {
  const modal = document.getElementById("testimonialModal");
  modal.classList.remove("active");
  // Delay body class removal to allow animation to finish
  setTimeout(() => {
    document.body.classList.remove("modal-open");
  }, 500); // Must match modal transition duration
}

// Scroll Animations
function initScrollAnimations(elements = null) {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scrolled-in");
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0) scale(1)";
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToObserve =
    elements || document.querySelectorAll(".animate-on-scroll");

  elementsToObserve.forEach((el) => {
    if (!el.classList.contains("scrolled-in")) {
      el.style.opacity = "0";
      if (el.classList.contains("slide-up")) {
        el.style.transform = "translateY(30px)";
      } else if (el.classList.contains("zoom-in")) {
        el.style.transform = "scale(0.9)";
      }
      observer.observe(el);
    }
  });
}

// Initialize Counters
function initCounters() {
  const experienceCountEl = document.getElementById("experienceCount");
  const projectsCountEl = document.getElementById("projectsCount");
  const clientsCountEl = document.getElementById("clientsCount");

  const totalExperiences = 1;
  const totalProjects = 7;
  const totalClients = 3;

  const counterObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(experienceCountEl, totalExperiences);
          animateCounter(projectsCountEl, totalProjects);
          animateCounter(clientsCountEl, totalClients);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsBar = document.querySelector(".stats-bar");
  if (statsBar) {
    counterObserver.observe(statsBar);
  }
}

// --- Initialization ---

// Hide Loader on Load
function hideLoader() {
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.classList.add("hidden");
    // Remove loader element after transition for clean DOM
    setTimeout(() => loader.remove(), 500);
  }
}

// Initialize Everything
document.addEventListener("DOMContentLoaded", () => {
  // Render dynamic content
  renderSkills();
  renderExperience();
  renderProjects();
  //   renderClients();
  renderTestimonials();

  // Initialize mobile menu
  initMobileMenu();

  // Experience Load More listener
  document
    .getElementById("loadMoreExperience")
    .addEventListener("click", loadMoreExperience);

  // Modal listeners
  document
    .getElementById("closeProjectModal")
    .addEventListener("click", closeProjectModal);
  document
    .getElementById("closeTestimonialModal")
    .addEventListener("click", closeTestimonialModal);

  // Close modals when clicking outside the content
  document.getElementById("projectModal").addEventListener("click", (e) => {
    if (e.target.id === "projectModal") {
      closeProjectModal();
    }
  });

  document.getElementById("testimonialModal").addEventListener("click", (e) => {
    if (e.target.id === "testimonialModal") {
      closeTestimonialModal();
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        // Adjust scroll position for the floating header
        const headerHeight =
          document.querySelector(".glass-header").offsetHeight;
        const offset = 16; // 1rem top margin on header
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - (headerHeight + offset);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Initialize scroll animations and counters after content is rendered
  setTimeout(() => {
    initScrollAnimations();
    initCounters();
    // 2. Hide loader after a short delay to ensure content is ready
    hideLoader();
  }, 300);
});
