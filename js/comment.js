
var tmp=null;
function head(){
	console.log("head start!");
	var htmlHeader ='<!-- Main Header Start -->'
            + '<div class="main-header">'
            + '   <div class="container">'
            + '      <!-- Logo Start -->'
            + '      <div class="logo pull-left">'
            + '         <h1>'
            + '            <a href="index.html">'
            + '            <img src="img/qxy_logo.png" alt="千禧韵婚礼馆" width="200" height="96">'
            + '            </a>'
            + '         </h1>'
            + '      </div>'
            + '      <!-- Logo End -->'
            + '      <!-- Mobile Menu Start -->'
            + '      <div class="mobile navbar-header">'
            + '         <a class="navbar-toggle" data-toggle="collapse" href="index.html">'
            + '         <i class="icon-reorder icon-2x"></i>'
            + '         </a> '
            + '      </div>'
            + '      <!-- Mobile Menu End -->'
            + '      <!-- Menu Start -->'
            + '      <nav class="collapse navbar-collapse menu">'
            + '         <ul class="nav navbar-nav sf-menu">'
            + '            <li>'
            + '               <a id="homepage" href="index.html">首页</a>'
            + '            </li>'
            + '            <li>'
            + '               <a id="company" href="company-homepage.html" class="sf-with-ul">'
            + '               	公司介绍 '
            + '               <span class="sf-sub-indicator">'
            + '               <i class="icon-angle-down "></i>'
            + '               </span>'
            + '               </a>'
            + '               <ul>'
            + '                  <li><a href="company-introduction.html" class="sf-with-ul">公司简介</a></li>'
            + '                  <li><a href="company-member.html" class="sf-with-ul">公司人员</a></li>'
            + '                  <li>'
            + '                  		<a href="company-bussiness.html" class="sf-with-ul"> '
            + '                     	经营范围 '
            + '                     <span class="sf-sub-indicator pull-right">'
            + '                     <i class="icon-angle-right "></i>'
            + '                     </span>'
            + '                     </a>'
            + '                    <ul>'
            + '                        <li><a href="company-bussiness.html#" class="sf-with-ul">结婚庆典</a></li>'
            + '                        <li><a href="company-bussiness.html#" class="sf-with-ul">礼仪主持</a></li>'
            + '                        <li><a href="company-bussiness.html#" class="sf-with-ul">鲜花婚车</a></li>'
            + '                        <li><a href="company-bussiness.html#" class="sf-with-ul">活动庆典</a></li>'
            + '                        <li><a href="company-bussiness.html#" class="sf-with-ul">设备租赁</a></li>'
            + '                        <li><a href="company-bussiness.html#" class="sf-with-ul">灯光摄像</a></li>'
            + '                     </ul>'
            + '                  </li>'
            + '               </ul>'
            + '            </li>'
            + '            <li>'
            + '               <a id="display" href="display.html" class="sf-with-ul">'
            + '               	发布信息'
            + '               <span class="sf-sub-indicator">'
            + '               <i class="icon-angle-down "></i>'
            + '               </span>'
            + '               </a>'
            + '               <ul>'
           
            + '                  <li><a href="display-album.html" class="sf-with-ul">相册</a></li>'
            + '                  <li><a href="display-music.html" class="sf-with-ul">音乐</a></li>'
            + '                  <li><a href="display-videoList.html" class="sf-with-ul">视频</a></li>'
            + '               </ul>'
            + '            </li>'
            + '            <li>'
            + '               <a id="faq" href="faq.html" class="sf-with-ul"> 常见问题</a>'
            + '            </li>'
            + '            <li>'
            + '               <a id="contact" href="contact.html" class="sf-with-ul"> 联系我们</a>'
            + '            </li>'
          
            + '         </ul>'
            + '      </nav>'
            + '      <!-- Menu End --> '
            + '   </div>'
            + '</div>'
            + '<!-- Main Header End -->';
	$("#header").html(htmlHeader);
	console.log("head ok!");
	
}
function foot(){
	console.log("footer start!");
	var htmlFooter ='<!-- Footer Start -->'
            + '<footer id="footer">'
            + '<!-- Footer Top Start -->'
            + '<div class="footer-top">'
            + '   <div class="container">'
            + '      <div class="row" style="text-align:center;margin-left:30%;margin-right:30%">'
            + '         <section>'
            + '            <h3>联系方式</h3>'
            + '            <ul class="contact-us">'
            + '               <li>'
            + '                  <i class="icon-map-marker"></i>'
            + '                  <p> '
            + '                     <strong>地址:</strong>四川省 巴中市 巴州区 通佛路 23号 '
            + '                  </p>'
            + '               </li>'
            + '               <li>'
            + '                  <i class="icon-phone"></i>'
      		+ '                        <p><strong>电话:</strong> 0827-5281520</p>'
      		+ '               </li>'
     		+ '               <li>'
      		+ '                  <i class="icon-envelope"></i>'
      		+ '                  <p><strong>电子邮箱:</strong>2568497666@qq.com</p>'
      		+ '               </li>'
      		+ '            </ul>'
      		+ '         </section>'
      		+ '      </div>'
      		+ '    </div>'
      		+ ' </div>'
      		+ ' <!-- Footer Top End --> '
      		+ ' <!-- Footer Bottom Start -->'
      		+ ' <div class="footer-bottom" style="background-color:rgb(0,0,0)">'
      		+ ' 	<div class="container">'
      		+ '     	<div class="row" style="text-align:center">'
      		+ '         	<div class="col-lg-6 col-md-6 col-xs-12 col-sm-6 " style="width:100%">Copyright &copy; 2016. QianXiYun Wedding All rights reserved.<br/>'
      		+ '             	tel:15651973697      Email:15651973697@163.com ' 
      		+ '				</div>'
      		+ '              '
      		+ ' 		</div>'
      		+ ' 	</div>'
      		+ ' </div>'
     		+ ' <!-- Footer Bottom End --> '
      		+ ' </footer>'
      		+ '<!-- Scroll To Top --> '
      		+ '<a href="#" class="scrollup"><i class="icon-angle-up"></i></a>'
      		+ ' </div>';
	$("#FooterDIV").html(htmlFooter);
	console.log("footer ok!");
}

