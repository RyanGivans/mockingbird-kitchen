const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.16 });
revealEls.forEach((el) => observer.observe(el));

document.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll', window.scrollY * 0.035 + 'px');
}, { passive: true });
