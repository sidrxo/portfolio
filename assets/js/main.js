	window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 
$(document).ready(function() {
  // Listen for clicks on project tiles
  $('.wide, .narrow').on('click', function() {
    var url = $(this).data('url');

    // Send XHR request to load project content
    $.ajax({
      url: url,
      success: function(data) {
        // Replace current project tiles with new content
        $('.doubletile').fadeOut(300, function() {
          $(this).html(data).fadeIn(300);
        });
      }
    });
  });
});

