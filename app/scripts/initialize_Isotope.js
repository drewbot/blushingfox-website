// Isotope controls
// Docs: http://isotope.metafizzy.co/

// Hide the filter tip so it can be shown later
$('.filter-tip').hide();

// Set these variables to false so that when they are later switched to true the ..
// .. filter tip will not be shown (filter tip is only necessary if user selects "all" first)
var filterOneClicked = false;
var filterTwoClicked = false;
var filterAllClicked = false;

$(document).ready(function() {
	// Initialize Isotope and set grid container by calling class
	$('.dynamic-gallery').isotope({
		// Set items to be placed in grid by calling class
		itemSelector: '.gallery-image',
		// Set layout mode to masonry ("pinterest style")
		// see docs http://isotope.metafizzy.co/layout-modes.html
		layoutMode: 'masonry'
	});
	$('.dynamic-gallery').isotope({ filter: '*' });
});

// Filters
// Call button by class for click action to be applied to
// Filter within a specified container by specified classname
$('.filter-one-button').click(function(){
	filterOneClicked = true;
	$('.dynamic-gallery').isotope({ filter: '.filter-one' })
})

$('.filter-two-button').click(function(){
	filterTwoClicked = true;
	$('.dynamic-gallery').isotope({ filter: '.filter-two' })
})

$('.filter-all-button').click(function(){
	if (!filterOneClicked && !filterTwoClicked && !filterAllClicked) {
		$('.filter-tip').fadeIn( 400 ).delay( 5000 ).fadeOut( 400 );
	}	
	filterAllClicked = true;
	$('.dynamic-gallery').isotope({ filter: '*' });
})
