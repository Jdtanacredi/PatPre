$(document).ready(function() {
	// Display book reader
	$(function() {
		$('.chapter').slimScroll({
			height: '477px',
			width: '498px',
			color: '#2DB6CF',
			railVisible: 'true',
			alwaysVisible: 'true',
			allowPageScroll: 'true'
		});
		$('.slimScrollDiv').css('display', 'none');
		$('.slimScrollDiv').first().css('display', 'block');
	});

// If mobile, require click on preorder list
	var isAndroid, isWindows, isBlackberry, isiDevice, mainNav, contentSections;
	 isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	 isWindows = /windows phone/i.test(navigator.userAgent.toLowerCase());
	 isBlackberry = /blackberry/i.test(navigator.userAgent.toLowerCase());
	 isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
	 mainNav = $('.main-nav');
	 contentSections = $('.cd-section');

	if(isAndroid || isWindows || isBlackberry || isiDevice){
		$('.preorder-button-container').click(function() {
			$('.dropdown').toggleClass('visible');
		});
	} else {
		$('.preorder-button-container').hover(function() {
			// $('.dropdown').toggleClass('visible');
           $('.dropdown').slideDown('fast');
         }, 
         function () {
           $('.dropdown').slideUp('fast');
         }
     );
	}
	// Open and close mobile nav functionality
	$('.mobile-nav-button').click(function() {
  		$(this).toggleClass('expanded').siblings('ul').slideToggle();
	});
	$('.nav-item').click(function() {
		$('.book-mobile-menu ul').slideToggle();
	});
	$(".nav-item").click(function() {
		var clickLink = $(this).children().attr('href').replace('#','.');
    $('html,body').animate({
        scrollTop: $(clickLink).offset().top },
        'slow');
    	return false;
	});


	// Close news banner
	$('.close-banner').click(function(){
		$('.news-banner').slideUp();
	});


	// Change chapters in book reader
	function displayNewChaptper(chapter) {
		$('.' + chapter).parent().css('display','block');
		$('.' + chapter).parent().siblings().css('display','none');
	}
	$(function() {
		$('.reader-button').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			if ($(this).hasClass('chapter-1-button')) {
				displayNewChaptper('chapter-1');
			} else if ($(this).hasClass('chapter-2-button')) {
				displayNewChaptper('chapter-2');
			} else {
				displayNewChaptper('chapter-3');
			}
		});
	});
	function updateMainNavigation() {
		contentSections.each(function(){
			var actual = $(this),
				actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
				actualAnchor = mainNav.find('a[href="#'+actual.attr('id')+'"]');
			if ( ( actual.offset().top - mainNav.height() <= $(window).scrollTop() ) && ( actual.offset().top +  actualHeight - mainNav.height() > $(window).scrollTop() ) ) {
				actualAnchor.addClass('active');
			}else {
				actualAnchor.removeClass('active');
			}
		});
	}
	$(window).on('scroll', function(){
	updateMainNavigation();
	});

	function waypointRunner(target, className) {
		$(target).waypoint(function() {
			$(target).addClass(className);
		});
		$(target).waypoint(function() {
			$(target).addClass(className);
		},{ offset: 'bottom-in-view' });
	}
	waypointRunner('.quote-1','load');
	waypointRunner('.quote-2','load');
	waypointRunner('.quote-3','load');
	waypointRunner('.quote-4','load');
	waypointRunner('.quote-5','load');
	waypointRunner('.quote-6','load');
});




// $('.quote').waypoint(function() {
//    $(this).toggleClass('animated bounce');
//    },
// { offset: 'bottom-in-view' });