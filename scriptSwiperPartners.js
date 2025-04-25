const partnersSwiper = new Swiper(".swiper.partners", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1.6,
  //slidesPerGroup: 2,
  spaceBetween: 4,
  loop: false,
  allowTouchMove: false,

  // Navigation arrows
  navigation: {
    prevEl: ".partners__arrow--wrapper.right",
    nextEl: ".partners__arrow--wrapper.left",
  },
});
