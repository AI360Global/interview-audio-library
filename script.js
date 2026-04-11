// Search functionality
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();

  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(term) ? "" : "none";
  });
});


// Only one audio should play at a time
const audios = document.querySelectorAll("audio");

audios.forEach((audio) => {
  audio.addEventListener("play", () => {

    audios.forEach((otherAudio) => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });

  });
});
