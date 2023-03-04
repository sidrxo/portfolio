	window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

// Attach a click event handler to the link element
$('.picture1').on('click', function(event) {
  // Prevent the link from performing its default action
  event.preventDefault();
  
  // Get the URL from the link's "href" attribute
  var url = $(this).attr('href');
  
  // Call the loadProjectPage function with the URL
  loadProjectPage(url);
});

// Define the loadProjectPage function
function loadProjectPage(url) {
  $.get(url, function(data) {
    $('.doubletile, .doubletile2').fadeOut('slow', function() {
      $('#projectContent').html(data);
      $('#projectContent').fadeIn('slow');
    });
  });
}
