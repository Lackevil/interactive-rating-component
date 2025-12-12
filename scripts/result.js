const ratingEl = document.querySelector("#rating");

if (ratingEl) {
  const rating = localStorage.getItem("rating") || 0;
  ratingEl.textContent = rating;
}
