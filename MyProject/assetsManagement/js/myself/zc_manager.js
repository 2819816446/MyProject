$(document).ready(function(){

// 要用事件委托解决动态添加元素的方法绑定
		//搜索框的获取焦点事件
		// $('.right_side').on("focus",".search_input",function(){
		//   	$(".search_input").val("");
		// });

		// $('.right_side').on('blur',".search_input",function(){
		// 	// 如果输入框有内容显示输入框内容，没有显示提示文字
		// 	if($(".search_input").val() !== ""){
		// 		$(".search_input").val() = $(".search_input").val();
		// 	}
		// 	else
		// 	{
		// 	  $(".search_input").val("输入关键字...");
		// 	}		  
		// });

		// 
		$('.right_side').on("focus blur keydown",".search_input",function(){
			if (event.type == "focus") {
			  	$(".search_input").val("");
			}
			else if (event.type == "blur") {
				if($(".search_input").val() !== ""){
					$(".search_input").val() = $(".search_input").val();
				}
				else
				{
				  $(".search_input").val("输入关键字...");
				}				
			}

			// 常用keyCode： 空格 32   Enter 13   ESC 27
			else if (event.type == "keydown"){
				// 所以一般都这样写兼容：
				var keyCode = event.keyCode||event.which||event.charCode;
				console.log(keyCode);
				if (keyCode == 13 && $(".search_input").val() !== "") {
					$("#search_btn").click();
				}

			}
		});


		//搜索按钮的点击事件 
		$(".right_side").on("click","#search_btn",function () {
				alert("处理搜索事件。。");
			});



		// table 三个按钮的点击事件
		$('.right_side').on('click',"td > button",function(){
			var $text = $(this).val();
			// alert($text);
			console.log($text);
			if ($text == "资产删除") {
				var flag = confirm("确定要删除吗？");
				if (flag) {
					console.log("进行删除操作");
					deleteTr(this);
					console.log("删除操作结束");
				}
			}
			else if ($text == "资产编辑") {
				createEdit();
				// alert("进行编辑操作");
			}
			else if($text == "资产详情"){
				alert("查看详情");

			}
	  		
		});		




		function createEdit(){
			alert("bianji");
		}


//删除当前行
     function deleteTr(nowTr){
                        //多一个parent就代表向前一个标签,
                        // 本删除范围为<td><tr>两个标签,即向前两个parent
                        //如果多一个parent就会删除整个table
        $(nowTr).parent().parent().remove();

     } 



});