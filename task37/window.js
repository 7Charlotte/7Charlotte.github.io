/**
 * Created by liuxia on 16/4/26.
 */
function scroll(ele) {
    console.log("scroll layer");
    if (ele.style.display == "block") {
        ele.style.top = (document.documentElement.clientHeight - ele.offsetHeight ) / 2 + document.documentElement.scrollTop + "px";
    }
}