const menuToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        menuToggle.setAttribute("aria-label", isExpanded ? "Abrir menú" : "Cerrar menú");
        navLinks.classList.toggle("is-open", !isExpanded);
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
            navLinks.classList.remove("is-open");
        }
    });
}
