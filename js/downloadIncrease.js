function downloadIncrease(obj){
	$.ajax({
				url : "/qxy_wedding/download?User_uid=" + User_uid + "&mediaType="+obj+"&mediaId="+currentMediaId,
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
					var msg = data.msg;
					var msg1 = data.msg1;
					console.log(msg);
					
					if(msg == "INSERT OK!"){
						
							console.log("下载成功");
						
					}
					else{
						console.log("下载失败");
					}
				}
			}
	);
}