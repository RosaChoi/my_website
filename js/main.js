//top nav toggle
$('.dropdown-work').mouseenter(function(){
	$('.slidedown').slideToggle('300');
});
$('.dropdown-work').mouseleave(function(){
	$('.slidedown').slideToggle('200');
});


//ScrollTop - home
$('.home').click(homeClicked);
function homeClicked() {
	event.preventDefault();
	console.log(homeClicked);
	$('body').animate({scrollTop: 0}, 900);
	return false;
};


//Snap to each pages
var FAST_SCROLL = 600

//$('.work-selection li').click(slideDownWorkClicked);
//function slideDownWorkClicked() {
//	event.preventDefault();
//	console.log('slideDownWorkClicked');
//	var targetId = $(this).data('target-id');
//	var targetY = $(targetId).offset().top;
//	$('body').animate({scrollTop: targetY}, FAST_SCROLL);
//}

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
	event.preventDefault();
	console.log('viewButtonClicked this:' + $(this).data('target-id'));
	var targetId = $(this).data('target-id');
	$(this).hide();  //Hide the button that was just clicked
	$('.view-toggle').slideUp('fast');  //Slide all the other .view-toggles up
	$(targetId).slideDown('fast');  //Slide the current target id down.
	$('#first-dot').trigger('click')
}

$('.feedback').click(elseWhereClicked);
function elseWhereClicked () {
	event. preventDefault();
	$('.view-toggle').slideUp('fast');
	$('.view-button').show();
	var targetId = $('.view-button').data('target-id');
	var targetY = $(targetId).offset().top;
	$('body').animate({scrollTop: targetY}, 900);
}

//painting carousel
$('.slide-trigger a').click(slideTriggerClicked);
function slideTriggerClicked(evt) {
	evt.preventDefault();
	var targetSrcA = $(this).data('target-src-a');
	var targetSrcB = $(this).data('target-src-b');
	console.log(targetSrcA);
	console.log(targetSrcB);
	$("#paintings-slide-a").attr('src', targetSrcA);
	$("#paintings-slide-b").attr('src', targetSrcB);
}


//social icon toggle - Gmail, twitter, github,linkedin
$('.social-icons img').mouseenter(function() {
	var targetId = $(this).data('target-id')
	$(targetId).animate({top:'+=450px'}, 500).show();
});
$('.toggle-soc img').mouseleave(function(){
	$(this).hide().animate({top:'+=510'},400);
});


//social icon toggle for media query 480px- Gmail, twitter, github,linkedin
//$('.social-icons img').mouseenter(function() {
//	var targetId = $(this).data('target-id')
//	$(targetId).animate({top:'+=350px'}, 500).show();
//});
//$('.toggle-soc img').mouseleave(function(){
//	$(this).hide().animate({top:'+=400'},400);
//});


$('.site-credit').click(siteCreditClicked);
function siteCreditClicked(evt) {
	evt.preventDefault();
	$('.greeting').css({"backgroundColor": "rgba(0,0,0,.5)", "color" : "white"});
	$('.greeting h2').html("Thank You").css({"color":"white"});
	$('.social-icons, .toggle-soc, .greeting p').hide();
	$('p.credit-list').show();
}
$('.return, .greeting').click(greetingClicked);
function greetingClicked () {
	event. preventDefault();
	$('.greeting').css({"backgroundColor": "rgba(255,255,255,.5)", "color" : "#333"});
	$('.greeting h2').html("Get in Touch").css({"color":"#333"});
	$('.social-icons, .toggle-soc, .greeting p').show();
	$('p.credit-list').hide();
}

