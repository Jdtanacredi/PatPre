$(document).ready( function() {
	var $container = $('.grid');
	$container.imagesLoaded( function() {
  	$container.isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  	});
	});
});

// $(document).ready(function() {
// 	// Display book reader
// 	var $container = $('.isotope');
// 	$container.imagesLoaded( function() {
// 		$container.isotope({
// 		  itemSelector: '.item',
//   		transitionDuration: '0.4s',
//   		masonry: {
//     		columnWidth: '.grid-sizer',
//     		gutterWidth: 0
//   		}
// 		});
// 	});
// });




// $(window).load(function() {
// (function ($) {
// 	var $container = $('.image-grid'),
// 		colWidth = function () {
// 			var w = $container.width(), 
// 				columnNum = 1,
// 				columnWidth = 0;
// 			if (w > 1200) {
// 				columnNum  = 5;
// 			} else if (w > 900) {
// 				columnNum  = 4;
// 			} else if (w > 600) {
// 				columnNum  = 3;
// 			} else if (w > 300) {
// 				columnNum  = 2;
// 			}
// 			columnWidth = Math.floor(w/columnNum);
// 			$container.find('.item').each(function() {
// 				var $item = $(this),
// 					multiplier_w = $item.attr('class').match(/item-w(\d)/),
// 					multiplier_h = $item.attr('class').match(/item-h(\d)/),
// 					width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
// 					height = multiplier_h ? columnWidth*multiplier_h[1]*0.5 : columnWidth*0.5;

// 				$item.css({
// 					width: width,
// 					height: height
// 				});
// 			});
// 			return columnWidth;
// 		},
// 		isotope = function () {
// 			$container.isotope({
// 				resizable: false,
// 				itemSelector: '.item',
// 				masonry: {
// 					columnWidth: colWidth(),
// 					gutterWidth: 0
// 				}
// 			});
// 		};
// 	isotope();
// 	$(window).smartresize(isotope);
// }(jQuery));
// });