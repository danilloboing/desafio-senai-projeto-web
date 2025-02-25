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

  const inputFields = document.querySelectorAll(".custom-input");
  inputFields.forEach((field) => {
    field.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });
    field.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused");
    });
  });

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fields = {
      name: document.getElementById("name"),
      email: document.getElementById("email"),
      message: document.getElementById("message"),
    };

    const values = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      message: fields.message.value,
    };

    Object.values(fields).forEach((field) => {
      field.style.border = "";
    });

    const emptyFields = Object.entries(values).filter(([_, value]) => !value);

    if (emptyFields.length > 0) {
      emptyFields.forEach(([key]) => {
        showRequiredWarn(fields[key]);
      });

      if (!validateEmail(values.email)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "E-mail inválido!",
          confirmButtonColor: "#ff7e67",
        });
        return;
      }
    }

    Swal.fire({
      icon: "success",
      title: "Mensagem enviada!",
      text: "Em breve entraremos em contato.",
      confirmButtonColor: "#4CAF50",
    });

    form.reset();
  });

  function validateEmail(email) {
    console.log(email);
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  function showRequiredWarn(element) {
    console.log(element);
    element.style.border = "1px solid red";
  }
});
