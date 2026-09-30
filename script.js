// ==========================================================
// ATELIER TERRES CLAIRES
// JavaScript
// ==========================================================

// ==========================================================
// MENU BURGER MOBILE
// ==========================================================

const menuButton = document.querySelector(".menu-toggle button");
const mainNavigation = document.querySelector(".main-navigation");

if (menuButton && mainNavigation) {
  // OUVERTURE / FERMETURE AU CLIC
  menuButton.addEventListener("click", function () {
    mainNavigation.classList.toggle("is-open");

    const menuIsOpen = mainNavigation.classList.contains("is-open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);

    menuButton.setAttribute(
      "aria-label",
      menuIsOpen ? "Fermer le menu" : "Ouvrir le menu",
    );
  });

  // FERMETURE AVEC LA TOUCHE ÉCHAP
  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      mainNavigation.classList.contains("is-open")
    ) {
      mainNavigation.classList.remove("is-open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Ouvrir le menu");

      // Replace le focus sur le bouton burger
      menuButton.focus();
    }
  });
}

// ==========================================================
// SÉLECTEUR DE QUANTITÉ - FICHE PRODUIT
// ==========================================================

const quantityMinus = document.querySelector(".quantity-minus");
const quantityPlus = document.querySelector(".quantity-plus");
const quantityInput = document.querySelector("#quantity");

if (quantityMinus && quantityPlus && quantityInput) {
  // AUGMENTER LA QUANTITÉ
  quantityPlus.addEventListener("click", function () {
    quantityInput.value = Number(quantityInput.value) + 1;
  });

  // DIMINUER LA QUANTITÉ
  quantityMinus.addEventListener("click", function () {
    const quantity = Number(quantityInput.value);

    if (quantity > 1) {
      quantityInput.value = quantity - 1;
    }
  });
}
