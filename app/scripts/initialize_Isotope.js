// Isotope controls
// Docs: http://isotope.metafizzy.co/

$(document).ready(function() {
	// Initialize Isotope and set grid container by calling class
	$('.dynamic-gallery').isotope({
		// Set items to be placed in grid by calling class
		itemSelector: '.gallery-image',
		// Set layout mode to masonry ("pinterest style"): see docs http://isotope.metafizzy.co/layout-modes.html
		layoutMode: 'masonry'
	});
});

// Filters
// Call button by class for click action to be applied to
// Filter within a specified container by specified classname
$('.filter-one-button').click(function(){
	$('.dynamic-gallery').isotope({ filter: '.filter-one' })
})

$('.filter-two-button').click(function(){
	$('.dynamic-gallery').isotope({ filter: '.filter-two' })
})

var filterAllClicked = false;

$('.filter-all-button').click(function(){
	if (filterAllClicked == false) {
		alert('show all of the photos in the gallery')
		filterAllClicked = true;
	}	
	$('.dynamic-gallery').isotope({ filter: '*' });
})
