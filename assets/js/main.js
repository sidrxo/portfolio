  window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
} 

  function loadProjectPage(url) {
    $.get(url, function(data) {
      // Create a new div to hold the new content
      var newContent = $('<div>').attr('id', 'newContent').css({
        position: 'relative',
        paddingTop: '11%`',
        right: '-100%',
        width: '80vw',
        height: 'fill-content',
        background: '#fff'
      }).appendTo('body');
      // Populate the new div with the fetched data
      newContent.html(data);
      // Slide out the old content and slide in the new content simultaneously
      $('#projectContent, .doubletile, .doubletile2').animate({left: '-100%'}, 'slow', function() {
        // Once the slide-out is complete, remove the old content and move the new content into #projectContent
        $('.doubletile, .doubletile2').remove();
        // Run /assets/js/clickbuttons.js after the new content has loaded
        $.getScript('/assets/js/clickbuttons.js');
      });
      newContent.animate({right: 0}, 'slow');
    });
  }
  