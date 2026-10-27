const descriptionMenu = document.querySelector(".indice-descripción");
const descriptionMenuToggle = document.querySelector(".indice-toggle");
const descriptionMenuLinks = document.querySelector("#indice-links");

if (descriptionMenu && descriptionMenuToggle && descriptionMenuLinks) {
    const setMenuOpen = (isOpen) => {
        descriptionMenu.classList.toggle("is-open", isOpen);
        descriptionMenuToggle.setAttribute("aria-expanded", String(isOpen));
        descriptionMenuToggle.setAttribute(
            "aria-label",
            isOpen ? "Ocultar índice de la descripción" : "Mostrar índice de la descripción"
        );
    };

    descriptionMenuToggle.addEventListener("click", () => {
        const isOpen = descriptionMenuToggle.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });

    descriptionMenuLinks.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            setMenuOpen(false);
        }
    });
}
