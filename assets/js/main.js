  window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

$.ajax({
  url: url,
  type: 'GET',
  async: true,
  success: function(data) {
    // Fade out the .doubletile and .doubletile2 elements
    $('.doubletile, .doubletile2').fadeOut('slow', function() {
      // Once the fade-out is complete, update the content of #projectContent
      $('#projectContent').html(data);
      // Fade in the #projectContent element
      $('#projectContent').fadeIn('slow');
      return false
    });
  },
  error: function(xhr, status, error) {
    console.error(error);
  }
});


  
  
