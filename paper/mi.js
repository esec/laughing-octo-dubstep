x = document.getElementsByTagName("div");
xp = RegExp('^[0-9]*_p.*g');
biglog = "";
for (i = 0; i < x.length; i++) {
    b = x[i].getAttribute("data-name");
    if (xp.exec(b)) {
        biglog += b;
        biglog += " ";
        x[i].children[1].click();
    }
}
console.log(biglog);

javascript: import("https://code.jquery.com/jquery-latest.min.js").then(() => {
  navigator.clipboard.readText().then((clipText) => {
    x = document.getElementsByTagName("div");
    xp = RegExp(clipText + ".*");
    for (i = 0; i < x.length; i++) {
      b = x[i].getAttribute("data-name");
      if (xp.exec(b)) {
        $(x[i]).delay(100).fadeOut().fadeIn("slow");
      }
    }
  });
});

// Maximum stack size is 13927 in your current browser may port to fetch()
// d:atom5\aria2-1.36.0-win-64bit-build1\aria2c --enable-rpc --rpc-allow-origin
x = document.getElementsByTagName("img"); xhr = new XMLHttpRequest();
for (i = 0; i < x.length; i++) {
  document.title = i + "/" + x.length + " " + Math.round(i * 100 / x.length) + "%"
  tmp = '[{"id":"a","jsonrpc":"2.0","method":"aria2.addUri","params":[["';
  tmp += x[i].src;
  tmp += '"],{"out":"';
  tmp += x[i].parentElement.dataset.name;
  tmp +=
    '","referer":"https://i.mi.com/","user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"}]}]';
  xhr.open("POST", "http://localhost:6800/jsonrpc", false);
  xhr.send(tmp);
}
