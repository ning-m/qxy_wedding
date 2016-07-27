function GetRequest() {
	// var url =
	// unescape(encodeURI(window.parent.location.search).replace(/\\\\u/g,'%u'));
var url = location.search; // 获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

var currentMediaId;
function getVideoInfo(){
	var Request = new Object();
	Request = GetRequest();
	var VIDEO_ID = Request["VIDEO_ID"];
	console.log(VIDEO_ID);
	currentMediaId=VIDEO_ID;
	console.log("/qxy_wedding/videoInfo?videoId="+VIDEO_ID);
	$.ajax({
		url : "/qxy_wedding/videoInfo?videoId="+VIDEO_ID,
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
					var msg = data[0].msg;
					console.log(msg);
					
					if(msg=="TRUE"){
						var videoName = data[1].videoName;
						console.log(videoName);
						var videoAuthor = data[2].videoAuthor;
						var videoTime = data[3].videoTime;
						var videoPath = data[4].videoPath;
						var videoCover = data[5].videoCover;
						var videoComCount = data[6].videoComCount;
						var videoSupCount = data[7].videoSupCount;
						var videoDownloadCount = data[8].videoDownloadCount;
						console.log(videoPath);
						
						$("#videoName").html(videoName);
						$("#videoName_TITLE").html(videoName);
						$("#videoNameList").html(videoName);
						$("#videoAuthor").html(videoAuthor);
						$("#videoTime").html(videoTime);
						document.getElementById("videoName").innerHtml=videoName;
						document.getElementById("videoAuthor").innerHtml=videoAuthor;
						document.getElementById("videoTime").innerHtml=videoTime;
						document.getElementById("videoVIDEO").poster="Media/videoCover/"+videoCover;
						
						document.getElementById("downloadLink").href="Media/video/"+ videoPath;
						var htmlVideo = '<source id="video1" src="Media/video/'+ videoPath +'" media="only screen and (min-device-width: 568px)"></source>'
							+ ' <source id="video2" src="Media/video/'+ videoPath +'" media="only screen and (max-device-width: 568px)"></source>'
							+ ' <source id="video3" src="Media/video/'+ videoPath +'" media="only screen and (max-device-heigth: 1000px)"></source>';
						$("#videoVIDEO").html(htmlVideo);
						getMediaComment(VIDEO_ID);
						
					}else{
						alert("找不到视频");
					}
					
					}
	});
}

function getMediaComment(videoID){
	var mediaType = "video";
	console.log(videoID+"开始获取视频评论");
	console.log("/qxy_wedding/getComment?mediaId="+videoID+"&mediaType="+mediaType);
	$.ajax({
		url : "/qxy_wedding/getComment?mediaId="+videoID+"&mediaType="+mediaType,
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
					console.log("获取视频评论成功");
					var msg = data.msg;
					console.log(msg);
					if(msg == "FALSE"){
						console.log("暂无评论");
						var htmlNo='<h1 style="color:rgb(100,100,100);text-align:center;">暂无评论</h1>';
						$("#videoCommentInfo").html(htmlNo);
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
							
							
							htmlComLi = htmlComLi + '<div class="videoComment" style="width:365px;height:120px;">'
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
						$("#videoCommentInfo").html(htmlComLi);
					}
					}
	});
}
$(document).ready(getVideoInfo);