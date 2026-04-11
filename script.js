const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();

  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(term) ? "" : "none";
  });
});
