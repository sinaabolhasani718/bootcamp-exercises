const button = document.querySelector(".button");
const dogImg = document.querySelector(".dog-img");
const loadingText = document.querySelector(".loading");

function getDog() {
  loadingText.style.display = "block";
  dogImg.style.opacity = "0.5";

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      dogImg.src = data.message;
    })
    .catch((error) => {
      loadingText.style.display = "block";
      loadingText.textContent = "Error retrieving image!";
      console.error(error);
    })

    .finally(() => {
      if (loadingText.textContent === "Loading...") {
        loadingText.style.display = "none";
      }
      dogImg.style.opacity = "1";
    });
}
getDog();
button.addEventListener("click", getDog);
