/**
 * Created by liuxia on 16/4/23.
 */
var dialogBox = document.getElementById("dialog-box");
var trigBtn = document.getElementById("trig-btn");
var mask = document.querySelector("#mask");
var dialogBtn = document.querySelectorAll("#dialog-box button");

//dialogBox.style.top = (window.screen.availHeight + document.documentElement.scrollTop - 200) / 2 + "px";
dialogBox.style.top = (document.documentElement.clientHeight - dialogBox.offsetHeight) / 2 + "px";
dialogBox.style.left = (document.documentElement.clientWidth - dialogBox.clientWidth) / 2 + "px";
console.log(dialogBox.style.left);

trigBtn.addEventListener("click", showHandler, false);
mask.addEventListener("click", hideHandler, false);
for (var i = 0; i < dialogBtn.length; ++i) {
    dialogBtn[i].addEventListener("click", hideHandler, false);
}


function showHandler() {
    mask.style.display = "block";
    dialogBox.style.display = "block";
}

function hideHandler() {
    mask.style.display = "none";
    dialogBox.style.display = "none";
}

window.onscroll = function (e) {
    // 当页面的滚动条滚动时,会执行这里的代码
    dialogBox.style.top = (document.documentElement.scrollHeight - window.screen.availHeight + document.documentElement.scrollTop - 200) / 2 + "px";
}