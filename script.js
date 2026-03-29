AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic', disable: 'mobile' });

document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-nav').classList.toggle('open');
});
document.querySelectorAll('.mobile-link, #mobile-nav a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobile-nav').classList.remove('open'));
});

const roles = ['Front-End Developer', 'Angular Specialist', 'React Developer', 'Flutter Developer', 'UI/UX Enthusiast', 'Co-fundador IniPort'];
let ri = 0, ci = 0, deleting = false;
const el = document.getElementById('typed-text');
function type() {
  const cur = roles[ri];
  if (!deleting) {
    el.textContent = cur.substring(0, ci + 1);
    ci++;
    if (ci === cur.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    el.textContent = cur.substring(0, ci - 1);
    ci--;
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 50 : 80);
}
type();
