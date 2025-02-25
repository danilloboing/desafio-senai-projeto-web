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
    });
  });

  const form = document.getElementById("subscription-form");
  const container = document.querySelector(".custom-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

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

    Object.values(fields).forEach((field) => {
      field.style.border = "";
    });

    const emptyFields = Object.entries(values).filter(([_, value]) => !value);

    if (emptyFields.length > 0) {
      emptyFields.forEach(([key]) => {
        showRequiredWarn(fields[key]);
      });
    }

    if (!validateEmail(values.email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "E-mail inválido!",
        confirmButtonColor: "#ff7e67",
      });
      return;
    }

    showSuccessMessage(values);
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  function showRequiredWarn(element) {
    console.log(element);
    element.style.border = "1px solid red";
  }

  function verifyFrequency(frequency) {
    switch (frequency) {
      case "dia":
        return "diariamente";
      case "semanal":
        return "semanalmente";
      case "mensal":
        return "mensalmente";
      default:
        return "";
    }
  }

  function showSuccessMessage(values) {
    container.innerHTML = `
          <div class="success-message">
              <h2>✅ Inscrição realizada com sucesso!</h2>
              <p>Obrigado, <strong>${
                values.name
              }</strong>. Você receberá atualizações ${verifyFrequency(
      values.frequency
    )}.</p>
          </div>
      `;

    document.querySelector(".success-message").style.cssText = `
          text-align: center;
          padding: 30px;
          background: #d4edda;
          color: #155724;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          font-size: 18px;
      `;
  }
});
