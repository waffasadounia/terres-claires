const menuButton = document.querySelector(".menu-toggle button");
const navigation = document.querySelector("#navigation-principale");

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Ouvrir le menu");
}

menuButton.addEventListener("click", function () {
  navigation.classList.toggle("is-open");

  const menuIsOpen = navigation.classList.contains("is-open");

  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.setAttribute(
    "aria-label",
    menuIsOpen ? "Fermer le menu" : "Ouvrir le menu"
  );
});

const menuLinks = navigation.querySelectorAll("a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    closeMenu();
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});
