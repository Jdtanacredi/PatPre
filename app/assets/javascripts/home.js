var timeoutID;
var gridImages;

function randomizeFuzz() {

}

function hideFuzz() {
  randomizeFuzz();
  $('.fuzz').css('display','none');
}

function changeTrack(sourceUrl) {
    var audio = $(".player");      
    $(".mp3-source").attr("src", sourceUrl);
    /****************/
    audio[0].pause();
    audio[0].load();//suspends and restores all audio element
    audio[0].play();
    timeoutID = window.setTimeout(function() {
    audio[0].pause();
    }, 4000);
    /****************/
}

$(window).load(function() {
	$('.fuzz').fadeOut(6000, function() {
		hideFuzz();
	});
	var $container = $('.grid');
	$container.imagesLoaded( function() {
  	$('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  	});
  	// $(".grid").isotope( 'reLayout' );
	});
});

$(document).ready(function(){
  $('.apple').waypoint(function(direction) {
    if (direction === 'down') {
      console.log('fuzzzz')
      $('.fuzz').css('display','block');
      timeoutID = window.setTimeout(hideFuzz, 500);
    };
    // alert('apple');
  });


  $(window).scroll(function(){
    var distanceFromTop = $("body").scrollTop();
    // console.log(distanceFromTop);

  if(distanceFromTop > 100 && distanceFromTop < 500){
  //   $(window).off("scroll");
    changeTrack('assets/Skepta-cut.mp3');
    console.log('500!!!');
    // Do some stuff here ..
  }
  if(distanceFromTop > 300 && distanceFromTop < 750){
  //   $(window).off("scroll");
    console.log('750!!!');
    // Do some stuff here ..
  }

  });

// var iFrequency = 5000; // expressed in miliseconds
// var myInterval = 0;

// // STARTS and Resets the loop if any
// function startLoop() {
//     if(myInterval > 0) clearInterval(myInterval);  // stop
//     myInterval = setInterval( "doSomething()", iFrequency );  // run
// }

// function doSomething()
// {
//     // (do something here)
// }


function randomImageSelect() {
  gridImages = $('.grid-item');
  return gridImages.get().sort(function(){ 
    return Math.round(Math.random())-0.5
  }).slice(0,5);
}

function flickerImage(randomImages) {
  
  jQuery.each(randomImages,function(index){
    $(this).addClass('flicker');  
  });

  setTimeout(function() {
    $('.grid-item').removeClass('flicker');
  }, 2000);
}


function randomEffects() {
  var randomImages = randomImageSelect();
  
  flickerImage(randomImages);
  // i++;
  setTimeout(randomEffects, 5000);
}
randomEffects();


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
var $window = $('.grid');
$(window).scroll(function(){
    hidden = true;
    var titles = $('#album_logo, .title, .pack-title'),
        titles = $('.pack-title');
    if (hidden === true) {
      for (var i = 0; i < Math.random() * 20; i++) {
        var div = $('<div class="random-bar"/>');
        div.width();
        var color = 'rgba(205,205,205, 1)';
        if (Math.random() > 0.5) {
          color = 'rgba(184, 176, 0, 1)';
        }
        if (Math.random() > 0.6666) {
          color = 'rgba(92, 54, 17, 1)';
        }
        div.css({
          width: Math.random() * 100 + '%',
          left: Math.random() * 95 + '%',
          height: Math.random() * 5 + 20,
          top: Math.random() * 95 + '%',
          background:color
        });
        $('body').append(div);
        hidden = false;
      }
    }
    // titles.css({opacity: 0});
    // setTimeout(function() {
    //   titles.css({opacity: 1});
    // }, 50);
    // setTimeout(function() {
    //   titles.css({opacity: 0});
    // }, 80);
    // setTimeout(function() {
    //   titles.css({opacity: 1});
    // }, 120);
    // setTimeout(function() {
    //   titles.css({opacity: 0});
    // }, 160);
    // setTimeout(function() {
    //   titles.css({opacity: 1});
    // }, 200);
    scrollTimeout = setTimeout(function() {
      $('.random-bar').remove();
      clearTimeout(scrollTimeout);
      hidden = true;
    }, 200);
    // parallax.each(function() {
    //   $(this).css('margin-top', $window.scrollTop() * - 1 * $(this).data('speed'));
    // });
    // for (var i in offsets) {
    //   if (offsets[i] > $window.scrollTop()) {
    //     setActive(i);
    //     break;
    //   }
    // }
  });