circle = document.querySelector(".circle");
coke = document.querySelector(".coke");
span = document.querySelector(".leftmost span");
section = document.querySelector(".section-2");

window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.3,
  });
});

span.addEventListener("mouseenter", function () {
  gsap.to(circle, {
    scale: 10,
  });
});
span.addEventListener("mouseleave", function () {
  gsap.to(circle, {
    scale: 1,
  });
  gsap.to(".left span", {
    color: "black",
  });
});

// const rot = function () {
//   const scroll = window.scrollY;
//   const rotate = scrollY * 1;
//   gsap.to(coke, {
//     rotation: rotate,
//     duration: 1,
//   });
// };
// window.addEventListener("scroll", rot);

const rotate = gsap.to(coke, {
  rotate: 360,
  duration: 5,
  repeat: -1,
  ease: "linear",
  paused: true,
});
coke.addEventListener("mouseenter", function (dets) {
  rotate.play();
});

coke.addEventListener("mouseleave", function (dets) {
  rotate.pause();
});
