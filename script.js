const audio = document.getElementById("bg-music");
const alertBox = document.getElementById("music-alert");

function tryPlay() {
  audio.play().catch(() => {
    alertBox.style.display = "block";
  });
}

alertBox.addEventListener("click", () => {
  audio.play();
  alertBox.style.display = "none";
});

window.addEventListener("load", tryPlay);