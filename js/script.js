$(document).ready( function() {

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: 40,
  percentPosition: true
});

$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});

});


    // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 550) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(250);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(250);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 800);
});



// $(document).ready(function(){
//   $("a.down, .intro a, nav li:last-child a").on('click', function(event) {

//     if (this.hash !== "") {
//       event.preventDefault();

//       var hash = this.hash;

//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         window.location.hash = hash;
//       });
//     } 
//   });
// });



// var nav = responsiveNav(".nav-collapse");

//   $(document).on("scroll", function(){
//     if
//       ($(document).scrollTop() > 300){
//       $("header").addClass("shrink");
//     }
//     else
//     {
//       $("header").removeClass("shrink");
//     }
//   });
