	window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

$(document).ready(function() {
  $('.wide').click(function() {
    var url = $(this).data('url');
    $('#bioheader').load(url, function() {
      $('#bioheader').addClass('slide-in-right');
    });
    $('.doubletile').addClass('slide-out-left');
  });
});