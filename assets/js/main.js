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
      var projectContent = document.getElementById("projectContent");
      var oldContent = projectContent.innerHTML;

      // Fade out the old content
      projectContent.classList.add("fade-out");
      setTimeout(function() {
        projectContent.innerHTML = content;
        // Fade in the new content
        projectContent.classList.remove("fade-out");
        projectContent.classList.add("fade-in");
        setTimeout(function() {
          projectContent.classList.remove("fade-in");
          // Scroll to the top of the new content
          projectContent.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Set the duration of the fade in animation in milliseconds
      }, 500); // Set the duration of the fade out animation in milliseconds

      // Hide the doubletile divs
      document.getElementsByClassName("doubletile")[0].style.display = "none";
      document.getElementsByClassName("doubletile2")[0].style.display = "none";
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

