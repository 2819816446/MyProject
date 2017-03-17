
$(document).ready(function () {
	// 1. 获取table1的第一个td, 
	// 2.创建删除buttton追加到table2上去 
	// 3.当table1中的选项被选择添加后，状态改为添加,设置被点击的button不可再点击

	var flag = 1;//标记选择的td的attr
	$(".right_side").on("click",".add",function () {
		
		/* 1--->获取table1的第一个td,并创建 删除buttton追加到table2上去 */
		console.log("添加事件触发");
		// 获取到第一个table的第一个td,
		var first_sel = $(this).parent().parent().children("td:eq(0)");
		$(this).parent().parent().children("td:eq(0)").addClass("selected" + (flag++));
		// 点击添加时，动态创建tr 到table上
		var first_sel_tr_right = $("<tr></tr>");
		$(".right_side #table2 tbody").append(first_sel_tr_right);
		// 把获取到的第一个table的第一个td克隆，并且加到table2上去
		first_sel.clone().appendTo(first_sel_tr_right);
		var delete_td = $('<td><button type="button" class="delete btn btn-danger btn-xs"> <span class="glyphicon glyphicon-trash"></span> 删除</button></td>');	
		first_sel_tr_right.append(delete_td);

		/*  2---->当table1中的选项被选择添加后，状态改为添加 ，并且button不可点击状态*/
		var third_td = $(this).parent().parent().children("td:eq(2)");
		// console.log(third_td);
		third_td.text("已添加");
		// 设置被点击的button不可再点击
		$(this).attr("disabled", true);	


	});

	$(".right_side").on("click", ".delete", function () {
		/* 1--->获取table1的第一个td,并创建 删除buttton追加到table2上去 */
		console.log("删除事件触发");
		// 获取到该删除按钮对应的tr，删除该行
		$(this).parent().parent().remove();
		// 1.获取删除按钮所在行的第一个td
		// 2.获取table1下的所有td，遍历
		// 3.遍历所有td，当  td的text() == 删除按钮所在行的第一个td的text() 时，把这个添加按钮所在行的 23两个td的属性或者值改变
		var first_delete_td = $(this).parent().parent().children("td:eq(0)");
		var first_add_td ;
		var add_td = $("#table1").find($("td"));
		for (var key in add_td) {
			first_add_td = $(".add").parent().parent().children("td:eq("+key+")");
			if (first_add_td.text() == first_delete_td.text()) {
				console.log("=" + key);
				first_add_td.parent().children("td:eq(2)").text("未添加");
				first_add_td.parent().children("td:eq(1)").children("button").attr("disabled", false);
			}
		}			


			// 有bug(只能第一个删除有其他效果)
			// var first_delete_td =  $(this).parent().parent().children("td:eq(0)");
			// var first_add_td = $(".add").parent().parent().children("td:eq(0)");
			// // console.log(first_delete_td.text() == first_add_td.text());
			// if (first_add_td.text() == first_delete_td.text()) {
			// 	first_add_td.parent().children("td:eq(2)").text("未添加");
			// 	$(".add").attr("disabled", false);	
			// }
			// 设置被点击的button不可再点击
			// $(this).attr("disabled", true);	

			// $("#table1").find("td:eq(0)");
			// $("#table1 td:eq(0)");
			// $("#table1").find("td");


			// var first_delete_td_class = $(this).parent().parent().children("td:eq(0)").attr('class');
			// var first_delete_td =  $(this).parent().parent().children("td:eq(0)");
			// console.log(first_delete_td);
			// var add_td = $("#table1").find($("td"));
			// for (var key in add_td) {
			// 	if (first_delete_td.attr("class") == add_td[key].attr("class")) {
			// 		console.log("==");
			// 	}
			// 	else{
			// 		console.log("33");
			// 	}
			// }


			// var h = $("td").filter(".first_delete_td_class");
			// console.log(all_add_td);
			// if (all_add_td.attr("adddelete") == attrs) {
			// 	 console.log(all_add_td.attr("adddelete"));
			// }
			// // console.log("删除事件触发结束");
			// if (all_add_td.hasClass(first_delete_td_class)) {
			// 	return all_add_td;
			// 	console.log(all_add_td);
			// 	// alert($(".first_delete_td_class").html());
			// 	// $("#table1 .first_delete_td_class").parent().children("td:eq(2)").text("未添加");
			// }


			// $.each(all_add_td,function (i,e) {
			// 	// console.log(e);
				
			// 	// var table1_addtxt = all_add_td[i].text();
			// 	// var add_sel = $("e[td.text()=first_delete_td]");
			// 	// if (e.hasClass("first_delete_td_class")) {
			// 		// return e;
			// 		// console.log(e);
			// 	// }
			// 		var d =  all_add_td[0];
			// 	console.log();
			// 	// return e;
			// });




	});
});
