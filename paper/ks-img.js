x = document.getElementsByTagName("img");
cc = "";
for (k = 0; k < x.length; k++)
  if (x[k].src.split("/")[3] == "ufile") 
    cc = x[k].src;
cc = 'curl -RO ' + 
  cc.replace('_','_[0-')
    .slice(0,-4) +
      '].jpg'
prompt("", cc);
 
cc = document.createElement("div");
x = document.getElementsByTagName("img");
for (k = 0; k < x.length; k++)
  if (x[k].src.slice(10, 15) == "pximg") {
    a = document.createElement("a");
    a.href = x[k].src
      .replace("c/600x1200_90_webp/img-master", "img-original")
      .replace("_master1200", "")
      .replace("jpg", "png");
    b = document.createElement("img");
    b.src = x[k].src;
    a.appendChild(b);
    cc.appendChild(a);
  }
document.write(cc.innerHTML);

