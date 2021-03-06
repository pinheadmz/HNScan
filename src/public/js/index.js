// ============== THEMES ==============
// Check for theme in local storage and adjust toggle switch on page load
(() => {
  let checked = JSON.parse(localStorage.getItem("checked"));
  if (checked == true) {
    document.querySelector("#themeSwitch").checked = true;
  } else {
    document.querySelector("#themeSwitch").checked = false;
  }
})();

function toggleTheme(e) {
  document.documentElement.classList.add("color-theme-in-transition");

  if (
    localStorage.getItem("theme") === "light" &&
    localStorage.getItem("checked") === "false"
  ) {
    localStorage.setItem("theme", "dark");
    localStorage.setItem("checked", "true");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    localStorage.setItem("checked", "false");
    document.documentElement.removeAttribute("data-theme", "dark");
  }
  setTimeout(() => {
    document.documentElement.classList.remove("color-theme-in-transition");
  }, 1000);
}

// ============== NAVBAR ==============
// Navbar dropdown click event listener
(() => {
  let dropdowns = document.querySelectorAll(".navbarMore");
  for (dropdown of dropdowns) {
    dropdown.addEventListener("click", function(e) {
      // Note, this will only work if navbarMore only has 1 sibling that is a navbar-dropdown
      let sibling = e.target.nextSibling;
      // sibling.classList.toggle("navbar-dropdown-visible");
      sibling.classList.toggle("is-hidden-touch");
    });
  }
})();

function toggleMobileNav(e) {
  const navbarBurger = document.querySelector(".navbar-burger");
  const navbarMenu = document.querySelector(".navbar-menu");
  const moreElement = document.querySelector(".navbarMore");

  if (navbarBurger && navbarMenu && moreElement) {
    navbarBurger.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  }
}

// ============== SEARCH ==============
// Handle searches by hitting the backend for blockchain information
function search() {
  event.preventDefault();
  const searchValue = event.target
    .getElementsByTagName("INPUT")
    .item(0)
    .value.trim();

  const xhr = new XMLHttpRequest();

  //AJAX request to handle search results
  if (searchValue !== "") {
    window.location.href = `/search?q=${searchValue}`;
  }
}

function navDropdownListeners() {
  let dropdowns = document.querySelectorAll(".navbarMore");
  for (dropdown of dropdowns) {
    dropdown.addEventListener("click", function(e) {
      // Note, this will only work if navbarMore only has 1 sibling that is a navbar-dropdown
      let sibling = e.target.nextSibling;
      sibling.classList.toggle("navbar-dropdown-visible");
    });
  }
}

navDropdownListeners();
