// ==============================
// SLIDER SİSTEMİ
// ==============================

const sliderItems =
  document.querySelectorAll(".slider-item");

const nextButton =
  document.querySelector(".bi-chevron-right");

const prevButton =
  document.querySelector(".bi-chevron-left");

const dots =
  document.querySelectorAll(".slider-dot");

const sliderContainer =
  document.querySelector(".slider");

let currentIndex = 0;
let autoSlideInterval;

// Slide göster
const showSlide = (index) => {

  if (sliderItems.length === 0) return;

  sliderItems.forEach((item) =>
    item.classList.remove("active")
  );

  dots.forEach((dot) =>
    dot.classList.remove("active")
  );

  sliderItems[index]?.classList.add("active");

  dots[index]?.classList.add("active");
};

// Sonraki slide
const nextSlide = () => {

  currentIndex =
    (currentIndex + 1) % sliderItems.length;

  showSlide(currentIndex);
};

// Önceki slide
const prevSlide = () => {

  currentIndex =
    (currentIndex - 1 + sliderItems.length) %
    sliderItems.length;

  showSlide(currentIndex);
};

// Otomatik başlat
const startAutoSlide = () => {

  if (sliderItems.length > 1) {

    autoSlideInterval =
      setInterval(nextSlide, 5000);

  }
};

// Otomatik durdur
const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

// Sağ buton
nextButton?.addEventListener("click", () => {

  stopAutoSlide();

  nextSlide();

  startAutoSlide();
});

// Sol buton
prevButton?.addEventListener("click", () => {

  stopAutoSlide();

  prevSlide();

  startAutoSlide();
});

// Dot sistemi
dots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    stopAutoSlide();

    currentIndex = index;

    showSlide(currentIndex);

    startAutoSlide();

  });

});

// Hover olunca durdur
sliderContainer?.addEventListener(
  "mouseover",
  stopAutoSlide
);

// Hover bitince başlat
sliderContainer?.addEventListener(
  "mouseleave",
  startAutoSlide
);

// Başlat
if (sliderItems.length > 0) {

  showSlide(currentIndex);

  startAutoSlide();

}