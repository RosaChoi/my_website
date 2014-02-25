//wire up event handler
$('.dropdown-work').click(workClicked);
	function workClicked() {
	console.log('workClicked');
}
//
$('.dropdown-work').click(function(){
	if($('.slidedown').is(':hidden')) {
		$('.slidedown').slideDown(150);
	} else {
		$('slidedown').hide();
	}
});

$('#contact').click(contactClicked);
function contactClicked() {
	console.log('contactClicked')
	var targetY = $('.slogan').offset().top;
	$('body').animate({scrollTop: targetY}, 900);
}
