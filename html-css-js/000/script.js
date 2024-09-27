// DOM elements
const body = document.querySelector("body");
const mouseFollower = document.querySelector(".mouse-follower");
const h1 = document.querySelector("h1");
const aboutBtn = document.querySelector(".about-btn");

window.onload = () => {
  body.classList.add("loaded");
};

// Getting and updating mouse position
const mousePosition = {
  x: 0,
  y: 0,
};

document.addEventListener("mousemove", (event) => {
  [mousePosition.x, mousePosition.y] = [event.clientX, event.clientY];
  mouseFollower.style.left = `calc(${mousePosition.x}px - 2rem)`;
  mouseFollower.style.top = `calc(${mousePosition.y}px - 2rem)`;
});

// Mouse follower behaviour over document
document.addEventListener("mouseout", () => {
  mouseFollower.style.display = "none";
});

document.addEventListener("mouseover", () => {
  mouseFollower.style.display = "block";
});

// Mouse follower behaviour over h1 heading
h1.addEventListener("mouseover", () => {
  mouseFollower.style.transform = "scale(4)";
});

h1.addEventListener("mouseout", () => {
  mouseFollower.style.transform = "scale(1)";
});

// Mouse follower behaviour over about button
aboutBtn.addEventListener("mouseover", () => {
  mouseFollower.style.transform = "scale(0.25)";
});

aboutBtn.addEventListener("mouseout", () => {
  mouseFollower.style.transform = "scale(1)";
});
