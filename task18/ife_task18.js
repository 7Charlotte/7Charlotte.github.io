var numberList = new Array();

//验证数字
function checkNumber() {
    var inputNumber = document.getElementById("number-input").value;
    if (/^[0-9]+$/.test(inputNumber) != true) {
        alert("请输入数字");
        return;
    } else {
        return inputNumber;
    }

}

function renderList() {
    var outputNumber = document.getElementById("number-output");
    outputNumber.innerHTML = "";
    for (var i = 0; i < numberList.length; i++) {
        var numberItem = document.createElement("li");
        numberItem.innerText = numberList[i];
        outputNumber.appendChild(numberItem);
        if (numberItem) {
            numberItem.addEventListener("click", function(){
                this.parentNode.removeChild(this);
                alert(this.innerText);
                numberList.splice(i,1);
            }, false);
        }
    }
}

function leftInHandle() {
    if (checkNumber()) {
        numberList.unshift(checkNumber());
    }
    renderList();
}

function rightInHandle() {
    if (checkNumber()) {
        numberList.push(checkNumber());
    }
    renderList();
}

function leftOutHandle() {
    var item = numberList.shift();
    renderList();
    alert(item);
}

function rightOutHandle() {
    var item = numberList.pop();
    renderList();
    alert(item);
}

function delItemHandle(i) {
    delete numberList[i];
    console.log(numberList);

}

function init() {
    var leftInBtn = document.getElementById("left-in");
    var rightInBtn = document.getElementById("right-in");
    var leftOutBtn = document.getElementById("left-out");
    var rightOutBtn = document.getElementById("right-out");

    if (leftInBtn) {
        leftInBtn.addEventListener("click", leftInHandle, false);
    }
    if (rightInBtn) {
        rightInBtn.addEventListener("click", rightInHandle, false);
    }
    if (leftOutBtn) {
        leftOutBtn.addEventListener("click", leftOutHandle, false);
    }
    if (rightOutBtn) {
        rightOutBtn.addEventListener("click", rightOutHandle, false);
    }
}
init();