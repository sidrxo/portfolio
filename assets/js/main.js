	window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

function loadProjectPage(url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var content = xhr.responseText;
      document.getElementById("projectContent").innerHTML = content;
      document.getElementsByClassName("doubletile")[0].style.display = "none"; // hide the doubletile div when new content is loaded
      document.getElementsByClassName("doubletile2")[0].style.display = "none"; // hide the doubletile div when new content is loaded
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}