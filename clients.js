let index = 0;
function moveSlide(step) {
  const track = document.getElementById("track");
  const cards = document.querySelectorAll(".card");
  const total = cards.length;
  const visible = 4;

  index += step;
  if (index < 0) index = 0;
  if (index > total - visible) index = total - visible;

  track.style.transform = `translateX(-${index * (cards[0].offsetWidth + 24)}px)`;
}
