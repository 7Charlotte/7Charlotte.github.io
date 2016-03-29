/**
 * Created by liuxia on 16/3/26.
 */
var root = document.querySelector(".hierarchy1");
var result = new Array();
function traserval(node) {
    console.log(node.className);
    node.style.backgroundColor = 'red';
    result.push(node);
    node.style.backgroundColor = '#fff';
    if (node.firstElementChild) {
        traserval(node.firstElementChild);
    }
    if (node.lastElementChild) {
        traserval(node.lastElementChild);
    }
}
traserval(root);


var i = 0;
result[i].style.backgroundColor = 'red';
timer = setInterval(function(){
    i++;
    if(i < result.length){
        result[i-1].style.backgroundColor = '#fff';
        result[i].style.backgroundColor = 'blue';
    }else{
        clearInterval(timer);
        result[result.length-1].style.backgroundColor = '#fff';
    }
}, 1000)