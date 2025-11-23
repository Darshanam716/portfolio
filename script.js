// Typing effect for roles
const typingText = document.getElementById("typing-text");
const roles = [
  "Full-Stack Developer",
  "AI / ML Enthusiast",
  "Web Developer",
  "Problem Solver (DSA)",
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typingText) return;

  const current = roles[roleIndex];
  let displayText;

  if (!deleting) {
    displayText = current.slice(0, ++charIndex);
  } else {
    displayText = current.slice(0, --charIndex);
  }

  typingText.textContent = displayText;

  let delay = 100;

  if (!deleting && charIndex === current.length) {
    delay = 1300;
    deleting = true;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();

// Mobile navbar
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Close nav when clicking a link (on mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
}

// Certificate modal viewer
function openModal(imgSrc) {
    const modal = document.getElementById("certificate-modal");
    const img = document.getElementById("cert-img");
    modal.style.display = "block";
    img.src = `assets/certificates/${imgSrc}`; 
}

function closeModal() {
    document.getElementById("certificate-modal").style.display = "none";
}

// Back to top button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (!backToTop) return;
  if (window.scrollY > 350) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Contact form (simple front-end only)
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
      if (formStatus) {
        formStatus.textContent = "Please fill in all fields.";
      }
      return;
    }

    // Simple mailto approach
    const mailtoLink = `mailto:amdarshan557@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;

    window.location.href = mailtoLink;

    if (formStatus) {
      formStatus.textContent = "Opening your email client...";
    }

    contactForm.reset();
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
