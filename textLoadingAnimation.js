document.addEventListener("DOMContentLoaded", (event) => {
   //gsap.registerPlugin(ScrollTrigger)
    
    let loopTml = gsap.timeline({repeat:-1, yoyo: true});
    
    loopTml.from("h2", {
        scale: 1.4,
        duration: 0.5,
        ease: "power2.out"
        
    })


});
