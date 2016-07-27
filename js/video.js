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

	console.log("/qxy_wedding/videoInfo?videoId="+VIDEO_ID);
	console.log("start loading");
	if (VIDEO_ID == "v001"){
		console.log("start loading");
		$("#videoName").html("我的好兄弟");
		$("#videoName_TITLE").html("我的好兄弟");
		$("#videoNameList").html("我的好兄弟");

		$("#videoAuthor").html("解发权");
		$("#videoTime").html("2016/6/10");

		var htmlVideo = '<source id="video1" src="Media/video/我的好兄弟.mp4" media="only screen and (min-device-width: 568px)"></source>'
					+ ' <source id="video2" src="Media/video/我的好兄弟.mp4" media="only screen and (max-device-width: 568px)"></source>'
					+ ' <source id="video3" src="Media/video/我的好兄弟.mp4" media="only screen and (max-device-heigth: 1000px)"></source>';
		$("#videoVIDEO").html(htmlVideo);
	}
	else if (VIDEO_ID == "v002"){
		$("#videoName").html("巴中千禧韵婚礼馆");
		$("#videoName_TITLE").html("巴中千禧韵婚礼馆");
		$("#videoNameList").html("巴中千禧韵婚礼馆");
		$("#videoAuthor").html("解发权");
		$("#videoTime").html("2016/6/14");
		var htmlVideo = '<source id="video1" src="Media/video/结婚啦-巴中千禧韵婚礼馆.mp4" media="only screen and (min-device-width: 568px)"></source>'
					+ ' <source id="video2" src="Media/video/结婚啦-巴中千禧韵婚礼馆.mp4" media="only screen and (max-device-width: 568px)"></source>'
					+ ' <source id="video3" src="Media/video/结婚啦-巴中千禧韵婚礼馆.mp4" media="only screen and (max-device-heigth: 1000px)"></source>';
		$("#videoVIDEO").html(htmlVideo);
	}
	else if (VIDEO_ID == "v003"){
		$("#videoName").html("巴中千禧韵婚礼馆");
		$("#videoName_TITLE").html("主持");
		$("#videoNameList").html("主持");
		$("#videoAuthor").html("解发权");
		$("#videoTime").html("2016/6/20");
		var htmlVideo = '<source id="video1" src="Media/video/主持.mp4" media="only screen and (min-device-width: 568px)"></source>'
					+ ' <source id="video2" src="Media/video/主持.mp4" media="only screen and (max-device-width: 568px)"></source>'
					+ ' <source id="video3" src="Media/video/主持.mp4" media="only screen and (max-device-heigth: 1000px)"></source>';
		$("#videoVIDEO").html(htmlVideo);
	}
	else if (VIDEO_ID == "v004"){
		$("#videoName").html("关于你的歌");
		$("#videoName_TITLE").html("关于你的歌");
		$("#videoNameList").html("关于你的歌");
		$("#videoAuthor").html("解发权");
		$("#videoTime").html("2016/6/20");
		var htmlVideo = '<source id="video1" src="Media/video/关于你的歌 全.mp4" media="only screen and (min-device-width: 568px)"></source>'
					+ ' <source id="video2" src="Media/video/关于你的歌 全.mp4" media="only screen and (max-device-width: 568px)"></source>'
					+ ' <source id="video3" src="Media/video/关于你的歌 全.mp4" media="only screen and (max-device-heigth: 1000px)"></source>';
		$("#videoVIDEO").html(htmlVideo);
	}
	else if (VIDEO_ID == "v005"){
		$("#videoName").html("现场：我们的歌 & 爱的就是你");
		$("#videoName_TITLE").html("现场：我们的歌 & 爱的就是你");
		$("#videoNameList").html("现场：我们的歌 & 爱的就是你");
		$("#videoAuthor").html("解发权");
		$("#videoTime").html("2016/6/20");
		var htmlVideo = '<source id="video1" src="Media/video/我们的歌 + 爱的就是你.mp4" media="only screen and (min-device-width: 568px)"></source>'
					+ ' <source id="video2" src="Media/video/我们的歌 + 爱的就是你.mp4" media="only screen and (max-device-width: 568px)"></source>'
					+ ' <source id="video3" src="Media/video/我们的歌 + 爱的就是你.mp4" media="only screen and (max-device-heigth: 1000px)"></source>';
		$("#videoVIDEO").html(htmlVideo);
	}
	else{
		alert("加载出错，抱歉QAQ");
	}


	
}

$(document).ready(getVideoInfo);