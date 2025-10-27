const colorBox = document.querySelectorAll(".color-box");
const letters = "0123456789ABCDEF";

function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorBox.forEach((box) => {
  let newColor = getRandomColor();
  box.style.backgroundColor = newColor;
  box.querySelector("p").textContent = newColor;

  box.addEventListener("click", () => {
    let randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    box.querySelector("p").textContent = randomColor;
  });
});

console.log("Ready!");
