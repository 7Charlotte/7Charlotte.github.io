var numberList = new Array();

//验证数字
function checkNumber() {
    var inputNumber = document.getElementById("number-input").value;
    if (/^[0-9]+$/.test(inputNumber) != true) {
        alert("请输入数字");
        return;
    } else if (inputNumber < 10 || inputNumber > 100) {
        alert("请输入10-100之间的数字");
        return;
    } else {
        return parseInt(inputNumber);
    }
}

function renderList() {
    var outputNumber = document.getElementById("number-output");
    outputNumber.innerHTML = "";
    for (var i = 0; i < numberList.length; i++) {
        var numberItem = document.createElement("li");
        numberItem.style.height = 2 * numberList[i] + "px";
        numberItem.setAttribute("id", i);//一个trick的方法,给每个list添加一个id,以此来获取哪个list被点击了
        outputNumber.appendChild(numberItem);
    }

    bindListener();
}

function bindListener() {
    var outputList = document.querySelectorAll("#number-output li");
    for (var i = 0; i < outputList.length; i++) {
        outputList[i].addEventListener("click", delListHandle, false);
    }
}

function delListHandle(e) {//回调函数接受事件参数,用e.target定位发生事件的节点
    e.target.parentNode.removeChild(e.target);
    alert(this.innerText);
    var index = this.getAttribute("id");//获取哪个list被点击了
    numberList.splice(index, 1);
    renderList();
}

function leftInHandle() {
    var num = checkNumber();
    if (num !== undefined || numberList.length <= 60) {
        numberList.unshift(num);
    }
    //select_sort(numberList);
    renderList();

}

function rightInHandle() {
    var num = checkNumber();
    if (num !== undefined || numberList.length <= 60) {
        numberList.push(num);
    }
    renderList();
}

function leftOutHandle() {
    var item = numberList.shift();
    renderList();
}

function rightOutHandle() {
    var item = numberList.pop();
    renderList();
s
}

function sortHandle() {
    select_sort(numberList);
    renderList();
}

function init() {
    var leftInBtn = document.getElementById("left-in");
    var rightInBtn = document.getElementById("right-in");
    var leftOutBtn = document.getElementById("left-out");
    var rightOutBtn = document.getElementById("right-out");
    var sortBtn = document.getElementById("sort");

    if (leftInBtn) {
        leftInBtn.addEventListener("click", leftInHandle, false);
    }
    if (rightInBtn) {
        rightInBtn.addEventListener("click", rightInHandle, false);
    }
    if (leftOutBtn && numberList.length !== 0) {
        leftOutBtn.addEventListener("click", leftOutHandle, false);
    }
    if (rightOutBtn && numberList.length !== 0) {
        rightOutBtn.addEventListener("click", rightOutHandle, false);
    }
    if (sortBtn) {
        sortBtn.addEventListener("click", sortHandle, false);
    }
}

function select_sort(numberList) {
    for (var i = 0; i < numberList.length; i++) {
        var min = i;
        for (var j = i + 1; j < numberList.length; j++) {
            if (numberList[j] < numberList[min]) {
                min = j;
            }
        }
        var temp = numberList[i];
        numberList[i] = numberList[min];
        numberList[min] = temp;
    }
}
init();