//Snap to each pages
var FAST_SCROLL = 600;

//top nav toggle
var topNav = {
	initListeners: function() {
		$('.dropdown-work').mouseenter(function(){
			$('.slidedown').slideToggle('300');
		});
		$('.slidedown').mouseleave(function(){
			$('.slidedown').slideToggle('200');
		});
	}
}

topNav.initListeners();

function myAnimate($targetY) {
	var targetY = $targetY.offset().top;
	$('body,html').animate({scrollTop: targetY}, FAST_SCROLL);
}

$('.nav-link').click(function() {
	var targetClass = $(this).data('target');
	console.log(targetClass);
	var $targetY = $(targetClass);
	myAnimate($targetY);
});

$('.footer-work').click(function(){
	var targetT = $('.work-sixtysix').offset().top;
	console.log(targetT);
	$('body,html').animate({scrollTop: targetT}, FAST_SCROLL);
})

//when view-button is clicked, content page will slidedown and slide up
$('.view-button').click(viewButtonClicked);
function viewButtonClicked (event) {
	event.preventDefault();
	console.log('viewButtonClicked this:' + $(this).data('target-id'));
	var targetId = $(this).data('target-id');
	var targetDiv = $(this).closest('.container');
	$(this).hide();  //Hide the button that was just clicked
	$(targetDiv).siblings('.container').hide();
	$(targetId).slideDown('fast');  //Slide the current target id down.
	var targetC = $(targetId).offset().top;
	$('body,html').animate({scrollTop: targetC}, FAST_SCROLL);
	$('#first-dot').trigger('click');
	$('.end-page ul').hide();
	$('.black').show();
};

$('.returnto-main').click(closeMarkClicked);
function closeMarkClicked (event) {
	event.preventDefault();
	var targetDiv = $(this).closest('.container')
	$('.view-toggle').slideUp('fast');
	$('.view-button').show();
	var targetDiv = $(this).closest('.container')
	$(targetDiv).siblings('.container').show();
	var targetId = $(this).closest('.container')
	var targetY = $(targetId).offset().top;
	$('body,html').animate({scrollTop: targetY}, {duration: 900, easing: 'swing'}); 
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
function stepClicked (event) {
	event.preventDefault();
	console.log('stepClicked');
	var targetId = $(this).siblings('p.method');
	$(targetId).slideDown('fast');
}
$('p.method').click(methodClicked);
function methodClicked (event) {
	event.preventDefault();
	console.log('methodClicked');
	$(this).slideUp('fast');
}

$('.site-credit').click(siteCreditClicked);
function siteCreditClicked(evt) {
	evt.preventDefault();
	$('.greeting').css({"backgroundColor": "rgba(0,0,0,.5)", "color" : "white"});
	$('.greeting h2').html("Thank You").css({"color":"white"});
	$('#email, .greeting p, .toggle-soc').hide();
	$('p.credit-list').show();
}
$('.return, .greeting').click(greetingClicked);
function greetingClicked (event) {
	event. preventDefault();
	$('.greeting').css({"backgroundColor": "rgba(255,255,255,.5)", "color" : "#333"});
	$('.greeting h2').html("Get in Touch").css({"color":"#333"});
	$('.toggle-soc, .greeting p, #email').show();
	$('p.credit-list').hide();
}

$('.hamberger').click(hambergerClicked);
function hambergerClicked(evt) {
	evt.preventDefault();
	$('.mobile-dropdown').slideDown('fast');
	$('.landing-page').siblings('.container, .footer').hide();
	return false;
}

$('.mobile-home').click(mobileHomeClicked);
function mobileHomeClicked(evt) {
	evt.preventDefault();
	console.log('mobileHomeClicked');
	$('.container, .footer').show();
	$('.mobile-dropdown').hide('fast');
	return false;
}
$('.mobile-sixtysix').click(mobileSixtysixClicked);
function mobileSixtysixClicked(evt) {
	evt.preventDefault();
	$('.container, .footer').show();
	var targetY = $('.work-sixtysix').offset().top;
	$('body,html').animate({scrollTop: targetY}, FAST_SCROLL);
	$('.mobile-dropdown').hide('fast');
	return false;	
}
$('.mobile-land').click(mobileLandClicked);
function mobileLandClicked(evt) {
	evt.preventDefault();
	$('.container, .footer').show();
	var targetY = $('.work-unlikeness').offset().top;
	$('body,html').animate({scrollTop: targetY}, FAST_SCROLL);
	$('.mobile-dropdown').hide('fast');
	return false;	
}
$('.mobile-time').click(mobileTimeClicked);
function mobileTimeClicked(evt) {
	evt.preventDefault();
	$('.container, .footer').show();
	var targetY = $('.work-timelocket').offset().top;
	$('body,html').animate({scrollTop: targetY}, FAST_SCROLL);
	$('.mobile-dropdown').hide('fast');
	return false;	
}

$('.mobile-mystory').click(mobileMystoryClicked);
function mobileMystoryClicked(evt) {
	evt.preventDefault();
	$('.container, .footer').show();
	var targetY = $('.my-story').offset().top;
	$('body,html').animate({scrollTop: targetY}, FAST_SCROLL);
	$('.mobile-dropdown').hide('fast');
	return false;	
}

$('.mobile-contact').click(mobileContactClicked);
function mobileContactClicked(evt) {
	evt.preventDefault();
	$('.container, .footer').show();
	var targetY = $('.contact-page').offset().top;
	$('body,html').animate({scrollTop: targetY}, FAST_SCROLL);
	$('.mobile-dropdown').hide('fast');
	return false;	
}

