	window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

$(document).ready(function() {
  // When a project div is clicked
  $('.project').click(function(event) {
    // Prevent the default action
    event.preventDefault();
    // Get the URL of the project page
    var url = $(this).data('url');
    // Hide all elements of the old page
    $('body > *:not(#projectContent)').hide();
    // Load the project page into the project container using AJAX
    $('#projectContent').load(url, function() {
      // Show the project container after the project page is loaded
      $('#projectContent').show();
    });
  });
});
