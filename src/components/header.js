export function createHeader() {
  const nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-expand-lg", "sticky-top", "eco-navbar");

  nav.innerHTML = `
    <div class="container-fluid w-100 px-4">
      <a class="navbar-brand fw-bold" href="/">
        <img src="/planet-earth.png" alt="logo" width="36" height="36" class="d-inline-block align-text-top me-2">
        <span class="brand-text">EcoVibe</span>
      </a>
      <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="/"><i class="fas fa-home me-1"></i>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/carbon-neutral/index.html"><i class="fas fa-leaf me-1"></i>CO₂ Neutro</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/about/index.html"><i class="fas fa-info-circle me-1"></i>Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/pages/contact/index.html"><i class="fas fa-envelope me-1"></i>Contato</a>
          </li>
        </ul>
        <div class="d-flex gap-2">
          <a class="btn btn-subscribe" href="/pages/subscription/index.html">Inscreva-se</a>
        </div>
      </div>
    </div>
  `;

  const scrollScript = document.createElement("script");
  scrollScript.textContent = `
    document.addEventListener('DOMContentLoaded', function() {
      const navbar = document.querySelector('.eco-navbar');
      
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll('.nav-link');
      
      navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath || 
            (linkPath !== '/' && currentPath.includes(linkPath))) {
          link.classList.add('active');
        }
      });
      
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    });
  `;
  document.body.appendChild(scrollScript);

  document.body.prepend(nav);
}
