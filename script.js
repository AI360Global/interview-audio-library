const search = document.getElementById("search");

search.addEventListener("keyup", function () {
  const filter = search.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});