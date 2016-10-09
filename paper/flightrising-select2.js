javascript:a=function(){for(a=0;a<28;a++){x=document.getElementsByName("v"+a)[0].options.length;if(x>2){document.getElementsByName("v"+a)[0].options[x-1].selected=false;document.getElementsByName("v"+a)[0].options[1].selected=true;}}};a()
javascript:a=function(){for(a=0;a<28;a++){document.getElementsByName("v"+a)[0].options[document.getElementsByName("v"+a)[0].options.length-1].selected=false;document.getElementsByName("v"+a)[0].options[0].selected=true;}};a()

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
