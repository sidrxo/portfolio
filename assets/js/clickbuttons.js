document.addEventListener("DOMContentLoaded", function() {

const scrollLeftButton = document.getElementById("scroll-left");
const scrollRightButton = document.getElementById("scroll-right");
const scrollContainer = document.querySelector(".horizontal-snap");
const scrollAmount = 400;

scrollLeftButton.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
});

scrollRightButton.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
});
});
  
  
