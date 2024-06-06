const swiperServices = new Swiper(".services-swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".services-button-next",
    prevEl: ".services-button-prev",
  },
});
