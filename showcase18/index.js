// Air
const entries = document.querySelectorAll(".entry");

entries.forEach((entry) => {
  let entryMeta = entry.querySelector(".entry__meta");
  let entryMedia = entry.querySelector(".entry__media");

  gsap.set(entryMeta, {
    xPercent: -100,
    opacity: 0,
  });
  gsap.set(entryMedia, {
    xPercent: 100,
    opacity: 0,
  });

  gsap.to(entryMeta, {
    scrollTrigger: {
      trigger: entry,
      start: "top bottom",
      end: "bottom 90%",
      scrub: true,
    },
    xPercent: 0,
    opacity: 1,
  });
  gsap.to(entryMedia, {
    scrollTrigger: {
      trigger: entry,
      start: "top bottom",
      end: "bottom 90%",
      scrub: true,
    },
    xPercent: 0,
    opacity: 1,
  });

  // let tl = gsap.timeline({
  // 	scrollTriger: {
  // 		trigger: entry,
  // 		start:'top bottom',
  // 		end: 'bottom 90%',
  // 		scrub: true,
  // 		markers: true
  // 	}
  // })

  // tl.fromTo(entryMeta, {xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1});
  // tl.fromTo(entryMedia, {xPercent: 100, opacity: 0}, {xPercent: 0, opacity: 1}, '<');
});

//lenis smooth scroling
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
