$(document).ready(function() {
$('.streetfighter').mouseenter(function() {
    $('#standing-still').hide();
    $('#ready').show();
    $('#cool').hide();
    $('#throwing').hide();
    $('.text div:nth-child(3)').html('THIS TEXT CHANGES').css("color",
    	"blue");
  });

$('.streetfighter').mouseleave(function() {
    $('#standing-still').show();
    $('#ready').hide();
    $('#cool').hide();
    $('#throwing').hide();
    $('.text div:nth-child(3)').html('NORMAL TEXT').css("color",
    	"red");
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

$(document).keydown(function(event){
	if(event.which==88){
		$('#standing-still').hide();
		$('#ready').hide();
		$('#cool').show();
		$('#throwing').hide();
	}
});

$(document).keyup(function(event){
	if(event.which==88){
		$('#standing-still').show();
		$('#ready').hide();
		$('#cool').hide();
		$('#throwing').hide();
	}
});