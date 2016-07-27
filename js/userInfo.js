function getUserInfo(){
	$.ajax({
				url : "/qxy_wedding/userInfo?User_uid=" + User_uid,
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
					var nickName = data[0].nickName;
					var userPassword = data[1].userPassword;
					var userAge = data[2].userAge;
					var userSex = data[3].userSex;
					var userEmail = data[4].userEmail;
					var userPortrait = data[5].userPortrait;
					var userSignature = data[6].userSignature;
					var apartment = data[7].apartment;
					var country = data[8].country;
					var background = data[9].background;
					
					console.log(background);
					document.getElementById("UserHeader").style.background="url(img/userBackground/" + background;
					
					document.getElementById("userPortrait").src="img/userPortrait/" + userPortrait;
					document.getElementById("view").style.background="url(img/userPortrait/" + userPortrait;
					
					document.getElementById("nickName").innerHTML=nickName;
					document.getElementById("NickName").innerHTML=nickName;
					document.getElementById("nickName_modify").value=nickName;
					
					document.getElementById("psd_modify").value=userPassword;
					document.getElementById("isPsd_modify").value=userPassword;
					
					document.getElementById("age").innerHTML=userAge;
					document.getElementById("age_modify").value=userAge;
					
					document.getElementById("sex").innerHTML=userSex;
					document.getElementById("sex_modify").value=userSex;
					
					document.getElementById("email").innerHTML=userEmail;
					document.getElementById("email_modify").value=userEmail;
					
					document.getElementById("signature").innerHTML=userSignature;
					document.getElementById("Signature").innerHTML=userSignature;
					document.getElementById("signature_modify").value=userSignature;
					
					document.getElementById("apartment").innerHTML=apartment;
					document.getElementById("apartment_modify").value=apartment;
					
					document.getElementById("country").innerHTML=country;
					document.getElementById("country_modify").value=country;
					
					
					
				}
			});
}

function modifyUserInfo(){
	var nickName_modify=$("#nickName_modify").val();
	var psd_modify=$("#psd_modify").val();
	var sex_modify=$("#sex_modify").val();
	var age_modify=$("#age_modify").val();
	var email_modify=$("#email_modify").val();
	var country_modify=$("#country_modify").val();
	var apartment_modify=$("#apartment_modify").val();
	var signature_modify=$("#signature_modify").val();
	
	$.ajax({
				url : "/qxy_wedding/modifyUserInfo?User_uid=" + User_uid + "&nickName_modify=" + nickName_modify + "&psd_modify="
						+ psd_modify + "&sex_modify=" + sex_modify + "&age_modify=" + age_modify + "&email_modify=" + email_modify 
						+ "&country_modify=" + country_modify + "&apartment_modify=" + apartment_modify + "&signature_modify=" + signature_modify,
				contentType : "text/json;charset=utf-8",
				type : "POST",
				success : function(data) {
					alert("修改成功");
					getUserInfo();
				}
			}
	);
}
$(document).ready(getUserInfo);