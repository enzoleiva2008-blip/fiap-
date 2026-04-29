/* ==================== NAVBAR ==================== */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

/* Scroll: aplica classe 'scrolled' ao navbar */
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  /* Scroll-to-top */
  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }
});

/* Hamburger menu */
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
}

/* Fechar menu ao clicar em um link */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* Fechar menu ao clicar fora */
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

/* ==================== LINK ATIVO ==================== */
(function setActiveLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ==================== SCROLL-TO-TOP ==================== */
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==================== ANIMAÇÕES DE ENTRADA (SCROLL) ==================== */
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
  observer.observe(el);
});

/* ==================== TOOLTIP AO PASSAR O MOUSE ==================== */
document.querySelectorAll('[data-tooltip]').forEach(el => {
  const tip = document.createElement('span');
  tip.className = 'tooltip-text';
  tip.textContent = el.dataset.tooltip;
  el.style.position = 'relative';
  el.appendChild(tip);
});

/* ==================== ANIMAÇÃO DOS NÚMEROS (STATS) ==================== */
function animateNumber(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    /* Easing: ease-out */
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = prefix + current.toLocaleString('pt-BR') + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const numEls = entry.target.querySelectorAll('[data-target]');
      numEls.forEach(el => animateNumber(el));
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsSections = document.querySelectorAll('.stats-section, .stats-grid, .hero-stats');
statsSections.forEach(sec => statsObserver.observe(sec));
