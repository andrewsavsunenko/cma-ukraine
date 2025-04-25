class App {
  constructor() {
    this.isDesktop = window.innerWidth > 991;

    this._runSplit();
    this._createMask();

    this.animatedText = [...document.querySelectorAll("[text-animate]")];

    this.preloader = document.querySelectorAll("[preloader]");

    this.heroTitle = document.querySelector("[hero-title-animate]");
    this.heroDescription = document.querySelector("[hero-description-animate]");
    this.heroButton = document.querySelector("[hero-button-animate]");

    this.visionPath = $(".vision__line--svg").drawsvg();

    this.aboutYearNumbers = [
      ...document.querySelectorAll("[timelineNumber-animate]"),
    ];

    this.visionNumbers = [...document.querySelectorAll("[visionNumber]")];

    this._textAnimate();
    this._heroTextAnimate();
    this._dividersAnimate();

    this._projectsListAnimate();
    this._partnersLogosAnimate();
    this._visionLineDraw();
    this._timelineNumbersAnimate();
    this._visionNumbersAnimate();

    this._onResize();
    this._onBack();

    this._log(); //remove
  }

  _log() {
    //remove
    console.log(this.heroTitle);
    console.log(this.heroDescription);
    console.log(this.heroButton);
  }
  // general animations

  _runSplit() {
    const splitText = new SplitType("[text-split]", {
      types: "words",
      tagName: "span",
    });

    const splitAboutTimeline = new SplitType("[timelineNumber-animate]", {
      types: "chars",
      tagName: "span",
    });

    const splitVisionNumbers = new SplitType("[visionNumber]", {
      types: "chars",
      tagName: "span",
    });

    console.log("Text Split Run");
  }

  _createMask() {
    document
      .querySelectorAll("[text-split] span.word")
      .forEach(function (item) {
        let c = item.innerHTML;
        item.innerHTML =
          "<span style='display:block; padding-right:0.078rem;'>" +
          c +
          "</span>";
      });
  }

  _textAnimate() {
    this.animatedText.forEach((textNode) => {
      let tm = gsap.timeline({ paused: true });

      tm.fromTo(
        textNode.querySelectorAll("span.word span"),
        {
          yPercent: 95,
        },
        {
          yPercent: 0,
          duration: 1,
          ease: "power3.out",
          stagger: { each: 0.02 },
        }
      );

      ScrollTrigger.create({
        trigger: textNode,
        start: "top 80%",
        end: "top 28%",
        onEnter: () => {
          tm.play();
        },
      });

      ScrollTrigger.create({
        trigger: textNode,
        start: "top 101%",
        onLeaveBack: () => {
          tm.progress(0);
          tm.pause();
        },
      });
    });
  }

  _heroTextAnimate() {
    window.addEventListener("load", () => {
      gsap.fromTo(
        [
          this.heroTitle.querySelectorAll("span.word span"),
          this.heroDescription
            ? this.heroButton
              ? (this.heroDescription.querySelectorAll("span.word span"),
                this.heroButton)
              : this.heroDescription.querySelectorAll("span.word span")
            : this.heroButton,
        ],
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1.2,
          //delay: 1.6,
          delay: this.preloader.length == 1 ? 1.6 : 0.4,
          ease: "power2.out",
          stagger: { each: 0.048 },
        }
      );
    });
  }

  _dividersAnimate() {
    $("[divider-animation]").each(function () {
      let td = gsap.timeline({ paused: true });

      td.from($(this), {
        width: "0%",
        duration: 1.2,
        ease: "power1.out",
      });

      ScrollTrigger.create({
        trigger: $(this),
        start: "top 84%",
        end: "top 32%",
        onEnter: () => {
          td.play();
        },
      });

      ScrollTrigger.create({
        trigger: $(this),
        start: "top 101%",
        onLeaveBack: () => {
          td.progress(0);
          td.pause();
        },
      });
    });
  }

  // section-based animations

  _projectsListAnimate() {
    $("[projectsList-animation]").each(function () {
      let tc = gsap.timeline({ paused: true });

      tc.fromTo(
        $(this),
        { yPercent: this.isDesktop ? 48 : 16 },
        {
          yPercent: 0,
          duration: 0.68,
          ease: this.isDesktop ? "power2.out" : "power1.out",
        }
      );

      ScrollTrigger.create({
        trigger: $(this),
        start: this.isDesktop ? "top 96%" : "top 98%",
        end: "top 72%",
        onEnter: () => {
          tc.play();
        },
      });

      ScrollTrigger.create({
        trigger: $(this),
        start: "top 120%",
        onLeaveBack: () => {
          tc.progress(0);
          tc.pause();
        },
      });
    });
  }

  _partnersLogosAnimate() {
    $("[partners-logo-wrapper]").each(function () {
      let tc = gsap.timeline({ paused: true });

      tc.fromTo(
        $(this).find(".logo__img__b"),
        {
          yPercent: 32,
        },
        {
          yPercent: 0,
          duration: 0.68,
          ease: "power2.out",
          stagger: {
            amount: 0.68,
          },
        }
      );

      ScrollTrigger.create({
        trigger: $(this).find(".logo__img__b"),
        start: "top 96%",
        end: "top 72%",
        onEnter: () => {
          tc.play();
        },
      });

      ScrollTrigger.create({
        trigger: $(this).find(".logo__img__b"),
        start: "top 120%",
        onLeaveBack: () => {
          tc.progress(0);
          tc.pause();
        },
      });
    });
  }

  _visionLineDraw() {
    ScrollTrigger.create({
      trigger: this.visionPath,
      start: "top 48%",
      end: "bottom 12%",
      onUpdate: (self) => this.visionPath.drawsvg("progress", self.progress),
    });
  }

  _timelineNumbersAnimate() {
    this.aboutYearNumbers.forEach((item) => {
      let tm = gsap.timeline({ paused: true });

      tm.fromTo(
        item.querySelectorAll("span.char"),
        {
          yPercent: 0,
        },
        {
          yPercent: -140,
          duration: 1.4,
          ease: "power2.out",
          stagger: { each: 0.12 },
        }
      );

      ScrollTrigger.create({
        trigger: item,
        start: "top 67%",
        end: "top 28%",
        onEnter: () => {
          tm.play();
        },
      });

      ScrollTrigger.create({
        trigger: item,
        start: "top 101%",
        onLeaveBack: () => {
          tm.progress(0);
          tm.pause();
        },
      });
    });
  }

  _visionNumbersAnimate() {
    this.visionNumbers.forEach((item, i) => {
      let tm = gsap.timeline({ paused: true });

      tm.fromTo(
        item.querySelectorAll("span.char"),
        {
          yPercent: this.isDesktop ? -120 : 0,
        },
        {
          yPercent: this.isDesktop ? 0 : -100,
          duration: this.isDesktop ? 1.2 : 1.8,
          ease: "power2.out",
          stagger: { each: 0.12 },
        }
      );

      ScrollTrigger.create({
        trigger: item,
        start: this.isDesktop
          ? i === 1
            ? "top 34%" //for 1st item
            : i === 5
            ? "top 54%" // for 5th item
            : "top 72%" // for the rest
          : "top 82%", // on mobile
        onEnter: () => {
          tm.play();
        },
      });

      ScrollTrigger.create({
        trigger: item,
        start: "top 101%",
        onLeaveBack: () => {
          tm.progress(0);
          tm.pause();
        },
      });
    });
  }

  _onResize() {
    let w = window.innerWidth;
    console.log("innerWidth= " + window.innerWidth);
    console.log("w= " + w);

    function reloadSplit() {
      console.log("reloadSplit() worked");
      if (w !== window.innerWidth && window.innerWidth > 991) {
        w = window.innerWidth;
        // splitText.revert();
        // runSplit();
        console.log("resize worked");
        location.reload();
      }
    }

    function debounce(func, time) {
      var timer;
      return function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(func, time);
      };
    }
    window.addEventListener("resize", debounce(reloadSplit, 300));
  }

  _onBack() {
    window.addEventListener("pageshow", function (event) {
      if (event.persisted) {
        location.reload();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
});

console.log("gsap works");
