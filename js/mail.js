function sendMail(){
	var name = $("#name").val();
	var email = $("#email").val();
	var subject = $("#subject").val();
	var text = $("#text").val();

	console.log(name);
	console.log(email);
	console.log(subject);
	console.log(text);
	if(name == "" || email == "" || subject == "" || text == ""){
		console.log("NO!");
		alert("请填写完整信息");
	}
	else{
		console.log("OK!");
		$.ajax({
					url : "/qxy_wedding/sendMail?name=" + name + "&email=" + email
							+ "&subject=" + subject + "&text=" + text + "&User_uid=" ,
					contentType : "text/json;charset=utf-8",
					type : "POST",
					success : function(data) {
						var msg = data[0].msg;
						console.log(msg);
						
						if (msg == "发送成功"){
							alert("发送邮件成功！请耐心等待我们的回复~谢谢");
						}
						else{
							alert("发送失败，请重新发送");
						}
							
					}
				});
	}
	
}

function reSetMail(){
	console.log("Reset Start!");
	document.getElementById("name").value="";
	document.getElementById("email").value="";
	document.getElementById("subject").value="";
	document.getElementById("text").value="";
}