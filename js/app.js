$(document).ready(function() {
$('.streetfighter').mouseenter(function() {
    $('#standing-still').hide();
    $('#ready').show();
    $('#cool').hide();
    $('#throwing').hide();
  });

$('.streetfighter').mouseleave(function() {
    $('#standing-still').show();
    $('#ready').hide();
    $('#cool').hide();
    $('#throwing').hide();
  });

$('.streetfighter').mousedown(function() {
    $('#standing-still').hide();
    $('#ready').hide();
    $('#cool').hide();
    $('#throwing').show();
    $('#fireball').finish().show().animate(
    	{'left': '1020px'},
    	500,
    	function() {
    		$(this).hide();
    		$(this).css('left', '520px');
    	}
    );
  });

$('.streetfighter').mouseup(function() {
    $('#standing-still').show();
    $('#ready').hide();
    $('#cool').hide();
    $('#throwing').hide();
  });

$('.streetfighter').click(function() {
    $('#fireball').animate({
    	"left": "+1000px"
    },3000)
  });

});