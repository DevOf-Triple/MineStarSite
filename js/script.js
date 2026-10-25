const wrapper = document.querySelector(".horizontal-wrapper");
const track = document.querySelector(".horizontal-track");

let ticking = false;

function update() {
  const rect = wrapper.getBoundingClientRect();
  const scrollable = wrapper.offsetHeight - window.innerHeight;
  if (scrollable <= 0) {
    ticking = false;
    return;
  }

  const progress = Math.min(Math.max(-rect.top / scrollable, 0), 1);
  const maxShift = track.offsetWidth - window.innerWidth;

  track.style.transform = `translateX(${-progress * maxShift}px)`;
  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(update);
    ticking = true;
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
update();
