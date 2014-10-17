
// Click logo to go to home page
$('.logo').click(function(){
	window.location.href = "../index.html";
})

// Click logo to go to home page (from session pages)
$('.session-logo').click(function(){
	window.location.href = "../../index.html";
})

// Click menu icon to show nav
$('.menu-icon').click(function(){
	$('.nav').addClass('show-nav');
	$('.menu-icon').addClass('menu-open'); // Hide menu icon
	$('.menu-x-icon').addClass('menu-x-open'); // Display close icon
})

// Click menu-x icon to hide nav
$('.menu-x-icon').click(function(){
	$('.nav').removeClass('show-nav');
	$('.menu-icon').removeClass('menu-open'); // Display menu icon
	$('.menu-x-icon').removeClass('menu-x-open'); // Hide close icon
})