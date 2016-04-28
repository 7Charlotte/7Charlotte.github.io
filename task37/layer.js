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

    drag: function (node, e) { //巨坑,drag事件和move事件有冲突
        console.log(node);
        node.style.cursor = "move";
        var disX = e.clientX - parseInt(node.parentNode.style.left);
        var disY = e.clientY - parseInt(node.parentNode.style.top);

        console.log("mousedown:mouseX " + e.clientX + " mouseY " + e.clientY);
        var move = function (e) {
            node.parentNode.style.left = e.clientX - disX + "px";
            node.parentNode.style.top = e.clientY - disY + "px";
            console.log(" mousemove:mouseX " + e.clientX + " mouseY " + e.clientY);
        }
        document.addEventListener("mousemove", move, false);
        document.addEventListener("mouseup", function () {
            console.log("mousemovelistener removed");
            document.removeEventListener("mousemove", move, false);
        }, false);
    }
}

 















