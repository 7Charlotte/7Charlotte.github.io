(function () {
    var dialogBox = document.getElementById("dialog-box"),
        trigBtn = document.getElementById("trig-btn"),
        mask = document.querySelector("#mask"),
        title = document.querySelector("h3"),
        dialogBtn = document.querySelectorAll("#dialog-box button");


    var layer = new Layer(dialogBox, mask);

    trigBtn.addEventListener("click", function () {
        layer.show();
    }, false);

    mask.addEventListener("click", function () {
        layer.hide();
    }, false);

    for (var i = 0; i < dialogBtn.length; ++i) {
        dialogBtn[i].addEventListener("click", function () {
            layer.hide();
        }, false);
    }

    title.addEventListener("drag", function (e) {  //如果希望drag事件生效，元素必须设置draggable="true"
       layer.drag(title);
    }, false);
    
    window.onscroll = function () {
        scroll(dialogBox);
    }
})();
