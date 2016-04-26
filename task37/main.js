(function () {
    var dialogBox = document.getElementById("dialog-box");
    var trigBtn = document.getElementById("trig-btn");
    var mask = document.querySelector("#mask");
    var dialogBtn = document.querySelectorAll("#dialog-box button");

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
    window.onscroll = function () {
        scroll(dialogBox);
    }
})();
