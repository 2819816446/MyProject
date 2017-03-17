$(document).ready(function(){

	$("#loginbtn").click(function(){
		var username=$("#username").val();
		var password=$("#password").val();
		if (username=="")
		 {
		 	alert("用户名不能为空！");
		 }
		else if(password=="")
		 {
		 	alert("密码不能为空！");
		 }

	 	// window.location.href="../index.html";
	 	else{
			 	$.ajax
			 	({
		            url: "",
		            // async: false,
		            type: "get",
		            data: {
		                "username":username,
		                "password": password,
		            },
		            dataType: "jsonp",
		            // jsonp: "callBackParamName",
		            // jsonpCallback: "callBackNameLoginlo",
		            success: function () {
		                alert("登录成功");
		                // window.location.href="../index.html";
		            },
		            error: function () {
		                console.log("失败");
		                alert("用户名密码验证失败");
		            }
		        });		 		
		 	}



   		 
  	});

  	// $("#username").blur(function(){
  	// 	//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符  
  	// 	if(!$(this).val() || !$(this).val().match(/([w]){2,15}$/))
   //      {  
   //          $("#usernameTip").html("用户名不能为空且只能为英文或者数字");  
   //      }  
   //      else  
   //      {  
   //          $("#usernameTip").html("输入正确");  
   //      }  
  	// });

});