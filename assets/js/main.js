	window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

function loadProjectPage(url) {
  $.get(url, function(data) { // use jQuery's $.get() method to make a GET request to the specified URL
    $('#projectContent').html(data); // set the content of the #projectContent element to the response data using jQuery's .html() method
    $('.doubletile').hide(); // hide all elements with class name "doubletile" using jQuery's .hide() method
    $('.doubletile2').hide(); // hide all elements with class name "doubletile2" using jQuery's .hide() method
  });
}
