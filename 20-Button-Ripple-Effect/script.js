const buttons = document.querySelector(".ripple");

buttons.addEventListener("click", function (e) {
  // The client property returns the x and y coordinate (according to the client area) of the mouse pointer when a mouse event was triggered
  const x = e.clientX;
  const y = e.clientY;

  // The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.
  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  // with this, im getting the exact position on where im clicking inside the btn
  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = yInside + "px";
  circle.style.left = xInside + "px";

  this.appendChild(circle);
  setTimeout(() => circle.remove(), 500);
});
