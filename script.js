
const menuToggle = document.getElementById("menuToggle");

const mainNav = document.getElementById("mainNav");

// Mobile menu open and close
menuToggle.addEventListener("click", () => {

  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close menu after clicking a navigation link
mainNav.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", () => {

    mainNav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";

  });

});
