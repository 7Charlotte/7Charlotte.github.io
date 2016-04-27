/**
 * Created by liuxia on 16/4/26.
 */
function scroll(ele) {
    console.log("scroll layer"+" param"+ ele.clientHeight);
    if (ele.style.display == "block") {
    	ele.style.top = (document.documentElement.clientHeight - ele.offsetHeight ) / 2 +(document.documentElement.scrollTop || document.body.scrollTop )+ "px";
    } 
}