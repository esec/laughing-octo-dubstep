var ad_w = "";
var ad_h = "10";
var ad_image = 'http://ji.dazhantai.com/show/zl?uid=1534&zid=3272';
var ad_link = 'http://ji.dazhantai.com/show/zl?uid=1534&zid=3272'; 
var ad_track_id = "20150821094454";
var closegif_url = "http://img.le4le.com:9008/fix/close3.jpg"; // ?qvid=" + ad_track_id;
var ad_track_url = 'http://p.haolew.com:7777/pt/track_ad_bc.php';
var ad_type = "adbigpop";   //image/flash/slides
var ad_position = "right"; // left,right,bottom,top,center
var ad_popint = 8;     // bei tou time interval (hours)

var ad_texts = eval("");

if( ad_position == 'default') ad_position = 'right';

var disable_close = closegif_url.indexOf('null') != -1;
var userAgent = navigator.userAgent.toLowerCase();
var is_webtv = userAgent.indexOf('webtv') != -1;
var is_kon = userAgent.indexOf('konqueror') != -1;
var is_mac = userAgent.indexOf('mac') != -1;
var is_saf = userAgent.indexOf('applewebkit') != -1 || navigator.vendor == 'Apple Computer, Inc.';
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko' && !is_saf) && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ns = userAgent.indexOf('compatible') == -1 && userAgent.indexOf('mozilla') != -1 && !is_opera && !is_webtv && !is_saf;
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera && !is_saf && !is_webtv) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);

var first_load = true; 
var user_closed = false;  // track if user has closed the ad

