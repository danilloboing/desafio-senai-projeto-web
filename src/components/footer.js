export default function createFooter() {
  const footer = document.getElementById("footer");

  footer.innerHTML = `
      <footer class="footer bg-dark text-light py-4">
          <div class="container text-center">
              <div class="row">
                  <!-- Informações do site -->
                  <div class="col-md-4 mb-3">
                      <h4>EcoVibe 🌱</h4>
                      <p>Cuidando do planeta, um passo de cada vez.</p>
                  </div>
  
                  <!-- Contato -->
                  <div class="col-md-4 mb-3">
                      <h5>Contato</h5>
                      <p>Email: <a href="mailto:contato@ecovibe.com" class="text-light">contato@ecovibe.com</a></p>
                      <p>Telefone: <a href="tel:+559999999999" class="text-light">+55 99 9999-9999</a></p>
                  </div>
  
                  <!-- Redes Sociais -->
                  <div class="col-md-4 mb-3">
                      <h5>Redes Sociais</h5>
                      <a href="#" class="text-light me-3"><i class="fab fa-facebook fa-2x"></i></a>
                      <a href="#" class="text-light me-3"><i class="fab fa-instagram fa-2x"></i></a>
                      <a href="#" class="text-light me-3"><i class="fab fa-twitter fa-2x"></i></a>
                      <a href="#" class="text-light"><i class="fab fa-linkedin fa-2x"></i></a>
                  </div>
              </div>
  
              <hr class="my-3 border-light">
              <p class="mb-0">&copy; 2024 - Todos os direitos reservados | EcoVibe</p>
          </div>
      </footer>
    `;
}
