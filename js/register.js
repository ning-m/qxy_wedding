function checknum(value) {
            var Regx = /^[A-Za-z0-9]*$/;
            if (Regx.test(value)) {
                return true;
            }
            else {
                return false;
            }
        }
function register(){
	console.log("点击成功");
	var userName = $("#userName").val();
	var nickname = $("#nickname").val();
	var password0 = $("#Password").val();
	var password1 = $("#isPassword").val();
	
	if (userName.length < 6 || userName.length > 14 || !checknum(userName)){
		console.log("用户名不合适");
		document.getElementById('NAMEmessage').style.color="red";
	}
	else if( password0.length <6 || password0.length > 14){
		document.getElementById('NAMEmessage').style.color="rgb(100,100,100)";
		document.getElementById('PASSWORDmessage').style.color="red";
		console.log(password0.length);
		console.log("密码不合适");
	}
	else if(password0 != password1){
		document.getElementById('PASSWORDmessage').style.color="rgb(100,100,100)";
		document.getElementById('ISMessage').style.visibility="visible";
		console.log("两次密码不一致");
	}
	else{
		$.ajax({
					url : "/qxy_wedding/register?userName=" + userName + "&nickname=" + nickname
							+ "&password=" + password0,
					contentType : "text/json;charset=utf-8",
					type : "POST",
					success : function(data) {
						var msg = data[0].msg;
						
						console.log(msg);
						var state = data[1].state;
						if (state == '0'){
							window.location.href = "/qxy_wedding/index.html";
							alert("注册成功，请登录");
						}else{
							if(msg == "用户名已注册"){
								alert("用户名已被注册，请更换用户名");
							}
							else{
								$("NAMEmessage").html(msg);
								document.getElementById('NAMEmessage').style.color="blue";
							}
						}
					}
				});
	}
}