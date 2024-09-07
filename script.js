circle = document.querySelector(".circle");
coke = document.querySelector(".coke");
span = document.querySelector(".leftmost span");
list = document.querySelector(".nav-list");

//function that makes the cirle follow the mouse pointer
window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.3,
  });
});

//scale the circle when it enters the span tag.
span.addEventListener("mouseenter", function () {
  gsap.to(circle, {
    scale: 10,
  });
});

//convert the scale of the circle back to original/normal size when it leaves the span tag.
span.addEventListener("mouseleave", function () {
  gsap.to(circle, {
    scale: 1,
  });
});

//rotation animation.
const rotate = gsap.to(coke, {
  rotate: 360,
  duration: 5,
  repeat: -1,
  ease: "linear",
  paused: true, //initially the bottle doesnot rotate
});

//resuming the rotation as soon as the mouse enters the image.
coke.addEventListener("mouseenter", function (dets) {
  rotate.play();
});

//pausing the rotation as soon as the mouse leaves the image.
coke.addEventListener("mouseleave", function (dets) {
  rotate.pause();
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

//nav elements circle hover effect
list.addEventListener("mouseenter", function () {
  gsap.to(circle, {
    scale: 4,
    color: "white",
  });
  gsap.to(".nav-list h5", {
    color: "black",
  });
});

list.addEventListener("mouseleave", function () {
  gsap.to(circle, {
    scale: 1,
    color: "red",
  });
  gsap.to(".nav-list h5", {
    color: "white",
  });
});
