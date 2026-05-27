document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Mobile menu — botón hamburguesa/X toggle
  const menuBtn = document.getElementById('menu-btn');
  const menuIcon = menuBtn?.querySelector('.material-symbols-outlined');
  const mobileMenu = document.getElementById('mobile-menu');

  const openMenu = () => {
    mobileMenu.classList.add('open');
    if (menuIcon) menuIcon.textContent = 'close';
    menuBtn.setAttribute('aria-label', 'Cerrar menú');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    if (menuIcon) menuIcon.textContent = 'menu';
    menuBtn.setAttribute('aria-label', 'Abrir menú');
    document.body.style.overflow = '';
  };

  menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Nav: add shadow on scroll
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('shadow-sm', window.scrollY > 20);
    }, { passive: true });
  }
});
