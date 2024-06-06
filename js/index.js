const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll(".accordion__trigger").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("accordion__item--active");
  });
});

// burger

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".header__nav").classList.toggle("open");
});
