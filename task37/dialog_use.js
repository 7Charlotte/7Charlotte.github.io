/**
 * Created by liuxia on 16/4/23.
 */
 function Layer(ele,maskEle){
	this.ele = ele;
	this.maskEle = maskEle;

}
 Layer.prototype = {
	show: function(){
		console.log("show layer");
		this.maskEle.style.display = "block";
	    this.ele.style.display = "block";
	    this.ele.style.top = (document.documentElement.clientHeight - this.ele.offsetHeight) / 2 + "px";
	    this.ele.style.left = (document.documentElement.clientWidth - this.ele.offsetWidth) / 2 + "px";

	},

	hide: function(){
		console.log("hide layer");
		this.maskEle.style.display = "none";
   		this.ele.style.display = "none";
	},

	scrollHandler: function(){
		console.log("scroll layer");
	    if (this.ele.style.display == "block") {
	    	this.ele.style.top = (document.documentElement.clientHeight - this.ele.offsetHeight ) / 2 + document.documentElement.scrollTop + "px";
	    }	
	}
}

var dialogBox = document.getElementById("dialog-box");
var trigBtn = document.getElementById("trig-btn");
var mask = document.querySelector("#mask");
var dialogBtn = document.querySelectorAll("#dialog-box button");

var layer = new Layer(dialogBox ,mask);

trigBtn.addEventListener("click", function(){
	layer.show();
}, false);

mask.addEventListener("click", function(){
	layer.hide();
}, false);

for (var i = 0; i < dialogBtn.length; ++i ) {
    dialogBtn[i].addEventListener("click", function(){
    	layer.hide();
    }, false);
}

window.onscroll = layer.scrollHandler;










