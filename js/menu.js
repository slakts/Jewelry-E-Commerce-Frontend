// ==============================
// MOBİL SIDEBAR (MENÜ)
// ==============================

const btnOpenSidebar =
  document.querySelector("#btn-menu") ||
  document.querySelector(".header-mobile");

const btnCloseSidebar =
  document.querySelector("#close-sidebar") ||
  document.querySelector(".header-close-btn");

const sidebar =
  document.querySelector("#sidebar") ||
  document.querySelector(".header-center");

const openMenu = () => {
  if (sidebar) {
    sidebar.classList.add("active");
    sidebar.style.left = "0";
    document.body.style.overflow = "hidden";
  }
};

const closeMenu = () => {
  if (sidebar) {
    sidebar.classList.remove("active");
    sidebar.style.left = "-100%";
    document.body.style.overflow = "auto";
  }
};

btnOpenSidebar?.addEventListener("click", openMenu);

btnCloseSidebar?.addEventListener("click", closeMenu);

// Menü dışına tıklayınca kapat
document.addEventListener("click", (e) => {
  if (
    sidebar?.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !btnOpenSidebar?.contains(e.target)
  ) {
    closeMenu();
  }
});

// ==============================
// SEARCH BAR
// ==============================

const searchToggleBtn =
  document.querySelector(".search-toggle");

const searchCloseBtn =
  document.querySelector(".search-close");

const searchBarWrapper =
  document.querySelector(".search-bar-wrapper");

const openSearchBar = () =>
  searchBarWrapper?.classList.add("active");

const closeSearchBar = () =>
  searchBarWrapper?.classList.remove("active");

searchToggleBtn?.addEventListener(
  "click",
  openSearchBar
);

searchCloseBtn?.addEventListener(
  "click",
  closeSearchBar
);

// ESC ile kapat
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearchBar();
  }
});

// Dışarı tıklayınca kapat
document.addEventListener("click", (e) => {
  if (
    searchBarWrapper?.classList.contains("active") &&
    !searchBarWrapper.contains(e.target) &&
    !searchToggleBtn?.contains(e.target)
  ) {
    closeSearchBar();
  }
});

// ==============================
// MOBİL KATEGORİ DROPDOWN
// ==============================

const categoryItem =
  document.querySelector(".menu-list-item:nth-child(2)");

const categoryLink =
  categoryItem?.querySelector(".menu-link");

const dropdownWrapper =
  categoryItem?.querySelector(".menu-dropdown-wrapper");

categoryLink?.addEventListener("click", (e) => {
  if (window.innerWidth <= 992) {
    e.preventDefault();

    dropdownWrapper?.classList.toggle("open");

    categoryItem?.classList.toggle("active");
  }
});