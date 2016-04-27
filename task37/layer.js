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

    drag: function(node){
        // console.log("ele:" + node.tagName);
        node.style.cursor = "move";
        node.addEventListener("mousedown",function(e){
            var disX = e.clientX - parseInt(node.parentNode.style.left);
            var disY = e.clientY - parseInt(node.parentNode.style.top);
            console.log(" left " + disX + " top " + disY);  
            console.log("event " + e.clientX + " " + e.clientY );
            var move = function(){
                node.parentNode.style.left = window.clientX - disX + "px";
                node.parentNode.style.top = window.clientY - disY + "px";
                console.log(" left " + window.clientX + " top " + window.clientY );            
            }
            node.addEventListener("mousemove", move, false); 
            node.addEventListener("mouseup",function(){
                node.removeEventListener("mousemove",move,false);
            },false);
        },false);
         
    }
}

 















