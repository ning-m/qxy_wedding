function setAlubumID(obj){
	console.log(obj.id);
	var url="display-picture.html?ALBUM_ID="+obj.id;
	window.location.href = url;
}
function getAllAlbum(){
	$.ajax({
		url : "/qxy_wedding/albumAll",
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
		
					var msg = data.msg;
					
					if(msg == "TRUE"){
						var albumCount = data.albumCount;
						console.log(albumCount);
						var i = 0;
						var htmlAlbumLi='';
						
						for(i;i<albumCount;i++){
							var albumId = data.album[i].albumId;
							var albumName = data.album[i].albumName;
							var albumCover = data.album[i].albumCover;
							var albumAuthor = data.album[i].albumAuthor;
							var albumTime = data.album[i].albumTime;
							var albumInfo = data.album[i].albumInfo;
							var photoCount = data.album[i].photoCount;
							
							
							htmlAlbumLi = htmlAlbumLi + '<div style="margin:0 20px;float:left;text-align:center;background-image:url(img/album_background.png)">'
                             			
								+ '<div>'
								+ ' 	<img src="Media/picture/'+ albumCover +'" style="width:360px;height:300px;"/>'
								+ '</div> '
								+ '<div >'
								+ '	<p id="'+ albumId +'" onclick="javascript:setAlubumID(this)" style="font-size:20px;text-align:center;margin:10px auto 5px auto;">'+ albumName +'</p>'
								+ '	<p style="text-align:center;">照片数:'+ photoCount +'</p>'
                             	+ '	<p style="text-align:center;">简介:'+ albumInfo +'</p>'
								+ '</div>'
                             	+ '</div>';
						
						}
						$("#ALBUM_ITEM").html(htmlAlbumLi);
					}
					else{
						console.log(msg);
					}
					}
	});
}



$(document).ready(getAllAlbum);