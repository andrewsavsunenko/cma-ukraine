console.log("script.js works");

const lenis = new Lenis({
  duration: 1.4,
  smoothWheel: true,
  /*
  syncTouch: true,
  infinite: true,
  */
});

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/*const locomotiveScroll = new LocomotiveScroll();*/
