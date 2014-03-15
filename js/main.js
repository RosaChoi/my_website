//top nav toggle
$('.dropdown-work').mouseenter(function(){
	$('.slidedown').slideToggle('300');
});
$('.slidedown').mouseleave(function(){
	$('.slidedown').slideToggle('200');
});


//ScrollTop - home
//$('.home').click(homeClicked);
//function homeClicked() {
//	event.preventDefault();
//	console.log(homeClicked);
//	$('body').animate({scrollTop: 0}, 900);
//	return false;
//};


//Snap to each pages
var FAST_SCROLL = 600

//snap to Sixty-six Days from top nav menu//
$('#sixtysix').click(sixtysixClicked);
	function sixtysixClicked() {
	console.log('sixtysixClicked')
	var targetY = $('.work-sixtysix').offset().top;
	$('body').animate({scrollTop: targetY}, FAST_SCROLL);
}

//snap to The Land of Unlikeness from top nav menu//
$('#unlikeness').click(unlikenessClicked);
	function unlikenessClicked() {
	console.log('unlikenessClicked')
	var targetY = $('.work-unlikeness').offset().top;
	$('body').animate({scrollTop: targetY}, FAST_SCROLL);
}	

//snap to The Time Locket from top nav menu//
$('#locket').click(locketClicked);
	function locketClicked() {
	console.log('locketClicked')
	var targetY = $('.work-timelocket').offset().top;
	$('body').animate({scrollTop: targetY}, FAST_SCROLL);
}

//snap to My Story from top nav menu//
$('#mystory').click(myStoryClicked);
function myStoryClicked() {
	console.log('myStoryClicked')
	var targetY = $('.my-story').offset().top;
	$('body').animate({scrollTop: targetY}, 900);
}

//snap to Contact from top nav menu//
$('#contact').click(contactClicked);
function contactClicked() {
	console.log('contactClicked')
	var targetY = $('.contact-page').offset().top;
	$('body').animate({scrollTop: targetY}, 900);
}

//when view-button is clicked, content page will slidedown and slide up
$('.view-button').click(viewButtonClicked);
function viewButtonClicked () {
	event.preventDefault();
	console.log('viewButtonClicked this:' + $(this).data('target-id'));
	var targetId = $(this).data('target-id');
	var targetDiv = $(this).closest('.container')
	$(this).hide();  //Hide the button that was just clicked
//	$('.view-toggle').slideUp('fast');  //Slide all the other .view-toggles up
	$(targetDiv).siblings('.container').hide();
	$(targetId).slideDown('fast');  //Slide the current target id down.
	$('#first-dot').trigger('click');
	$('body').animate({scrollTop: 0}, 600);
	return false;
}

$('.close-mark').click(closeMarkClicked);
function closeMarkClicked () {
	event.preventDefault();
	var targetDiv = $(this).closest('.container')
	$('.view-toggle').slideUp('fast');
	$('.view-button').show();
	var targetDiv = $(this).closest('.container')
	$(targetDiv).siblings('.container').show();
	var targetId = $(this).closest('.container')
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

//Process step description slide down and slid up
$('h4.prostep').click(stepClicked);
function stepClicked () {
	event.preventDefault();
	console.log('stepClicked');
	var targetId = $(this).siblings('p.method');
	$(targetId).slideDown('fast');
}
$('p.method').click(methodClicked);
function methodClicked () {
	event.preventDefault();
	console.log('methodClicked');
	$(this).slideUp('fast');
}

//social icon toggle - twiter, github, linkedin
$('#twitter').mouseenter(function() {
	$('.toggle-soc .fa.fa-twitter-square').css({"color": "#55acef"});
});
$('#twitter').mouseleave(function() {
	$('.toggle-soc .fa.fa-twitter-square').css({"color": "#e9e9e9"});
});

$('#github').mouseenter(function() {
	$('.toggle-soc .fa.fa-github-square').css({"color": "black"});
});
$('#github').mouseleave(function() {
	$('.toggle-soc .fa.fa-github-square').css({"color": "#e9e9e9"});
});
$('#linkedin').mouseenter(function() {
	$('.toggle-soc .fa.fa-linkedin-square').css({"color": "#276eac"});
});
$('#linkedin').mouseleave(function() {
	$('.toggle-soc .fa.fa-linkedin-square').css({"color": "#e9e9e9"});
});


$('.site-credit').click(siteCreditClicked);
function siteCreditClicked(evt) {
	evt.preventDefault();
	$('.greeting').css({"backgroundColor": "rgba(0,0,0,.5)", "color" : "white"});
	$('.greeting h2').html("Thank You").css({"color":"white"});
	$('.toggle-soc, .greeting p, #email').hide();
	$('p.credit-list').show();
}
$('.return, .greeting').click(greetingClicked);
function greetingClicked () {
	event. preventDefault();
	$('.greeting').css({"backgroundColor": "rgba(255,255,255,.5)", "color" : "#333"});
	$('.greeting h2').html("Get in Touch").css({"color":"#333"});
	$('.toggle-soc, .greeting p, #email').show();
	$('p.credit-list').hide();
}


