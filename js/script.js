document.addEventListener('DOMContentLoaded', () => {
  // Animate elements as they scroll into view
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3, rootMargin: "0px 0px -100px 0px" });
  document.querySelectorAll('.animatable').forEach(el => observer.observe(el));
  
  // Mobile menu toggle functionality
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  
  const closeMobileMenu = () => {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.style.display = 'none';
  };
  
  hamburger.addEventListener('click', (e) => {
    mobileMenu.classList.toggle('open');
    mobileMenuOverlay.style.display = mobileMenu.classList.contains('open') ? 'block' : 'none';
    e.stopPropagation();
  });
  
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  mobileMenu.addEventListener('click', (e) => {
    if (!e.target.closest('a')) {
      closeMobileMenu();
    }
  });
  
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  });
});
