/* ===========================================
   CREATIVE MIND PORTFOLIO - MAIN JAVASCRIPT
   =========================================== */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  initPortfolio();
  initCertifications();
  initSmoothScroll();
  initMobileMenu();
  initFloatingCTA();
  initScrollAnimations();
});

/* ===========================================
   CERTIFICATION GRID INITIALIZATION
   =========================================== */
function initCertifications() {
  const certificationGrid = document.getElementById("certification-grid");

  if (!certificationGrid || typeof certificationData === "undefined") {
    console.warn("Certification grid or data not found");
    return;
  }

  // Clear example card
  certificationGrid.innerHTML = "";

  certificationData.forEach((cert, index) => {
    const certCard = createCertificationCard(cert, index);
    certificationGrid.appendChild(certCard);
  });
}

function createCertificationCard(cert, index) {
  const card = document.createElement("div");
  card.className =
    "bg-[#0F0F0F] rounded-xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 group cursor-pointer fade-in-up";
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <div class="flex items-start justify-between mb-4">
      <span class="material-symbols-outlined text-accent text-4xl">${cert.icon}</span>
      <span class="text-xs text-white/40 uppercase tracking-wider">${cert.year}</span>
    </div>
    <h3 class="text-xl font-bold mb-2 group-hover:text-accent transition-colors">${cert.title}</h3>
    <p class="text-white/60 text-sm mb-4">${cert.organization}</p>
    <a href="${cert.pdfPath}" target="_blank" 
       class="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all">
      View Certificate
      <span class="material-symbols-outlined text-lg">open_in_new</span>
    </a>
  `;

  return card;
}

/* ===========================================
   PORTFOLIO GRID INITIALIZATION
   =========================================== */
function initPortfolio() {
  const portfolioGrid = document.getElementById("portfolio-grid");

  if (!portfolioGrid || typeof portfolioData === "undefined") {
    console.warn("Portfolio grid or data not found");
    return;
  }

  portfolioData.forEach((project, index) => {
    const projectCard = createProjectCard(project, index);
    portfolioGrid.appendChild(projectCard);
  });
}

function createProjectCard(project, index) {
  const card = document.createElement("div");
  card.className = "group cursor-pointer fade-in-up";
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <div class="relative overflow-hidden rounded-xl aspect-[16/10] mb-6 bg-[#1A1A1A]">
      <img 
        alt="${project.title}"
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        src="${project.image}"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
    </div>
    <div class="flex justify-between items-center">
      <div>
        <h4 class="text-2xl font-bold mb-1 italic">${project.title}</h4>
        <p class="text-white/40 font-sans text-sm">${project.category}</p>
      </div>
      <span class="material-symbols-outlined text-accent opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
        north_east
      </span>
    </div>
  `;

  // Add click event
  card.addEventListener("click", () => {
    if (project.link && project.link !== "#") {
      window.location.href = project.link;
    }
  });

  return card;
}

/* ===========================================
   SMOOTH SCROLL NAVIGATION
   =========================================== */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's just "#"
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

/* ===========================================
   MOBILE MENU (FUTURE IMPLEMENTATION)
   =========================================== */
function initMobileMenu() {
  // Placeholder for mobile menu toggle functionality
  // Can be expanded when hamburger menu is added
  console.log("Mobile menu initialized");
}

/* ===========================================
   FLOATING CTA BUTTON
   =========================================== */
function initFloatingCTA() {
  const floatingCTA = document.querySelector(".fixed.bottom-8.right-8 button");

  if (floatingCTA) {
    floatingCTA.addEventListener("click", function () {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "mailto:hello@creativemind.com";
      }
    });
  }
}

/* ===========================================
   SCROLL ANIMATIONS
   =========================================== */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });
}

/* ===========================================
   HEADER SCROLL EFFECT (OPTIONAL)
   =========================================== */
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
    // Scrolling down
    header.classList.remove("scroll-up");
    header.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains("scroll-down")
  ) {
    // Scrolling up
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});

/* ===========================================
   UTILITY FUNCTIONS
   =========================================== */

// Debounce function for performance
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Log when everything is ready
console.log("✨ Creative Mind Portfolio - Initialized");
