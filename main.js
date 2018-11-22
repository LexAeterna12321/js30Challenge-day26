const triggers = document.querySelectorAll(".cool > li");
const bg = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => this.classList.add("trigger-enter-active"), 100);
  bg.classList.add("open");

  const dropdown = document.querySelector(".trigger-enter .dropdown");

  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left
  };

  bg.style.setProperty("width", `${coords.width}px`);
  bg.style.setProperty("height", `${coords.height}px`);
  bg.style.setProperty("top", `${coords.top}px`);
  bg.style.setProperty("left", `${coords.left}px`);
}

function handleLeave() {
  this.classList.remove("trigger-enter");
  setTimeout(() => this.classList.remove("trigger-enter-active"), 100);
  bg.classList.remove("open");
}

triggers.forEach(trigger => {
  trigger.addEventListener("mouseenter", handleEnter);
  trigger.addEventListener("mouseleave", handleLeave);
});
