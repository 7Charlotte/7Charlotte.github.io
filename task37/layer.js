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
            var move = function (e) {
                node.parentNode.style.left = e.clientX - disX + "px";
                node.parentNode.style.top = e.clientY - disY + "px";
                console.log(" mouseX " + e.clientX + " mouseY " + e.clientY);
            }
            console.log(" MouseDown:leftDist " + disX + "MouseDown:topDist " + disY);
            console.log("mouseX " + e.clientX + " mouseY " + e.clientY);

            document.addEventListener("mousemove", move, false);
            document.addEventListener("mouseup", function () {
                console.log("mousemove listener removed")
                document.removeEventListener("mousemove", move, false);
            }, false);


        }, false);
    }
}

 















