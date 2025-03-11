document.addEventListener("DOMContentLoaded", (event) => {

    let typeSplit = new SplitType("[text-split]",{
        types: "words",
        tagName: "span"
    });

    $("[text-animate]").each(function(index) {
        
        let tml = gsap.timeline({paused:true});

        tml.from($(this).find(".word"), {
            yPercent: 100,
            duration: 0.5,
            ease: "back.out(2)",
            stagger:{
                amount: 0.6
            }
        })

        ScrollTriger.create({
            trigger: $(this),
            start: "top 60%",
            onEnter: () => tml.play()
        });

    })

    console.log("gsap works");
});
