// Search functionality
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.trim().toLowerCase();

    cards.forEach((card) => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(term) ? "" : "none";
    });
  });
}

// Only one audio should play at a time + auto-scroll + active highlight
const audios = document.querySelectorAll("audio");

function clearActiveCards() {
  document.querySelectorAll(".card.playing").forEach((card) => {
    card.classList.remove("playing");
  });
}

audios.forEach((audio) => {
  audio.addEventListener("play", () => {
    audios.forEach((otherAudio) => {
      if (otherAudio !== audio) {
        otherAudio.pause();
      }
    });

    clearActiveCards();

    const card = audio.closest(".card");
    if (card) {
      card.classList.add("playing");
      card.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });

  audio.addEventListener("pause", () => {
    if (!audio.ended) return;
    const card = audio.closest(".card");
    if (card) {
      card.classList.remove("playing");
    }
  });

  audio.addEventListener("ended", () => {
    const card = audio.closest(".card");
    if (card) {
      card.classList.remove("playing");
    }
  });
});