// function modle(){
// 	console.log("log modal start!");
// 	var htmlModle='<div class="modal-content" id="LogRegDIV" style="margin:150px auto 50px auto;width:800px;height:400px">'
// 			+ '<h1 class="modal-title" style="font-size: 24px;font-weight: 700;text-align:center;color:black;padding-top:15px;margin-bottom:30px;">登录</h1>'
// 			+ '	<div style="padding:10px;margin:10px auto 20px auto;">'
// 			+ '		<div class="row" style="margin:0 auto 0 auto;padding:0 100px 0 100px;">'
// 			+ '			<div class="col-lg-4" style="min-width: 80px;max-width: 90px;padding: 0px;">'
// 			+ '				<h1 style="border-bottom: 0px; color: #34495e;font-size:15px;">用户名：</h1>'
// 			+ '			</div>'
// 			+ '			<div class="col-lg-3" style="padding: 0px;min-width: 299px;max-width: 299px;">'
// 			+ '				<input id="userName" type="text" class="login-field" style="height: 33px;">'
// 			+ '			</div>'
// 			+ '			<div class="col-lg-3" style="margin-top: 5px;">'
// 			+ '				<a id="NAMEmessage" style="color: red;visibility:hidden;" class="awarning">*用户名不能为空</a>'
// 			+ '			</div>'
// 			+ '		</div>'
// 			+ '		'
// 			+ '		<div class="row" style="margin:0 auto 0 auto;padding:0 100px 0 100px;">'
// 			+ '			<div class="col-lg-4" style="min-width: 80px;max-width: 90px;padding: 0px;">'
// 			+ '				<h1 style="border-bottom: 0px; color: #34495e;font-size:15px;">密码：</h1>'
// 			+ '			</div>'
// 			+ '			<div class="col-lg-3" style="padding: 0px;min-width: 299px;max-width: 299px;">'
// 			+ '				<input id="password" type="password" class="login-field" style="height: 33px;">'
// 			+ '			</div>'
// 			+ '			<div class="col-lg-3" style="margin-top: 5px;">'
// 			+ '				<a id="PASSWORDmessage" style="color: red;visibility:hidden;" class="awarning">*密码不能为空</a>'
// 			+ '			</div>'
// 			+ '		</div>'
// 			+ '		<div class="row" style="margin:0 auto 0 auto;padding:0 100px 0 100px;">'
// 			+ '			<button type="button" class="btn btn-primary" onclick="login()" >登录</button>'
// 			+ '			<button type="button" class="btn btn-default" onclick="shiftRegist()">注册</button>'
// 			+ '			<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'
// 			+ '		</div>'
// 			+ '	</div>'
// 			+ '</div>';
// 	$("#modellog").html(htmlModle);
// 	console.log("log modal ok!");
// }

function setCurrent(){
	var currentPath=window.location.pathname;
	console.log(currentPath);
	console.log(tmp);
	if(tmp != null){
		document.getElementById("current").id=tmp;
	}
	switch (currentPath){
	case "/qxy_wedding/index.html":
      case "/qxy_wedding/":
		document.getElementById("homepage").id="current";
		tmp="homepage";
            console.log(currentPath+"为当前页面");
		break;
	case "/qxy_wedding/company-homepage.html":
	case "/qxy_wedding/company-bussiness.html":
	case "/qxy_wedding/company-introduction.html":
	case "/qxy_wedding/company-member.html":
		document.getElementById("company").id="current";
		tmp="company";
		break;
	case "/qxy_wedding/display.html":
	case "/qxy_wedding/display-music.html":
	case "/qxy_wedding/display-picture.html":
	case "/qxy_wedding/display-video.html":
		document.getElementById("display").id="current";
		tmp="display";
		break;
	case "/qxy_wedding/faq.html":
		document.getElementById("faq").id="current";
		tmp="faq";
		break;
	case "/qxy_wedding/contact.html":
		document.getElementById("contact").id="current";
		tmp="contact";
		break;
	default:
		console.log(currentPath);
	}
	
}

$(document).ready(head);
$(document).ready(setCurrent);
$(document).ready(foot);
//$(document).ready(modle);