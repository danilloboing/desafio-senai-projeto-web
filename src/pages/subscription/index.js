import Swal from "sweetalert2";
import createFooter from "../../components/footer";
import { createHeader } from "../../components/header";

document.addEventListener("DOMContentLoaded", function () {
  createHeader();
  createFooter();

  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeElements.forEach((element) => {
    observer.observe(element);
  });

  const formGroups = document.querySelectorAll(".form-group");
  formGroups.forEach((group) => {
    const input = group.querySelector(".custom-input, .custom-select");

    input.addEventListener("focus", function () {
      group.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      group.classList.remove("focused");
      
      if (input.value.trim() === '') {
        showFieldError(input, 'Este campo é obrigatório');
      } else {
        clearFieldError(input);
        
        if (input.id === 'email' && !validateEmail(input.value.trim())) {
          showFieldError(input, 'Por favor, insira um e-mail válido');
        }
      }
    });
  });

  const form = document.getElementById("subscription-form");
  const container = document.querySelector(".custom-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    clearAllErrors();

    const fields = {
      name: document.getElementById("name"),
      email: document.getElementById("email"),
      frequency: document.getElementById("frequency"),
      hour: document.getElementById("hour"),
    };

    const values = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      frequency: fields.frequency.value,
      hour: fields.hour.value,
    };

    let hasErrors = false;
    Object.entries(values).forEach(([key, value]) => {
      if (!value) {
        showFieldError(fields[key], 'Este campo é obrigatório');
        hasErrors = true;
      }
    });

    if (values.email && !validateEmail(values.email)) {
      showFieldError(fields.email, 'Por favor, insira um e-mail válido');
      hasErrors = true;
    }
    
    if (values.name && values.name.length < 3) {
      showFieldError(fields.name, 'O nome deve ter pelo menos 3 caracteres');
      hasErrors = true;
    }

    if (hasErrors) {
      const firstErrorField = document.querySelector('.error-message');
      if (firstErrorField) {
        firstErrorField.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    showSuccessMessage(values);
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  function showFieldError(element, message) {
    clearFieldError(element);
    
    element.classList.add('is-invalid');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#dc3545';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    element.parentElement.appendChild(errorDiv);
  }

  function clearFieldError(element) {
    element.classList.remove('is-invalid');
    const errorMessage = element.parentElement.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
  }

  function clearAllErrors() {
    document.querySelectorAll('.is-invalid').forEach(element => {
      clearFieldError(element);
    });
  }

  function verifyFrequency(frequency) {
    switch (frequency) {
      case "dia":
        return "diariamente";
      case "semana":
        return "semanalmente";
      case "mes":
        return "mensalmente";
      default:
        return "";
    }
  }

  function formatHour(hour) {
    if (!hour) return '';
    
    const [hours, minutes] = hour.split(':');
    const hourInt = parseInt(hours);
    
    return `${hourInt}h${minutes}`;
  }

  function showSuccessMessage(values) {
    container.style.transition = 'opacity 0.5s ease';
    container.style.opacity = '0';
    
    setTimeout(() => {
      container.innerHTML = `
        <div class="success-container">
          <div class="success-icon">
            <i class="fas fa-check-circle"></i>
          </div>
          <div class="success-content">
            <h2>Inscrição realizada com sucesso!</h2>
            <p>Olá, <strong>${values.name}</strong>! Sua inscrição foi confirmada.</p>
            <div class="success-details">
              <p><i class="fas fa-envelope"></i> <strong>E-mail:</strong> ${values.email}</p>
              <p><i class="fas fa-calendar-alt"></i> <strong>Frequência:</strong> ${verifyFrequency(values.frequency)}</p>
              <p><i class="fas fa-clock"></i> <strong>Horário preferido:</strong> ${formatHour(values.hour)}</p>
            </div>
            <p class="success-message">Você receberá nossa primeira newsletter em breve. Fique atento à sua caixa de entrada!</p>
            <div class="success-actions">
              <a href="/" class="btn btn-outline-success">Voltar para Home</a>
              <a href="/pages/carbon-neutral/index.html" class="btn btn-success">Saiba mais sobre CO₂</a>
            </div>
          </div>
        </div>
      `;
      
      const successContainer = document.querySelector('.success-container');
      successContainer.style.cssText = `
        background-color: #f8f9fa;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
      `;
      
      const successIcon = document.querySelector('.success-icon');
      successIcon.style.cssText = `
        background: linear-gradient(135deg, #2ecc71, #27ae60);
        color: white;
        font-size: 3rem;
        padding: 2rem 0;
      `;
      
      const successContent = document.querySelector('.success-content');
      successContent.style.cssText = `
        padding: 2rem;
      `;
      
      const successDetails = document.querySelector('.success-details');
      successDetails.style.cssText = `
        background-color: #e9f7ef;
        padding: 1.5rem;
        border-radius: 8px;
        margin: 1.5rem 0;
        text-align: left;
      `;
      
      const successMessage = document.querySelector('.success-message');
      successMessage.style.cssText = `
        font-style: italic;
        color: #666;
        margin: 1.5rem 0;
      `;
      
      const successActions = document.querySelector('.success-actions');
      successActions.style.cssText = `
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
      `;
      
      container.style.opacity = '1';
      
      successContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
  }
});
