/**
 * Created by liuxia on 16/3/26.
 */
var root = document.querySelector(".hierarchy1");
function traserval(node) {
    return function ret() {
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
    };
}

var gen = traserval(root);

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