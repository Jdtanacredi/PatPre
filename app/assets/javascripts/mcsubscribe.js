$(document).ready(function() {
	$(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('http://vjs.zencdn.net/v/oceans.mp4',{ambient:true});
});
});