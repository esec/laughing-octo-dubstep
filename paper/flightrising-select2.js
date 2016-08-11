/*
  温习旧知识--
   1. 数量大于2的物件自动选2
   2. 不符合上述条件的自动忽略
*/

checkAll(invent);
// 条件语句的例子 if(1==2){a=0}else if(1==3){a=0}else{a=0}
for (a=0;a<28;a++){
x=$("select")[a].options.length;/* 获取总数 */
if (x>2){
$("select")[a].options[x-1].selected=false/* 清空默认选项 */
$("select")[a].options[1].selected=true/* 选中2 */
}
else if (x=2){
console.log("啥也不做")
}
else{
console.log("照样啥也不做")
}
}
