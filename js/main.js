//top nav toggle
$(document).ready(function () {
    $('.dropdown-work').on('mouseover', function () {
        $('.slidedown').slideToggle('300');
    });
    $('.dropdown-work').off('mouseover', function () {
        $('.slidedown').slideToggle('200');
    });
});

//ScrollTop - decided not to do it

//$('body').scroll(function() {
//	if ($(this).scrollTop() > 100) {
//		$('.scrollup').fadeIn();
//	} else {
//		$('.scrollup').fadeOut();
//	}
//});

//$('.scrollup').click(function(){
//	$('body').animate({scrollTop: 0} 900);
//	return false;
//});


//Snap to each pages
var FAST_SCROLL = 600

//snap to Sixty-six Days from top nav menu//
$('#sixtysix').click(sixtysixClicked);
	function sixtysixClicked() {
	console.log('sixtysixClicked')
	var targetY = $('.work-sixtysix-container').offset().top;
	$('body').animate({scrollTop: targetY}, FAST_SCROLL);
}

//snap to The Land of Unlikeness from top nav menu//
$('#unlikeness').click(unlikenessClicked);
function unlikenessClicked() {
	console.log('unlikenessClicked')
	var targetY = $('.work-unlikeness-container').offset().top;
	$('body').animate({scrollTop: targetY}, FAST_SCROLL);
}	

//snap to The Time Locket from top nav menu//
$('#locket').click(locketClicked);
function locketClicked() {
	console.log('locketClicked')
	var targetY = $('.work-timelocket-container').offset().top;
	$('body').animate({scrollTop: targetY}, FAST_SCROLL);
}

//snap to My Story from top nav menu//
$('#mystory').click(myStoryClicked);
function myStoryClicked() {
	console.log('myStoryClicked')
	var targetY = $('.my-story-container').offset().top;
	$('body').animate({scrollTop: targetY}, 900);
}

//snap to Contact from top nav menu//
$('#contact').click(contactClicked);
function contactClicked() {
	console.log('contactClicked')
	var targetY = $('.contact-page-container').offset().top;
	$('body').animate({scrollTop: targetY}, 900);
}

//when view-button is clicked, content page will slidedown and slide up
$('.view-button').click(viewButtonClicked);
function viewButtonClicked () {
	event. preventDefault();
	console.log('viewButtonClicked');
	var $viewButtonClicked = $(this);
	$('.view-toggle').slideDown('fast');
	$('.view-button').hide();
}

$('.feedback').click(elseWhereClicked);
function elseWhereClicked () {
	event. preventDefault();
	$('.view-toggle').slideUp('fast');
	$('.view-button').show();
}

//$('.view-button').click(viewButtonClicked);
//function viewButtonClicked () {
//	event.preventDefault()
//	console.log('viewButtonClicked');
//	$(this).closest('.container').find('.view-toggle').slideDown();
//}

//social icon toggle - Gmail, twitter, github,linkedin
$('.social-icons img').mouseenter(function() {
	var targetId = $(this).data('target-id')
	$(targetId).animate({top:'+=450px'}, 500).show();
});
$('.toggle-soc img').mouseleave(function(){
	$(this).hide().animate({top:'+=510'},400);
});


// $('#email').mouseenter(function(){	
// 	debugger
// 	// $('#toggle-email').animate({top:'+=450px'}, 500);
// 	// $('#toggle-email').show();
// });
//$('#toggle-email').mouseleave(function(){
//	$('#toggle-email').hide();
//	$('#toggle-email').animate({top:'+=510'},400);
//});
//social icon toggle - Twitter
//$('#twitter').mouseenter(function() {
//	$('#toggle-twitter').animate({top:'+=450px'}, 500);
//	$('#toggle-twitter').show();
//});
//$('#toggle-twitter').mouseleave(function(){
//	$('#toggle-twitter').hide();
//	$('#toggle-twitter').animate({top:'+=510'},400);
//});
//social icon toggle - Github
//$('#github').mouseenter(function() {
//	$('#toggle-github').animate({top:'+=450px'}, 500);
//	$('#toggle-github').show();
//});
//$('#toggle-github').mouseleave(function(){
//	$('#toggle-github').hide();
//	$('#toggle-github').animate({top:'+=510'},400);
//});
//social icon toggle - LinkedIn
//$('#linkedin').mouseenter(function() {
//	$('#toggle-linkedin').animate({top:'+=450px'}, 500);
//	$('#toggle-linkedin').show();
//});
//$('#toggle-linkedin').mouseleave(function(){
//	$('#toggle-linkedin').hide();
//	$('#toggle-linkedin').animate({top:'+=510'},400);
//});


