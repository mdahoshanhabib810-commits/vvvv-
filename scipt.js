
/* =====================================
   HABIB PORTFOLIO JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

  const profilePhoto = document.querySelector(".my-photo");

  if (profilePhoto) {
    const hideUnavailablePhoto = () => {
      profilePhoto.hidden = true;
    };

    profilePhoto.addEventListener("error", hideUnavailablePhoto, { once: true });

    if (profilePhoto.complete && profilePhoto.naturalWidth === 0) {
      hideUnavailablePhoto();
    }
  }

  // =================================
  // MOBILE MENU
  // =================================

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("active");

      menuBtn.setAttribute("aria-expanded", String(isOpen));

      menuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

    });

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML =
          '<i class="fa-solid fa-bars"></i>';

      });

    });

  }


  // =================================
  // TYPING ANIMATION
  // =================================

  const typing = document.getElementById("typing");

  if (typing) {

    const words = [
      "Web Developer",
      "Programmer",
      "Software Developer",
      "Creative Designer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

      const currentWord = words[wordIndex];

      charIndex += deleting ? -1 : 1;

      typing.textContent =
        currentWord.substring(0, charIndex);

      let delay = deleting ? 55 : 100;

      if (!deleting && charIndex === currentWord.length) {

        deleting = true;
        delay = 1300;

      } else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        delay = 350;

      }

      setTimeout(typeEffect, delay);

    }

    typeEffect();

  }


  // =================================
  // BACK TO TOP BUTTON
  // =================================

  const topBtn = document.getElementById("topBtn");

  if (topBtn) {

    window.addEventListener("scroll", () => {

      topBtn.classList.toggle(
        "show",
        window.scrollY > 300
      );

    });

    topBtn.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  // =================================
  // CONTACT FORM DEMO
  // =================================

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", event => {

      event.preventDefault();

      const name = document.getElementById("name").value.trim();

      const userMessage =
        document.getElementById("userMessage").value.trim();

      const message = document.getElementById("message");

      if (!name || !userMessage) {
        message.textContent = "Please complete all fields.";
        return;
      }

      message.textContent =
        `Thank you, ${name}! Your demo message was submitted.`;

      contactForm.reset();

    });

  }


  // =================================
  // PROJECT CARD ANIMATION
  // =================================

  const projectCards =
    document.querySelectorAll(".project-card");

  projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

      card.classList.add("project-active");

    });

    card.addEventListener("mouseleave", () => {

      card.classList.remove("project-active");

    });

  });


  // =================================
  // ACTIVE NAVIGATION
  // =================================

  const sections =
    document.querySelectorAll("main section[id]");

  const navItems =
    document.querySelectorAll(".nav-links a");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navItems.forEach(link => {

            const target =
              link.getAttribute("href");

            link.classList.toggle(
              "active-link",
              target === "#" + entry.target.id
            );

          });

        }

      });

    }, {
      threshold: 0.35
    });

    sections.forEach(section => {

      observer.observe(section);

    });

  }

});
