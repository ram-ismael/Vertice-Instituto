import { stats, pillars, programs, strengths, portalBenefits, portalTabs, steps, stories, faculty, news, faq } from './data.js';

const $ = (selector) => document.querySelector(selector);
const render = (selector, items, template) => { $(selector).innerHTML = items.map(template).join(''); };
const picture = (name, alt, className = '') => `<img class="${className}" src="./assets/${name}-640.webp" srcset="./assets/${name}-640.webp 640w, ./assets/${name}-1200.webp 1200w" sizes="(max-width: 700px) 92vw, 32vw" loading="lazy" decoding="async" width="640" height="284" alt="${alt}">`;
const paths = {
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  graduation: '<path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v6c3 3 9 3 12 0v-6M22 9v7"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
  laptop: '<rect x="4" y="4" width="16" height="12" rx="1"/><path d="M2 20h20l-2-4H4l-2 4Z"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2m4 0h2M8 11h2m4 0h2M9 21v-5h6v5"/>',
  chart: '<path d="M4 20v-6m5 6V9m5 11V4m5 16v-9"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 5h3"/>',
  wallet: '<rect x="3" y="6" width="18" height="15" rx="2"/><path d="M3 9V5a2 2 0 0 1 2-2h13m3 8h-6v5h6"/>',
  file: '<path d="M6 2h8l4 4v16H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"/><path d="M14 2v5h5M8 12h7M8 16h7"/>',
  message: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-3-.4-4.2-1L3 21l1.8-5.2A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8 11h8m-8 4h5"/>',
};
const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;

render('#stats-grid', stats, (item) => `<div class="stat"><span class="stat-icon">${icon(item.icon)}</span><div><strong>${item.value}</strong><span>${item.label}</span></div></div>`);
render('#pillars', pillars, (item) => `<article class="pillar"><span class="line-icon">${icon(item.icon)}</span><h3>${item.title}</h3><p>${item.text}</p></article>`);
render('#program-grid', programs, (item) => `<article class="program-card" data-category="${item.category}"><div class="program-image" style="--image-position:${item.position}">${picture(item.image, `Estudantes em ${item.title}`)}<span class="program-category">${item.category}</span></div><div class="program-body"><div><h3>${item.title}</h3><p>${item.meta}</p></div><a href="#contactos" aria-label="Pedir informações sobre ${item.title}">Ver programa <span aria-hidden="true">↗</span></a></div></article>`);
render('#why-grid', strengths, (item) => `<article class="strength"><span class="line-icon">${icon(item.icon)}</span><h3>${item.title}</h3><p>${item.text}</p></article>`);
render('#portal-features', portalBenefits, (item) => `<div class="portal-benefit"><span>${icon(item.icon)}</span><div><strong>${item.title}</strong><small>${item.text}</small></div></div>`);
render('#steps', steps, (item, index) => `<article class="step"><span class="step-number">${String(index + 1).padStart(2, '0')}</span><div><h3>${item.title}</h3><p>${item.text}</p></div><span class="step-arrow" aria-hidden="true">↗</span></article>`);
render('#story-grid', stories, (item) => `<article class="story-card"><span class="quote-mark" aria-hidden="true">“</span><blockquote>${item.quote}</blockquote><div class="person"><img src="./assets/${item.image}.webp" loading="lazy" decoding="async" width="70" height="70" alt="Retrato ilustrativo de ${item.name}"><div><strong>${item.name}</strong><span>${item.role}</span></div></div></article>`);
render('#faculty-grid', faculty, (item) => `<article class="faculty-card"><img src="./assets/${item.image}.webp" loading="lazy" decoding="async" width="480" height="640" alt="Retrato ilustrativo de ${item.name}"><div><span>${item.area}</span><h3>${item.name}</h3><p>“${item.quote}”</p></div></article>`);
render('#news-grid', news, (item) => `<article class="news-card">${picture(item.image, item.title)}<div><span class="news-date">${item.date}</span><h3>${item.title}</h3><p>${item.text}</p><a href="#contactos" aria-label="Saber mais sobre ${item.title}">Saber mais <span aria-hidden="true">↗</span></a></div></article>`);
render('#faq-list', faq, (item) => `<details class="faq-item"><summary>${item.q}<span aria-hidden="true">＋</span></summary><p>${item.a}</p></details>`);
$('#year').textContent = new Date().getFullYear();

const menuButton = $('.menu-toggle');
const mobileMenu = $('#mobile-menu');
const closeMenu = () => { menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menu'); mobileMenu.hidden = true; document.body.classList.remove('menu-open'); };
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); mobileMenu.hidden = !open; document.body.classList.toggle('menu-open', open); });
mobileMenu.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 880) closeMenu(); });

document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach((filter) => { filter.classList.toggle('active', filter === button); filter.setAttribute('aria-pressed', String(filter === button)); });
  document.querySelectorAll('.program-card').forEach((card) => { card.hidden = button.dataset.filter !== 'Todos' && card.dataset.category !== button.dataset.filter; });
}));
document.querySelectorAll('[data-portal-tab]').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('[data-portal-tab]').forEach((tab) => tab.setAttribute('aria-selected', String(tab === button)));
  $('#portal-tab-copy').textContent = portalTabs[button.dataset.portalTab];
}));
$('.portal-tabs').addEventListener('keydown', (event) => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const tabs = [...document.querySelectorAll('[data-portal-tab]')];
  const current = tabs.indexOf(document.activeElement);
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
  tabs[next].focus();
  tabs[next].click();
});

const navLinks = [...document.querySelectorAll('.desktop-nav a, .mobile-menu a:not(.button)')];
const navSections = ['topo', 'instituicao', 'cursos', 'admissoes', 'contactos'].map((id) => document.getElementById(id));
let scrollFrame = 0;
const updateNavigation = () => {
  scrollFrame = 0;
  const header = $('.site-header');
  const position = window.scrollY + header.offsetHeight + Math.min(window.innerHeight * .22, 180);
  let current = 'topo';
  for (const section of navSections) {
    if (section.offsetTop <= position) current = section.id;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = 'contactos';
  for (const link of navLinks) {
    const active = link.hash === `#${current}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  header.classList.toggle('is-scrolled', window.scrollY > 8);
};
const requestNavigationUpdate = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateNavigation); };
window.addEventListener('scroll', requestNavigationUpdate, { passive: true });
window.addEventListener('resize', requestNavigationUpdate);
window.addEventListener('hashchange', requestNavigationUpdate);
window.addEventListener('load', updateNavigation);
updateNavigation();
