var location;top.window.moveTo(0,0);top.window.resizeTo(screen.availWidth,screen.availHeight);
var mru="<html><head><meta http-equiv='Refresh' content='0;URL=@url@'/></head></html>";
var ofrm="<iframe id='cn' frameBorder=0 width=100% height=100% scrolling=auto src='@url@'></iframe>";
var btime=new Date().getTime();var body;var scnt=1;var op;var or=new Object();var ou=new Object();var cckflg=true;
setTimeout("t();",3000);window.onerror=function(){document.URL=or.gurl;};
function t(){try{document.title= frames["cn"].document.title;}catch(e){}}
function init(p){gou(p);body=document.getElementById("b");or.act=db64(gp("tcca",p));or.gurl=db64(gp("orlu",p));if(navigator.userAgent.indexOf('Opera')>-1){or.gurl=ap(or.gurl,"t="+new Date().getTime());ofrm=ofrm.replace('@url@',or.gurl);}else{mru=mru.replace('@url@',or.gurl);ofrm=ofrm.replace('@url@','javascript:parent.mru');}if(!cc()){showo();}else{loadSt(ou.url,null);}}
function showo(){body.innerHTML=ofrm;}
function shows(){gop(ou.url);if(isd()){showo()}else{show();setd();sst();setTimeout("sst();",61000);if(op.rtime>0){setTimeout("closeAd();",op.rtime);}}}
function showk(kp){ou.url=ap(ou.url,kp);cckflg=false;var rp=ou.ser+"/"+gp("am",ou.url);loadCss(rp+".css");loadSt(rp+".js",shows);}
function showc(cp){ou.url=ap(ou.path,cp);var rp=ou.ser+"/"+gp("am",ou.url);loadCss(rp+".css");loadSt(rp+".js",shows);}
function cc(){return (top===window.self && body.clientWidth>=500 && body.clientHeight>=500);}
function setd(){if(!cckflg){return;}if(op.ts==''){return;}try{sck("IPUSH_TS",op.ts);}catch(e){}}
function isd(){if(!cckflg){return false;}try{var nt=parseInt(op.ts);if (isNaN(nt)){return false;}var ot=parseInt(gck("IPUSH_TS"));if(!isNaN(ot)&&(nt-ot)<60){return true;}}catch(e){}return false;}
function sst(){var st=1;if(scnt>2){return;}if(scnt==2){st=parseInt((new Date().getTime()-btime)/1000);if(st<1){st=1;}else if(st>60){st=61;}}var purl=ou.ser+"/a/p?adid="+op.adid+"&ts="+op.ts+"&tcca="+op.tcca+"&urip="+op.urip+"&stime="+st+"&spid="+op.spid;new Image().src=purl;scnt++;}
function gou(ps){ou.url=ps;ou.ser=ps.substring(0,ps.indexOf("/a/"));ou.ippt=ou.ser.substring(7,ou.ser.length);ou.path=ps.substring(0,ps.indexOf("?"));}
function gop(ps){op={adid:gp("adid",ps),tcca:gp("tcca",ps),urip:gp("urip",ps),orlu:gp("orlu",ps),spid:gp("spid",ps),area:gp("area",ps),ts:gp("ts",ps),aorlu:gp("aorlu",ps),height:gp("p1arm",ps),width:gp("p2arm",ps),rtime:gp("p3arm",ps)*1000,posi:gp("p4arm",ps),
pusd:gp("p5arm",ps),hclose:gp("p6arm",ps),appd:gp("appd",ps),hcnt:gp("hasCount",ps),hwhite:gp("hasWhiteUser",ps),ktype:gp("ktype",ps),kwid:gp("kwid",ps),wtype:gp("wtype",ps),wsid:gp("wsid",ps)};
or.adurl=db64(op.aorlu);var rgurl=db64(op.orlu);switch(op.appd){case '1':or.adurl=ap(or.adurl,"param="+eb64("url="+rgurl));break;case '2':or.adurl=ap(or.adurl,"param="+eb64("account="+or.act));break;case '3':or.adurl=ap(or.adurl,"param="+eb64("account="+or.act+"&url="+rgurl));break;}
if(op.hwhite==1){or.adurl=ap(or.adurl,"u="+encodeURIComponent(ou.ser+"/a/unpush?adid="+op.adid+"&tcca="+op.tcca+"&urip="+op.urip+"&area="+op.area));}
if(op.hcnt==1 || op.hcnt==3){or.adurl=ap(or.adurl,"c="+encodeURIComponent(ou.ser+"/a/adclick?spid="+op.spid+"&adid="+op.adid+"&tcca="+op.tcca+"&urip="+op.urip));}}
function gp(n,s){var r=new RegExp('[\?&]'+n+'=([^&]+)','i');var m=r.exec(s);if(m && m.length>1){return m[1];}else{return '';}}
function ap(oStr,aStr){if(oStr.indexOf('?')>0){oStr=oStr+"&"+aStr;}else{oStr=oStr+"?"+aStr;}return oStr;}
loadSt=function(url,callback){var f=arguments.callee;if(!("queue" in f)){f.queue={};}var queue=f.queue;if(url in queue){if(callback){if (queue[url]){queue[url].push(callback);}else{callback();}}return;}queue[url]=callback ? [callback] : [];var st=document.createElement("script");st.type="text/javascript";st.onload=st.onreadystatechange=function(){if(st.readyState && st.readyState != "loaded" && st.readyState != "complete"){return;}st.onreadystatechange=st.onload=null;while(queue[url].length){queue[url].shift()();}queue[url]=null;};st.src=url;var head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;head.insertBefore(st,head.firstChild);}
loadCss=function(url){var css=document.createElement("link");css.type="text/css";css.rel="stylesheet";css.href=url;var head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;head.appendChild(css);}
function gck(nm){var arr=document.cookie.match(new RegExp("(^| )"+nm+"=([^;]*)(;|$)"));if(arr!=null){return unescape(arr[2]);}else{return null;}}
function sck(nm,val){var days=30;var exp=new Date();exp.setTime(exp.getTime()+days*24*60*60*1000);document.cookie=nm+"="+escape(val)+";expires="+exp.toGMTString();}
function db64(s){var b=new Base64();return b.decode(s);}
function eb64(s){var b=new Base64();return b.encode(s);}
function Base64(){k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
this.decode=function(ins){var out="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;ins=ins.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<ins.length){enc1=k.indexOf(ins.charAt(i++));enc2=k.indexOf(ins.charAt(i++));enc3=k.indexOf(ins.charAt(i++));enc4=k.indexOf(ins.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;out=out+String.fromCharCode(chr1);if(enc3!=64){out=out+String.fromCharCode(chr2);}if(enc4!=64){out=out+String.fromCharCode(chr3);}}out=_utf8_decode(out);return out;}
this.encode=function(ins){var out="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;ins=_utf8_encode(ins);while(i<ins.length){chr1=ins.charCodeAt(i++);chr2=ins.charCodeAt(i++);chr3=ins.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}out=out+k.charAt(enc1)+k.charAt(enc2)+k.charAt(enc3)+k.charAt(enc4);}return out;}
_utf8_decode=function(us){var s="";var i=0;var c=c1=c2=0;while(i<us.length){c=us.charCodeAt(i);if(c<128){s+=String.fromCharCode(c);i++;}else if((c>191)&&(c<224)){c2=us.charCodeAt(i+1);s+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}else{c2=us.charCodeAt(i+1);c3=us.charCodeAt(i+2);s+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}return s;}
_utf8_encode=function(s){s=s.replace(/\r\n/g,"\n");var us="";for(var n=0;n<s.length;n++){var c=s.charCodeAt(n);if (c<128){us+=String.fromCharCode(c);}else if((c>127)&&(c<2048)){us+=String.fromCharCode((c>>6)|192);us+=String.fromCharCode((c&63)|128);}else{us+=String.fromCharCode((c>>12)|224);us+=String.fromCharCode(((c>>6)&63)|128);us+=String.fromCharCode((c&63)|128);}}return us;}}
function addNormalClickCount(){
	var posir = ou.ser + "/a/adclick?spid="+op.spid+"&adid="+op.adid+"&tcca="+op.tcca+"&urip="+op.urip;
    var ifr = document.createElement("iframe");
    ifr.src = posir;
    ifr.style.display="none";
    document.body.appendChild(ifr);
}