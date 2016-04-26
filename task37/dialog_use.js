/**
 * Created by liuxia on 16/4/23.
 */
var dialogBox = document.getElementById("dialog-box");
var trigBtn = document.getElementById("trig-btn");
var mask = document.querySelector("#mask");
var dialogBtn = document.querySelectorAll("#dialog-box button");

var layer = new Layer(dialogBox ,mask);

trigBtn.addEventListener("click", function(){
	layer.showHandler();
}, false);

mask.addEventListener("click", function(){
	layer.hideHandler();
}, false);

for (var i = 0; i < dialogBtn.length; ++i) {
    dialogBtn[i].addEventListener("click", function(){
    	layer.hideHandler();
    }, false);
}


function Layer(ele,maskEle){

	this.ele = ele;
	this.maskEle = maskEle;

}

Layer.prototype = {
	showHandler: function(){
		console.log("show layer");
		maskEle.style.display = "block";
	    ele.style.display = "block";
	    ele.style.top = (document.documentElement.clientHeight - ele.offsetHeight) / 2 + "px";
	    ele.style.left = (document.documentElement.clientWidth - ele.offsetWidth) / 2 + "px";

	},

	hideHandler: function(){
		console.log("hide layer");
		maskEle.style.display = "none";
   		ele.style.display = "none";
	},

	scrollHandler: function(){
		window.onscroll = function () {
    	// 当页面的滚动条滚动时,会执行这里的代码
		    if (ele.display == "block") {
		    	ele.style.top = (document.documentElement.clientHeight - ele.offsetHeight ) / 2 + document.documentElement.scrollTop + "px";
		    }
		}
	}
}







