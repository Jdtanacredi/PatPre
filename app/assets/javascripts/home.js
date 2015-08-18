$(document).ready(function() {
	// Display book reader
	var $container = $('.isotope');
	$container.imagesLoaded( function() {
		$container.isotope({
		  itemSelector: '.item',
  		transitionDuration: '0.4s',
  		masonry: {
    		columnWidth: '.grid-sizer',
    		gutterWidth: 0
  		}
		});
	});
});