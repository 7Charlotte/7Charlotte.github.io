/**
 * Created by liuxia on 16/4/23.
 */
var dialogBox = document.getElementById("dialog-box");
var trigBtn = document.getElementById("trig-btn");
var mask = document.querySelector("#mask");
var dialogBtn = document.querySelectorAll("#dialog-box button");

var layer = new Layer(dialogBox);
layer.maskEle = mask;

trigBtn.addEventListener("click", layer.showHandler, false);
mask.addEventListener("click", layer.hideHandler, false);
for (var i = 0; i < dialogBtn.length; ++i) {
    dialogBtn[i].addEventListener("click", layer.hideHandler, false);
}



var Layer = function(ele){

	this.maskEle = null,

	showHandler: function(){
		maskEle.style.display = "block";
	    ele.style.display = "block";
	    ele.style.top = (document.documentElement.clientHeight - ele.offsetHeight) / 2 + "px";
	    ele.style.left = (document.documentElement.clientWidth - ele.offsetWidth) / 2 + "px";

	},

	hideHandler: function(){
		maskEle.style.display = "none";
   		ele.style.display = "none";
	},

	window.onscroll = function () {
    // 当页面的滚动条滚动时,会执行这里的代码
	    if (ele.display == "block") {
	    	ele.style.top = (document.documentElement.clientHeight - ele.offsetHeight ) / 2 + document.documentElement.scrollTop + "px";
	    }
	}

}






