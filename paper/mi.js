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
