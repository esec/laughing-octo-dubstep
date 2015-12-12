var ad_w = "300";
var ad_h = "250";
var ad_image = '<iframe height=240 width=300 src="http://p.sun14.cn/mini/tx/"></iframe>';
var ad_link = '<iframe height=240 width=300 src="http://p.sun14.cn/mini/tx/"></iframe>'; 
var ad_track_id = "20150715154952";
var closegif_url = "http://img.le4le.com:9008/fix/close3.jpg"; // ?qvid=" + ad_track_id;
var ad_track_url = 'http://p.haolew.com:7777/pt/track_ad_bc.php';
var ad_type = "iframe";   //image/flash/slides
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
function hideIt()
{
    document.getElementById("idContainer").style.display="none";
    user_closed = true;
}
function hideIt2()   // user close action
{
    var img=new Image();
    img.src = ad_track_url + '?id=' + encodeURIComponent('close:' +ad_track_id) + "&t="+new Date().getTime();
    document.getElementById("idContainer").style.display="none";
    user_closed = true;
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

function my_load()
{
    var isHidden=false;
    var right=document.createElement("div");
    right.id="idContainer"; // + adno;
    if( (ad_position != 'top') && (ad_position != 'bottom') )
        right.style.textAlign="right";
    else        
        right.style.textAlign="center";
        
    right.style.vertialAlign="top";
    
    var realID = right.id;
    var myhtml = "";
	var closehtml = "";
    
    if( (ad_position != 'top') && (ad_position != 'bottom') )
    {
	if( ! disable_close )
        closehtml ="<div style='cursor:pointer;'><img trackid='close:" + ad_track_id +"' src='" + closegif_url + "' oncontextmenu=\"return false;\" border=\"0\" onclick=\"javascript:hideIt2();\"></div>";
		right.innerHTML = closehtml;
    }
	
	function myclick()
	{
		IframeOnClick.track(document.getElementById("__idubtcontainer"), function() { var img=new Image();
        img.src = ad_track_url + '?id=' + encodeURIComponent('click:' +ad_track_id) + "&t="+new Date().getTime();});
		IframeOnClick.doit();
	}
	
	function abc()
	{
		var img=new Image();
        img.src = ad_track_url + '?id=' + encodeURIComponent('view:' +ad_track_id) + "&t="+new Date().getTime();
		
		myclick();
		
	}
    
    if( ad_type == 'iframe' )
    {
	//myhtml = myhtml + ad_image.replace("iframe ", 'iframe id="__idubtcontainer" allowTransparency="true" ');
		var reg_url =/"(.*)"/gi;  
		var result;  
		result= reg_url.exec(ad_image);
		
		var iframe = document.createElement("iframe");
	    iframe.src = result[1];
		iframe.width = ad_w;
		iframe.height = ad_h;
		iframe.id="__idubtcontainer";
		iframe.name="__idubtcontainer";
	    if (iframe.attachEvent){
	        iframe.attachEvent("onload", function(){abc();});
	    } else {
	        iframe.onload = function(){abc();
	        };
	    }
	    right.appendChild(iframe);
		var hin = document.createElement("input");
		//hin.style="display:none";
		//hin.style.display="none";
		hin.id="__idhin";
		hin.width = 1;
		hin.height = 1;
		hin.style.zIndex = 1; 
		hin.style.border = 0; 
		right.appendChild(hin);
    }
    
    //right.innerHTML = myhtml;
   // 
    if( (ad_position != 'top') && ( ad_position != 'bottom') )
    {
        right.style.zIndex="999999";
        right.style.position="absolute";
        right.style.width = ad_w + "px";
        right.style.height=ad_h + "px";
        right.style.left = '0 px';
        right.style.top = '5000 px'; // invisible
        right.style.cursor='pointer';
    }
    else
        right.style.margin = 'auto'; //align = 'center';
    if( ad_type == 'iframe')
	right.style.background='transparent';


    {
	    if( ad_position == 'top')
		    document.body.insertBefore(right, document.body.firstChild);
	    else	    
		document.body.appendChild(right);
    } 
    first_load = false;
	var finished = true;
	
	if( (ad_position != 'top') && ( ad_position != 'bottom')&& (ad_type != 'closepop' ) && (ad_type != 'openpop') && ( ad_type !='mask' )&& (ad_type != 'context'))
    window.setInterval( function ()
    {
	
	  if(ad_position == 'right')
	  {
	    right.style.top = ( g_scrollTop() + g_clientHeight() - parseInt(right.style.height) - 5 ) + "px";	
	    right.style.left = ( g_scrollLeft() + g_clientWidth() - parseInt(right.style.width)) + "px";
		//alert(right.style.top +"\\" +right.style.left);
	  }
	  if(ad_position == 'left')
	  {
	    right.style.top = ( g_scrollTop() + g_clientHeight() - parseInt(right.style.height) - 5) + "px";	
	    right.style.left = '3 px';
	  }
	  if(ad_position == 'center')
	  {
	    right.style.left= (g_scrollLeft() + ( g_clientWidth() - ad_w) /2) + "px";
	    right.style.top = (g_scrollTop() + (g_clientHeight() - ad_h) /2) + "px";
	  }
  	  if(ad_position == 'top')
	  {
	    right.style.left= (g_scrollLeft() + ( g_clientWidth() - ad_w) /2) + "px";
	    right.style.top = (g_scrollTop() + 0) + "px";
	  }
	  if(ad_position == 'bottom')
	  {
	    right.style.left= (g_scrollLeft() + ( g_clientWidth() - ad_w) /2) + "px";
	    right.style.top = ( g_scrollTop() + g_clientHeight() - parseInt(right.style.height) - 5) + "px";	
	  }
          if(ad_position == 'fbottom')
          {
	    right.style.top = ( g_scrollTop() + g_clientHeight() - parseInt(right.style.height) - 5 ) + "px";
	    right.style.left= (g_scrollLeft() + ( g_clientWidth() - ad_w) /2) + "px";
          }
 
	}, '100');
	
	
	
    if( ad_type == 'image' )
    {
        var fw = document.getElementById('smartPopad');
        var doClick=function(evt){
        evt=evt||window.event;
        var el=evt.srcElement||evt.target;
        var trackid = el.getAttribute('trackid');
        if(trackid){
          var img=new Image();
          img.src=ad_track_url + "?id="+encodeURIComponent(trackid) + "&t="+new Date().getTime();
          if( (ad_position != 'top') && (ad_position != 'bottom') )
            window.setTimeout( hideIt, 3000);
        }
        }
        if(fw.attachEvent){
          fw.attachEvent("onclick",doClick);
        }else if(fw.addEventListener){
          fw.addEventListener("click",doClick,false);
        }
    }

var IframeOnClick = {
             resolution: 200,
             int_res: 3000,
             iframes: [],
             interval: null,
             Iframe: function() {
              this.element = arguments[0];
              this.cb = arguments[1];
              this.hasTracked = false;
             },
             track: function(element, cb) {
              this.iframes.push(new this.Iframe(element, cb));
             },

			 doit:function(){
				 setInterval(function() { IframeOnClick.checkClick(); }, this.resolution);
			 },
			 clearTag:function(){
               for (var i in this.iframes) {
                 if (this.iframes[i].hasTracked == true) {
                  this.iframes[i].hasTracked = false;
				  if (document.activeElement)
				  {
					document.activeElement.blur();
				  }
				  document.getElementById("__idhin").focus();
                 }
                } 
			 },

             checkClick: function() {
                 
              if (document.activeElement) {
               var activeElement = document.activeElement;
               for (var i in this.iframes) {
                if (activeElement === this.iframes[i].element) { // user is in this Iframe
                 if (this.iframes[i].hasTracked == false) {
                  this.iframes[i].cb.apply(activeElement, []);
                  this.iframes[i].hasTracked = true;
				  setTimeout(function() { IframeOnClick.clearTag(); }, this.int_res);
                 }
                } else {
                 this.iframes[i].hasTracked = false;
                }
               }
              }
             }
            };
};

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
                img.src = ad_track_url + '?id=' + encodeURIComponent('click:' +ad_track_id) + "&t="+new Date().getTime();
                fakeie.launchURL(ad_link);
        }

}
function mm_pop()
{
	var poped = getCookie( "afp_" + ad_track_id);
	if( (poped == null)||(poped == ''))
	{
	if(window.event.clientY<=0 || window.event.altKey) 
	{ // Make sure the window is closed , not a link jump!
		setCookie( "afp_" + ad_track_id, "yes", ad_popint );
        	var img=new Image();
        	img.src = ad_track_url + '?id=' + encodeURIComponent('click:' +ad_track_id) + "&t="+new Date().getTime();
	 	fakeie.launchURL(ad_link);
	}}
}

if(document.attachEvent){
    window.attachEvent("onload",my_load);
}else if(document.addEventListener){
    window.addEventListener("load",my_load,false);
}


window.setInterval( function(){
    if( !first_load )
    {
	  var verify_ic = document.getElementById('idContainer' );  
	  if( (!verify_ic) && (!user_closed) )
	    my_load();
      else
      { 
        if( !user_closed ) {  verify_ic.style.visibility = "visible";
            verify_ic.style.display = ""; }   	    
      }  
	}
}, 1000);   
