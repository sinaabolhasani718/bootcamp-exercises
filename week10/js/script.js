const progress = document.querySelector(".progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;


const savedStep = parseInt(localStorage.getItem("currentStep"));
if (!isNaN(savedStep) && savedStep >= 1 && savedStep <= circles.length) {
  currentStep = savedStep;
}


next.addEventListener("click", () => {
  currentStep++;
  if (currentStep > circles.length) {
    currentStep = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
  }
  update();
});

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    currentStep = parseInt(circle.dataset.step);
    update();
  });
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  progress.style.width = ((currentStep - 1) / (circles.length - 1)) * 100 + "%";

  prev.disabled = currentStep === 1;
  next.disabled = currentStep === circles.length;

  localStorage.setItem("currentStep", currentStep);
}
