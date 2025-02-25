export default function createFooter() {
  const footer = document.getElementById("footer");

  footer.innerHTML = `
      <footer class="footer bg-dark text-light py-5">
          <div class="container text-center">
              <div class="row">
                  <div class="col-md-4 mb-4">
                      <h4 class="footer-title">EcoVibe 🌱</h4>
                      <p class="footer-description">Cuidando do planeta, um passo de cada vez.</p>
                  </div>
  
                  <div class="col-md-4 mb-4">
                      <h5 class="footer-subtitle">Contato</h5>
                      <p class="contact-item d-flex gap-2 align-items-center justify-content-center">
                        <span class="social-icon-link d-flex align-items-center justify-content-center">
                          <i class="fas fa-envelope"></i>
                        </span>
                        <a href="mailto:contato@ecovibe.com" class="footer-link">contato@ecovibe.com</a>
                      </p>
                      <p class="contact-item d-flex gap-2 align-items-center justify-content-center">
                        <span class="social-icon-link d-flex align-items-center justify-content-center">
                          <i class="fas fa-phone-alt"></i>
                        </span>
                        <a href="tel:+559999999999" class="footer-link">+55 99 9999-9999</a>
                      </p>
                  </div>
  
                  <div class="col-md-4 mb-4">
                      <h5 class="footer-subtitle">Redes Sociais</h5>
                      <div class="social-container">
                        <a href="#" class="social-icon-link d-flex align-items-center justify-content-center">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon-link d-flex align-items-center justify-content-center">
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="social-icon-link d-flex align-items-center justify-content-center">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon-link d-flex align-items-center justify-content-center">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                  </div>
              </div>
  
              <hr class="footer-divider">
              <p class="copyright">&copy; 2024 - Todos os direitos reservados | EcoVibe</p>
          </div>
      </footer>
    `;
}
