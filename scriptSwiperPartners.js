const partnersSwiper = new Swiper(".swiper.partners", {
    // Optional parameters
  
    slidesPerView: 1.6,
    //slidesPerGroup: 2,
    spaceBetween: 4,
    loop: true,
    allowTouchMove: false,
  
    // Navigation arrows
    navigation: {
      nextEl: ".partners__arrow--wrapper.right",
      prevEl: ".partners__arrow--wrapper.left",
    },
  });