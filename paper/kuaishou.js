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
 
