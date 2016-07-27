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
function getAlbumInfo(){
	var Request = new Object();
	Request = GetRequest();
	var ALBUM_ID = Request["ALBUM_ID"];
	console.log(ALBUM_ID);
	$.ajax({
		url : "/qxy_wedding/albumInfo?albumId="+ALBUM_ID,
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
					var msg = data.msg;
					console.log(msg);
					if(msg == "FALSE"){
						console.log("暂无相册");
					}
					else{
						console.log("获取相册信息成功");
						var albumName=data.albumName;
						var albumCover=data.albumCover;
						var albumAuthor=data.albumAuthor;
						var albumTime=data.albumTime;
						var albumInfo=data.albumInfo;
						var photoCount=data.photoCount;
						
						document.getElementById("albumName").innerHTML=albumName;
						document.getElementById("currentAlbumName").innerHTML=albumName;
						document.getElementById("albumName_TITLE").innerHTML=albumName;
						
						document.getElementById("albumTime").innerHTML="创建时间："+albumTime;
						document.getElementById("albumAuthor").innerHTML="创建人："+albumAuthor;
						document.getElementById("albumInfo").innerHTML="简介:"+albumInfo;
						
						console.log("相册信息OK");
						
						var msgPic = data.msgPic;
						console.log(msgPic);
						if(msgPic == "TRUE_PIC"){
							
							var htmlPicLi='';
							
							for(var pc = 0;pc<photoCount;pc++){
								var picId=data.pic[pc].picId;
								var picName=data.pic[pc].picName;
								var picDescription=data.pic[pc].picDescription;
								var picTime=data.pic[pc].picTime;
								var picPath=data.pic[pc].picPath;
								var picComCount=data.pic[pc].picComCount;
								var picSupCount=data.pic[pc].picSupCount;
								
								if(picDescription == "null"){
									picDescription = "";
								}
								
								htmlPicLi = htmlPicLi +'<figure class="gallery-item">'
				+ ' <img src="Media/picture/'+ picPath +'" alt="">'
				+ '<figcaption>'+ picName +'<br/></figcaption>'
				+ '<time>'+ picTime +'<br/></time>'
				+ '<description>'+ picDescription +'</description>'
				+ '</figure>';
							}
							$("#MyGallery").html(htmlPicLi);
							$('.gallery-item').ma5gallery({
        						preload:true,
        						fullscreen:false
    						});
							console.log("获取照片信息成功");
							
							
						}else{
							$("#MyGallery").html("暂无图片");
						}
					}
				}
	});
}

$(document).ready(getAlbumInfo);