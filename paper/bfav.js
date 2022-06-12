function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fav() {
  x = document.getElementsByClassName("collect on");
  if (x[0]) {
    x[0].click();
    await sleep(1000);
    clk(1);
  } else {
    x = document.getElementsByClassName("collect");
    x[0].click();
    await sleep(1000);
    clk(0);
  }
}

async function clk(e) {
  x = document.getElementsByClassName("group-list")[0].querySelector("ul");
  if (e) {
    x.querySelector("input").click();
    x.children[2].querySelector("input").click();
  } else x.children[1].querySelector("input").click();
  await sleep(100);
  document.getElementsByClassName("btn submit-move")[0].click();
}
fav();
