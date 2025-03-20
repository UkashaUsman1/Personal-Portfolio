// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);

    section.scrollIntoView({ behavior: 'smooth' });

    // Close nav menu on mobile after clicking
    navLinks.classList.remove('show');
  });
});


// Typing animation
const roles = [
    "Frontend Developer !",
    "Web Developer !",
    "JavaScript Developer !",
    "UI/UX Designer !",
    "Canva Designer !"
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let currentRole = roles[roleIndex];
  let isDeleting = false;
  let typingSpan = document.querySelector(".typing");
  
  function typeRole() {
    if (isDeleting) {
      charIndex--;
      typingSpan.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      typingSpan.textContent = currentRole.substring(0, charIndex);
    }
  
    let delay = isDeleting ? 60 : 100;
  
    if (!isDeleting && charIndex === currentRole.length) {
      delay = 1500; // Pause before deleting
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      currentRole = roles[roleIndex];
      delay = 500;
    }
  
    setTimeout(typeRole, delay);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    typeRole();
  });
  