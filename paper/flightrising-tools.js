javascript:a=function(){for(a=0;a<28;a++){x=document.getElementsByName("v"+a)[0].options.length;if(x>2){document.getElementsByName("v"+a)[0].options[x-1].selected=false;document.getElementsByName("v"+a)[0].options[1].selected=true;}}};a()
javascript:a=function(){for(a=0;a<28;a++){document.getElementsByName("v"+a)[0].options[document.getElementsByName("v"+a)[0].options.length-1].selected=false;document.getElementsByName("v"+a)[0].options[0].selected=true;}};a() // 另一个删掉了部分判定逻辑只改数量大于2的版本，该版本的出现原因我想关于这个文件的上一次commit信息里有写.

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
};
a()/* 为使浏览器不返回true，所有流程都会塞进方法里 */


=== 自动点bonding

javascript:a=function(){x=document.getElementsByClassName("loginbar")[16].getElementsByTagName("img")[0].onclick;if(x){x()};window.open(document.getElementById("dragbuttons").getElementsByTagName("a")[1].href);window.close()};a()

x = document.getElementsByClassName("loginbar")[16].getElementsByTagName("img")[0].onclick;
if(x){x()};
// loginbar的同名class有一大堆，估计将来的整站重写会改掉这个入口
// *** 这边是直接执行了绑定在bond按钮上的onclick ***
// 顺带如果hoard那边的具体事件绑定也能找到的话那么自动归类的操作也可以全自动化了=w=
// update: 执行前加个判断，已经bond过的会自动跳过了

window.open(document.getElementById("dragbuttons").getElementsByTagName("a")[1].href); // 自动点开下一页

window.close()
// 根据文档所述，非脚本打开的页面无法自动关掉
// 因此手动关掉即可


