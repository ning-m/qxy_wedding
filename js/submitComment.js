
function submitComment(obj){
	var subComment=$("#subComment").val();
	
	$.ajax({
				url : "/qxy_wedding/submitComment?User_uid=" + User_uid + "&subComment=" + subComment+ "&comType="+obj+ "&mediaId="+currentMediaId,
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
					var msg = data.msg;
					var msg1 = data.msg1;
					console.log(msg);
					console.log(msg1);
					
					if(msg == "INSERT OK!"){
						if(msg1 == "INSERT OK!"){
							getMediaComment(currentMediaId);
						}else{
							alert("评论失败");
						}
					}
					else{
						alert("评论失败");
					}
				}
			}
	);
	
}