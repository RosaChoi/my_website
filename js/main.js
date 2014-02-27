//top nav toggle
$(document).ready(function () {
    $(".dropdown-work").on('mouseover', function () {
        $('.slidedown').slideToggle('300');
    });
    $('.dropdown-work').off('mouseover', function () {
        $('.slidedown').slideToggle('200');
    });
});

//snap to Sixty-six Days from top nav menu//
$('#sixtysix').click(sixtysixClicked);
function sixtysixClicked() {
	console.log('sixtysixClicked')
	var targetY = $('.work-sixtysix').offset().top;
	$('body').animate({scrollTop: targetY}, 600);
}

//snap to The Land of Unlikeness from top nav menu//
$('#unlikeness').click(unlikenessClicked);
function unlikenessClicked() {
	console.log('unlikenessClicked')
	var targetY = $('.work-unlikeness').offset().top;
	$('body').animate({scrollTop: targetY}, 600);
}

//snap to The Time Locket from top nav menu//
$('#locket').click(locketClicked);
function locketClicked() {
	console.log('locketClicked')
	var targetY = $('.work-timelocket').offset().top;
	$('body').animate({scrollTop: targetY}, 600);
}






//$('#contact').click(contactClicked);
//function contactClicked() {
//	console.log('contactClicked')
//	var targetY = $('.slogan').offset().top;
//	$('body').animate({scrollTop: targetY}, 900);
//}
