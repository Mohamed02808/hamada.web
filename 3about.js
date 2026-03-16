// cursor

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("touchstart", () => {
    btn.style.transform = "scale(0.95)";
  });

  btn.addEventListener("touchend", () => {
    btn.style.transform = "scale(1)";
  });
});
