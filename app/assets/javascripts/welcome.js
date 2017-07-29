// where the magic happens
var slideCoverUp =  _.once(function() {
  $('.cover').addClass('slideOutUp');
});

$(document).ready(function() {
  // bind to splash logo click
  $("div#splash").click(function() {
     slideCoverUp();
  });

  // trigger slide event after a few seconds
  // (if user doesn't know to click)
  setTimeout(function() {
     slideCoverUp();
   }, 5000);

   // parallax js magic
   var scene = $('#scene').get(0);
   var parallax = new Parallax(scene);

   // temporary action to show body content
   $('.button').click(function() {
     $('.button-layer').hide();
     $('.main-content').show();
   });
});

// bind to mouse scroll
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(slideCoverUp, 60), false);

// bind to touchscreen scroll
window.addEventListener('touchmove', _.throttle(slideCoverUp, 60), false);
