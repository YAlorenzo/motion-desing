const words = ["Boldness", "Clarity", "Orginality", "Precision"];

let mainTimeLine = gsap.timeline({
  repeat: -1,
});
words.forEach((word) => {
  let textTimeline = gsap.timeline({
    repeat: 1,
    yoyo: true,
    repeatDelay: 6,
  });
  textTimeline.to("#typewriter", {
    text: word,
    duration: 1,
    unUpdate: () => {
      cursorTimeline.restart();
      cursorTimeline.pause();
    },
    onComplete: () => {
      cursorTimeline.play();
    },
  });
  mainTimeLine.add(textTimeline);
});

let cursorTimeline = gsap.timeline({
  repeat: -1,
  repeatDelay: 0.8,
});
cursorTimeline
  .to("#cursor", {
    opacity: 1,
    duration: 0,
  })
  .to("#cursor", {
    opacity: 0,
    duration: 0,
    delay: 0.8,
  });
