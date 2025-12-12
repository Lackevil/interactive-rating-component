const submitBtn = document.querySelector(".rating__submit");
const ratingBtns = document.querySelectorAll(".rating__button");

let rating = 0;

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    rating = this.dataset.rate;

    removeActive();

    this.classList.add("active-btn");

    submitBtn.setAttribute("href", "result.html");
    localStorage.setItem("rating", rating);
  });
});

function removeActive() {
  ratingBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}
