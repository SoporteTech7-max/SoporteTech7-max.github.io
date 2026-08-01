javascript
/* =========================================
   SOPORTETECH - SCRIPT.JS
========================================= */


/* =========================================
   MENÚ MÓVIL
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
      menuToggle.innerHTML = "✕";
    } else {
      menuToggle.innerHTML = "☰";
    }

  });


  // Cerrar menú al seleccionar una opción

  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("active");

      menuToggle.innerHTML = "☰";

    });

  });

}


/* =========================================
   HEADER AL HACER SCROLL
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


/* =========================================
   ANIMACIONES AL HACER SCROLL
========================================= */

const animatedElements = document.querySelectorAll(
  ".service-card, .benefit-card, .step, .contact-info, .contact-form"
);


animatedElements.forEach(element => {

  element.classList.add("reveal");

});


const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.15
  }
);


animatedElements.forEach(element => {

  observer.observe(element);

});


/* =========================================
   FORMULARIO → WHATSAPP
========================================= */

const contactForm = document.getElementById("contactForm");


if (contactForm) {

  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Obtener datos del formulario

    const nombre =
      document.getElementById("nombre").value.trim();

    const telefono =
      document.getElementById("telefono").value.trim();

    const correo =
      document.getElementById("correo").value.trim();

    const servicio =
      document.getElementById("servicio").value;

    const mensaje =
      document.getElementById("mensaje").value.trim();


    // Validar nombre y teléfono

    if (!nombre || !telefono) {

      alert(
        "Por favor, completa tu nombre y teléfono."
      );

      return;

    }


    // Número de WhatsApp de SoporteTech

    const numeroWhatsApp =
      "50768129567";


    // Crear mensaje

    let texto =
      `Hola, soy ${nombre}.%0A%0A`;


    texto +=
      `📞 Teléfono: ${telefono}%0A`;


    texto +=
      `📧 Correo: ${
        correo || "No indicado"
      }%0A`;


    texto +=
      `🛠️ Servicio: ${
        servicio || "No seleccionado"
      }%0A%0A`;


    texto +=
      `📝 Problema:%0A${
        mensaje || "No especificado"
      }`;


    // Crear enlace de WhatsApp

    const url =
      `https://wa.me/${numeroWhatsApp}?text=${texto}`;


    // Abrir WhatsApp

    window.open(
      url,
      "_blank"
    );


    // Limpiar formulario

    contactForm.reset();

  });

}


/* =========================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================= */

const footerYear =
  document.querySelector(".footer-bottom p");


if (footerYear) {

  const currentYear =
    new Date().getFullYear();


  footerYear.innerHTML =
    `© ${currentYear} SoporteTech. Todos los derechos reservados.`;

}
