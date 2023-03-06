  window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

function loadProjectPage(url) {
  $.get(url, function(data) {
    // Slide out the .doubletile and .doubletile2 elements to the left
    $('.doubletile, .doubletile2').animate({left: '-100%'}, 'slow', function() {
      $('.doubletile, .doubletile2').remove();
      // Create a new div to slide in from the right
      var newContent = $('<div>').attr('id', 'newContent').css({
        position: 'relative',
        top: 0,
        right: '-100%',
        width: '100%',
        height: '100%',
        background: '#fff'
      }).appendTo('body');
      // Populate the new div with the fetched data
      newContent.html(data);
      // Slide in the new div from the right
      newContent.animate({right: 0}, 'slow', function() {
        // Once the slide-in is complete, remove the old content and the new div
        $('#projectContent').removeAttr('style').empty().append(newContent.contents());
        newContent.remove();
        // Run /assets/js/clickbuttons.js after the new content has loaded
        $.getScript('/assets/js/clickbuttons.js');
      });
    });
  });
}


  
$.getScript('/assets/js/clickbuttons.js');
