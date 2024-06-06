const swiperDelivery = new Swiper(".delivery-swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".delivery-button-next",
    prevEl: ".delivery-button-prev",
  },
});
