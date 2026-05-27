document.addEventListener('DOMContentLoaded', () => {
  // ── Scroll reveal with child stagger ─────────────────────────
  const STAGGER_MS = 80;
  const STAGGER_SELECTORS = [
    '.reveal-child',          // explicit stagger targets
    '.grid > article',        // portfolio cards
    '.grid > div.relative',   // proceso steps
    '.grid > div.flex',       // value cards
  ];

  const applyStagger = (section) => {
    STAGGER_SELECTORS.forEach(sel => {
      section.querySelectorAll(sel).forEach((el, i) => {
        el.style.setProperty('--stagger-delay', `${i * STAGGER_MS}ms`);
        el.classList.add('reveal-child');
      });
    });
  };

  const childObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.reveal-child').forEach(el => {
          el.classList.add('active');
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  const sectionObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => {
    applyStagger(el);
    sectionObserver.observe(el);
    childObserver.observe(el);
  });

  // ── Mobile menu ───────────────────────────────────────────────
  const menuBtn = document.getElementById('menu-btn');
  const menuIcon = menuBtn?.querySelector('.material-symbols-outlined');
  const mobileMenu = document.getElementById('mobile-menu');

  const animateIcon = (toIcon) => {
    if (!menuIcon) return;
    menuIcon.classList.add('icon-swapping');
    const onEnd = () => {
      menuIcon.removeEventListener('transitionend', onEnd);
      menuIcon.textContent = toIcon;
      menuIcon.classList.remove('icon-swapping');
    };
    menuIcon.addEventListener('transitionend', onEnd, { once: true });
  };

  const openMenu = () => {
    mobileMenu.classList.add('open');
    animateIcon('close');
    menuBtn.setAttribute('aria-label', 'Cerrar menú');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    animateIcon('menu');
    menuBtn.setAttribute('aria-label', 'Abrir menú');
    document.body.style.overflow = '';
  };

  menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // ── Smooth scroll ─────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Nav scroll state ──────────────────────────────────────────
  // .scrolled: height collapses to h-16, bg becomes more opaque
  const nav = document.querySelector('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
      // Keep shadow-sm in sync for extra depth cue
      nav.classList.toggle('shadow-sm', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }
});
