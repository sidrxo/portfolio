	window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

function loadProjectPage(pageUrl) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var oldContent = document.getElementById("projectContent");
          oldContent.style.display = "none"; // hide the old content
          oldContent.innerHTML = this.responseText;
          oldContent.style.display = "block"; // show the new content
      }
  };
  xhr.open("GET", pageUrl, true);
  xhr.send();
}
function loadNewPage(pageUrl) {
  window.location.replace(pageUrl);
}
