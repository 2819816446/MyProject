$(document).ready(function(){

// 点击修改密码时
	$("#editPwd").click(function(){
		ShowDiv('MyDiv','fade');
	});	
// 点击确认按钮时
	$("#ok").click(function(){
		console.log("将修改密码信息保存到数据库");
		alert("将信息保存到数据库。。。");
	});	
// 点击关闭、取消按钮时
	$(".close_pwddiv").click(function(){
		CloseDiv('MyDiv','fade');
	});	
	//弹出隐藏层
	function ShowDiv(show_div,bg_div)
		{
			document.getElementById(show_div).style.display='block';
			document.getElementById(bg_div).style.display='block' ;
			var bgdiv = document.getElementById(bg_div);
			bgdiv.style.width = document.body.scrollWidth;
			// bgdiv.style.height = $(document).height();
			$("#"+bg_div).height($(document).height());
		};
	//关闭弹出层
	function CloseDiv(show_div,bg_div)
		{
			document.getElementById(show_div).style.display='none';
			document.getElementById(bg_div).style.display='none';
		};	


	$(".left_side > ul >li").on("click",function () {
		$(this).addClass("left_side_li_click").siblings().removeClass("left_side_li_click");
	});
	
	// 点击首页时触发
	$("#shouye").click(function(){

		$(".right_side").css('height','590px');
		$(".left_side").css('height','590px');


		var right_side=$(".right_side");
		right_side.text("");
		var navbar=$('<div id="navbar"></div>');
		right_side.append(navbar);
		var span=$('<span class="glyphicon glyphicon-home"> 当前位置-----通知公告</span>');
		navbar.append(span);	
		var newlist=$('<div id="newlist"></div>');
		right_side.append(newlist);
		var table=$('<table class="table table-bordered table-hover"></table>');
		newlist.append(table);
		var caption=$('<caption id="cap"><strong>相关公告新闻</strong></caption>');
		table.append(caption);
		var thead = $('<thead></thead>');
		table.append(thead);
		var tr_tiltle=$('<tr></tr>');
		thead.append(tr_tiltle);
		var th =$('<th>公告标题</th><th>发布单位</th><th>发布时间</th><th>有效日期</th>');
		tr_tiltle.append(th);

		// 表格内容部分
		var tbody = $('<tbody></tbody>');
		table.append(tbody);
		var tr1=$('<tr></tr>');
		tbody.append(tr1);
		var td1 =$('<td>2016年图书馆电脑借出公告</td><td>系统管理员</td><td>2016-6-6</td><td>2016-6-6</td>');
		tr1.append(td1);

		// var tr2=$('<tr></tr>');
		// tbody.append(tr2);
		// var td2 =$('<td>2016年图书馆电脑借出公告</td><td>系统管理员</td><td>2016-6-6</td><td>2016-6-6</td>');
		// tr2.append(td2);

		// var tr3=$('<tr></tr>');
		// tbody.append(tr3);
		// var td3 =$('<td>2016年图书馆电脑借出公告</td><td>系统管理员</td><td>2016-6-6</td><td>2016-6-6</td>');
		// tr3.append(td3);

		// var tr4=$('<tr></tr>');
		// tbody.append(tr4);
		// var td4 =$('<td>2016年图书馆电脑借出公告</td><td>教务处</td><td>2016-6-6</td><td>2016-6-6</td>');
		// tr4.append(td4);
		 	/*$.ajax
		 	({
	            url: "http://139.129.28.117:8080/cammatmana/login.mvc",
	            async: false,
	            type: "get",
	            data: {
	                "account":username,
	                "password": userpassword,
	            },
	            dataType: "jsonp",
	            jsonp: "callBackParamName",
	            jsonpCallback: "callBackNameLoginlo",
	            success: function () {
	                alert("登录成功");
	                window.location.href="../index.html";
	            },
	            error: function () {
	                console.log("失败");
	                alert("用户名密码验证失败")
	            }
	        });	*/
	});


	// 点击资产管理时触发
	$("#zc_manage").click(function(){

		$(".right_side").css('height','590px');
		$(".left_side").css('height','590px');

		
		var right_side=$(".right_side");
		right_side.text("");

		// 搜索部分开始
		var zc_search=$('<div id="zc_search"></div>');
		right_side.append(zc_search);
		var zc_span=$('<span>输入仪器名称：</span>');
		zc_search.append(zc_span);	
		var zc_inp_btn=$('<div class="zc_inp_btn"></div>');
		zc_search.append(zc_inp_btn);
		var zc_search_input=$('<input type="text" class="search_input" name="search_input" value="输入关键字..." style="width: 600px" />');
		zc_inp_btn.append(zc_search_input);
		var zc_search_btn=$('<button type="button" id="search_btn" class="btn btn-default btn-xs"> <span class="glyphicon glyphicon-search"></span>搜索 </button>');
		zc_inp_btn.append(zc_search_btn);
		// 搜索部分结束



		// 资产明细部分开始
		var zc_detail=$('<div id="zc_detail"></div>');
		right_side.append(zc_detail);

		// 每页显示提示部分
		var zc_per_pageshow=$('<div class="per_pageshow"></div>');
		zc_detail.append(zc_per_pageshow);
		var zc_select=$('<p>每页显示<select><option value="10">10</option><option value="15">15</option><option value="20">20</option></select> 条</p>');
		zc_per_pageshow.append(zc_select)
		// 每页显示提示部分结束

		var zc_table=$('<table class="table table-bordered table-hover"></table>');
		zc_detail.append(zc_table);
		var zc_cap=$('<caption id="zc_cap"><strong>----资产列表----</strong></caption>');
		zc_table.append(zc_cap);
		var zc_thead = $('<thead></thead>');
		zc_table.append(zc_thead);
		var zc_tr_tiltle=$('<tr></tr>');
		zc_thead.append(zc_tr_tiltle);
		var zc_th =$('	<th>领用单位号</th> <th>仪器编号</th> <th>仪器名称</th> <th>型号</th> <th>规格</th> <th>单价</th> <th>分类号</th> <th>操作</th>');
		zc_tr_tiltle.append(zc_th);

		// 循环输出表格内容部分
			var zc_tbody = $('<tbody></tbody>');
			zc_table.append(zc_tbody);
		for (var i = 1; i <= 10; i++) 
		{
			var zc_tr1=$('<tr></tr>');
			zc_tbody.append(zc_tr1);
			var zc_td1 =$('<td>1001</td> <td>505050</td> <td>电脑</td> <td>st_3301554</td> <td>xx-s30</td> <td>5000元</td> <td>1</td> ');
			zc_tr1.append(zc_td1);
			// 表格内容[操作]部分
			var zc_td1_cz = $('<td> <button type="button" class="btn btn-default btn-xs" value="资产编辑"> <span class="glyphicon glyphicon-pencil"></span>编辑</button> <button type="button" class="btn btn-default btn-xs" value="资产删除"> <span class="glyphicon glyphicon-trash"></span> 删除</button> <button type="button" class="btn btn-default btn-xs" value="资产详情"> <span class="glyphicon glyphicon-align-justify"></span> 详情</button></td>');
			zc_tr1.append(zc_td1_cz);			
		};

		// 分页部分开始
		var zc_page=('<div id="zc_page"></div>');
		right_side.append(zc_page);
		// for (var k = 1; k <= 6; k++) {
		// };
		var zc_ul=$('<ul class="pagination pagination-sm">  </ul>');
		// 此处用div对应的id可以append，zc_page.append（）不可以
		$("#zc_page").append(zc_ul);
		// <li><a href="#"> 1 </a></li>   <li><a href="#">2</a></li> <li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#">6</a></li> 
		var zc_li=$('<li><a href="#">首页</a></li><li><a href="#"> 1 </a></li>   <li><a href="#">2</a></li> <li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#">6</a></li> ');
		zc_ul.append(zc_li);
		// 去掉转到xxx前面的 href="#"
		zc_li2=$('<li><a>转到第<select><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="1">5</option><option value="2">6</option><option value="3">7</option><option value="4">8</option><option value="3">9</option><option value="4">10</option></select>  页</a></li>');
		zc_ul.append(zc_li2);
		var zc_li_weiye=$('<li><a href="#">尾页</a></li>');
		zc_ul.append(zc_li_weiye);

	});
	// 资产管理结束



	// 点击用户管理时触发
	$("#user_manager").click(function(){
		$(".right_side").css('height','590px');
		$(".left_side").css('height','590px');

		var right_side=$(".right_side");
		right_side.text("");

		// 搜索部分开始
		var user_search=$('<div id="user_search"></div>');
		right_side.append(user_search);
		var user_span=$('<span>输入用户名称：</span>');
		user_search.append(user_span);	
		var user_inp_btn=$('<div class="user_inp_btn"></div>');
		user_search.append(user_inp_btn);
		// <!-- 使用class="search_input"  使得zc_manager.js 搜索清空提示生效 -->
		var search_input=$('<input type="text" class="search_input" name="search_input" value="输入关键字..." style="width: 600px" />');
		user_inp_btn.append(search_input);
		var user_search_btn=$('<button type="button" id="user_search_btn" class="btn btn-default btn-xs"> <span class="glyphicon glyphicon-search"></span>搜索 </button>');
		user_inp_btn.append(user_search_btn);
		// 搜索部分结束

		// 用户明细部分开始
		var user_detail=$('<div id="user_detail"></div>');
		right_side.append(user_detail);

		// 每页显示提示部分
		var user_per_pageshow=$('<div class="per_pageshow"></div>');
		user_detail.append(user_per_pageshow);
		var user_select=$('<p>每页显示<select><option value="10">10</option><option value="15">15</option><option value="20">20</option></select> 条</p>');
		user_per_pageshow.append(user_select)
		// 每页显示提示部分结束

		var user_table=$('<table class="table table-bordered table-hover"></table>');
		user_detail.append(user_table);
		var user_cap=$('<caption id="user_cap"><strong>----用户列表----</strong></caption>');
		user_table.append(user_cap);
		var user_thead = $('<thead></thead>');
		user_table.append(user_thead);
		var user_tr_title=$('<tr></tr>');
		user_thead.append(user_tr_title);
		var user_th =$( '<th>用户名</th> <th>性别</th> <th>年龄</th> <th>身份</th> <th>工龄</th> <th>入职时间</th> <th>操作</th>');
		user_tr_title.append(user_th);

		// 循环输出表格内容部分
		for (var j = 1; j <= 10; j++) 
		{
			var user_tbody = $('<tbody></tbody>');
			user_table.append(user_tbody);
			var user_tr1=$('<tr></tr>');
			user_tbody.append(user_tr1);
			var user_td1 =$('<td>张三</td> <td>男</td> <td>40</td> <td>系统管理员</td> <td>15年</td> <td>2008-8-8</td>');
			user_tr1.append(user_td1);
			// 表格内容[操作]部分
			var user_td1_cz = $('<td> <button type="button" class="btn btn-default btn-xs"> <span class="glyphicon glyphicon-pencil"></span>编辑</button> <button type="button" class="btn btn-default btn-xs"> <span class="glyphicon glyphicon-trash"></span> 删除</button> <button type="button" class="btn btn-default btn-xs"> <span class="glyphicon glyphicon-align-justify"></span> 详情</button></td>');
			user_tr1.append(user_td1_cz);			
		};

		// 分页部分开始
		// (用zc_manager.css控制这里的样式)
		var user_page=('<div id="user_page"></div>');
		right_side.append(user_page);
		var user_ul=$('<ul class="pagination pagination-sm">  </ul>');
		// 此处用div对应的id可以append，zc_page.append（）不可以
		$("#user_page").append(user_ul);
		var user_li=$('<li><a href="#">首页</a></li><li><a href="#"> 1 </a></li>   <li><a href="#">2</a></li> <li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#">6</a></li> ');
		user_ul.append(user_li);

		user_li2=$('<li><a>转到第<select><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="1">5</option><option value="2">6</option><option value="3">7</option><option value="4">8</option><option value="3">9</option><option value="4">10</option></select>  页</a></li>');
		user_ul.append(user_li2);
		var user_li_weiye=$('<li><a href="#">尾页</a></li>');
		user_ul.append(user_li_weiye);

	});
	// 用户管理结束


	// 点击数据备份时
	$("#data_backup").click(function(){
		// 通过判断点击的按钮修改界面的大小
		$(".right_side").css('height','900px');
		$(".left_side").css('height','900px');


		var right_side=$(".right_side");
		right_side.text("");

		// 搜索部分开始
		var dataBackup_search=$('<div id="databacup_search"></div>');
		right_side.append(dataBackup_search);
		var dataBackup_span=$('<span>搜索：</span>');
		dataBackup_search.append(dataBackup_span);	
		var dataBackup_inp_btn=$('<div class="databacup_inp_btn"></div>');
		dataBackup_search.append(dataBackup_inp_btn);
		// <!-- 使用class="search_input"  使得zc_manager.js 搜索清空提示生效 -->
		var search_input=$('<input type="text" class="search_input" name="search_input" value="输入关键字..." style="width: 660px" />');
		dataBackup_inp_btn.append(search_input);
		var dataBackup_search_btn=$('<button type="button" id="databacup_search_btn" class="btn btn-default btn-xs"> <span class="glyphicon glyphicon-search"></span>搜索</button>');
		dataBackup_inp_btn.append(dataBackup_search_btn);
		// // 搜索部分结束

		// 数据备份明细部分开始
		var databacup_detail=$('<div id="databacup_detail"></div>');
		right_side.append(databacup_detail);

		// 每页显示提示部分
		// var databackup_per_pageshow=$('<div class="per_pageshow"></div>');
		// databacup_detail.append(databackup_per_pageshow);
		// var udatabackup_select=$('<p>每页显示<select><option value="10">10</option><option value="15">15</option><option value="20">20</option></select> 条</p>');
		// databackup_per_pageshow.append(udatabackup_select)
		// 每页显示提示部分结束
		// ===============================表格1
		var databackup_table=$('<table id="table1" class="table table-bordered table-hover table-striped table-condensed"></table>');
		databacup_detail.append(databackup_table);
		var databackup_cap=$('<caption id="databackup_cap"><strong>----选择备份项----</strong></caption></caption>');
		databackup_table.append(databackup_cap);
		var databackup_thead = $('<thead></thead>');
		databackup_table.append(databackup_thead);
		var databackup_tr_title=$('<tr></tr>');
		databackup_thead.append(databackup_tr_title);
		var databackup_th =$('<th> </th> <th>选择</th> <th>状态</th> <th>序号</th>');
		databackup_tr_title.append(databackup_th);

		// 循环输出表格内容部分  
		var databackup_tbody = $('<tbody></tbody>');
		databackup_table.append(databackup_tbody);
	   		// 第一行
		var databackup_tr1=$('<tr></tr>');
		databackup_tbody.append(databackup_tr1);
		var databackup_td1 =$('<td>领用单为号</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>1</td>');
		databackup_tr1.append(databackup_td1);	
			// 第二行
		var databackup_tr2=$('<tr></tr>');
		databackup_tbody.append(databackup_tr2);
		var databackup_td2 =$('<td>仪器编号</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>2</td>');
		databackup_tr2.append(databackup_td2);	
		// 第三行
		var databackup_tr3=$('<tr></tr>');
		databackup_tbody.append(databackup_tr3);
		var databackup_td3 =$('<td>仪器名称</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>3</td>');
		databackup_tr3.append(databackup_td3);	
		// 第四行
		var databackup_tr4=$('<tr></tr>');
		databackup_tbody.append(databackup_tr4);
		var databackup_td4 =$('<td>型号</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>4</td>');
		databackup_tr4.append(databackup_td4);
		// 第五行
		var databackup_tr5=$('<tr></tr>');
		databackup_tbody.append(databackup_tr5);
		var databackup_td5 =$('<td>规格</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>5</td>');
		databackup_tr5.append(databackup_td5);	
		// 第六行
		var databackup_tr6=$('<tr></tr>');
		databackup_tbody.append(databackup_tr6);
		var databackup_td6 =$('<td>单价</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>6</td>');
		databackup_tr6.append(databackup_td6);
		// 第七行
		var databackup_tr7=$('<tr></tr>');
		databackup_tbody.append(databackup_tr7);
		var databackup_td7 =$('<td>分类号</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>7</td>');
		databackup_tr7.append(databackup_td7);	
		// 第八行
		var databackup_tr8=$('<tr></tr>');
		databackup_tbody.append(databackup_tr8);
		var databackup_td8 =$('<td>厂家</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>8</td>');
		databackup_tr8.append(databackup_td8);
		// 第9行
		var databackup_tr9=$('<tr></tr>');
		databackup_tbody.append(databackup_tr9);
		var databackup_td9 =$('<td>出厂号</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>9</td>');
		databackup_tr9.append(databackup_td9);
		// 第10行
		var databackup_tr10=$('<tr></tr>');
		databackup_tbody.append(databackup_tr10);
		var databackup_td10 =$('<td>出厂日期</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>10</td>');
		databackup_tr10.append(databackup_td10);
	   		// 第11行
		var databackup_tr11=$('<tr></tr>');
		databackup_tbody.append(databackup_tr11);
		var databackup_td11 =$('<td>购置日期</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>11</td>');
		databackup_tr11.append(databackup_td11);	
			// 第12行
		var databackup_tr12=$('<tr></tr>');
		databackup_tbody.append(databackup_tr12);
		var databackup_td12 =$('<td>存放地名称</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>12</td>');
		databackup_tr12.append(databackup_td12);	
		// 第三行
		var databackup_tr13=$('<tr></tr>');
		databackup_tbody.append(databackup_tr13);
		var databackup_td13 =$('<td>现状</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>13</td>');
		databackup_tr13.append(databackup_td13);	
		// 第四行
		var databackup_tr14=$('<tr></tr>');
		databackup_tbody.append(databackup_tr14);
		var databackup_td14 =$('<td>经费科目</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>14</td>');
		databackup_tr14.append(databackup_td14);
		// 第五行
		var databackup_tr15=$('<tr></tr>');
		databackup_tbody.append(databackup_tr15);
		var databackup_td15 =$('<td>使用方向</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>15</td>');
		databackup_tr15.append(databackup_td15);	
		// 第六行
		var databackup_tr16=$('<tr></tr>');
		databackup_tbody.append(databackup_tr16);
		var databackup_td16 =$('<td>设备来源</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>16</td>');
		databackup_tr16.append(databackup_td16);
		// 第七行
		var databackup_tr17=$('<tr></tr>');
		databackup_tbody.append(databackup_tr7);
		var databackup_td17 =$('<td>入库时间</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>17</td>');
		databackup_tr17.append(databackup_td17);	
		// 第八行
		var databackup_tr18=$('<tr></tr>');
		databackup_tbody.append(databackup_tr18);
		var databackup_td18 =$('<td>经手人</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>18</td>');
		databackup_tr18.append(databackup_td18);
		// 第9行
		var databackup_tr19=$('<tr></tr>');
		databackup_tbody.append(databackup_tr19);
		var databackup_td19 =$('<td>使用单位号</td> <td><button type="button" class="add btn btn-primary btn-xs"> <span class="glyphicon glyphicon-pencil"></span>添加</button></td> <td>未添加</td> <td>19</td>');
		databackup_tr19.append(databackup_td19);


		// 已选择备份项 表=====================================================================表格2
		var databackup_table_select=$('<table id="table2" class="table table-bordered table-hover table-striped table-condensed"></table>');
		databacup_detail.append(databackup_table_select);
		var databackup_cap_select=$('<caption id="databackup_cap"><strong>----已选择备份项----</strong></caption></caption>');
		databackup_table_select.append(databackup_cap_select);
		var databackup_thead_select = $('<thead></thead>');
		databackup_table_select.append(databackup_thead_select);
		var databackup_tr_title_select=$('<tr></tr>');
		databackup_thead_select.append(databackup_tr_title_select);
		var databackup_th_select =$('<th>已添加项目</th> <th>选择</th>');
		databackup_tr_title_select.append(databackup_th_select);
		var databackup_tbody_select = $("<tbody></tbody");
		databackup_table_select.append(databackup_tbody_select);
		// for (var i = 0; i <= 18; i++) {
			
		// 	var databackup_tr_title_select1=$('<tr></tr>');
		// 	databackup_tbody_select.append(databackup_tr_title_select1);
		// };
		// 已选择备份项 




		// 清除浮动
		// var clr =$('<div class="clr"></div>');
		// right_side.append(clr);


		// 分页部分开始
		var databackup_page=('<div id="databackup_page"></div>');
		right_side.append(databackup_page);
			// 备份报表按钮(  要用$('#databackup_page').append  )
		var databackup_reportforms =$('<button type="button" class=" btn btn-default btn-xm btn_backubtable"> <span class="glyphicon glyphicon-book"></span>备份报表</button>');
		$('#databackup_page').append(databackup_reportforms);
		var databackup_reportforms_select =$('<button type="button" class=" btn btn-default btn-xm btn_backubdata"> <span class="glyphicon glyphicon-book"></span> 备份已选数据项</button>');
		$('#databackup_page').append(databackup_reportforms_select);
			// 备份报表按钮
		var databackup_ul=$('<ul class="pagination pagination-sm"></ul>');
		// // // 此处用div对应的id可以append，zc_page.append（）不可以
		$("#databackup_page").append(databackup_ul);
		var databackup_li=$('<li><a href="#">首页</a></li><li><a href="#"> 1 </a></li>   <li><a href="#">2</a></li> <li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#">6</a></li> ');
		databackup_ul.append(databackup_li);

		databackup_li2=$('<li><a>转到第<select><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="1">5</option><option value="2">6</option><option value="3">7</option><option value="4">8</option><option value="3">9</option><option value="4">10</option></select>  页</a></li>');
		databackup_ul.append(databackup_li2);
		var databackup_li_weiye=$('<li><a href="#">尾页</a></li>');
		databackup_ul.append(databackup_li_weiye);

	});

	// 数据备份结束


	// 公告管理notice_manager
	$("#notice_manager").click(function(){
		//通过设置高度
		$(".right_side").css('height','590px');
		$(".left_side").css('height','590px');


		var right_side=$(".right_side");
		right_side.text("");

		// 搜索部分开始
		var notice_search=$('<div id="notice_search"></div>');
		right_side.append(notice_search);
		var notice_span=$('<span>输入主题关键字</span>');
		notice_search.append(notice_span);	
		var notice_inp_btn=$('<div class="notice_inp_btn"></div>');
		notice_search.append(notice_inp_btn);
		// <!-- 使用class="search_input"  使得zc_manager.js 搜索清空提示生效 -->
		var search_input=$('<input type="text" class="search_input" name="search_input" value="输入关键字..." style="width: 600px" />');
		notice_inp_btn.append(search_input);
		var notice_search_btn=$('<button type="button" id="notice_search_btn" class="btn btn-default btn-xs"> <span class="glyphicon glyphicon-search"></span>搜索 </button>');
		notice_inp_btn.append(notice_search_btn);
		// 搜索部分结束

		// 公告列表部分开始
		var notice_detail=$('<div id="notice_detail"></div>');
		right_side.append(notice_detail);

		var notice_table=$('<table class="table table-bordered table-hover"></table>');
		notice_detail.append(notice_table);
		var notice_cap=$('<caption id="notice_cap"><strong>----公告列表----</strong></caption>');
		notice_table.append(notice_cap);
		var notice_thead = $('<thead></thead>');
		notice_table.append(notice_thead);
		var notice_tr_title=$('<tr></tr>');
		notice_thead.append(notice_tr_title);
		var notice_th =$( '<th>公告状态</th> <th>公告主题</th> <th>操作</th>');
		notice_tr_title.append(notice_th);

		// 循环输出表格内容部分
		for (var  k= 1; k <= 10; k++) 
		{
			var notice_tbody = $('<tbody></tbody>');
			notice_table.append(notice_tbody);
			var notice_tr1=$('<tr></tr>');
			notice_tbody.append(notice_tr1);
			var notice_td1 =$('<td>已公告</td> <td>数计学院实验室开放</td>');
			notice_tr1.append(notice_td1);
			// 表格内容[操作]部分
			var notice_td1_cz = $('<td> <button type="button" class="btn btn-default btn-xs btn-primary"> <span class="glyphicon glyphicon-volume-up"></span>公告</button> <button type="button" class="btn btn-default btn-xs btn-danger"> <span class="glyphicon glyphicon-trash"></span> 删除</button></td>');
			notice_tr1.append(notice_td1_cz);			
		};

		// 分页部分开始
		// (用zc_manager.css控制这里的样式)
		var user_page=('<div id="user_page"></div>');
		right_side.append(user_page);
		var user_ul=$('<ul class="pagination pagination-sm">  </ul>');
		// 此处用div对应的id可以append，zc_page.append（）不可以
		$("#user_page").append(user_ul);
		var user_li=$('<li><a href="#">首页</a></li><li><a href="#"> 1 </a></li>   <li><a href="#">2</a></li> <li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#">6</a></li> ');
		user_ul.append(user_li);

		user_li2=$('<li><a>转到第<select><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="1">5</option><option value="2">6</option><option value="3">7</option><option value="4">8</option><option value="3">9</option><option value="4">10</option></select>  页</a></li>');
		user_ul.append(user_li2);
		var user_li_weiye=$('<li><a href="#">尾页</a></li>');
		user_ul.append(user_li_weiye);

	});

	//公告管理结束

});