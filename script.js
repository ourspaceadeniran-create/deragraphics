// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple scroll animation (fade-in on scroll)
const elements = document.querySelectorAll('.portfolio-item, .testimonial, .about p');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
elements.forEach(el => observer.observe(el));
