document.addEventListener("DOMContentLoaded", (event) => {

    let typeSplit = new SplitType("[text-split]",{
        types: "words",
        tagName: "span"
    });

    //gsap.registerPlugin(ScrollTrigger)
    
    let loopTml = gsap.timeline({
        
    });
    
    loopTml.from("gsapTest", {
        scale: 1.4,
        duration: 0.5,
        ease: "power2.out"
    })

    console.log("gsap works");
});
