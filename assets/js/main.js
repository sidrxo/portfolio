	window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

$(document).ready(function() {
  // Add click event listeners to project tiles
  $('.project-tile').on('click', function(e) {
      e.preventDefault();
      var url = $(this).data('url');
      loadProject(url);
  });
});

function loadProject(url) {
  // Send Ajax request to load project content
  $.ajax({
      url: url,
      success: function(data) {
          // Insert project content into container element
          $('#project-container').html(data);
      },
      error: function() {
          alert('Error loading project content');
      }
  });
}
