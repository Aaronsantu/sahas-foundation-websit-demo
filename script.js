document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Copy Bank / Contact Info Handler
function copyDetails() {
  const info = "Sahas Foundation\nEmail: sahasfoundation16@gmail.com\nLocation: Kakrola More, Dwarka, New Delhi\nRegistered under Indian Trusts Act, 1882 (12A, 80G, FCRA)";
  navigator.clipboard.writeText(info).then(() => {
    alert('Sahas Foundation trust and contact details copied to clipboard!');
  }).catch(() => {
    alert('Failed to copy. Please manually select the info.');
  });
}