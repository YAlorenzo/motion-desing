gsap.set("#middle", {
  scale: 0,
  transformOrigin: "50% 50%",
});

let tl = gsap.timeline({
  repeat: -1,
  repeatDelay: 1.6,
  yoyo: true,
});

tl.to("#middle", {
  scale: 1,
  rotation: 360,
  duration: 1.2,
  ease: "elastic.out",
});
tl.fromTo(
  "#left",
  {
    drawSVG: "100% 100%",
  },
  {
    drawSVG: "0% 100%",
    duration: 1.2,
    ease: "power4.inOut",
  }
);
tl.fromTo(
  "#right",
  {
    drawSVG: "0% 0%",
  },
  {
    drawSVG: "0% 100%",
    duration: 1.2,
    ease: "power4.inOut",
  }
);
tl.to("#middle, #left, #right", {
  stroke: "#A41FF6",
  duration: 0.4,
});
