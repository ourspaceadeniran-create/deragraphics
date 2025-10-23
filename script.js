// Responsive mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Year auto update
document.getElementById('year').textContent = new Date().getFullYear();
