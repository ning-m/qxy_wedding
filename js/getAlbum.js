function setAlubumID(obj){
	console.log(obj.id);
	var url="display-picture.html?ALBUM_ID="+obj.id;
	window.location.href = url;
}