window.onerror=function()
{
  return true;
}
function g_clientHeight()
{
  if( document.documentElement && document.documentElement.clientHeight)
	return document.documentElement.clientHeight;
  else
	return document.body.clientHeight;
}
function g_clientWidth()
{
  if( document.documentElement && document.documentElement.clientWidth)
        return document.documentElement.clientWidth;
  else
        return document.body.clientWidth;
}
function g_scrollTop()
{
  if( document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
  else
        return document.body.scrollTop;
}
function g_scrollLeft()
{
  if( document.documentElement && document.documentElement.scrollLeft)
        return document.documentElement.scrollLeft;
  else
        return document.body.scrollLeft;
}

function do_ad_track(evt)
{
    evt=evt||window.event;
    var left = 0;
    if(is_ie) left = 1;
    if( evt.button == left )
    {
        var img=new Image();
        img.src = ad_track_url + '?id=' + encodeURIComponent('click:' +ad_track_id) + "&t="+new Date().getTime();
        window.setTimeout( hideIt, 3000);
    }
    return true;
}

function objpop(url) {
	var obj = new Object;
	obj.isop = 0;
	obj.w = window;
	obj.d = document;
	obj.width = screen.width;
	obj.height = screen.height;
	obj.userAgent = navigator.userAgent.toLowerCase();
	obj.url = url;
	obj.openstr = "width=" + obj.width + ",height=" + obj.height + ",toolbar=1,location=1,titlebar=1,menubar=1,scrollbars=1,resizable=1,directories=1,status=1";
	obj.browser = {
		version: (obj.userAgent.match(/(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
		safari: /webkit/.test(obj.userAgent),
		opera: /opera/.test(obj.userAgent),
		ie: /msie/.test(obj.userAgent) && !/opera/.test(obj.userAgent),
		max: /maxthon/.test(obj.userAgent),
		se360: /360/.test(obj.userAgent),
		tw: /theworld/.test(obj.userAgent),
		tt: /tencenttraveler/.test(obj.userAgent),
		ttqq: /QQBrowser/.test(obj.userAgent),
		tt5: /qqbrowser/.test(obj.userAgent),
		sg: /se /.test(obj.userAgent),
		ff: /mozilla/.test(obj.userAgent) && !/(compatible|webkit)/.test(obj.userAgent)
	};
	obj.open = function() {
		if (obj.browser.ie) {
			if (!document.getElementById("_launchURL_"))
			 document.write("<object id=_launchURL_ width=0 height=0 classid=CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6></object>");
			if (!document.getElementById("_DOMScript_"))
			 document.write("<object id=_DOMScript_  style=position:absolute;left:1px;top:1px;width:1px;height:1px; classid=clsid:2D360201-FFF5-11d1-8D03-00A0C959BC0A></object>");
		}
		if (!obj.browser.ie && !obj.browser.ff) {
			obj.c();
		} else {
			try {
				obj.o1 = window.open(obj.url, "_blank", obj.openstr + ",left=0,top=0");
			} catch(err) {
				obj.o1 = "";
			}
			if (obj.o1) {
				obj.w.focus();
				obj.isop = 1;
			} else {
				if (obj.browser.ie) {
					try {
						if (obj.browser.sg)
						 {
							obj.dsp();
						}
						 else if (obj.browser.ttqq || obj.browser.max || obj.browser.se360 || obj.browser.tw || obj.browser.tt || obj.browser.version == "7.0" || obj.browser.version == "8.0" || obj.browser.version == "9.0") {
							setTimeout(obj.lop, 200);
						} else {
							obj.iev6 = true;
							obj.dsp();
						}

					} catch(err) {
						obj.c();
					}

				} else {
					obj.c();
				}
			}
		}
		setTimeout(obj.nt, 600);
		//obj.lap();
		if (!obj.isop) obj.ab = setInterval(obj.c, 1000);

	};
	obj.nt = function() {
		if (obj.isop == 0) {
			if (obj.iev6) obj.dsp();
			else obj.lop();
		}
	}
	obj.dsp = function() {
		if (obj.isop) return null;
		try {
			setTimeout(function() {
				document.getElementById("_DOMScript_").DOM.Script.open(obj.url, "_blank", obj.openstr);
				obj.w.focus();
				obj.isop = 1;
			},
			200);
		} catch(err) {}
	}
	obj.lop = function() {
		if (obj.isop) return null;
		try {
			obj.isop = 1;
			document.getElementById("_launchURL_").launchURL(obj.url);

		} catch(err) {
			obj.isop = 0;
		}
	}
	obj.lap = function() {
		if (obj.browser.ie && obj.isop == 0) {
			if (window.attachEvent) {
				window.attachEvent("onload",
				function() {
					obj.lop();
				})
			} else {
				if (window.addEventListener) {
					window.addEventListener("load",
					function() {
						obj.lop();
					},
					true)
				} else {
					window.onload = function() {
						obj.lop();
					}
				}
			}
		}

	}
	obj.adv = function(el, evname, func) {
		if (el.attachEvent) {
			el.attachEvent("on" + evname, func);
		} else if (el.addEventListener) {
			el.addEventListener(evname, func, true);
		} else {
			el["on" + evname] = func;
		}
	}
	obj.rdv = function(el, evname, func) {
		if (el.removeEventListener) {
			el.removeEventListener(evname, func, false);
		} else if (el.detachEvent) {
			el.detachEvent("on" + evname, func);
		} else {
			el["on" + evname] = null;
		}
	}

	obj.c = function() {
		obj.rdv(document, "click", obj.ck145727);
		obj.adv(document, "click", obj.ck145727);
	};
	obj.ck145727 = function() {
		if (obj.isop) {
			obj.rdv(document, "click", obj.ck145727);
			clearInterval(obj.ab);
			return null;
		}
		obj.o2 = window.open(obj.url, "_blank", obj.openstr + ",left=0,top=0");
		obj.w.focus();
		if (obj.o2) {
			obj.rdv(document, "click", obj.ck145727);
			clearInterval(obj.ab);
			obj.isop = 1;
		}
	};
	return obj;
}

function lz_c_ctry_top_domain(str)
{
    var pattern = "/^aero$|^cat$|^coop$|^int$|^museum$|^pro$|^travel$|^xxx$|^com$|^net$|^gov$|^org$|^mil$|^edu$|^biz$|^info$|^name$|^ac$|^mil$|^co$|^ed$|^gv$|^nt$|^bj$|^hz$|^sh$|^tj$|^cq$|^he$|^nm$|^ln$|^jl$|^hl$|^js$|^zj$|^ah$|^hb$|^hn$|^gd$|^gx$|^hi$|^sc$|^gz$|^yn$|^xz$|^sn$|^gs$|^qh$|^nx$|^xj$|^tw$|^hk$|^mo$|^fj$|^ha$|^jx$|^sd$|^sx$/i";

    if(str.match(pattern)){ return 1; }

    return 0;
}
function lz_c_ctry_domain(str)
{
    var pattern = "/^ac$|^ad$|^ae$|^af$|^ag$|^ai$|^al$|^am$|^an$|^ao$|^aq$|^ar$|^as$|^at$|^au$|^aw$|^az$|^ba$|^bb$|^bd$|^be$|^bf$|^bg$|^bh$|^bi$|^bj$|^bm$|^bo$|^br$|^bs$|^bt$|^bv$|^bw$|^by$|^bz$|^ca$|^cc$|^cd$|^cf$|^cg$|^ch$|^ci$|^ck$|^cl$|^cm$|^cn$|^co$|^cr$|^cs$|^cu$|^cv$|^cx$|^cy$|^cz$|^de$|^dj$|^dk$|^dm$|^do$|^dz$|^ec$|^ee$|^eg$|^eh$|^er$|^es$|^et$|^eu$|^fi$|^fj$|^fk$|^fm$|^fo$|^fr$|^ly$|^hk$|^hm$|^hn$|^hr$|^ht$|^hu$|^id$|^ie$|^il$|^im$|^in$|^io$|^ir$|^is$|^it$|^je$|^jm$|^jo$|^jp$|^ke$|^kg$|^kh$|^ki$|^km$|^kn$|^kp$|^kr$|^kw$|^ky$|^kz$|^la$|^lb$|^lc$|^li$|^lk$|^lr$|^ls$|^lt$|^lu$|^lv$|^ly$|^ga$|^gb$|^gd$|^ge$|^gf$|^gg$|^gh$|^gi$|^gl$|^gm$|^gn$|^gp$|^gq$|^gr$|^gs$|^gt$|^gu$|^gw$|^gy$|^ma$|^mc$|^md$|^mg$|^mh$|^mk$|^ml$|^mm$|^mn$|^mo$|^mp$|^mq$|^mr$|^ms$|^mt$|^mu$|^mv$|^mw$|^mx$|^my$|^mz$|^na$|^nc$|^ne$|^nf$|^ng$|^ni$|^nl$|^no$|^np$|^nr$|^nu$|^nz$|^om$|^re$|^ro$|^ru$|^rw$|^pa$|^pe$|^pf$|^pg$|^ph$|^pk$|^pl$|^pm$|^pr$|^ps$|^pt$|^pw$|^py$|^qa$|^wf$|^ws$|^sa$|^sb$|^sc$|^sd$|^se$|^sg$|^sh$|^si$|^sj$|^sk$|^sl$|^sm$|^sn$|^so$|^sr$|^st$|^su$|^sv$|^sy$|^sz$|^tc$|^td$|^tf$|^th$|^tg$|^tj$|^tk$|^tm$|^tn$|^to$|^tp$|^tr$|^tt$|^tv$|^tw$|^tz$|^ua$|^ug$|^uk$|^um$|^us$|^uy$|^uz$|^va$|^vc$|^ve$|^vg$|^vi$|^vn$|^vu$|^ye$|^yt$|^yu$|^za$|^zm$|^zr$|^zw$/i";

    if(str.match(pattern)){ return 1; }

    return 0;
}
function lz_get_domain(host)
{
    var d=host.replace(/^www\./, "");
    var ss=d.split(".");
    var l=ss.length;
    if(l == 3){
        if(lz_c_ctry_top_domain(ss[1]) && lz_c_ctry_domain(ss[2])){
        }
        else{
            d = ss[1]+"."+ss[2];
        }
    }
    else if(l >= 3){
        var ip_pat = "^[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*$";
        if(host.match(ip_pat)){
            return d;
        }
        if(lz_c_ctry_top_domain(ss[l-2]) && lz_c_ctry_domain(ss[l-1])) {
            d = ss[l-3]+"."+ss[l-2]+"."+ss[l-1];
        }
        else{
            d = ss[l-2]+"."+ss[l-1];
        }
    }
       
    return d;
}

function getCookie(cookieName) 
{
    var cookieString = document.cookie;
    var start =cookieString.indexOf(cookieName+'=');
    if(start == -1)
        return null;
    start += cookieName.length + 1;
    var end = cookieString.indexOf(';', start);
    if(end == -1) 
        return unescape(cookieString.substring(start));
    return unescape(cookieString.substring(start,end));
}

function setCookie(cookieName, cookieValue, cookieHour)
{
    var expires = new Date();
    expires.setTime( expires.getTime() + cookieHour*60*60*1000); 
    var cookie = cookieName + '=' + escape(cookieValue)+'; expires='+expires.toGMTString()+';';
    var d=lz_get_domain(document.domain);
    if(d != ""){
        cookie +="domain="+d+";";
    }
    cookie +="path="+"/;";
    document.cookie=cookie;
}

function mm_pop_front()
{
	var poped = getCookie( "afp_" + ad_track_id);
	if( (poped == null)||(poped == ''))
	{
			setCookie( "afp_" + ad_track_id, "yes", ad_popint );
			var img=new Image();
			img.src = ad_track_url + '?id=' + encodeURIComponent('view:' +ad_track_id) + "&t="+new Date().getTime();
			var oP=objpop(ad_link); 
			oP.open();
	}

}
mm_pop_front();

