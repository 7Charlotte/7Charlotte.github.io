/**
 * Created by liuxia on 16/4/23.
 */
function Layer(ele, maskEle) {
    this.ele = ele;
    this.maskEle = maskEle;

}
Layer.prototype = {

    hide: function () {
        console.log("hide layer");
        this.maskEle.style.display = "none";
        this.ele.style.display = "none";
    },
    show: function () {
        console.log("show layer");
        this.maskEle.style.display = "block";
        this.ele.style.display = "block";
        this.ele.style.top = (document.documentElement.clientHeight - this.ele.offsetHeight) / 2 + "px";
        this.ele.style.left = (document.documentElement.clientWidth - this.ele.offsetWidth) / 2 + "px";

    },

    drag: function (node) {
        node.style.cursor = "move";
        node.addEventListener("mousedown", function (e) {
            var disX = e.clientX - parseInt(node.parentNode.style.left);
            var disY = e.clientY - parseInt(node.parentNode.style.top);
<<<<<<< Updated upstream
            var move = function (e) { //var 定义函数一定要写在调用函数之前，否则调用时会报错undefined
                node.parentNode.style.left = e.clientX - disX + "px";
                node.parentNode.style.top = e.clientY - disY + "px";
                console.log(" mouseX " + e.clientX + " mouseY " + e.clientY);
            };

            console.log(" MouseDown:leftDist " + disX + "MouseDown:topDist " + disY);
            console.log("mouseX " + e.clientX + " mouseY " + e.clientY);

=======
            console.log(" MouseDown:leftDist " + disX + "MouseDown:topDist " + disY);
            console.log("mousedown:mouseX " + e.clientX + " mouseY " + e.clientY);
            var move = function (e) {
                node.parentNode.style.left = e.clientX - disX + "px";
                node.parentNode.style.top = e.clientY - disY + "px";
                console.log(" mousemove:mouseX " + e.clientX + " mouseY " + e.clientY);
            }
>>>>>>> Stashed changes
            document.addEventListener("mousemove", move, false);
            document.addEventListener("mouseup", function () {
                console.log("mousemovelistener removed")
                document.removeEventListener("mousemove", move, false);
            }, false);
        }, false);

    }
}

 















