function shiftRegist(){
	var htmlR = '<h1 class="modal-title" style="font-size: 24px;font-weight: 700;text-align:center;color:black;padding-top:15px;margin-bottom:30px;">注册</h1>'
				+ '<div style="padding:10px;margin:10px auto 20px auto;">'
				+ '	<div class="row" style="margin:0 auto 0 auto;padding:0 100px 0 100px;">'
				+ '		<div class="col-lg-4" style="min-width: 80px;max-width: 90px;padding: 0px;">'
				+ '			<h1 style="border-bottom: 0px; color: #34495e;font-size:15px;">用户名：</h1>'
				+ '		</div>'
				+ '		<div class="col-lg-3" style="padding: 0px;min-width: 200px;max-width: 200px;">'
				+ '			<input id="userName" type="text" class="login-field" style="height: 33px;">'
				+ '		</div>'
				+ '		<div class="col-lg-3" style="margin-top: 5px;width:200px;">'
				+ '			<a id="NAMEmessage" style="color:rgb(100,100,100);" class="awarning">*6~14位字母、数字组成</a>'
				+ '		</div>'
				+ '	</div>'
				
				+ '	<div class="row" style="margin:0 auto 0 auto;padding:0 100px 0 100px;">'
				+ '		<div class="col-lg-4" style="min-width: 80px;max-width: 90px;padding: 0px;">'
				+ '			<h1 style="border-bottom: 0px; color: #34495e;font-size:15px;">密码：</h1>'
				+ '		</div>'
				+ '		<div class="col-lg-3" style="padding: 0px;min-width: 200px;max-width: 200px;">'
				+ '			<input id="Password" type="password" class="login-field" style="height: 33px;">'
				+ '		</div>'
				+ '		<div class="col-lg-3" style="margin-top: 5px;width:200px;">'
				+ '			<a id="PASSWORDmessage" style="color: rgb(100,100,100);" class="awarning">*请设置6~14位密码</a>'
				+ '		</div>'
				+ '	</div>'
				
				+ '	<div class="row" style="margin:0 auto 0 auto;padding:0 100px 0 100px;">'
				+ '		<div class="col-lg-4" style="min-width: 80px;max-width: 90px;padding: 0px;">'
				+ '			<h1 style="border-bottom: 0px; color: #34495e;font-size:15px;">确认密码：</h1>'
				+ '		</div>'
				+ '		<div class="col-lg-3" style="padding: 0px;min-width: 200px;max-width: 200px;">'
				+ '			<input id="isPassword" type="password" class="login-field" style="height: 33px;">'
				+ '		</div>'
				+ '		<div class="col-lg-3" style="margin-top: 5px;">'
				+ '			<a id="ISMessage" style="color:red;visibility: hidden;width:200px;" class="awarning">*两次密码不一致</a>'
				+ '		</div>'
				+ '	</div>'
				
				+ '	<div class="row" style="margin:0 auto 0 auto;padding:0 100px 0 100px;">'
				+ '		<div class="col-lg-4" style="min-width: 80px;max-width: 90px;padding: 0px;">'
				+ '			<h1 style="border-bottom: 0px; color: #34495e;font-size:15px;">昵称：</h1>'
				+ '		</div>'
				+ '		<div class="col-lg-3" style="padding: 0px;min-width: 200px;max-width: 200px;">'
				+ '			<input id="nickname" type="text" class="login-field" style="height: 33px;">'
				+ '		</div>'
				+ '	</div>'
				
				+ '	<div class="row" style="margin:0 auto 0 auto;padding:0 100px 0 100px;">'
				+ '		<button type="button" class="btn btn-primary" onclick="register()">提交</button>'
				+ '     <button type="button" class="btn btn-primary" onclick="modle()">登录</button>'
				+ '		<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'
				+ '	</div>'
				+ '</div>';
						
	$("#LogRegDIV").html(htmlR);
}

// 获取cookie
function getCookie(cookie_name) {
	var allcookies = document.cookie;
	var cookie_pos = allcookies.indexOf(cookie_name); // 索引的长度

	// 如果找到了索引，就代表cookie存在，
	// 反之，就说明不存在。
	if (cookie_pos != -1) {
		// 把cookie_pos放在值的开始，只要给值加1即可。
		cookie_pos += cookie_name.length + 1; // 这里容易出问题，所以请大家参考的时候自己好好研究一下
		var cookie_end = allcookies.indexOf(";", cookie_pos);

		if (cookie_end == -1) {
			cookie_end = allcookies.length;
		}

		var value = unescape(allcookies.substring(cookie_pos, cookie_end)); // 这里就可以得到你想要的cookie的值了
	}
	return value;
}

function isLogin(){
	
		
	var all_cookies = document.cookie;
	
	if (all_cookies.length > 0) {
		console.log("cookie不为空");
		console.log(all_cookies);
		var cookie_uid = getCookie("uid");
		var cookie_uname = getCookie("uname");
		var cookie_password = getCookie("password");
		
		console.log(cookie_uid);
		console.log(cookie_uname);
		console.log(cookie_password);
		
		User_uid = cookie_uid;
		User_uname = cookie_uname;
		console.log("已登录！！！");
		
		console.log("加载用户模块");
		document.getElementById("ONCLICK").onclick=function(){
			window.location.href="userHomepage.html";
		};
		
	}else{
		console.log("cookie为空");
		modle();
		document.getElementById("ONCLICK").onclick=function(){
			$("#modellog").modal();
			console.log("加载登录模块");
		};
	}
}


function login(){
	var uname = $("#userName").val();
	var password = $("#password").val();
	//var remember_flag = document.getElementById("checkbox").checked;
	console.log(uname);
	console.log(password);
		
		if(uname.length == 0)
			{document.getElementById("NAMEmessage").style.visibility="visible";}
		else if(password.length == 0)
			{document.getElementById("PASSWORDmessage").style.visibility="visible";}
		else{
			console.log("开始登陆");
			$.ajax({
				url : "/qxy_wedding/login?uname=" + uname + "&password="
						+ password ,
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
					console.log("成功");
					var msg = data[0].msg;
					console.log(msg);
					var state = data[1].state;
					console.log(state);
					if (state == '0') {
						//$("#msg").html(msg);
						//console.log(msg);
						User_uid = data[2].uid;
						console.log(User_uid);
						
						//$("#modellog").modal('close');
						console.log("登陆成功");
						location.reload();
						
					} else {
						console.log(msg);
					}
					alert(msg);
				}
			});
		}
	
}

$(document).ready(isLogin);