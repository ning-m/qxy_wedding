
function setVideoID(obj){
	var url="display-video.html?VIDEO_ID="+obj.id ;
	window.location.href = url;
}
function getVideoList(){
	$.ajax({
		url : "/qxy_wedding/videoAll",
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
					var msg = data.msg;
					
					if(msg == "TRUE"){
						var videoCount = data.videoCount;
						console.log(videoCount);
						var i = 0;
						var htmlVideoLi='';
						
						for(i;i<videoCount;i++){
							var videoId = data.video[i].videoId;
							var videoName = data.video[i].videoName;
							var videoCover = data.video[i].videoCover;
							var videoAuthor = data.video[i].videoAuthor;
							var videoTime = data.video[i].videoTime;
							var videoPath = data.video[i].videoPath;
							var videoComCount = data.video[i].videoComCount;
							var videoSupCount = data.video[i].videoSupCount;
							var videoDownloadCount = data.video[i].videoDownloadCount;
							
							
							htmlVideoLi = htmlVideoLi + '<div style="margin:0 20px;float:left;text-align:center;">'
                             			
								+ '<div>'
								+ ' 	<img src="Media/videoCover/'+ videoCover +'" style="width:360px;height:300px;"/>'
								+ '</div> '
								+ '<div >'
								+ '	<p id="'+ videoId +'" onclick="javascript:setVideoID(this)" style="font-size:20px;text-align:center;margin:10px auto 5px auto;">'+ videoName +'</p>'
								+ '	<p style="text-align:center;">上传时间:'+ videoTime +'</p>'
                             	+ '	<p style="text-align:center;">上传人：:'+ videoAuthor +'</p>'
								+ '</div>'
                             	+ '</div>';
						
						}
						$("#VIDEO_ITEM").html(htmlVideoLi);
					}
					else{
						console.log(msg);
					}
					}
	});
}



$(document).ready(getVideoList);