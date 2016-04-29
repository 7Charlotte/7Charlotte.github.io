var score1 = new Score("王小明", 80, 90, 95);
var score2 = new Score("张红", 70, 87, 83);
var score3 = new Score("李刚", 93, 94, 83);
var scoreArr = [score1, score2, score3];
init();


function Score(name, chinese, math, english) {
    this.name = name;
    this.chinese = chinese;
    this.math = math;
    this.english = english;
    this.sum = chinese + math + english;

}

function renderTable(arr) {
    var tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for (var i = 0; i < 3; i++) {
        var tr = document.createElement("tr");
        var data = new Array();
        data.push("<td>" + arr[i].name + "</td>" + "<td>" + arr[i].chinese + "</td>" + "<td>" + arr[i].math + "</td>" + "<td>" + arr[i].english + "</td>" + "<td>" + arr[i].sum + "</td>");
        tr.innerHTML = data;
        tbody.appendChild(tr);
    }
}

function campareChinese(o1, o2) {
    return o1.chinese > o2.chinese; //改变符号即可变为升序;
}

function campareMath(o1, o2) {
    return o1.math > o2.math;
}

function campareEnglish(o1, o2) {
    return o1.english > o2.english;
}

function campareSum(o1, o2) {
    return o1.sum > o2.sum;
}

function sortNumber(arr, func) { //选择排序
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (func(arr[j], arr[min])) { //将数据类型抽象出来
                min = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}

function btnHandler(e) {
    switch (e.target.id){
        case "Chinese":
            sortNumber(scoreArr, campareChinese);
            break;
        case "Math":
            sortNumber(scoreArr,campareMath);
            break;
        case "English":
            sortNumber(scoreArr,campareEnglish);
            break;
        case "Sum":
            sortNumber(scoreArr,campareSum);
            break;
    }
    renderTable(scoreArr);
}


function init() {
    renderTable(scoreArr);
    var buttonArr = document.querySelectorAll("button");
    for (var i = 0; i < buttonArr.length; i++) {
        buttonArr[i].addEventListener("click",btnHandler, false);
    }
}

