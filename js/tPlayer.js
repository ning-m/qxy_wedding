var styleChange = {pause:{}, play:{}, plsbutton:{}};

styleChange.play.change = function(){
		$('#play').addClass('hidden');
		$('#pause').removeClass('hidden');
	};

styleChange.pause.change = function(){
		$('#pause').addClass('hidden');
		$('#play').removeClass('hidden');
	};

styleChange.plsbutton.change = function(){
		$('#t_pls_show').addClass('selectpls');
		$('#t_pls_show').removeClass('noselectpls');
	};
	
styleChange.plsbutton.recovery = function(){
		$('#t_pls_show').addClass('noselectpls');
		$('#t_pls_show').removeClass('selectpls');
	};

function initAudio(elem) {
        var title = elem.attr('t_name');
        var cover = elem.attr('t_cover');
        var artist = elem.attr('t_artist');
		
        $('.title').text(' - ' + title);
        $('.artist').text(artist);
        $('#t_cover').html('<img src="images/music/' + cover+'">');
		}
		
$(document).ready(function(){
		
	});
