	window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

// Add an event listener to the link with class "projectLink"
$('.doubletile').on('click', function(event) {
  // Prevent the default behavior of clicking on a link
  event.preventDefault();
  
  // Get the URL from the link's href attribute
  var url = $(this).attr('href');
  
  // Load the project page using AJAX
  loadProjectPage(url);
});

function loadProjectPage(url) {
  $.get(url, function(data) {
    // Fade out the .doubletile and .doubletile2 elements
    $('.doubletile, .doubletile2').fadeOut('slow', function() {
      // Once the fade-out is complete, update the content of #projectContent
      $('#projectContent').html(data);
      // Fade in the #projectContent element
      $('#projectContent').fadeIn('slow');
    });
  });
}
