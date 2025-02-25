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

  // Add custom styles
  const style = document.createElement("style");
  style.textContent = `
    .eco-navbar {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      padding: 15px 0;
      transition: all 0.3s ease;
    }
    
    .eco-navbar.scrolled {
      padding: 10px 0;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    }
    
    .navbar-brand {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
    }
    
    .brand-text {
      background: linear-gradient(90deg, #2e7d32, #81c784);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    
    .navbar-brand img {
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      transition: transform 0.3s ease;
    }
    
    .navbar-brand:hover img {
      transform: rotate(15deg);
    }
    
    .nav-link {
      font-size: 1.05rem;
      font-weight: 500;
      color: #333;
      margin: 0 5px;
      padding: 8px 15px;
      border-radius: 8px;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 50%;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #2e7d32, #81c784);
      transition: all 0.3s ease;
      transform: translateX(-50%);
      opacity: 0;
    }
    
    .nav-link:hover {
      color: #2e7d32;
      background-color: rgba(46, 125, 50, 0.05);
    }
    
    .nav-link:hover::after {
      width: 60%;
      opacity: 1;
    }
    
    .nav-link.active {
      color: #2e7d32;
      font-weight: 600;
    }
    
    .nav-link.active::after {
      width: 60%;
      opacity: 1;
    }
    
    .btn-subscribe {
      background: linear-gradient(90deg, #2ecc71, #27ae60);
      color: white;
      padding: 8px 20px;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
      border: none;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    
    .btn-subscribe::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: all 0.6s ease;
      z-index: -1;
    }
    
    .btn-subscribe:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(46, 204, 113, 0.4);
      color: white;
    }
    
    .btn-subscribe:hover::before {
      left: 100%;
    }
    
    @media (max-width: 992px) {
      .nav-link {
        padding: 10px 15px;
        margin: 5px 0;
      }
      
      .nav-link::after {
        bottom: 7px;
      }
      
      .btn-subscribe {
        margin-top: 10px;
        width: 100%;
        text-align: center;
      }
    }
  `;
  document.head.appendChild(style);

  // Add scroll effect
  const scrollScript = document.createElement("script");
  scrollScript.textContent = `
    document.addEventListener('DOMContentLoaded', function() {
      const navbar = document.querySelector('.eco-navbar');
      
      // Set active link based on current page
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll('.nav-link');
      
      navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath || 
            (linkPath !== '/' && currentPath.includes(linkPath))) {
          link.classList.add('active');
        }
      });
      
      // Add scroll effect
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
