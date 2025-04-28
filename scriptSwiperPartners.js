const partnersSwiper = new Swiper(".swiper.partners", {
  slidesPerView: 1.6,
  spaceBetween: 4,
  allowTouchMove: true,

  // Navigation arrows
  navigation: {
    prevEl: ".partners__arrow--wrapper.left",
    nextEl: ".partners__arrow--wrapper.right",
  },
});
