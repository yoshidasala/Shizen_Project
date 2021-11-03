import anime from "animejs/lib/anime.es.js";

let animation = anime({
  targets: ".rod",
  rotate: [60, -60],
  duration: 3000,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});

export default animation;
