	window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

document.addEventListener("DOMContentLoaded", function() {
  const projectTiles = document.querySelectorAll(".project-tile");
  projectTiles.forEach(tile => {
    tile.addEventListener("click", function() {
      const pageUrl = this.getAttribute("data-page-url");
      const xhr = new XMLHttpRequest();
      xhr.open("GET", pageUrl, true);
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const newContent = this.responseText;
          const bioheader = document.getElementById("bioheader");
          bioheader.innerHTML = newContent;
        }
      };
      xhr.send();
    });
  });
});

function myFunction() {
  var x = document.getElementsByClassName("doubletile");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
} 