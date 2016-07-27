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

	var htmlPicLi='';

	if(ALBUM_ID == "album1"){
		document.getElementById("albumName").innerHTML="千禧韵婚礼馆";
		document.getElementById("currentAlbumName").innerHTML="千禧韵婚礼馆";
		document.getElementById("albumName_TITLE").innerHTML="千禧韵婚礼馆";
						
		document.getElementById("albumTime").innerHTML="创建时间：2016/05/30";
		document.getElementById("albumAuthor").innerHTML="创建人：解发权";
		document.getElementById("albumInfo").innerHTML="简介:千禧韵婚礼馆";

		htmlPicLi = htmlPicLi + '<figure class="gallery-item">'
			+ '	<img src="Media/picture/logo.jpg" alt="">'
			+ '	<figcaption>logo<br/></figcaption>'
			+ '	<time>2016/05/30<br/></time>'
			+ '	<description>千禧韵婚礼馆logo</description>'
			+ '</figure> '

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/qxy_1.jpg" alt="">'
			+ '	<figcaption>qxy_1<br/></figcaption>'
			+ '	<time>2016/05/30<br/></time>'
			+ '	<description>千禧韵婚礼馆</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/qxy_2.jpg" alt="">'
			+ '	<figcaption>qxy_2<br/></figcaption>'
			+ '	<time>2016/05/30<br/></time>'
			+ '	<description>千禧韵婚礼馆</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/qxy_3.jpg" alt="">'
			+ '	<figcaption>qxy_3<br/></figcaption>'
			+ '	<time>2016/05/30<br/></time>'
			+ '	<description>千禧韵婚礼馆</description>'
			+ '</figure>';


			$("#MyGallery").html(htmlPicLi);
			$('.gallery-item').ma5gallery({
        		preload:true,
        		fullscreen:false
    		});
			console.log("获取照片信息成功");

	}
	else if(ALBUM_ID == "album2"){
		document.getElementById("albumName").innerHTML="婚礼现场";
		document.getElementById("currentAlbumName").innerHTML="婚礼现场";
		document.getElementById("albumName_TITLE").innerHTML="婚礼现场";
						
		document.getElementById("albumTime").innerHTML="创建时间：2016/06/01";
		document.getElementById("albumAuthor").innerHTML="创建人：解发权";
		document.getElementById("albumInfo").innerHTML="简介:婚礼现场";

				htmlPicLi = htmlPicLi + '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p1.jpg" alt="">'
			+ '	<figcaption>p1<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p2.jpg" alt="">'
			+ '	<figcaption>p2<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p3.jpg" alt="">'
			+ '	<figcaption>p3<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p4.jpg" alt="">'
			+ '	<figcaption>p4<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p5.jpg" alt="">'
			+ '	<figcaption>p5<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p6.jpg" alt="">'
			+ '	<figcaption>p6<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p7.jpg" alt="">'
			+ '	<figcaption>p7<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p8.jpg" alt="">'
			+ '	<figcaption>p8<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p9.jpg" alt="">'
			+ '	<figcaption>p9<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p10.jpg" alt="">'
			+ '	<figcaption>p10<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p11.jpg" alt="">'
			+ '	<figcaption>p11<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p12.jpg" alt="">'
			+ '	<figcaption>p12<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p13.jpg" alt="">'
			+ '	<figcaption>p13<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'

			+ '<figure class="gallery-item">'
			+ '	<img src="Media/picture/p14.jpg" alt="">'
			+ '	<figcaption>p14<br/></figcaption>'
			+ '	<time>2016/06/01<br/></time>'
			+ '	<description>婚礼现场</description>'
			+ '</figure>'
			
		;

			$("#MyGallery").html(htmlPicLi);
			$('.gallery-item').ma5gallery({
        		preload:true,
        		fullscreen:false
    		});
	}
	else{
		alert("加载出错");
		$("#MyGallery").html("暂无图片");
	}
					
	
}

$(document).ready(getAlbumInfo);