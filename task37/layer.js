/**
 * Created by liuxia on 16/4/23.
 */
function Layer(ele, maskEle) {
    this.ele = ele;
    this.maskEle = maskEle;

}
Layer.prototype = {
    show: function () {
        console.log("show layer");
        this.maskEle.style.display = "block";
        this.ele.style.display = "block";
        this.ele.style.top = (document.documentElement.clientHeight - this.ele.offsetHeight) / 2 + "px";
        this.ele.style.left = (document.documentElement.clientWidth - this.ele.offsetWidth) / 2 + "px";

    },

    hide: function () {
        console.log("hide layer");
        this.maskEle.style.display = "none";
        this.ele.style.display = "none";
    }
}
















