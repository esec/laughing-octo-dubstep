javascript:a=function(){for(a=0;a<28;a++){x=document.getElementsByName("v"+a)[0].options.length;if(x>2){document.getElementsByName("v"+a)[0].options[x-1].selected=false;document.getElementsByName("v"+a)[0].options[1].selected=true;}}checkAll(invent)};a()
javascript:a=function(){for(a=0;a<28;a++){document.getElementsByName("v"+a)[0].options[document.getElementsByName("v"+a)[0].options.length-1].selected=false;document.getElementsByName("v"+a)[0].options[0].selected=true;}checkAll(invent)};a()
// 第二行是另一个删掉了部分判定逻辑只改数量大于2的版本，该版本的出现原因我想关于这个文件的上一次commit信息里有写.

/*
温习旧知识
1.数量大于2的物件自动选2
2.不符合上述条件的自动忽略

条件语句的例子if(1==2){a=0}else{if(1==3){a=0}else{a=0}}
*/
javascript: a = function() {
	for (a = 0; a < 28; a++) {
		x = document.getElementsByName("v" + a)[0].options.length;/* 获取总数 */
		if (x > 2) {
			document.getElementsByName("v" + a)[0].options[x - 1].selected = false;/* 清空默认选项 */
			document.getElementsByName("v" + a)[0].options[1].selected = true;/* 选中2 */
		}
	}
	// checkAll(invent); // 扔前面会出bug?
	// 已查明，官方写的这个函数有bug，当物件没满屏会抛错，也许明天再看看这部分
	// document.getElementById("tovault").click(); /* 新功能： 自动回收 */
	// 话说直接给指定id的按钮绑一个超原始的事件好尴尬啊...
};
a()/* 为使浏览器不返回true，所有流程都会塞进方法里 */


=== 自动点bonding

javascript:a=function(){x=document.getElementsByClassName("loginbar")[16].getElementsByTagName("img")[0].onclick;if(x){if(!window.z){x();window.z=1;exit}};window.location.href=document.getElementById("dragbuttons").getElementsByTagName("a")[1].href};a()

x = document.getElementsByClassName("loginbar")[16].getElementsByTagName("img")[0].onclick;
// loginbar的同名class有一大堆，估计将来的整站重写会改掉这个入口

if(x){
	// x();
	// alert("Please check the progress");
	// 实验特性: 加个alert 
	// 已废弃,因为alert之后整个页面都停住了
	
	if(!window.z){
		x();
		window.z = 1;
		exit;
		// 第一次过去新增一个 window.z
		// 第二次过去直接跑后面的逻辑开新窗口
	}
};
// *** 这边是直接执行了绑定在bond按钮上的onclick ***
// 顺带如果hoard那边的具体事件绑定也能找到的话那么自动归类的操作也可以全自动化了=w=
// update: 执行前加个判断，已经bond过的会自动跳过了

window.location.href=document.getElementById("dragbuttons").getElementsByTagName("a")[1].href; // 自动点开下一页

// window.close()
// 根据文档所述，非脚本打开的页面无法自动关掉
// 因此手动关掉即可
// 编辑：改成了直接跳转

=== 根据页面自带的api重写选1的脚本
javascript:a=function(){for(a=0;a<28;a++){if(invent["i"+a]){invent["a"+a].checked=true;invent["v"+a].options[self.length-2].selected=false;invent["v"+a].options[0].selected=true}}document.getElementById("tovault").click()};a()

for (a = 0; a < 28; a++) { // 背包栏位共28格，从0开始
	if(invent["i"+a]){ // 检测栏位存在性
		invent["a"+a].checked = true; // 逐一选中
		invent["v"+a].options[self.length-2].selected = false; // 为啥self.lwngth要-2呢。。。
		invent["v"+a].options[0].selected = true; // 总是选择1
	}
}

document.getElementById("tovault").click(); // 点击tovault按钮

=== 重新实现sotrefood按钮并修复自带按钮的bug
javascript:a=function(){for(a=0;a<28;a++){if(invent["i"+a]){invent["a"+a].checked=true}}document.getElementById("storefood").click()};a()
	
for (a = 0; a < 28; a++) { // 背包栏位共28格，从0开始
	if(invent["i"+a]){ // 检测栏位存在性
		invent["a"+a].checked = true; // 逐一选中
	}
}

document.getElementById("storefood").click()

=== 总的来说目前书签栏放4个按钮
bond
javascript:a=function(){x=document.getElementsByClassName("loginbar")[16].getElementsByTagName("img")[0].onclick;if(x){if(!window.z){x();window.z=1;exit}};window.location.href=document.getElementById("dragbuttons").getElementsByTagName("a")[1].href};a()
fr1
javascript:a=function(){for(a=0;a<28;a++){if(invent["i"+a]){invent["a"+a].checked=true;invent["v"+a].options[self.length-2].selected=false;invent["v"+a].options[0].selected=true}}document.getElementById("tovault").click()};a()
tovault
javascript:a=function(){for(a=0;a<28;a++){if(invent["i"+a]){invent["a"+a].checked=true}}document.getElementById("tovault").click()};a()
storefood
javascript:a=function(){for(a=0;a<28;a++){if(invent["i"+a]){invent["a"+a].checked=true}}document.getElementById("storefood").click()};a()

