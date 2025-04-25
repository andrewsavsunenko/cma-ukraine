const partnersSwiper = new Swiper(".swiper.partners", {
  direction: "horizontal",
  slidesPerView: 1.6,

  autoplay: { delay: 2000 },

  spaceBetween: 4,
  loop: false,
  allowTouchMove: false,

  // Navigation arrows
  navigation: {
    prevEl: ".partners__arrow--wrapper.right",
    nextEl: ".partners__arrow--wrapper.left",
  },
});
