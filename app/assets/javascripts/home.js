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
	// $('.fuzz').fadeOut(2000, function() {
		hideFuzz();
	// });
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
      // changeTrack('assets/Skepta-cut.mp3');
    }
    if(distanceFromTop > 300 && distanceFromTop < 750){
    }
  });


function randomImageSelect() {
  gridImages = $('.grid-item');
  return gridImages.get().sort(function(){ 
    return Math.round(Math.random())-0.5
  }).slice(0,8);
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
  setTimeout(randomEffects, 8000);
}
randomEffects();


});

var $window = $('.grid');
$(window).scroll(function(){
    hidden = true;
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
          right: Math.random() * 95 + '%',
          height: Math.random() * 5 + 20,
          top: Math.random() * 95 + '%',
          background:color
        });
        $('body').append(div);
        hidden = false;
      }
    }
    scrollTimeout = setTimeout(function() {
      $('.random-bar').remove();
      clearTimeout(scrollTimeout);
      hidden = true;
    }, 200);
  });