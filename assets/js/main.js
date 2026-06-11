const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const closeMenu = document.getElementById('closeMenu');

// باز کردن منو
hamburger.onclick = () => {
  navMenu.style.left = '0';
};

// بستن منو
closeMenu.onclick = () => {
  navMenu.style.left = '-260px';
};

// مخفی شدن همبرگر هنگام اسکرول
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    hamburger.classList.add('hide');
  } else {
    hamburger.classList.remove('hide');
  }
});
