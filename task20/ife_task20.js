var inputList = new Array();//接收输入的值
var boxList = new Array();//记录切分后的对象数组

//验证数字
function checkNumber() {
    var inputNumber = document.getElementById("number-input").value;
    var inputArr = inputNumber.split(/[\s\r\u3000\t\.,,:;、\/!@#\$%\^&\*\(\)\\]/);
    for (var i = 0; i < inputArr.length; i++) {
        var temp = inputArr[i].trim();
        if(temp.length != 0) {
            var numberBox = {                               //对象自我渲染
                value: inputArr[i],
                defaultbgColor: "red",
                item: document.createElement("li"),
                render: function () {
                    var outputNumber = document.getElementById("number-output");
                    this.item.innerText = this.value;
                    this.item.style.backgroundColor = this.defaultbgColor;
                    outputNumber.appendChild(this.item);
                }
            };
            boxList.push(numberBox);
        }
    }
    return boxList;
}

function renderList() {
    var outputNumber = document.getElementById("number-output");
    outputNumber.innerHTML = "";
    for (var i = 0; i < boxList.length; i++) {
        boxList[i].render();
    }
}

function leftInHandle() {
    var flag = checkNumber();
    if (flag) {
        renderList();
    }
}

function searchHandle() {
    var inputValue = document.getElementById("search-box").value;
    var patt = new RegExp("\w*" + inputValue + "\w*");
    for (var i = 0; i < boxList.length; i++) {
        if (patt.test(boxList[i].value)) {
            boxList[i].item.style.backgroundColor = "purple";
        } else {
            boxList[i].item.style.backgroundColor = boxList[i].defaultbgColor;
        }
    }
}

function init() {
    var leftInBtn = document.getElementById("left-in");
    var searchBtn = document.getElementById("search-btn");

    if (leftInBtn) {
        leftInBtn.addEventListener("click", leftInHandle, false);
    }
    if (searchBtn) {
        searchBtn.addEventListener("click", searchHandle, false);
    }

}
init();