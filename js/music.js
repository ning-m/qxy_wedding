var currentMediaId;
var currentMediaPath;
function getMusicInfo(){
	$.ajax({
		url : "/qxy_wedding/musicInfo",
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
					
					var msg = data.msg;
					console.log(msg);
					if(msg == "FALSE"){
						console.log("暂无歌曲");
					}
					else{
						console.log("获取歌曲成功");
						var musicCount=data.musicCount;
						console.log("获得歌曲："+musicCount);
						var i = 0;
						var htmlMusicLi='';
						
						for(i;i<musicCount;i++){
							var musicId = data.music[i].musicId;
							var musicName = data.music[i].musicName;
							var singer = data.music[i].singer;
							var musicTime = data.music[i].musicTime;
							var musicCover = data.music[i].musicCover;
							var musicInfo = data.music[i].musicInfo;
							var musicPath = data.music[i].musicPath;
							var musicComCount = data.music[i].musicComCount;
							var musicSupCount = data.music[i].musicSupCount;
							var musicDownloadCount = data.music[i].musicDownloadCount;
							
							
							htmlMusicLi = htmlMusicLi + '<li id="'+ musicId +'" name="'+ musicPath +'" t_cover="'+ musicCover +'" t_artist="'+ singer +'" t_name="'+ musicName +'"> <a href="#">'+ musicName +'</a>'
      							+ ' <audio preload="none">'
     						 	+ '  <source src="Media/music/'+ musicPath +'" type="audio/mp3">'
      							+ '  <source src="http://www.internetke.com" type="audio/ogg; codecs=vorbis">'
      							+ ' </audio>'
      							+ ' </li>';
						
						}
						$("#MUSIC_playList").html(htmlMusicLi);
						
				
						var dur, durM, val, mus, elem, prog;		
						var Pl = 0;	
			
						$('#MUSIC_playList li a').click(function(){
							currentMediaId = $(this).parent("li").attr("id");
							currentMediaPath = $(this).parent("li").attr("name");
							
							console.log("music: " + currentMediaPath + " is ok");
							document.getElementById("downloadLink").href="Media/music/"+ currentMediaPath ;
							
							getMediaComment(currentMediaId);
											
							$('#t_title_info').animate( {
												top : "-1.5em",
												opacity : "hide"
											}, 0);
											initAudio($(this).parent("li"));
											$('#error').text('');
											styleChange.play.change();
											console.log(mus);
											if (mus) {
												mus[0].pause();
												mus[0].currentTime = 0;
												$('li').removeClass('active');
											}
											mus = $(this).next("audio");
											console.log(mus);
											$(this).parent("li").addClass(
													'active');
											mus[0].play();
				
		$('#t_progress').slider({
				value: 0,
				orientation: "horizontal",
				range: "min",
				animate: true,
				step: 1
			});
			
			$('audio').on("timeupdate", function() {
				mus[0].volume = val/100;
				d = this.duration;
				c = this.currentTime;
				curM = Math.floor(c/60);
				curS = Math.round(c - curM*60);
				$('#timeCurrent').text(curM + ':' + curS);
				$('#t_progress').slider({
						max: d,
						min: 0,
						value: c
					});
			});
				
			$('audio').on("playing", function () {
					dur = this.duration;
					durM = Math.floor(dur/60) + ':' + Math.round((dur - Math.floor(dur/60))/10);
        			$('#duration').text(durM);
					$(this).parent("li").addClass('active');
					$('#t_title_info').animate({top: "0em",opacity: "show"}, 500);	
    		});
			
			$('audio').on("ended", function(){
					mus = $(this).parent('li').next('li').first();
					mus = mus.children('audio');
					$(this).parent("li").addClass('active');
					var next = $('li.active').next();
					$('li').removeClass('active');
					if(mus[0]){
						initAudio(next);
						mus[0].play();
					}
					else{
							$('#error').text('最后一首歌！');
							$('#t_cover').html('<img src="images/music/logo.png">');
						}
				});
			
			//play button
			$('#play').click(function(){
				if(mus){
					mus[0].play();
					styleChange.play.change();
				$('#error').text('');
				}	
				else {
					$('#error').text('请先选择要播放的歌曲！');
				}

			}); 
			
			// pause button
			$('#pause').click(function() {
				
				if(mus){
					mus[0].pause();
					styleChange.pause.change();
				}
				else {
					$('#error').text('请先选择要播放的歌曲！');
				}
				
			});
			
			//next button
			$('#next').click(function(){
					mus[0].pause();
					mus[0].currentTime = 0;
					mus = mus.parent('li').next('li').first();
					mus = mus.children('audio');
					var next = $('li.active').next();
					$('#t_title_info').animate({top: "-1.25em",opacity: "hide"}, 0);
					$('li').removeClass('active');
					if(mus[0]){
						initAudio(next);
						mus[0].play();
					}
					else{
							$('#error').text('已经到底啦，请选择歌曲！');
							$('#t_cover').html('<img src="Images/logo.png">');
							mus = null;
						}
				});
				
			//prev button
			$('#prev').click(function(){
					mus[0].pause();
					mus[0].currentTime = 0;
					mus = mus.parent('li').prev('li').last();
					mus = mus.children('audio');
					var prev = $('li.active').prev();
					$('li').removeClass('active');
					$('#t_title_info').animate({top: "-1.25em",opacity: "hide"}, 0);
					if(mus[0]){
						initAudio(prev);
						mus[0].play();
					}
					else{
							$('#error').text('已经到顶啦，请选择歌曲！');
							$('#t_cover').html('<img src="Images/logo.png">');
							
							mus = null;
						}
				});

			//volume
			$('#rangeVal').slider({
					value: 60,
					orientation: "horizontal",
					range: "min",
					animate: true,
					step: 1
				});
		
			// volume text
			val = $('#rangeVal').slider("value");
			$('#val').text(val);
			
			var tooltip = $('#val');
			tooltip.hide();
			
			$('#rangeVal').slider({
				start: function( event, ui ) {
					  tooltip.fadeIn('fast');
				},
				stop: function(event,ui) {
				tooltip.fadeOut('fast');
				},
					slide: function( event, ui ) {
						val = ui.value;
						tooltip.css('left', val-30).text(ui.value);
						$('#val').text(val);
						
						if(mus){
							mus[0].volume = val/100;
						}
						else {
							$('#error').text('请先选择要播放的歌曲！');
						}
					}
				});
				
			// progress
			$('#t_progress').slider({
				start: function( event, ui ) {
					mus[0].pause();
					},
				stop: function( event, ui ) {
					prog = ui.value;
					mus[0].currentTime = prog;
					mus[0].play();
					styleChange.play.change();
				}
			});
			
			//playlist button
			$('#t_pls_show').click(function(){
				console.log("PL:before::"+Pl);
					if (Pl == 0) {
					  styleChange.plsbutton.change();
					  Pl = 1;
					  }
					else {
					  styleChange.plsbutton.recovery();
					  Pl = 0;
					}
					$('#playlist').slideToggle();
					console.log("Pl:"+Pl);
				});
			});
					}
					}
			});
	
}
function getMediaComment(musicId){
	var mediaType = "music";
	console.log(musicId+"开始获取评论");
	$.ajax({
		url : "/qxy_wedding/getComment?mediaId="+musicId+"&mediaType="+mediaType,
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
					console.log("获取成功");
					var msg = data.msg;
					console.log(msg);
					if(msg == "FALSE"){
						console.log("暂无评论");
						var htmlNo='<h1 style="color:rgb(100,100,100);text-align:center;">暂无评论</h1>';
						$("#musicCommentInfo").html(htmlNo);
					}
					else{
						console.log("获取评论成功");
						var comCount=data.comCount;
						console.log("获得评论："+comCount);
						var i = 0;
						var htmlComLi='';
						
						for(i;i<comCount;i++){
							var comId = data.comment[i].comId;
							var nickName = data.comment[i].nickName;
							var portrait = data.comment[i].portrait;
							var comInfo = data.comment[i].comInfo;
							var comTime = data.comment[i].comTime;
							
							
							htmlComLi = htmlComLi + '<div class="musicComment" style="width:365px;height:120px;">'
							+'<hr size="1" color="#ff9966" style="filter:alpha(opacity=10,finishopacity=100,style=1,startX=100,startY=100,finishX=0,finishY=0);width:360px;margin:5px 0 5px 0"> '
							+ '<p >'+ (comCount-i)+'楼 : '+comTime+'</p>'
					+ '<div style="width:50px;height:50px;margin:10px;background-color:red;"><img src="img/userPortrait/'+ portrait +'"/></div>'
					+ '<div id="commentUserName" style="text-align:center;width:80px;position:absolute;">'+ nickName +'</div>'
					+ '<div class="send">'
					+ comInfo
					+ '	<div class="arrow" style="color:black;"></div>'
					+ '</div>'
					+ '</div>';
							
						}
						$("#musicCommentInfo").html(htmlComLi);
					}
					}
	});
}

$(document).ready(getMusicInfo);
