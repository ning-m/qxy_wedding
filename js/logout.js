function Logout() {
	modle();
	
	console.log("删除cookies");
	delCookie("uid");
	delCookie("uname");
	delCookie("password");
	
	window.location.href="index.html";
}
// 删除cookie
function delCookie(name) {// 为cookie name
	var date = new Date();
	date.setTime(date.getTime() - 1000000);
	document.cookie = name + "=a; expires=" + date.toGMTString();
}