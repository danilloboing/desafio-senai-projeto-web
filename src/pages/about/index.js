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
});
